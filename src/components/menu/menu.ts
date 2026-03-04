import { EventEmitter } from "events";
import type { MenuEvents, MenuItemOptions, MenuOptions } from "./menu.types";
import type { StyleOptions } from "../../types/style.types";
import { s } from "../../core/style/style";
import {
  enableInteractiveMode,
  disableInteractiveMode,
  parseMouseEvent,
} from "../../core";
import {
  CSI,
  ESC,
  CTRL_C,
  ERASE_TO_EOL,
  KEY_UP,
  KEY_DOWN,
  cursorUp,
} from "../../core/ansi";

/**
 * An interactive single-select menu rendered in the terminal.
 *
 * Shows a list of items the user can navigate with the arrow keys and
 * select with Enter. Emits events so you can react to selection changes
 * without polling.
 *
 * Call `.show()` to display it and `.destroy()` to clean up when done.
 *
 * @example
 * ```ts
 * const menu = new Menu(
 *   [{ label: "Option A" }, { label: "Option B" }],
 *   { title: "Pick one:" }
 * );
 * menu.on("select", (item) => console.log(item.label));
 * menu.show();
 * ```
 */
class Menu extends EventEmitter {
  private items: MenuItemOptions[];
  private options: MenuOptions;
  private isActive: boolean = false;
  private focusedIndex: number = 0;
  private lineCount: number = 0;
  /** Absolute terminal row (0-based) of the first menu item */
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

    enableInteractiveMode();
    process.stdin.on("data", this.onData);
  }

  /**
   * Stop listening and restore terminal state.
   */
  public destroy(): void {
    if (!this.isActive) return;
    this.isActive = false;

    disableInteractiveMode();
    process.stdin.removeListener("data", this.onData);
    process.stdout.write("\n");
    this.emit("exit");
  }

  private render(): void {
    if (this.lineCount > 0) {
      process.stdout.write(cursorUp(this.lineCount - 1));
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

      lines.push(`${ERASE_TO_EOL}${s(`${icon} ${item.label}`, style)}`);
    }

    this.lineCount = lines.length;
    process.stdout.write("\r" + lines.join("\n") + "\r");
    if (this.menuStartRow === -1) {
      this.menuStartRow = process.stdout.rows - this.lineCount;
    }
  }

  private onData = (data: Buffer): void => {
    const str = data.toString();

    if (this.menuStartRow === -1 && !str.includes(CSI)) {
      this.menuStartRow = Math.max(0, process.stdout.rows - this.lineCount);
    }

    const mouse = parseMouseEvent(data);
    if (mouse) {
      if (mouse.button === 0 && this.menuStartRow !== -1) {
        this.handleClick(mouse.row);
      }
      return;
    }

    if (str.startsWith(ESC) && str !== KEY_UP && str !== KEY_DOWN) {
      return;
    }
    const key = str;

    if (key === "q" || key === "Q" || key === CTRL_C) {
      this.destroy();
      return;
    }

    if (key === KEY_UP) {
      this.focusedIndex = Math.max(0, this.focusedIndex - 1);
      this.render();
    } else if (key === KEY_DOWN) {
      this.focusedIndex = Math.min(
        this.items.length - 1,
        this.focusedIndex + 1,
      );
      this.render();
    } else if (key === "\r" || key === "\n") {
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
