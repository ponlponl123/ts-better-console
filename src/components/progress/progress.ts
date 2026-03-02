import { EventEmitter } from "events";
import { Spinner } from "../spinner/spinner";
import type {
  ProgressOptions,
  ProgressLabelPair,
  ProgressEvents,
  ProgressStatus,
  ProgressBarOptions,
} from "./progress.types";
import betterConsole from "../../core/console";
import { getColorCode, s } from "../../core/style";
import { cs } from "../../core/line";
import { getProcessSize } from "../../core";

class Progress extends EventEmitter {
  public title: string;
  public total: number;
  public current: number;
  public buffer: number;
  public callback?: (percentage: number) => void;

  private spinner = new Spinner({ style: "line" });
  private static readonly DEFAULT_BAR_LENGTH = 40;
  private static readonly MIN_BAR_LENGTH = 10;
  private static readonly MIN_ANIMATION_INTERVAL = 20;
  private static readonly MAX_ANIMATION_INTERVAL = 1000;
  private static readonly DEFAULT_ANIMATION_INTERVAL = 80;
  private loadedSymbol: string = "█";
  private bufferedSymbol: string = "▒";
  private emptySymbol: string = "-";
  private barLength: ProgressBarOptions["length"];
  private barAnimation: ProgressBarOptions["animation"];
  private barColor: ProgressBarOptions["color"];
  private label: ProgressLabelPair;
  private isExited: boolean = false;
  private status: ProgressStatus = "active";
  private animationFrame: number = 0;

  private static activeBars: Progress[] = [];
  private static renderTimer?: NodeJS.Timeout;
  private static initialRenderScheduled: boolean = false;
  private static queuedMessages: { level: "warn" | "error"; msg: string }[] =
    [];
  private static originalStdoutWrite?: typeof process.stdout.write;
  private static originalConsole?: {
    log: typeof console.log;
    warn: typeof console.warn;
    error: typeof console.error;
    info: typeof console.info;
    debug: typeof console.debug;
  };
  private static isRendering: boolean = false;
  private static lastLineCount: number = 0;

  private static readonly RAINBOW_COLORS = [
    "\x1b[31m",
    "\x1b[33m",
    "\x1b[32m",
    "\x1b[36m",
    "\x1b[34m",
    "\x1b[35m",
  ];

  constructor(
    title: string,
    total: number = 100,
    options: ProgressOptions = {},
  ) {
    super();
    this.title = title;
    this.total = total;
    this.current = 0;
    this.buffer = 0;
    this.barLength =
      options.bar?.length === "full-width"
        ? "full-width"
        : Math.max(
            options.bar?.length ?? Progress.DEFAULT_BAR_LENGTH,
            Progress.MIN_BAR_LENGTH,
          );
    this.barAnimation = options.bar?.animation || false;
    this.loadedSymbol = options.bar?.loadedSymbol ?? this.loadedSymbol;
    this.bufferedSymbol = options.bar?.bufferedSymbol ?? this.bufferedSymbol;
    this.emptySymbol = options.bar?.emptySymbol ?? this.emptySymbol;
    this.barColor = {
      buffered: "inherit",
      empty: "inherit",
      loaded: "inherit",
      completed: "green",
      cancelled: "yellow",
      errored: "red",
      ...options.bar?.color,
    };
    this.label = options.label || { while: "Loading", past: "Loaded" };
  }

  init() {
    this.current = 0;
    this.buffer = 0;
    this.status = "active";
    this.isExited = false;
    Progress.registerBar(this);
    this.spinner.start(true);
  }

  private static directWrite(data: string) {
    try {
      require("fs").writeSync(1, data);
    } catch {
      // Fallback if writeSync is unavailable
      const write =
        Progress.originalStdoutWrite ||
        process.stdout.write.bind(process.stdout);
      write.call(process.stdout, data);
    }
  }

