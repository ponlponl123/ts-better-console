import { EventEmitter } from "events";
import { Spinner } from "../spinner/spinner";
import type {
  ProgressOptions,
  ProgressLabelPair,
  ProgressEvents,
  ProgressStatus,
  ProgressBarOptions,
  ProgressUpdateOptions,
  ProgressAnimation,
} from "./progress.types";
import betterConsole from "../../core/console";
import {
  getColorCode,
  resolveUnSpecifiedColor,
  s,
} from "../../core/style/style";
import {
  DEFAULT_COLOR,
  eightBit,
  rainbowASCIICodes,
  rainbowColorsExtended,
} from "../../core/style/color";
import { cs } from "../../core/line";
import {
  getProcessSize,
  setupScrollRegion,
  resetScrollRegion,
  wrapFixed,
} from "../../core";
import {
  cursorUp,
  ERASE_BELOW,
  ERASE_LINE,
  WRAP_OFF,
  WRAP_ON,
  RESET,
  DIM,
  DIM_OFF,
} from "../../core/ansi";
import type { FixedPosition } from "../../types";

/**
 * A live progress bar that renders and updates in-place in the terminal.
 *
 * Tracks a `current` value toward a `total`, and renders a filled bar,
 * labels, and optional animations. Multiple `Progress` instances can
 * stack together without overwriting each other.
 *
 * Emits events when progress updates, completes, or fails.
 *
 * @example
 * ```ts
 * const bar = new Progress("Downloading", 100);
 * bar.show();
 * bar.update(50); // 50%
 * bar.success("Done!");
 * ```
 */
class Progress extends EventEmitter {
  public title: string;
  public total: number;
  public current: number;
  public buffer: number;
  public callback?: (percentage: number) => void;

  private spinner = new Spinner({ style: "line" });
  private static readonly DEFAULT_BAR_LENGTH = 40;
  private static readonly MIN_BAR_LENGTH = 10;
  private static readonly DEFAULT_ANIMATION_INTERVAL = 80;
  private loadedSymbol: string = "█";
  private bufferedSymbol: string = "▒";
  private emptySymbol: string = "-";
  private barLength: ProgressBarOptions["length"];
  private barAnimation: ProgressAnimation | undefined = undefined;
  private barAnimationSize: number = 0;
  private barAnimationSpeed: number = Progress.DEFAULT_ANIMATION_INTERVAL;
  private barColor: ProgressBarOptions["color"];
  private position: FixedPosition;
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
  private static currentScrollRegionSize: number = 0;

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
    if (options.bar?.animation) {
      this.barAnimation = options.bar.animation.type;
      this.barAnimationSize = options.bar.animation.size ?? 0;
      this.barAnimationSpeed =
        options.bar.animation.speed ?? Progress.DEFAULT_ANIMATION_INTERVAL;
    }
    this.loadedSymbol = options.bar?.loadedSymbol ?? this.loadedSymbol;
    this.bufferedSymbol = options.bar?.bufferedSymbol ?? this.bufferedSymbol;
    this.emptySymbol = options.bar?.emptySymbol ?? this.emptySymbol;
    this.barColor = {
      buffered: "foreground",
      empty: "foreground",
      loaded: "foreground",
      completed: "green",
      cancelled: "yellow",
      errored: "red",
      ...options.bar?.color,
    };
    this.position = options.bar?.position || "inline";
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
          let output = `${cursorUp(Progress.lastLineCount)}${ERASE_BELOW}`;
          const content =
            typeof args[0] === "string" ? args[0] : String(args[0]);
          output += content;
          output += WRAP_OFF;
          for (const bar of Progress.activeBars) {
            output += bar.getRenderedLine() + "\n";
          }
          output += WRAP_ON;
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
            let output = `${cursorUp(Progress.lastLineCount)}${ERASE_BELOW}`;
            output += formatArgs(args) + "\n";
            output += WRAP_OFF;
            for (const bar of Progress.activeBars) {
              output += bar.getRenderedLine() + "\n";
            }
            output += WRAP_ON;
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

  private static getPosition(): FixedPosition {
    for (const bar of Progress.activeBars) {
      if (bar.position !== "inline") return bar.position;
    }
    return "inline";
  }

