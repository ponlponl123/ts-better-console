import { cs } from "../line";
import { CSI, RESET } from "../ansi";
import {
  BackgroundColors,
  Colors,
  DEFAULT_BACKGROUND,
  DEFAULT_COLOR,
  eightBit,
  rainbowColors,
  rainbowColorsExtended,
  rainbowExtendedASCIICodes,
} from "./color";
import type {
  StyleOptions,
  AnyColor,
  ClearStyleOptions,
  UnSpecifiedColor,
} from "../../types/style.types";

/**
 * The raw ANSI numeric codes behind each text style.
 * You probably don't need this unless you're building something custom;
 * use `Styles` instead if you just want the escape sequences.
 */
enum StylesCode {
  bold = 1,
  italic = 3,
  underline = 4,
  strikethrough = 9,
  blink = 5,
  reverse = 7,
  invisible = 8,
  dim = 2,
}

/**
 * ANSI codes for turning off each text style.
 * These are the "undo" codes that get appended when you want to stop
 * a style mid-string without resetting everything else.
 */
enum ClearStylesCode {
  bold = 22,
  italic = 23,
  underline = 24,
  strikethrough = 29,
  blink = 25,
  reverse = 27,
  invisible = 28,
  dim = 22,
}

/**
 * Ready-to-use ANSI escape sequences for common text styles.
 * Stick one of these directly in a string and the terminal will render it.
 *
 * @example
 * ```ts
 * process.stdout.write(Styles.bold + "hello" + Styles.italic + " world");
 * ```
 */
enum Styles {
  bold = `\x1b[${StylesCode.bold}m`,
  italic = `\x1b[${StylesCode.italic}m`,
  underline = `\x1b[${StylesCode.underline}m`,
  strikethrough = `\x1b[${StylesCode.strikethrough}m`,
  blink = `\x1b[${StylesCode.blink}m`,
  reverse = `\x1b[${StylesCode.reverse}m`,
  invisible = `\x1b[${StylesCode.invisible}m`,
  dim = `\x1b[${StylesCode.dim}m`,
}

/**
 * Turns a color value (named string, 8-bit, or RGB) into the ANSI escape
 * sequence that makes the terminal actually display that color.
 *
 * Pass `isBackground: true` to apply it to the background instead of the text.
 *
 * @example
 * ```ts
 * const red = getColorCode("red", false);   // foreground red
 * const bgBlue = getColorCode("blue", true); // background blue
 * ```
 */
function getColorCode(
  color: AnyColor | undefined,
  isBackground: boolean,
): string {
  if (!color) return "";

  // Extended color objects (8-bit / 24-bit)
  if (typeof color === "object") {
    if (color.__type === "8bit") {
      const base = isBackground ? 48 : 38;
      return `${CSI}${base};5;${color.code}m`;
    }
    if (color.__type === "rgb") {
      const base = isBackground ? 48 : 38;
      return `${CSI}${base};2;${color.r};${color.g};${color.b}m`;
    }
  }

  // Named color strings (4-bit)
  if (color === "gray") {
    return isBackground ? BackgroundColors.gray : Colors.gray;
  }
  const base = isBackground ? 40 : 30;
  const colors: Record<string, number> = {
    black: 0,
    red: 1,
    green: 2,
    yellow: 3,
    blue: 4,
    magenta: 5,
    cyan: 6,
    white: 7,
    gray: 0,
  };
  return `${CSI}${base + (colors[color] || 0)}m`;
}

function getStyleCodes(styles: string[] | undefined): string {
  if (!styles) return "";
  const styleCodes: Record<string, number> = {
    bold: StylesCode.bold,
    italic: StylesCode.italic,
    underline: StylesCode.underline,
    strikethrough: StylesCode.strikethrough,
    blink: StylesCode.blink,
    reverse: StylesCode.reverse,
    invisible: StylesCode.invisible,
    dim: StylesCode.dim,
  };
  return styles.map((s) => `${CSI}${styleCodes[s] || ""}m`).join("");
}