  private static hookStdout() {
    if (!Progress.originalStdoutWrite) {
      Progress.originalStdoutWrite = process.stdout.write.bind(process.stdout);
      const origWrite = Progress.originalStdoutWrite;
      process.stdout.write = function (...args: any[]) {
        if (!Progress.isRendering && Progress.lastLineCount > 0) {
          Progress.isRendering = true;
          let output = `\x1b[${Progress.lastLineCount}A\x1b[0J`;
          const content =
            typeof args[0] === "string" ? args[0] : String(args[0]);
          output += content;
          output += "\x1b[?7l";
          for (const bar of Progress.activeBars) {
            output += bar.getRenderedLine() + "\n";
          }
          output += "\x1b[?7h";
          Progress.directWrite(output);
          Progress.isRendering = false;
          return true;
        }
        return origWrite.apply(process.stdout, args as any);
      } as any;
    }

    // Hook console methods (Bun's console.log may bypass process.stdout.write)
    if (!Progress.originalConsole) {
      Progress.originalConsole = {
        log: console.log.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
        info: console.info.bind(console),
        debug: console.debug.bind(console),
      };

      const formatArgs = (args: any[]): string => {
        try {
          return require("util").format(...args);
        } catch {
          return args
            .map((a: any) => (typeof a === "string" ? a : String(a)))
            .join(" ");
        }
      };

      const hookMethod = (origFn: Function) =>
        function (...args: any[]) {
          if (
            Progress.activeBars.length > 0 &&
            Progress.lastLineCount > 0 &&
            !Progress.isRendering
          ) {
            Progress.isRendering = true;
            let output = `\x1b[${Progress.lastLineCount}A\x1b[0J`;
            output += formatArgs(args) + "\n";
            output += "\x1b[?7l";
            for (const bar of Progress.activeBars) {
              output += bar.getRenderedLine() + "\n";
            }
            output += "\x1b[?7h";
            Progress.directWrite(output);
            Progress.isRendering = false;
          } else {
            origFn(...args);
          }
        };

      console.log = hookMethod(Progress.originalConsole.log);
      console.info = hookMethod(Progress.originalConsole.info);
      console.debug = hookMethod(Progress.originalConsole.debug);
      console.warn = hookMethod(Progress.originalConsole.warn);
      console.error = hookMethod(Progress.originalConsole.error);
    }
  }

  private static unhookStdout() {
    if (Progress.originalStdoutWrite) {
      process.stdout.write = Progress.originalStdoutWrite;
      Progress.originalStdoutWrite = undefined;
    }
    if (Progress.originalConsole) {
      console.log = Progress.originalConsole.log;
      console.warn = Progress.originalConsole.warn;
      console.error = Progress.originalConsole.error;
      console.info = Progress.originalConsole.info;
      console.debug = Progress.originalConsole.debug;
      Progress.originalConsole = undefined;
    }
  }

  private static registerBar(bar: Progress) {
    if (!Progress.activeBars.includes(bar)) {
      Progress.activeBars.push(bar);
    }
    Progress.hookStdout();
    if (!Progress.renderTimer) {
      Progress.renderTimer = setInterval(
        () => Progress.renderAll(),
        Progress.DEFAULT_ANIMATION_INTERVAL,
      );
    }
    if (!Progress.initialRenderScheduled) {
      Progress.initialRenderScheduled = true;
      process.nextTick(() => {
        Progress.initialRenderScheduled = false;
        Progress.renderAll();
      });
    }
  }

  private static renderAll() {
    if (Progress.activeBars.length === 0 || Progress.isRendering) return;
    Progress.isRendering = true;

    let output = "";

    // Move cursor up to the start of progress bars and clear to end of screen
    if (Progress.lastLineCount > 0) {
      output += `\x1b[${Progress.lastLineCount}A\x1b[0J`;
    }

    // Disable line wrapping to prevent long lines from breaking cursor position
    output += "\x1b[?7l";
    for (const bar of Progress.activeBars) {
      bar.tickFrame();
      output += bar.getRenderedLine() + "\n";
    }
    output += "\x1b[?7h";

    Progress.lastLineCount = Progress.activeBars.length;
    Progress.directWrite(output);
    Progress.isRendering = false;
  }