  private static setupScrollRegion() {
    const position = Progress.getPosition();
    if (position === "inline") return;

    const n = Progress.activeBars.length;
    const prevN = Progress.currentScrollRegionSize;
    const newBars = n - prevN;

    if (newBars <= 0) return;

    Progress.currentScrollRegionSize = n;
    Progress.directWrite(setupScrollRegion(position, n, prevN));
  }

  private static registerBar(bar: Progress) {
    if (!Progress.activeBars.includes(bar)) {
      Progress.activeBars.push(bar);
    }
    const position = Progress.getPosition();
    if (position !== "inline") {
      if (Progress.originalStdoutWrite) {
        Progress.unhookStdout();
      }
      Progress.setupScrollRegion();
    } else {
      Progress.hookStdout();
    }
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

    const position = Progress.getPosition();

    if (position !== "inline") {
      const n = Progress.activeBars.length;
      let content = "";
      for (const bar of Progress.activeBars) {
        bar.tickFrame();
        content += ERASE_LINE + bar.getRenderedLine() + "\n";
      }

      Progress.lastLineCount = n;
      Progress.directWrite(wrapFixed(position, content, n));
      Progress.isRendering = false;
      return;
    }

    let output = "";

    if (Progress.lastLineCount > 0) {
      output += `${cursorUp(Progress.lastLineCount)}${ERASE_BELOW}`;
    }

    output += WRAP_OFF;
    for (const bar of Progress.activeBars) {
      bar.tickFrame();
      output += bar.getRenderedLine() + "\n";
    }
    output += WRAP_ON;

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

    const position = Progress.getPosition();
    Progress.isRendering = true;
    let output = "";

    if (position !== "inline") {
      const n = Progress.activeBars.length;
      let content = "";
      for (const bar of Progress.activeBars) {
        content += ERASE_LINE + bar.getRenderedLine() + "\n";
      }
      output += wrapFixed(position, content, n);
      output += resetScrollRegion();
    } else {
      if (Progress.lastLineCount > 0) {
        output += `${cursorUp(Progress.lastLineCount)}${ERASE_BELOW}`;
      }
      output += WRAP_OFF;
      for (const bar of Progress.activeBars) {
        output += bar.getRenderedLine() + "\n";
      }
      output += WRAP_ON;
    }

    Progress.directWrite(output);
    Progress.isRendering = false;

    Progress.activeBars = [];
    Progress.lastLineCount = 0;
    Progress.currentScrollRegionSize = 0;

    if (position === "inline") {
      Progress.unhookStdout();
    }

    for (const { level, msg } of Progress.queuedMessages) {
      if (level === "warn") betterConsole.warn(msg);
      else betterConsole.error(msg);
    }
    Progress.queuedMessages = [];
  }

  private tickFrame() {
    if (this.barAnimation && this.status === "active") {
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
      const numColors = rainbowASCIICodes.length;
      const groupSize = 5;
      const cycle = numColors * groupSize;
      const frame = this.animationFrame % cycle;
      const totalLength = filledLength + bufferedLength + emptyLength;
      let bar = "";
      for (let i = 0; i < totalLength; i++) {
        const colorIdx = Math.floor(((i + frame) % cycle) / groupSize);
        const fg = rainbowASCIICodes[colorIdx % numColors];
        if (i < filledLength) {
          bar += (colors?.loaded || fg) + this.loadedSymbol;
        } else if (i < filledLength + bufferedLength) {
          bar += (colors?.buffered || fg) + this.bufferedSymbol;
        } else {
          bar += (colors?.empty || fg) + this.emptySymbol;
        }
      }
      return bar + DEFAULT_COLOR;
    } else if (this.barAnimation === "rainbow-smooth") {
      const size = filledLength + bufferedLength + emptyLength;
      const rbcolors = rainbowColorsExtended;
      const colorCount = rbcolors.length;
      const groupSize = 1;
      const cycle = colorCount * groupSize;
      const frame = this.animationFrame % cycle;
      let bar = "";
      for (let i = 0; i < size; i++) {
        const colorIdx = Math.floor(((i + frame) % cycle) / groupSize);
        const fg = getColorCode(
          eightBit(rbcolors[colorIdx % colorCount] as number),
          false,
        );
        if (i < filledLength) {
          bar += (colors?.loaded || fg) + this.loadedSymbol;
        } else if (i < filledLength + bufferedLength) {
          bar += (colors?.buffered || fg) + this.bufferedSymbol;
        } else {
          bar +=
            (colors?.empty || DIM + fg) +
            this.emptySymbol +
            (colors?.empty ? DIM_OFF : "");
        }
      }
      return bar + DEFAULT_COLOR;
    }

    const loaded = colors?.loaded
      ? colors.loaded + this.loadedSymbol.repeat(filledLength) + DEFAULT_COLOR
      : this.loadedSymbol.repeat(filledLength);
    const buffered = this.buffer
      ? (colors?.buffered ?? "") +
        this.bufferedSymbol.repeat(bufferedLength) +
        (colors?.buffered ? DEFAULT_COLOR : "")
      : "";
    const empty =
      emptyLength > 0
        ? (colors?.empty ?? "") +
          this.emptySymbol.repeat(emptyLength) +
          (colors?.empty ? DEFAULT_COLOR : "")
        : "";
    return loaded + buffered + empty;
  }