/**
 * Styles a string with colors and text decorations, then resets everything
 * cleanly at the end so the next thing you print isn't accidentally purple.
 *
 * This is the main workhorse for styling — most other helpers call this.
 *
 * @param str - The text you want to style.
 * @param style - Colors, background, and/or text styles to apply.
 *
 * @example
 * ```ts
 * s("hello", { color: "cyan", styles: ["bold"] });
 * s("error", { color: "red", backgroundColor: "black" });
 * ```
 */
function s(str: string, style: StyleOptions): string {
  return cs(
    [
      `${getColorCode(style.color, false)}`,
      `${getColorCode(style.backgroundColor, true)}`,
      `${getStyleCodes(style.styles)}${str}`,
      style.endless
        ? ""
        : clearStyle("", {
            color: !!style.color,
            backgroundColor: !!style.backgroundColor,
            style: style.styles,
          }),
    ],
    false,
  );
}

/**
 * Like `s()`, but `style` is optional. If you don't pass anything, the
 * string comes back untouched. Handy when styling is conditional and you
 * don't want to litter your code with if-checks.
 *
 * Aliased as `us` in the main export.
 */
function applyUndefinedStyles(str: string, style?: StyleOptions): string {
  if (!style) return str;
  return s(str, style);
}

/**
 * Resolves a "foreground" placeholder color to an actual escape sequence.
 * Used internally to let child elements inherit color from a parent
 * without having to pass the parent color everywhere explicitly.
 */
function resolveUnSpecifiedColor(
  isBackground: boolean,
  color: UnSpecifiedColor | undefined,
  parentColor?: AnyColor,
): string {
  if (color === "foreground") {
    if (!parentColor) return isBackground ? DEFAULT_BACKGROUND : DEFAULT_COLOR;
    return getColorCode(parentColor, isBackground);
  }
  return getColorCode(color, isBackground);
}

/**
 * Appends ANSI reset codes to the end of a string so styles don't bleed
 * into whatever gets printed next.
 *
 * If you pass specific options, only those styles get reset instead of doing
 * a full nuclear reset of everything.
 */
function clearStyle(str: string, options?: ClearStyleOptions): string {
  const resetCodes = [];
  if (options?.color) resetCodes.push(DEFAULT_COLOR);
  if (options?.backgroundColor) resetCodes.push(DEFAULT_BACKGROUND);
  if (options?.style)
    options.style.forEach((s) => {
      const code = ClearStylesCode[s as keyof typeof ClearStylesCode];
      if (code) resetCodes.push(`\x1b[${code}m`);
    });
  if (resetCodes.length === 0) resetCodes.push(RESET);
  return str + resetCodes.join("");
}

/**
 * Turns a string into a rainbow — each character gets a different color
 * cycling through the spectrum.
 *
 * Set `smooth` to `true` for a smoother gradient using 256-color mode
 * instead of the basic 8 ANSI colors.
 *
 * Aliased as `rb` in the main export.
 *
 * @example
 * ```ts
 * console.log(rainbow("hello world"));
 * console.log(rainbow("smooth", true));
 * ```
 */
function rainbow(str: string, smooth: boolean = false): string {
  if (smooth) {
    const colors = rainbowColorsExtended;
    const colorCount = colors.length;
    return cs(
      [
        str
          .split("")
          .map((char, i) => {
            const color = colors[
              Math.floor((i / str.length) * colorCount) % colorCount
            ] as number;
            return `${getColorCode(eightBit(color), false)}${char}`;
          })
          .join(""),
      ],
      false,
    );
  }
  return cs(
    str
      .split("")
      .map((char, i) =>
        s(char, { color: rainbowColors[i % rainbowColors.length] }),
      ),
    false,
  );
}

export {
  s,
  applyUndefinedStyles,
  clearStyle,
  rainbow,
  getColorCode,
  resolveUnSpecifiedColor,
};
// export const
export { Styles, StylesCode, ClearStylesCode };