  private static checkAllDone() {
    Progress.renderAll();
    if (
      Progress.activeBars.length > 0 &&
      Progress.activeBars.every((b) => b.status !== "active")
    ) {
      Progress.finishAll();
    }
  }

  private static finishAll() {
    if (Progress.renderTimer) {
      clearInterval(Progress.renderTimer);
      Progress.renderTimer = undefined;
    }

    Progress.isRendering = true;
    let output = "";
    if (Progress.lastLineCount > 0) {
      output += `\x1b[${Progress.lastLineCount}A\x1b[0J`;
    }
    // Disable line wrapping for final render
    output += "\x1b[?7l";
    for (const bar of Progress.activeBars) {
      output += bar.getRenderedLine() + "\n";
    }
    output += "\x1b[?7h";
    Progress.directWrite(output);
    Progress.isRendering = false;

    Progress.activeBars = [];
    Progress.lastLineCount = 0;
    Progress.unhookStdout();

    for (const { level, msg } of Progress.queuedMessages) {
      if (level === "warn") betterConsole.warn(msg);
      else betterConsole.error(msg);
    }
    Progress.queuedMessages = [];
  }

  private tickFrame() {
    if (this.barAnimation === "rainbow" && this.status === "active") {
      this.animationFrame++;
    }
  }

  private buildBar(
    filledLength: number,
    bufferedLength: number,
    emptyLength: number,
    colors?: { loaded?: string; buffered?: string; empty?: string },
  ): string {
    if (this.barAnimation === "rainbow") {
      const numColors = Progress.RAINBOW_COLORS.length;
      const groupSize = 5;
      const cycle = numColors * groupSize;
      const frame = this.animationFrame % cycle;
      const totalLength = filledLength + bufferedLength + emptyLength;
      const loadedFg = colors?.loaded || "";
      let bar = "";
      for (let i = 0; i < totalLength; i++) {
        const colorIdx = Math.floor(((i + frame) % cycle) / groupSize);
        const fg = Progress.RAINBOW_COLORS[colorIdx % numColors];
        if (i < filledLength) {
          bar += (loadedFg || fg) + this.loadedSymbol;
        } else if (i < filledLength + bufferedLength) {
          bar += fg + this.bufferedSymbol;
        } else {
          bar += "\x1b[2m" + fg + this.emptySymbol + "\x1b[22m";
        }
      }
      return bar + "\x1b[0m";
    }

    const reset = "\x1b[0m";
    const loaded = colors?.loaded
      ? colors.loaded + this.loadedSymbol.repeat(filledLength) + reset
      : this.loadedSymbol.repeat(filledLength);
    const buffered = this.buffer
      ? (colors?.buffered ?? "") +
        this.bufferedSymbol.repeat(bufferedLength) +
        (colors?.buffered ? reset : "")
      : "";
    const empty =
      emptyLength > 0
        ? (colors?.empty ?? "") +
          this.emptySymbol.repeat(emptyLength) +
          (colors?.empty ? reset : "")
        : "";
    return loaded + buffered + empty;
  }

  private resolveColor(color: string | undefined): string {
    return getColorCode(
      !color || color === "inherit" ? undefined : color,
      false,
    );
  }

