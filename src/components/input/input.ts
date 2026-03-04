import { EventEmitter } from "events";
import type { InputOptions, InputStyleOptions, InputType } from "./input.types";
import type { CardBorderSymbols } from "../card";
import { defaultBorderSymbols } from "../card/card";
import { getProcessSize } from "../../core/terminal";
import { ratio } from "../../utils/layout";
import { CURSOR_HIDE, CURSOR_SHOW } from "../../core";
import {
  CTRL_C,
  BACKSPACE,
  CURSOR_SAVE,
  CURSOR_RESTORE,
  INSERT_LINE,
  ERASE_TO_END,
  ERASE_TO_EOL,
  cursorTo,
  cursorUp,
  cursorDown,
  cursorForward,
  cursorBackward,
  cursorToColumn,
  KEY_UP,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  ESC,
  stripAnsi,
} from "../../core/ansi";
import type { FixedPosition } from "../../types/terminal.types";
import type { Alignment } from "../../types";

const promptHistory: string[] = [];

/**
 * A simple inline prompt — shows a question, waits for the user to type
 * something and press Enter, then resolves with whatever they typed.
 *
 * Supports `text` and `password` types (password hides the input).
 * Pass `true` for `isArrowKeyNavigationEnabled` to get command history
 * navigation with the up/down arrow keys.
 *
 * @example
 * ```ts
 * const name = await prompt("What's your name? ");
 * const pass  = await prompt("Password: ", "password");
 * ```
 */
function prompt(
  question: string = "> ",
  type: InputType = "text",
  isArrowKeyNavigationEnabled: boolean = false,
): Promise<string> {
  return new Promise((resolve) => {
    let buffer = "";
    let cursorPos = 0;
    let historyIndex = promptHistory.length;
    let savedInput = "";

    process.stdout.write(question);

    if (process.stdin.isTTY) process.stdin.setRawMode(true);
    process.stdin.resume();

    const questionVisualLength = stripAnsi(question).length;

    const redrawLine = () => {
      if (type === "password") return;
      const display = buffer;
      process.stdout.write(
        `\r${cursorForward(questionVisualLength)}${display}${ERASE_TO_EOL}`,
      );
      const targetColumn = questionVisualLength + cursorPos + 1;
      process.stdout.write(cursorToColumn(targetColumn));
    };

    const onData = (data: Buffer) => {
      const key = data.toString();

      if (key === "\r" || key === "\n") {
        process.stdout.write("\n");
        cleanup();
        if (isArrowKeyNavigationEnabled && buffer.trim()) {
          promptHistory.push(buffer);
        }
        resolve(buffer);
        return;
      }

      if (key === CTRL_C) {
        cleanup();
        process.exit(130);
      }

      if (key === BACKSPACE) {
        if (cursorPos > 0) {
          buffer = buffer.slice(0, cursorPos - 1) + buffer.slice(cursorPos);
          cursorPos--;
          if (type !== "password") {
            redrawLine();
          }
        }
        return;
      }

      if (key === KEY_UP) {
        if (!isArrowKeyNavigationEnabled) return;
        if (historyIndex > 0) {
          if (historyIndex === promptHistory.length) {
            savedInput = buffer;
          }
          historyIndex--;
          buffer = promptHistory[historyIndex] ?? "";
          cursorPos = buffer.length;
          redrawLine();
        }
        return;
      }

      if (key === KEY_DOWN) {
        if (!isArrowKeyNavigationEnabled) return;
        if (historyIndex < promptHistory.length) {
          historyIndex++;
          buffer =
            historyIndex === promptHistory.length
              ? savedInput
              : (promptHistory[historyIndex] ?? "");
          cursorPos = buffer.length;
          redrawLine();
        }
        return;
      }

      if (key === KEY_LEFT) {
        if (cursorPos > 0) {
          cursorPos--;
          if (type !== "password") process.stdout.write(KEY_LEFT);
        }
        return;
      }

      if (key === KEY_RIGHT) {
        if (cursorPos < buffer.length) {
          cursorPos++;
          if (type !== "password") process.stdout.write(KEY_RIGHT);
        }
        return;
      }

      if (key.startsWith(ESC) || key.charCodeAt(0) < 32) return;

      buffer = buffer.slice(0, cursorPos) + key + buffer.slice(cursorPos);
      cursorPos += key.length;

      if (type !== "password") {
        if (cursorPos === buffer.length) {
          process.stdout.write(key);
        } else {
          redrawLine();
        }
      }
    };

    const cleanup = () => {
      process.stdin.removeListener("data", onData);
      if (process.stdin.isTTY) process.stdin.setRawMode(false);
      process.stdin.pause();
    };

    process.stdin.on("data", onData);
  });
}

