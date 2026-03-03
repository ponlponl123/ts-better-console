import type { Color, StyleOptions } from "../types/style.types";
import { cs } from "./line";
import { CSI, RESET } from "./ansi";

enum Colors {
  black = "\x1b[30m",
  red = "\x1b[31m",
  green = "\x1b[32m",
  yellow = "\x1b[33m",
  blue = "\x1b[34m",
  magenta = "\x1b[35m",
  cyan = "\x1b[36m",
  white = "\x1b[37m",
  gray = "\x1b[90m",
}

enum BackgroundColors {
  black = "\x1b[40m",
  red = "\x1b[41m",
  green = "\x1b[42m",
  yellow = "\x1b[43m",
  blue = "\x1b[44m",
  magenta = "\x1b[45m",
  cyan = "\x1b[46m",
  white = "\x1b[47m",
  gray = "\x1b[100m",
}

enum Styles {
  bold = "\x1b[1m",
  italic = "\x1b[3m",
  underline = "\x1b[4m",
  strikethrough = "\x1b[9m",
}

const rainbowColors: Color[] = [
  "red",
  "yellow",
  "green",
  "cyan",
  "blue",
  "magenta",
];

const rainbowASCIICodes = rainbowColors.map((c) => Colors[c]);

export function getColorCode(
  color: string | undefined,
  isBackground: boolean,
): string {
  if (!color) return "";
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
    bold: 1,
    italic: 3,
    underline: 4,
    strikethrough: 9,
  };
  return styles.map((s) => `${CSI}${styleCodes[s] || ""}m`).join("");
}

// styles the string
function s(str: string, style: StyleOptions): string {
  return cs(
    [
      `${getColorCode(style.color, false)}`,
      `${getColorCode(style.backgroundColor, true)}`,
      `${getStyleCodes(style.styles)}${str}`,
      style.endless ? "" : RESET,
    ],
    false,
  );
}

function applyUndefinedStyles(str: string, style?: StyleOptions): string {
  if (!style) return str;
  return s(str, style);
}

// clearStyle clears the styles by appending the reset code at the end of the string
function clearStyle(str: string): string {
  return `${str}${RESET}`;
}
const cls = RESET;

// rainbow colors
function rainbow(str: string): string {
  return cs(
    str
      .split("")
      .map((char, i) =>
        s(char, { color: rainbowColors[i % rainbowColors.length] }),
      ),
    false,
  );
}

export { s, applyUndefinedStyles, clearStyle, rainbow };
// export const
export {
  Colors,
  BackgroundColors,
  Styles,
  cls,
  rainbowColors,
  rainbowASCIICodes,
};