  private getRenderedLine(): string {
    const percentage = Math.min(this.current / this.total, 1);
    const dynamicBarLength =
      this.barLength === "full-width"
        ? getProcessSize().width - this.title.length - 20
        : this.barLength || Progress.DEFAULT_BAR_LENGTH;
    const filledLength = Math.round(dynamicBarLength * percentage);
    const bufferedLength = Math.round(
      dynamicBarLength * (this.buffer / this.total),
    );
    const emptyLength = dynamicBarLength - filledLength - bufferedLength;
    const bc = this.barColor as Required<NonNullable<typeof this.barColor>>;
    const pct = Math.round(percentage * 100) + "%";

    if (this.status === "completed") {
      const bar = this.buildBar(filledLength, bufferedLength, emptyLength, {
        loaded: this.resolveColor(bc.completed),
        buffered: this.resolveColor(bc.buffered),
        empty: this.resolveColor(bc.empty),
      });
      return cs(
        [
          s("✓", { color: "green" }),
          this.label.past,
          this.title,
          "[" + bar + "]",
          pct,
        ],
        " ",
      );
    }

    if (this.status === "cancelled") {
      const color = bc.cancelled === "inherit" ? "yellow" : bc.cancelled;
      const cancelColor = this.resolveColor(bc.cancelled);
      const bar = this.buildBar(filledLength, bufferedLength, emptyLength, {
        loaded: cancelColor,
        buffered: cancelColor,
        empty: this.resolveColor(bc.empty),
      });
      return cs(
        [
          s("✕", { color }),
          this.label.while,
          this.title,
          "[" + bar + "]",
          pct,
          s("cancelled", { color }),
        ],
        " ",
      );
    }

    if (this.status === "errored") {
      const color = bc.errored === "inherit" ? "red" : bc.errored;
      const errorColor = this.resolveColor(bc.errored);
      const bar = this.buildBar(filledLength, bufferedLength, emptyLength, {
        loaded: errorColor,
        buffered: errorColor,
        empty: this.resolveColor(bc.empty),
      });
      return cs(
        [
          s("✕", { color }),
          this.label.while,
          this.title,
          "[" + bar + "]",
          pct,
          s("errored", { color }),
        ],
        " ",
      );
    }

    const bar = this.buildBar(filledLength, bufferedLength, emptyLength, {
      loaded: this.resolveColor(bc.loaded),
      buffered: this.resolveColor(bc.buffered),
      empty: this.resolveColor(bc.empty),
    });
    return cs(
      [
        this.spinner.getCurrentFrame(),
        this.label.while,
        this.title,
        "[" + bar + "]",
        pct,
      ],
      " ",
    );
  }

  public cancel() {
    if (this.status !== "active") return;
    this.isExited = true;
    this.status = "cancelled";
    this.spinner.stop();
    this.emit("cancel");
    Progress.checkAllDone();
  }

  public error(...args: any[]) {
    if (this.status !== "active") return;
    this.isExited = true;
    this.status = "errored";
    Progress.queuedMessages.push({
      level: "error",
      msg: s(cs(["✕  Error:", ...args]), { color: "red" }),
    });
    this.spinner.stop();
    Progress.checkAllDone();
    this.emit("error", ...args);
  }

  public update(current: number, buffer?: number) {
    if (this.status !== "active") return;

    this.current = current;
    this.buffer = buffer || 0;

    if (this.current > this.total) this.current = this.total;
    if (this.buffer > this.total - this.current) {
      this.buffer = this.total - this.current;
    } else if (this.buffer > this.total) {
      this.buffer = this.total;
    } else if (this.buffer < 0) {
      this.buffer = 0;
    }

    const percentage = Math.min(this.current / this.total, 1);
    this.emit("update", this.current, percentage);

    if (this.current >= this.total) {
      this.status = "completed";
      this.spinner.stop();
      this.emit("complete", this.total);
      this.callback?.(100);
      Progress.checkAllDone();
    }
  }

  public getIsExited() {
    return this.isExited;
  }

  public override on<K extends keyof ProgressEvents>(
    event: K,
    listener: (...args: ProgressEvents[K]) => void,
  ): this;
  public override on(event: string, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  public override once<K extends keyof ProgressEvents>(
    event: K,
    listener: (...args: ProgressEvents[K]) => void,
  ): this;
  public override once(
    event: string,
    listener: (...args: any[]) => void,
  ): this {
    return super.once(event, listener);
  }

  public override emit<K extends keyof ProgressEvents>(
    event: K,
    ...args: ProgressEvents[K]
  ): boolean;
  public override emit(event: string, ...args: any[]): boolean {
    return super.emit(event, ...args);
  }
}

export { Progress };