/**
 * A fancy bordered input field that you can embed in a terminal UI.
 *
 * Unlike the `prompt()` function, `Input` gives you a styled box with a label,
 * supports different widths, alignment, and fixed positions in the terminal.
 * It emits events too, so you can react to each keystroke if you need to.
 *
 * Call `.show()` to start capturing input and `.destroy()` to clean up.
 *
 * @example
 * ```ts
 * const input = new Input({ label: "Search:", width: "1/2" });
 * input.on("submit", (value) => console.log(value));
 * input.show();
 * ```
 */
class Input extends EventEmitter {
  private label: string = "Type something";
  private type: InputType = "text";
  private defaultValue: string = "";
  private styles: InputStyleOptions = {
    input: { color: "white" },
    border: { color: "white" },
    label: { color: "cyan", styles: ["bold"] },
  };
  private isActive: boolean = false;
  private buffer: string = "";
  private borderSymbols: CardBorderSymbols = defaultBorderSymbols;
  private width: number = 50;
  private hasRendered: boolean = false;
  private leftMargin: number = 0;
  private align: Alignment = "left";
  private position: FixedPosition = "inline";
  private savedCursorRow: number = 0;

  constructor(options: InputOptions = {}) {
    super();
    this.label = options.label ?? "Type something";
    this.type = options.type ?? "text";
    this.defaultValue = options.defaultValue ?? "";
    this.buffer = this.defaultValue;
    this.align = options.align ?? "left";
    this.position = options.position ?? "inline";

    if (options.styles) {
      this.styles = { ...this.styles, ...options.styles };
    }
    this.borderSymbols = defaultBorderSymbols;

    const terminalWidth = getProcessSize().width.full;
    const width = options.width ?? 50;
    if (typeof width === "string") {
      if (width === "auto") {
        this.width = Math.max(this.label.length + 4, 12);
      } else {
        this.width = ratio(terminalWidth, width);
      }
    } else if (typeof width === "number") {
      if (width < 12) {
        this.width = 12;
      } else if (width > terminalWidth) {
        this.width = terminalWidth - 4;
      } else {
        this.width = width;
      }
    }

    if (this.align !== "left") {
      this.leftMargin = terminalWidth - this.width - 4;
      if (this.align === "center") {
        this.leftMargin = Math.floor(this.leftMargin / 2);
      }
    }
  }

  public async prompt(): Promise<string> {
    return new Promise((resolve) => {
      this.show();

      const onSubmit = (value: string) => {
        this.destroy();
        this.removeListener("submit", onSubmit);
        this.removeListener("exit", onExit);
        resolve(value);
      };

      const onExit = () => {
        this.destroy();
        this.removeListener("submit", onSubmit);
        this.removeListener("exit", onExit);
        resolve("");
      };

      this.once("submit", onSubmit);
      this.once("exit", onExit);
    });
  }

