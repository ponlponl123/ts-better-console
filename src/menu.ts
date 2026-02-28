import { EventEmitter } from "events";
import type { MenuEvents, MenuItemOptions, MenuOptions } from "./types/menu";
import type { StyleOptions } from "./types/style";
import { s } from "./utils/style";

class Menu extends EventEmitter {
  private items: MenuItemOptions[];
  private options: MenuOptions;
  private isActive: boolean = false;
  private focusedIndex: number = 0;
  private lineCount: number = 0;
  /** Absolute terminal row (0-indexed) of the first menu item */
  private menuStartRow: number = -1;

  constructor(items: MenuItemOptions[], options: MenuOptions = {}) {
    super();
    this.items = items;
    this.options = {
      selectedIcon: "◉",
      unselectedIcon: "○",
      ...options,
    };
    this.focusedIndex = options.defaultIndex ?? 0;
  }

  public show(): void {
    if (this.isActive) return;
    this.isActive = true;

    this.render();

    // Enable mouse tracking (X10 normal tracking)
    process.stdout.write("\x1b[?1000h");
    // Hide cursor
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
    if (this.lineCount > 0) {
      process.stdout.write(`\x1b[${this.lineCount - 1}A`);
    }

    const lines: string[] = [];

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]!;
      const isFocused = i === this.focusedIndex;
      const icon = isFocused
        ? this.options.selectedIcon!
        : this.options.unselectedIcon!;

      const defaultItemStyle: StyleOptions = { color: "white" };
      const defaultFocusStyle: StyleOptions = {
        color: "cyan",
        styles: ["bold"],
      };

      const style = isFocused
        ? (item.focusStyle ?? this.options.focusStyle ?? defaultFocusStyle)
        : (item.style ?? this.options.itemStyle ?? defaultItemStyle);

      lines.push(`\x1b[K${s(`${icon} ${item.label}`, style)}`);
    }

    this.lineCount = lines.length;
    // Clear the whole menu area and write new content
    process.stdout.write("\r" + lines.join("\n") + "\r");
    // Calibrate menu position on first render
    if (this.menuStartRow === -1) {
      this.menuStartRow = process.stdout.rows - this.lineCount;
    }
  }

  // ── Input handling ─────────────────────────────────────────

  private onData = (data: Buffer): void => {
    const str = data.toString();

    // Calibrate menu start row on first interaction if not yet done
    if (this.menuStartRow === -1 && !str.includes("\x1b[")) {
      this.menuStartRow = Math.max(0, process.stdout.rows - this.lineCount);
    }

    // ── Mouse events (X10 normal tracking) ──
    // Format: \x1b [ M <button> <col+32> <row+32>
    if (
      data.length >= 6 &&
      data[0] === 0x1b &&
      data[1] === 0x5b &&
      data[2] === 0x4d
    ) {
      const button = data[3]! - 32;
      const clickRow = data[5]! - 32 - 1; // 0-indexed row

      // Button 0 = left click press
      if (button === 0 && this.menuStartRow !== -1) {
        this.handleClick(clickRow);
      }
      return;
    }

    // ── Keyboard ──
    // Skip escape sequences that aren't arrow keys
    if (str.startsWith("\x1b") && str !== "\x1b[A" && str !== "\x1b[B") {
      return;
    }
    const key = str;

    // q or Ctrl-C to exit
    if (key === "q" || key === "Q" || key === "\x03") {
      this.destroy();
      return;
    }

    // Up arrow
    if (key === "\x1b[A") {
      this.focusedIndex = Math.max(0, this.focusedIndex - 1);
      this.render();
    }
    // Down arrow
    else if (key === "\x1b[B") {
      this.focusedIndex = Math.min(
        this.items.length - 1,
        this.focusedIndex + 1,
      );
      this.render();
    }
    // Enter key – confirm selection
    else if (key === "\r" || key === "\n") {
      if (this.focusedIndex >= 0 && this.focusedIndex < this.items.length) {
        const item = this.items[this.focusedIndex]!;
        this.emit("select", item.label, this.focusedIndex);
      }
    }
  };

  private handleClick(clickRow: number): void {
    const index = clickRow - this.menuStartRow;
    if (index >= 0 && index < this.items.length) {
      this.focusedIndex = index;
      this.render();
      const item = this.items[this.focusedIndex]!;
      this.emit("select", item.label, this.focusedIndex);
    }
  }

  // ── Type-safe event overloads ──────────────────────────────

  public override on<K extends keyof MenuEvents>(
    event: K,
    listener: (...args: MenuEvents[K]) => void,
  ): this;
  public override on(event: string, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  public override once<K extends keyof MenuEvents>(
    event: K,
    listener: (...args: MenuEvents[K]) => void,
  ): this;
  public override once(
    event: string,
    listener: (...args: any[]) => void,
  ): this {
    return super.once(event, listener);
  }

  public override emit<K extends keyof MenuEvents>(
    event: K,
    ...args: MenuEvents[K]
  ): boolean;
  public override emit(event: string, ...args: any[]): boolean {
    return super.emit(event, ...args);
  }
}

export { Menu };
export type { MenuItemOptions, MenuOptions, MenuEvents };
