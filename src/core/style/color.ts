import { getColorCode } from "../..";
import type {
  AnyColor,
  Color,
  EightBitColorValue,
  RGBColorValue,
} from "../../types";

/**
 * Raw ANSI escape sequences for the 8 classic terminal foreground colors plus gray.
 * If you just want to style a string nicely, use `s()` instead —
 * these are more for when you're building something low-level.
 */
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

/**
 * Same as `Colors` but for background colors.
 * Pair with a `Colors` value if you want both fg and bg set.
 */
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

// ── 8-bit color (256 colors) ────────────────────────────────

/**
 * Enum of named 8-bit (256) color codes.
 *
 * - 0–7: standard colors
 * - 8–15: high-intensity (bright) colors
 * - 16–231: 6×6×6 color cube
 * - 232–255: grayscale ramp
 */
enum EightBitColor {
  // Standard colors (0-7)
  Black = 0,
  Red = 1,
  Green = 2,
  Yellow = 3,
  Blue = 4,
  Magenta = 5,
  Cyan = 6,
  White = 7,
  // High-intensity colors (8-15)
  BrightBlack = 8,
  BrightRed = 9,
  BrightGreen = 10,
  BrightYellow = 11,
  BrightBlue = 12,
  BrightMagenta = 13,
  BrightCyan = 14,
  BrightWhite = 15,
  // Popular extended colors (16-231)
  Orange = 208,
  Pink = 213,
  Purple = 129,
  Teal = 30,
  Gold = 220,
  Lime = 118,
  Salmon = 209,
  SkyBlue = 117,
  Lavender = 183,
  Coral = 203,
  Turquoise = 80,
  Violet = 135,
  Indigo = 54,
  Olive = 142,
  Maroon = 52,
  Navy = 17,
  Brown = 130,
  Peach = 217,
}

/** Create an 8-bit foreground/background color value (0–255). */
function eightBit(code: number): EightBitColorValue {
  return { __type: "8bit", code: Math.max(0, Math.min(255, code | 0)) };
}

// ── 24-bit color (true color / RGB) ─────────────────────────

/** Create a 24-bit RGB color value. */
function rgb(r: number, g: number, b: number): RGBColorValue {
  const clamp = (n: number) => Math.max(0, Math.min(255, n | 0));
  return { __type: "rgb", r: clamp(r), g: clamp(g), b: clamp(b) };
}

