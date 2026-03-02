import { EventEmitter } from "events";
import type { StyleOptions } from "../../types/style.types";
import type {
  ButtonOptions,
  ButtonGroupOptions,
  ButtonGroupEvents,
} from "./button.types";
import { s } from "../../core/style";
import { cs } from "../../core/line";

class ButtonGroup extends EventEmitter {
  private buttons: ButtonOptions[];
  private options: ButtonGroupOptions;
  private buttonPositions: { start: number; end: number }[] = [];
  private isActive: boolean = false;
  private focusedIndex: number = -1;
  private renderRow: number = -1;

  constructor(buttons: ButtonOptions[], options: ButtonGroupOptions = {}) {
    super();
    this.buttons = buttons;
    this.options = { gap: 2, ...options };
  }

  public show(): void {
    if (this.isActive) return;
    this.isActive = true;

    // Save cursor row so we know which row the buttons are on
    this.renderRow = -1; // will be resolved from mouse events relative to render

    this.render();

    // Enable mouse tracking (X10 normal tracking – reports button presses)
    process.stdout.write("\x1b[?1000h");

    // Hide cursor while interactive
    process.stdout.write("\x1b[?25l");

    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }
    process.stdin.resume();
    process.stdin.on("data", this.onData);
  }

  /**
   * Stop listening and restore terminal state.
   */
  public destroy(): void {
    if (!this.isActive) return;
    this.isActive = false;

    // Disable mouse tracking
    process.stdout.write("\x1b[?1000l");
    // Show cursor
    process.stdout.write("\x1b[?25h");

    process.stdin.removeListener("data", this.onData);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    process.stdin.pause();
    process.stdout.write("\n");
    this.emit("exit");
  }

  // ── Rendering ──────────────────────────────────────────────

  private render(): void {
    const gap = " ".repeat(this.options.gap ?? 2);
    const parts: string[] = [];
    this.buttonPositions = [];
    let col = 0;

    for (let i = 0; i < this.buttons.length; i++) {
      const btn = this.buttons[i]!;
      const label = ` ${btn.label} `; // padding around label
      const start = col;
      const end = col + label.length - 1;
      this.buttonPositions.push({ start, end });

      const isFocused = i === this.focusedIndex;
      const defaultStyle: StyleOptions = {
        color: "white",
        backgroundColor: "black",
      };
      const defaultHoverStyle: StyleOptions = {
        color: "white",
        backgroundColor: "cyan",
        styles: ["bold"],
      };
      const style = isFocused
        ? (btn.hoverStyle ?? defaultHoverStyle)
        : (btn.style ?? defaultStyle);

      parts.push(s(label, style));
      col += label.length;

      if (i < this.buttons.length - 1) {
        parts.push(gap);
        col += gap.length;
      }
    }

    // Clear current line and write buttons
    process.stdout.write("\r\x1b[K" + cs(parts, false));
  }

  // ── Input handling ─────────────────────────────────────────

  private onData = (data: Buffer): void => {
    // ── Mouse events (X10 normal tracking) ──
    // Format: \x1b [ M <button> <col+32> <row+32>
    if (
      data.length >= 6 &&
      data[0] === 0x1b &&
      data[1] === 0x5b &&
      data[2] === 0x4d
    ) {
      const button = data[3]! - 32;
      const col = data[4]! - 32 - 1; // 0-indexed
      // const row = data[5]! - 32 - 1;

      // Button 0 = left click press
      if (button === 0) {
        this.handleClick(col);
      }
      return;
    }

    // ── Keyboard fallback ──
    const key = data.toString();

    // q or Ctrl-C to exit
    if (key === "q" || key === "Q" || key === "\x03") {
      this.destroy();
      return;
    }

    // Arrow keys to navigate and Enter to activate
    if (key === "\x1b[D") {
      // Left arrow
      this.focusedIndex = Math.max(0, this.focusedIndex - 1);
      this.render();
    } else if (key === "\x1b[C") {
      // Right arrow
      this.focusedIndex = Math.min(
        this.buttons.length - 1,
        this.focusedIndex + 1,
      );
      this.render();
    } else if (key === "\r" || key === "\n") {
      // Enter key
      if (this.focusedIndex >= 0 && this.focusedIndex < this.buttons.length) {
        const btn = this.buttons[this.focusedIndex]!;
        btn.onClick();
        this.emit("click", btn.label, this.focusedIndex);
      }
    }
  };

  private handleClick(col: number): void {
    for (let i = 0; i < this.buttonPositions.length; i++) {
      const pos = this.buttonPositions[i]!;
      if (col >= pos.start && col <= pos.end) {
        this.focusedIndex = i;
        this.render();
        const btn = this.buttons[i]!;
        btn.onClick();
        this.emit("click", btn.label, i);
        return;
      }
    }
  }

  // ── Type-safe event overloads ──────────────────────────────

  public override on<K extends keyof ButtonGroupEvents>(
    event: K,
    listener: (...args: ButtonGroupEvents[K]) => void,
  ): this;
  public override on(event: string, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  public override once<K extends keyof ButtonGroupEvents>(
    event: K,
    listener: (...args: ButtonGroupEvents[K]) => void,
  ): this;
  public override once(
    event: string,
    listener: (...args: any[]) => void,
  ): this {
    return super.once(event, listener);
  }

  public override emit<K extends keyof ButtonGroupEvents>(
    event: K,
    ...args: ButtonGroupEvents[K]
  ): boolean;
  public override emit(event: string, ...args: any[]): boolean {
    return super.emit(event, ...args);
  }
}

export { ButtonGroup };
