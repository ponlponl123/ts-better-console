import type { StyleOptions } from "../types/style";
import { cs } from "./line";

function getColorCode(
  color: string | undefined,
  isBackground: boolean,
): string {
  if (!color) return "";
  if (color === "gray") {
    return isBackground ? "\x1b[100m" : "\x1b[90m";
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
  return `\x1b[${base + (colors[color] || 0)}m`;
}

function getStyleCodes(styles: string[] | undefined): string {
  if (!styles) return "";
  const styleCodes: Record<string, number> = {
    bold: 1,
    italic: 3,
    underline: 4,
    strikethrough: 9,
  };
  return styles.map((s) => `\x1b[${styleCodes[s] || ""}m`).join("");
}

// styles the string
function s(str: string, style: StyleOptions): string {
  return cs(
    [
      `${getColorCode(style.color, false)}`,
      `${getColorCode(style.backgroundColor, true)}`,
      `${getStyleCodes(style.styles)}${str}`,
      style.endless ? "" : "\x1b[0m",
    ],
    false,
  );
}

function applyUndefinedStyles(str: string, style?: StyleOptions): string {
  if (!style) return str;
  return s(str, style);
}

function clearStyle(): string {
  return "\x1b[0m";
}

// rainbow colors
function rainbow(str: string): string {
  const colors = ["red", "yellow", "green", "cyan", "blue", "magenta"] as const;
  return cs(
    str
      .split("")
      .map((char, i) => s(char, { color: colors[i % colors.length] })),
    false,
  );
}

export { s, applyUndefinedStyles, clearStyle, rainbow };
