import { EventEmitter } from "events";
import type { StyleOptions } from "../../types/style.types";
import type {
  ButtonOptions,
  ButtonGroupOptions,
  ButtonGroupEvents,
} from "./button.types";
import { s } from "../../core/style/style";
import { cs } from "../../core/line";
import type { Alignment } from "../../types";
import { aliasAlignment } from "../../utils";
import type { FixedPosition } from "../../types/terminal.types";
import {
  getProcessSize,
  setupScrollRegion,
  resetScrollRegion,
  wrapFixed,
  clearFixed,
  enableInteractiveMode,
  disableInteractiveMode,
  parseMouseEvent,
} from "../../core";
import { CTRL_C, ERASE_TO_EOL, KEY_LEFT, KEY_RIGHT } from "../../core/ansi";

/**
 * A row of clickable buttons rendered in the terminal.
 *
 * The user navigates between buttons with left/right arrow keys and
 * confirms with Enter. Emits events on focus changes and on press so
 * you can wire up actions without any polling.
 *
 * Call `.show()` to render it and `.destroy()` to clean up.
 *
 * @example
 * ```ts
 * const group = new ButtonGroup(
 *   [{ label: "Yes" }, { label: "No" }],
 *   { align: "center" }
 * );
 * group.on("press", (btn) => console.log(btn.label));
 * group.show();
 * ```
 */
class ButtonGroup extends EventEmitter {
  private buttons: ButtonOptions[];
  private options: ButtonGroupOptions;
  private buttonPositions: { start: number; end: number }[] = [];
  private alignment: Alignment = "left";
  private position: FixedPosition = "inline";
  private isActive: boolean = false;
  private focusedIndex: number = -1;

  constructor(buttons: ButtonOptions[], options: ButtonGroupOptions = {}) {
    super();
    this.buttons = buttons;
    this.options = { gap: 2, ...options };
    this.alignment = aliasAlignment(this.options.align ?? "left");
    this.position = this.options.position ?? "inline";
  }

  public show(): void {
    if (this.isActive) return;
    this.isActive = true;

    if (this.position !== "inline") {
      process.stdout.write(setupScrollRegion(this.position, 1));
    }

    this.render();

    enableInteractiveMode();
    process.stdin.on("data", this.onData);
  }

  public destroy(): void {
    if (!this.isActive) return;
    this.isActive = false;

    disableInteractiveMode();
    process.stdin.removeListener("data", this.onData);

    if (this.position !== "inline") {
      process.stdout.write(clearFixed(this.position));
      process.stdout.write(resetScrollRegion());
    } else {
      process.stdout.write("\n");
    }

    this.emit("exit");
  }

  private render(): void {
    const terminalWidth = getProcessSize().width.full;
    const totalButtonWidth = this.buttons.reduce(
      (sum, btn) => sum + btn.label.length + 2,
      0,
    );
    const totalGapWidth = (this.buttons.length - 1) * (this.options.gap ?? 2);
    const contentWidth = totalButtonWidth + totalGapWidth;
    const gap = " ".repeat(this.options.gap ?? 2);
    const parts: string[] = [];
    this.buttonPositions = [];
    let leftPadding = 0;
    if (this.alignment === "center") {
      leftPadding = Math.max(0, Math.floor((terminalWidth - contentWidth) / 2));
    } else if (this.alignment === "right") {
      leftPadding = Math.max(0, terminalWidth - contentWidth);
    }
    let col = leftPadding;

    for (let i = 0; i < this.buttons.length; i++) {
      const btn = this.buttons[i]!;
      const label = ` ${btn.label} `;
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

    const line =
      "\r" + ERASE_TO_EOL + " ".repeat(leftPadding) + cs(parts, false);
    process.stdout.write(wrapFixed(this.position, line));
  }

  private onData = (data: Buffer): void => {
    const mouse = parseMouseEvent(data);
    if (mouse) {
      if (mouse.button === 0) this.handleClick(mouse.col);
      return;
    }

    const key = data.toString();

    if (key === "q" || key === "Q" || key === CTRL_C) {
      this.destroy();
      return;
    }

    if (key === KEY_LEFT) {
      this.focusedIndex = Math.max(0, this.focusedIndex - 1);
      this.render();
    } else if (key === KEY_RIGHT) {
      this.focusedIndex = Math.min(
        this.buttons.length - 1,
        this.focusedIndex + 1,
      );
      this.render();
    } else if (key === "\r" || key === "\n") {
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