  private getRenderedLine(): string {
    const percentage = Math.min(this.current / this.total, 1);
    const dynamicBarLength =
      this.barLength === "full-width"
        ? getProcessSize().width.full - this.title.length - 20
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
        loaded: resolveUnSpecifiedColor(false, bc.completed),
        buffered: resolveUnSpecifiedColor(false, bc.buffered),
        empty: resolveUnSpecifiedColor(false, bc.empty),
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
      const color = bc.cancelled === "foreground" ? "yellow" : bc.cancelled;
      const cancelColor = resolveUnSpecifiedColor(false, bc.cancelled);
      const bar = this.buildBar(filledLength, bufferedLength, emptyLength, {
        loaded: cancelColor,
        buffered: cancelColor,
        empty: resolveUnSpecifiedColor(false, bc.empty),
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
      const color = bc.errored === "foreground" ? "red" : bc.errored;
      const errorColor = resolveUnSpecifiedColor(false, bc.errored);
      const bar = this.buildBar(filledLength, bufferedLength, emptyLength, {
        loaded: errorColor,
        buffered: errorColor,
        empty: resolveUnSpecifiedColor(false, bc.empty),
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
      loaded:
        bc.loaded === "foreground"
          ? undefined
          : resolveUnSpecifiedColor(false, bc.loaded),
      buffered:
        bc.buffered === "foreground"
          ? undefined
          : resolveUnSpecifiedColor(false, bc.buffered),
      empty:
        bc.empty === "foreground"
          ? undefined
          : resolveUnSpecifiedColor(false, bc.empty),
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

  private optionUpdate(options: ProgressOptions) {
    if (options.bar) {
      if (options.bar.loadedSymbol !== undefined) {
        this.loadedSymbol = options.bar.loadedSymbol;
      }
      if (options.bar.bufferedSymbol !== undefined) {
        this.bufferedSymbol = options.bar.bufferedSymbol;
      }
      if (options.bar.emptySymbol !== undefined) {
        this.emptySymbol = options.bar.emptySymbol;
      }
      if (options.bar.length !== undefined) {
        this.barLength =
          options.bar.length === "full-width"
            ? "full-width"
            : Math.max(
                options.bar.length ?? Progress.DEFAULT_BAR_LENGTH,
                Progress.MIN_BAR_LENGTH,
              );
      }
      if (options.bar.animation) {
        this.barAnimation = options.bar.animation.type;
        this.barAnimationSize = options.bar.animation.size ?? 0;
        this.barAnimationSpeed =
          options.bar.animation.speed ?? Progress.DEFAULT_ANIMATION_INTERVAL;
      }
      if (options.bar.color) {
        this.barColor = {
          ...this.barColor,
          ...options.bar.color,
        };
      }
    }
    if (options.label) {
      this.label = options.label;
    }
  }

  public update(
    current: number,
    buffer?: number,
    options: ProgressUpdateOptions = {},
  ) {
    if (this.status !== "active") return;

    this.optionUpdate(options);
    this.title = options.message || this.title;

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