/** Create a 24-bit color value from a hex string (e.g. `"#ff8800"` or `"ff8800"`). */
function hex(hexStr: string): RGBColorValue {
  const h = hexStr.replace(/^#/, "");
  const n = parseInt(h, 16);
  if (h.length === 3) {
    // Short form: "f80" → "ff8800"
    const r = ((n >> 8) & 0xf) * 0x11;
    const g = ((n >> 4) & 0xf) * 0x11;
    const b = (n & 0xf) * 0x11;
    return rgb(r, g, b);
  }
  return rgb((n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff);
}

/** Convert a named 4-bit Color string to an approximate [r, g, b] triple. */
function namedColorToRgb(color: Color): [number, number, number] {
  const map: Record<Color, [number, number, number]> = {
    black: [0, 0, 0],
    red: [170, 0, 0],
    green: [0, 170, 0],
    yellow: [170, 170, 0],
    blue: [0, 0, 170],
    magenta: [170, 0, 170],
    cyan: [0, 170, 170],
    white: [170, 170, 170],
    gray: [85, 85, 85],
  };
  return map[color];
}

/** Convert an 8-bit (256-color) code to an [r, g, b] triple. */
function eightBitToRgb(code: number): [number, number, number] {
  // Standard palette (0–15): reuse namedColorToRgb mapping via index
  const standard: [number, number, number][] = [
    [0, 0, 0],
    [170, 0, 0],
    [0, 170, 0],
    [170, 170, 0],
    [0, 0, 170],
    [170, 0, 170],
    [0, 170, 170],
    [170, 170, 170],
    [85, 85, 85],
    [255, 85, 85],
    [85, 255, 85],
    [255, 255, 85],
    [85, 85, 255],
    [255, 85, 255],
    [85, 255, 255],
    [255, 255, 255],
  ];
  if (code < 16) return standard[code]!;
  // 6×6×6 color cube (16–231)
  if (code < 232) {
    const idx = code - 16;
    const cube = (v: number) => (v === 0 ? 0 : 55 + v * 40);
    return [
      cube(Math.floor(idx / 36) % 6),
      cube(Math.floor(idx / 6) % 6),
      cube(idx % 6),
    ];
  }
  // Grayscale ramp (232–255)
  const v = 8 + (code - 232) * 10;
  return [v, v, v];
}

/** Convert any AnyColor to an [r, g, b] triple for interpolation. */
function colorToRgb(color: AnyColor): [number, number, number] {
  if (typeof color === "object") {
    if (color.__type === "rgb") return [color.r, color.g, color.b];
    if (color.__type === "8bit") return eightBitToRgb(color.code);
  }
  return namedColorToRgb(color as Color);
}

/**
 * Apply a multi-stop gradient across `text`, supporting named (4-bit),
 * 8-bit, and 24-bit RGB colors.  All color stops are internally converted
 * to RGB and linearly interpolated per character.
 *
 * @param text         The string to colorize.
 * @param colors       Two or more color stops.
 * @param isBackground Apply the gradient to the background instead of the foreground.
 * @param size         Virtual width used for interpolation (defaults to `text.length`).
 */
/**
 * Paints every character in `text` with a smooth gradient that blends
 * between two or more color stops.
 *
 * Works with named colors, 8-bit codes, and full RGB — they all get
 * converted to RGB internally and interpolated per character.
 *
 * Set `isBackground` to `true` to apply the gradient to the background
 * instead of the text color.
 *
 * @example
 * ```ts
 * gradient("hello world", ["red", "blue"]);
 * gradient("bg gradient", [rgb(255,0,0), rgb(0,0,255)], true);
 * ```
 */
function gradient(
  text: string,
  colors: AnyColor[],
  isBackground: boolean = false,
  size: number = text.length,
): string {
  if (text.length === 0 || colors.length === 0) return text;

  const reset = isBackground ? DEFAULT_BACKGROUND : DEFAULT_COLOR;

  if (colors.length === 1) {
    return `${getColorCode(colors[0], isBackground)}${text}${reset}`;
  }

  const chars = [...text]; // split on code-points, not UTF-16 units
  const segCount = colors.length - 1;
  let result = "";

  for (let i = 0; i < chars.length; i++) {
    const t = size <= 1 ? 0 : i / (size - 1); // position in [0, 1]
    const scaled = t * segCount;
    const seg = Math.min(Math.floor(scaled), segCount - 1);
    const segT = scaled - seg;

    const [r1, g1, b1] = colorToRgb(colors[seg]!);
    const [r2, g2, b2] = colorToRgb(colors[seg + 1]!);

    const cr = Math.round(r1 + (r2 - r1) * segT);
    const cg = Math.round(g1 + (g2 - g1) * segT);
    const cb = Math.round(b1 + (b2 - b1) * segT);

    result += `${getColorCode(rgb(cr, cg, cb), isBackground)}${chars[i]}`;
  }

  return result + reset;
}

// ── Defaults ─────────────────────────────────────────────────

const NORMAL_INTENSITY = "\x1b[22m"; // disable bold/intensity (in case it was enabled by mistake)
const DEFAULT_COLOR = "\x1b[39m"; // default foreground color
const DEFAULT_BACKGROUND = "\x1b[49m"; // default background color

/** Predefined rainbow color sets for convenience.
 *
 * `rainbowColors` is the classic 6-color ANSI rainbow (red, yellow, green, cyan, blue, magenta).
 *
 * `rainbowColorsExtended` is a more vibrant 26-color rainbow using the 8-bit palette.
 *
 * `rainbowPastelColors` is a softer 7-color rainbow of pastel shades, also from the 8-bit palette.
 * These can be used with the `gradient()` function or any place that accepts an `AnyColor`.
 * Aliased as `rbColors`, `rbColorsExtended`, and `rbColorsPastel` in the main export.
 *
 */
const rainbowColors: Color[] = [
  "red",
  "yellow",
  "green",
  "cyan",
  "blue",
  "magenta",
];

/** Predefined rainbow color sets for convenience.
 *
 * `rainbowColors` is the classic 6-color ANSI rainbow (red, yellow, green, cyan, blue, magenta).
 *
 * `rainbowColorsExtended` is a more vibrant 26-color rainbow using the 8-bit palette.
 *
 * `rainbowPastelColors` is a softer 7-color rainbow of pastel shades, also from the 8-bit palette.
 * These can be used with the `gradient()` function or any place that accepts an `AnyColor`.
 * Aliased as `rbColors`, `rbColorsExtended`, and `rbColorsPastel` in the main export.
 *
 */
const rainbowColorsExtended: number[] = [
  196, // bright red
  202, // red-orange
  208, // orange
  214, // orange-yellow
  220, // gold-yellow
  226, // bright yellow
  184, // yellow-lime
  190, // lime-green
  154, // lime
  118, // bright green-lime
  82, // green-lime
  46, // bright green
  47, // green-teal
  48, // teal
  50, // teal-cyan
  51, // cyan
  44, // cyan-blue
  39, // cyan-blue
  33, // blue
  27, // blue
  21, // bright blue
  57, // blue-purple
  93, // purple
  129, // purple
  165, // purple-magenta
  201, // magenta
];

/** Predefined rainbow color sets for convenience.
 *
 * `rainbowColors` is the classic 6-color ANSI rainbow (red, yellow, green, cyan, blue, magenta).
 *
 * `rainbowColorsExtended` is a more vibrant 26-color rainbow using the 8-bit palette.
 *
 * `rainbowPastelColors` is a softer 7-color rainbow of pastel shades, also from the 8-bit palette.
 * These can be used with the `gradient()` function or any place that accepts an `AnyColor`.
 * Aliased as `rbColors`, `rbColorsExtended`, and `rbColorsPastel` in the main export.
 *
 */
const rainbowPastelColors: number[] = [
  217, // pastel pink
  223, // pastel peach
  229, // pastel yellow
  120, // pastel green
  159, // pastel cyan
  147, // pastel blue
  183, // pastel purple
];

/**
 * The main export includes all the above plus some convenient aliases:
 * - `rbColors` for `rainbowColors`
 * - `rbColorsExtended` for `rainbowColorsExtended`
 * - `rbColorsPastel` for `rainbowPastelColors`
 */
const rainbowASCIICodes = rainbowColors.map((c) => Colors[c]);

/**
 * The main export includes all the above plus some convenient aliases:
 * - `rbColors` for `rainbowColors`
 * - `rbColorsExtended` for `rainbowColorsExtended`
 * - `rbColorsPastel` for `rainbowPastelColors`
 */
const rainbowExtendedASCIICodes = rainbowColorsExtended.map((c) =>
  getColorCode(eightBit(c), false),
);

export {
  Colors,
  BackgroundColors,
  EightBitColor,
  eightBit,
  rgb,
  hex,
  namedColorToRgb,
  eightBitToRgb,
  colorToRgb,
  gradient,
  NORMAL_INTENSITY,
  DEFAULT_COLOR,
  DEFAULT_BACKGROUND,
  rainbowColors,
  rainbowASCIICodes,
  rainbowColorsExtended,
  rainbowPastelColors,
  rainbowExtendedASCIICodes,
};