  private show(): void {
    if (this.isActive) return;
    this.isActive = true;

    if (this.position === "top") {
      this.savedCursorRow = process.stdout.rows || 24;
      process.stdout.write(CURSOR_SAVE);
      process.stdout.write(cursorTo(1, 1));
      process.stdout.write(INSERT_LINE + INSERT_LINE + INSERT_LINE);
      process.stdout.write(CURSOR_RESTORE);
      process.stdout.write(cursorDown(3));
      process.stdout.write(cursorTo(1, 1));
    } else if (this.position === "bottom") {
      const h = process.stdout.rows || 24;
      process.stdout.write(CURSOR_SAVE);
      process.stdout.write(cursorTo(h, 1));
      process.stdout.write("\n\n\n");
      process.stdout.write(cursorUp(3));
    }

    this.render();
    process.stdout.write(CURSOR_HIDE);

    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }
    process.stdin.resume();
    process.stdin.on("data", this.onData);
  }

  private destroy(): void {
    if (!this.isActive) return;
    this.isActive = false;

    process.stdout.write(CURSOR_SHOW);

    process.stdin.removeListener("data", this.onData);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }
    process.stdin.pause();

    if (this.position === "top") {
      process.stdout.write(cursorTo(1, 1));
      process.stdout.write(ERASE_TO_END);
      process.stdout.write(CURSOR_RESTORE);
    } else if (this.position === "bottom") {
      process.stdout.write(CURSOR_RESTORE);
    } else {
      process.stdout.write("\n");
    }
  }

  private render(): void {
    const { s } = require("../../core/style");
    const contentWidth = this.width - 4;
    const marginSpace = " ".repeat(this.leftMargin);

    // Position cursor for render
    if (this.position === "top") {
      process.stdout.write(cursorTo(1, 1));
      process.stdout.write(ERASE_TO_END);
    } else if (this.position === "bottom") {
      const h = process.stdout.rows || 24;
      process.stdout.write(cursorTo(h - 2, 1));
      process.stdout.write(ERASE_TO_END);
    } else if (this.hasRendered) {
      process.stdout.write(`\r${cursorUp(2)}${ERASE_TO_END}`);
    }

    // Top border with label
    const labelDisplay = this.label.slice(0, contentWidth);
    const labelPaddingRight = Math.max(0, contentWidth - labelDisplay.length);
    const topBorder = `${marginSpace}${this.borderSymbols.topLeft}${this.borderSymbols.horizontal.repeat(2)}${labelDisplay}${this.borderSymbols.horizontal.repeat(labelPaddingRight)}${this.borderSymbols.topRight}`;

    // Input line - mask password
    let displayValue: string;
    if (this.type === "password") {
      displayValue = "*".repeat(this.buffer.length);
    } else {
      displayValue = this.buffer;
    }
    displayValue = displayValue.slice(-contentWidth) || "";
    const padding = Math.max(0, contentWidth - displayValue.length);
    const inputLine = `${marginSpace}${this.borderSymbols.vertical}  ${s(
      displayValue + " ".repeat(padding),
      this.styles.input,
    )}${this.borderSymbols.vertical}`;

    // Bottom border
    const bottomBorder = `${marginSpace}${this.borderSymbols.bottomLeft}${this.borderSymbols.horizontal.repeat(
      contentWidth + 2,
    )}${this.borderSymbols.bottomRight}`;

    process.stdout.write(topBorder + "\n" + inputLine + "\n" + bottomBorder);
    this.hasRendered = true;
  }

  private onData = (data: Buffer): void => {
    const key = data.toString();

    if (key === CTRL_C) {
      this.destroy();
      this.emit("exit");
      return;
    }

    if (key === BACKSPACE) {
      if (this.buffer.length > 0) {
        this.buffer = this.buffer.slice(0, -1);
        this.render();
      }
      return;
    }

    if (key === "\r" || key === "\n") {
      const value = this.buffer;
      this.destroy();
      this.emit("submit", value);
      return;
    }

    // Ignore control characters
    if (key.charCodeAt(0) < 32) {
      return;
    }

    this.buffer += key;
    this.emit("change", this.buffer);
    this.render();
  };
}

export { prompt, Input };
