import { EventEmitter } from "events";
import { Spinner } from "./utils/spinner";
import type {
  ProgressOptions,
  ProgressLabelPair,
  ProgressEvents,
  ProgressStatus,
} from "./types/progress";
import betterconsole, { s, cs } from ".";

class Progress extends EventEmitter {
  public title: string;
  public total: number;
  public current: number;
  public buffer: number;
  public callback?: (percentage: number) => void;

  private spinner = new Spinner({ style: "line" });
  private barLength: number;
  private callout?: ProgressOptions["callout"];
  private label: ProgressLabelPair;
  private isExited: boolean = false;
  private status: ProgressStatus = "active";

  // Static multi-bar management
  private static activeBars: Progress[] = [];
  private static renderTimer?: NodeJS.Timeout;
  private static renderedLineCount: number = 0;
  private static initialRenderScheduled: boolean = false;

  constructor(title: string, total: number, options: ProgressOptions = {}) {
    super();
    this.title = title;
    this.total = total;
    this.current = 0;
    this.buffer = 0;
    this.barLength = options.barLength || 40;
    this.callout = options.callout || false;
    this.label = options.label || { while: "Loading", past: "Loaded" };
  }

  init() {
    this.current = 0;
    this.buffer = 0;
    this.status = "active";
    this.isExited = false;
    Progress.registerBar(this);
    this.spinner.start(true); // Silent mode — frame cycling only
  }

  private static registerBar(bar: Progress) {
    if (!Progress.activeBars.includes(bar)) {
      Progress.activeBars.push(bar);
    }
    if (!Progress.renderTimer) {
      Progress.renderTimer = setInterval(() => Progress.renderAll(), 80);
    }
    // Defer initial render so all synchronous init() calls register first
    if (!Progress.initialRenderScheduled) {
      Progress.initialRenderScheduled = true;
      process.nextTick(() => {
        Progress.initialRenderScheduled = false;
        Progress.renderAll();
      });
    }
  }

  private static renderAll() {
    const bars = Progress.activeBars;
    if (bars.length === 0) return;

    let output = "";

    // Move cursor up to overwrite previous render
    if (Progress.renderedLineCount > 0) {
      output += `\x1b[${Progress.renderedLineCount}A`;
    }

    for (const bar of bars) {
      output += "\x1b[2K"; // Clear entire line
      output += bar.getRenderedLine();
      output += "\n";
    }

    process.stdout.write(output);
    Progress.renderedLineCount = bars.length;
  }

  private static checkAllDone() {
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

    // Final render as a single atomic write
    let output = "";
    if (Progress.renderedLineCount > 0) {
      output += `\x1b[${Progress.renderedLineCount}A`;
    }
    for (const bar of Progress.activeBars) {
      output += "\x1b[2K";
      output += bar.getRenderedLine();
      output += "\n";
    }
    process.stdout.write(output);

    Progress.activeBars = [];
    Progress.renderedLineCount = 0;
  }

  private getRenderedLine(): string {
    const percentage = Math.min(this.current / this.total, 1);
    const filledLength = Math.round(this.barLength * percentage);
    const bufferedLength = Math.round(
      this.barLength * (this.buffer / this.total),
    );
    const emptyLength = this.barLength - filledLength - bufferedLength;
    const bar =
      "█".repeat(filledLength) +
      (this.buffer ? "▒".repeat(bufferedLength) : "") +
      (emptyLength > 0 ? "-".repeat(emptyLength) : "");

    if (this.status === "completed") {
      return cs(
        [
          s("✓", { color: "green" }),
          this.label.past.toWellFormed(),
          this.title,
          `[${bar}]`,
          `${Math.round(percentage * 100)}%`,
        ],
        " ",
      );
    } else if (this.status === "cancelled") {
      return s(`✕ ${this.title} cancelled.`, { color: "yellow" });
    } else if (this.status === "errored") {
      return s(`✕ ${this.title} errored.`, { color: "red" });
    } else {
      return cs(
        [
          this.spinner.getCurrentFrame(),
          this.label.while.toWellFormed(),
          this.title,
          `[${bar}]`,
          `${Math.round(percentage * 100)}%`,
        ],
        " ",
      );
    }
  }

  public cancel() {
    if (this.status !== "active") return;
    this.isExited = true;
    this.status = "cancelled";
    betterconsole.warn(s(`✕ ${this.title} cancelled.`, { color: "yellow" }));
    this.spinner.stop();
    this.emit("cancel");
    Progress.checkAllDone();
  }

  public error(...args: any[]) {
    if (this.status !== "active") return;
    this.isExited = true;
    this.status = "errored";
    betterconsole.error(s(cs([`✕ Error:`, ...args]), { color: "red" }));
    this.spinner.stop();
    this.emit("error", ...args);
    Progress.checkAllDone();
  }

  public update(current: number, buffer?: number) {
    if (this.status !== "active") return;

    this.current = current;
    this.buffer = buffer || 0;

    if (this.current > this.total) {
      this.current = this.total;
    }
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
      if (this.callback) {
        this.callback(100);
      }
      Progress.checkAllDone();
    }
  }

  public getIsExited() {
    return this.isExited;
  }

  // Type-safe overloads for on/once/emit
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
export type { ProgressEvents };
