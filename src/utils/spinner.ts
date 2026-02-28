import type { SpinnerOptions, SpinnerStyle } from "../types/spinner";

class Spinner {
  private style: SpinnerStyle = "dots";
  private frames: string[];
  private interval: number;
  private currentFrameIndex: number = 0;
  private timer?: NodeJS.Timeout;

  constructor(options: SpinnerOptions = {}) {
    this.style = options.style || "dots";
    this.frames = options.frames || this.getDefaultFrames(this.style);
    this.interval = options.interval || 100;
  }

  start(silent: boolean = false) {
    if (this.timer) return; // Already spinning
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
      process.stdout.write("\r"); // Clear the spinner line
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
      default:
        return ["⣾", "⣷", "⣯", "⣟", "⣻", "⣽"];
    }
  }
}

export { Spinner };
export type { SpinnerOptions, SpinnerStyle };
