import type { SpinnerOptions, SpinnerStyle } from "./spinner.types";

/**
 * A small animated spinner that spins in place while something is happening.
 *
 * Pick a built-in style (`dots`, `line`, `bounce`, `arrow`, `moon`) or pass
 * your own frames. Call `.start()` to kick it off and `.stop()` when done.
 *
 * @example
 * ```ts
 * const spinner = new Spinner({ style: "dots" });
 * spinner.start();
 * await doSomethingAsync();
 * spinner.stop();
 * ```
 */
class Spinner {
  private style: SpinnerStyle = "dots";
  private frames: string[];
  private interval: number;
  private currentFrameIndex: number = 0;
  private timer?: NodeJS.Timeout;
  private silent: boolean = false;

  constructor(options: SpinnerOptions = {}) {
    this.style = options.style || "dots";
    this.frames = options.frames || this.getDefaultFrames(this.style);
    this.interval = options.interval || 100;
  }

  start(silent: boolean = false) {
    if (this.timer) return;
    this.silent = silent;
    this.timer = setInterval(() => {
      if (!silent) {
        process.stdout.write(`\r${this.getCurrentFrame()} `);
      }
      this.currentFrameIndex =
        (this.currentFrameIndex + 1) % this.frames.length;
    }, this.interval);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
      if (!this.silent) {
        process.stdout.write("\r");
      }
    }
  }

  public getCurrentFrame(): string {
    return this.frames[this.currentFrameIndex] as string;
  }

  private getDefaultFrames(style: SpinnerStyle): string[] {
    switch (style) {
      case "dots":
        return ["⣾", "⣷", "⣯", "⣟", "⣻", "⣽"];
      case "line":
        return ["-", "\\", "|", "/"];
      case "bounce":
        return ["⠁", "⠂", "⠄", "⠂"];
      case "arrow":
        return ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"];
      case "moon":
        return ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
      default:
        return ["⣾", "⣷", "⣯", "⣟", "⣻", "⣽"];
    }
  }
}

export { Spinner };
