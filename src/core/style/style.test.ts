import { describe, it, expect } from "bun:test";
import {
  s,
  applyUndefinedStyles,
  clearStyle,
  rainbow,
  Colors,
  BackgroundColors,
  Styles,
  EightBitColor,
  eightBit,
  rgb,
  hex,
  gradient,
  namedColorToRgb,
  eightBitToRgb,
  colorToRgb,
} from "..";

// ── Constants ────────────────────────────────────────────────
const RESET = "\x1b[0m";

describe("s() — style a string", () => {
  it("should wrap text with foreground color ANSI code", () => {
    const result = s("hello", { color: "red" });
    expect(result).toContain("\x1b[31m");
    expect(result).toContain("hello");
    expect(result).toEndWith("\x1b[39m"); // clear fg only
  });

  it("should apply background color", () => {
    const result = s("bg", { backgroundColor: "blue" });
    expect(result).toContain("\x1b[44m");
    expect(result).toContain("bg");
  });

  it("should apply multiple text styles", () => {
    const result = s("styled", { styles: ["bold", "underline"] });
    expect(result).toContain("\x1b[1m");
    expect(result).toContain("\x1b[4m");
  });

  it("should apply color + background + styles together", () => {
    const result = s("combo", {
      color: "cyan",
      backgroundColor: "yellow",
      styles: ["italic", "strikethrough"],
    });
    expect(result).toContain("\x1b[36m"); // cyan fg
    expect(result).toContain("\x1b[43m"); // yellow bg
    expect(result).toContain("\x1b[3m"); // italic
    expect(result).toContain("\x1b[9m"); // strikethrough
    expect(result).toContain("combo");
    expect(result).toContain("\x1b[39m"); // clear fg
    expect(result).toContain("\x1b[49m"); // clear bg
  });

  it("should NOT append reset code when endless is true", () => {
    const result = s("keep", { color: "green", endless: true });
    expect(result).toContain("\x1b[32m");
    expect(result).not.toEndWith(RESET);
  });

  it("should handle empty style options gracefully", () => {
    const result = s("plain", {});
    expect(result).toContain("plain");
    expect(result).toEndWith(RESET);
  });

  it("should use special-cased gray ANSI codes", () => {
    const fg = s("fg", { color: "gray" });
    const bg = s("bg", { backgroundColor: "gray" });
    expect(fg).toContain(Colors.gray); // \x1b[90m
    expect(bg).toContain(BackgroundColors.gray); // \x1b[100m
  });

  it("should handle every foreground color without throwing", () => {
    const allColors = [
      "black",
      "red",
      "green",
      "yellow",
      "blue",
      "magenta",
      "cyan",
      "white",
      "gray",
    ] as const;
    for (const color of allColors) {
      const result = s("x", { color });
      expect(result).toContain("x");
      expect(result.length).toBeGreaterThan(1);
    }
  });

  it("should not throw on unknown color", () => {
    // @ts-expect-error — intentionally invalid
    const result = s("safe", { color: "neon" });
    expect(result).toContain("safe");
  });

  it("should not throw on unknown style name", () => {
    // @ts-expect-error — intentionally invalid
    const result = s("safe", { styles: ["glow"] });
    expect(result).toContain("safe");
  });
});

describe("applyUndefinedStyles()", () => {
  it("should return string unchanged when style is undefined", () => {
    expect(applyUndefinedStyles("raw")).toBe("raw");
  });

  it("should apply styling when style is provided", () => {
    const result = applyUndefinedStyles("text", { color: "red" });
    expect(result).toContain("\x1b[31m");
    expect(result).toContain("text");
  });
});

describe("clearStyle()", () => {
  it("should append the ANSI reset code", () => {
    expect(clearStyle("text")).toBe(`text${RESET}`);
  });

  it("should work on an already styled endless string", () => {
    const styled = s("hi", { color: "blue", endless: true });
    const cleared = clearStyle(styled);
    expect(cleared).toEndWith(RESET);
  });
});

describe("rainbow()", () => {
  it("should cycle through all 6 rainbow colors", () => {
    const result = rainbow("abcdef");
    expect(result).toContain("\x1b[31m"); // red
    expect(result).toContain("\x1b[33m"); // yellow
    expect(result).toContain("\x1b[32m"); // green
    expect(result).toContain("\x1b[36m"); // cyan
    expect(result).toContain("\x1b[34m"); // blue
    expect(result).toContain("\x1b[35m"); // magenta
  });

  it("should wrap colors for strings longer than 6 chars", () => {
    const result = rainbow("1234567");
    // 7th char wraps back to red
    expect(result).toContain("7");
  });

  it("should return empty string for empty input", () => {
    expect(rainbow("")).toBe("");
  });

  it("should style a single character with the first color (red)", () => {
    const result = rainbow("X");
    expect(result).toContain("X");
    expect(result).toContain("\x1b[31m");
  });
});

describe("Enum values", () => {
  it("Colors should have correct ANSI codes", () => {
    // @ts-expect-error
    expect(Colors.black).toBe("\x1b[30m");
    // @ts-expect-error
    expect(Colors.red).toBe("\x1b[31m");
    // @ts-expect-error
    expect(Colors.green).toBe("\x1b[32m");
    // @ts-expect-error
    expect(Colors.yellow).toBe("\x1b[33m");
    // @ts-expect-error
    expect(Colors.blue).toBe("\x1b[34m");
    // @ts-expect-error
    expect(Colors.magenta).toBe("\x1b[35m");
    // @ts-expect-error
    expect(Colors.cyan).toBe("\x1b[36m");
    // @ts-expect-error
    expect(Colors.white).toBe("\x1b[37m");
    // @ts-expect-error
    expect(Colors.gray).toBe("\x1b[90m");
  });

  it("BackgroundColors should have correct ANSI codes", () => {
    // @ts-expect-error
    expect(BackgroundColors.black).toBe("\x1b[40m");
    // @ts-expect-error
    expect(BackgroundColors.red).toBe("\x1b[41m");
    // @ts-expect-error
    expect(BackgroundColors.green).toBe("\x1b[42m");
    // @ts-expect-error
    expect(BackgroundColors.yellow).toBe("\x1b[43m");
    // @ts-expect-error
    expect(BackgroundColors.blue).toBe("\x1b[44m");
    // @ts-expect-error
    expect(BackgroundColors.magenta).toBe("\x1b[45m");
    // @ts-expect-error
    expect(BackgroundColors.cyan).toBe("\x1b[46m");
    // @ts-expect-error
    expect(BackgroundColors.white).toBe("\x1b[47m");
    // @ts-expect-error
    expect(BackgroundColors.gray).toBe("\x1b[100m");
  });

  it("Styles should have correct ANSI codes", () => {
    // @ts-expect-error
    expect(Styles.bold).toBe("\x1b[1m");
    // @ts-expect-error
    expect(Styles.italic).toBe("\x1b[3m");
    // @ts-expect-error
    expect(Styles.underline).toBe("\x1b[4m");
    // @ts-expect-error
    expect(Styles.strikethrough).toBe("\x1b[9m");
  });
});

// ── 8-bit color ──────────────────────────────────────────────

describe("eightBit() — 8-bit (256) color helper", () => {
  it("should create an EightBitColorValue object", () => {
    const c = eightBit(208);
    expect(c).toEqual({ __type: "8bit", code: 208 });
  });

  it("should clamp values to 0–255", () => {
    expect(eightBit(-5).code).toBe(0);
    expect(eightBit(300).code).toBe(255);
  });

  it("should truncate fractional values", () => {
    expect(eightBit(100.9).code).toBe(100);
  });
});

describe("EightBitColor enum", () => {
  it("should have standard color codes", () => {
    expect(EightBitColor.Black).toBe(0);
    expect(EightBitColor.Red).toBe(1);
    expect(EightBitColor.White).toBe(7);
  });

  it("should have bright color codes", () => {
    expect(EightBitColor.BrightRed).toBe(9);
    expect(EightBitColor.BrightWhite).toBe(15);
  });

  it("should have extended named colors", () => {
    expect(EightBitColor.Orange).toBe(208);
    expect(EightBitColor.Pink).toBe(213);
    expect(EightBitColor.Navy).toBe(17);
  });
});

describe("s() with 8-bit color", () => {
  it("should produce 8-bit foreground ANSI escape", () => {
    const result = s("orange", { color: eightBit(208) });
    expect(result).toContain("\x1b[38;5;208m");
    expect(result).toContain("orange");
    expect(result).toEndWith("\x1b[39m"); // clear fg only
  });

  it("should produce 8-bit background ANSI escape", () => {
    const result = s("bg", { backgroundColor: eightBit(EightBitColor.Navy) });
    expect(result).toContain("\x1b[48;5;17m");
  });

  it("should combine 8-bit color with styles", () => {
    const result = s("styled", {
      color: eightBit(EightBitColor.Orange),
      styles: ["bold"],
    });
    expect(result).toContain("\x1b[38;5;208m");
    expect(result).toContain("\x1b[1m");
  });

  it("should mix 8-bit fg with named bg", () => {
    const result = s("mix", {
      color: eightBit(123),
      backgroundColor: "red",
    });
    expect(result).toContain("\x1b[38;5;123m");
    expect(result).toContain("\x1b[41m");
  });
});

// ── 24-bit color (RGB / hex) ─────────────────────────────────

describe("rgb() — 24-bit color helper", () => {
  it("should create an RGBColorValue object", () => {
    const c = rgb(255, 128, 0);
    expect(c).toEqual({ __type: "rgb", r: 255, g: 128, b: 0 });
  });

  it("should clamp channels to 0–255", () => {
    const c = rgb(-10, 300, 128);
    expect(c).toEqual({ __type: "rgb", r: 0, g: 255, b: 128 });
  });
});

describe("hex() — hex-to-RGB helper", () => {
  it("should parse 6-digit hex", () => {
    expect(hex("#ff8800")).toEqual({ __type: "rgb", r: 255, g: 136, b: 0 });
  });

  it("should parse without # prefix", () => {
    expect(hex("ff8800")).toEqual({ __type: "rgb", r: 255, g: 136, b: 0 });
  });

  it("should parse 3-digit shorthand hex", () => {
    expect(hex("#f80")).toEqual({ __type: "rgb", r: 255, g: 136, b: 0 });
  });
});

// ── Color conversion helpers ───────────────────────────────

describe("namedColorToRgb()", () => {
  it("should convert named colors to RGB triples", () => {
    expect(namedColorToRgb("red")).toEqual([170, 0, 0]);
    expect(namedColorToRgb("green")).toEqual([0, 170, 0]);
    expect(namedColorToRgb("blue")).toEqual([0, 0, 170]);
    expect(namedColorToRgb("black")).toEqual([0, 0, 0]);
    expect(namedColorToRgb("white")).toEqual([170, 170, 170]);
    expect(namedColorToRgb("gray")).toEqual([85, 85, 85]);
  });
});

describe("eightBitToRgb()", () => {
  it("should convert standard palette (0-7) correctly", () => {
    expect(eightBitToRgb(0)).toEqual([0, 0, 0]); // black
    expect(eightBitToRgb(1)).toEqual([170, 0, 0]); // red
    expect(eightBitToRgb(7)).toEqual([170, 170, 170]); // white
  });

  it("should convert bright palette (8-15) correctly", () => {
    expect(eightBitToRgb(8)).toEqual([85, 85, 85]); // bright black
    expect(eightBitToRgb(15)).toEqual([255, 255, 255]); // bright white
  });

  it("should convert 6x6x6 color cube (16-231)", () => {
    expect(eightBitToRgb(16)).toEqual([0, 0, 0]); // 0,0,0
    expect(eightBitToRgb(231)).toEqual([255, 255, 255]); // 5,5,5
    expect(eightBitToRgb(196)).toEqual([255, 0, 0]); // pure red in cube
  });

  it("should convert grayscale ramp (232-255)", () => {
    expect(eightBitToRgb(232)).toEqual([8, 8, 8]);
    expect(eightBitToRgb(255)).toEqual([238, 238, 238]);
  });
});

describe("colorToRgb()", () => {
  it("should dispatch named colors", () => {
    expect(colorToRgb("magenta")).toEqual([170, 0, 170]);
  });

  it("should dispatch 8-bit color objects", () => {
    expect(colorToRgb(eightBit(0))).toEqual([0, 0, 0]);
  });

  it("should dispatch rgb color objects", () => {
    expect(colorToRgb(rgb(10, 20, 30))).toEqual([10, 20, 30]);
  });
});

// ── gradient() ───────────────────────────────────────────────

describe("gradient()", () => {
  it("should return empty string for empty input", () => {
    expect(gradient("", ["red", "blue"])).toBe("");
  });

  it("should return text unchanged when colors array is empty", () => {
    expect(gradient("hello", [])).toBe("hello");
  });

  it("should wrap text with single color and reset", () => {
    const result = gradient("hi", ["red"]);
    expect(result).toContain("hi");
    expect(result).toContain("\x1b[39m"); // DEFAULT_COLOR reset
  });

  it("should produce 24-bit escapes for each character", () => {
    const result = gradient("AB", [rgb(255, 0, 0), rgb(0, 0, 255)]);
    expect(result).toContain("\x1b[38;2;"); // 24-bit fg escape prefix
    expect(result).toContain("A");
    expect(result).toContain("B");
    expect(result).toEndWith("\x1b[39m"); // DEFAULT_COLOR reset
  });

  it("should support 8-bit color stops", () => {
    const result = gradient("XY", [eightBit(196), eightBit(21)]);
    expect(result).toContain("X");
    expect(result).toContain("Y");
    expect(result).toEndWith("\x1b[39m");
  });

  it("should support named color stops", () => {
    const result = gradient("hi", ["red", "blue"]);
    expect(result).toContain("h");
    expect(result).toContain("i");
    expect(result).toEndWith("\x1b[39m");
  });

  it("should support background gradient", () => {
    const result = gradient("bg", ["red", "green"], true);
    expect(result).toContain("\x1b[48;2;"); // 24-bit bg escape prefix
    expect(result).toEndWith("\x1b[49m"); // DEFAULT_BACKGROUND reset
  });

  it("should support mixed color types", () => {
    const result = gradient("mix", [hex("#ff0000"), eightBit(51), "magenta"]);
    expect(result).toContain("m");
    expect(result).toEndWith("\x1b[39m");
  });

  it("should respect custom size parameter", () => {
    const result = gradient("hi", ["red", "blue"], false, 10);
    expect(result).toContain("h");
    expect(result).toContain("i");
  });

  it("should handle single-char string", () => {
    const result = gradient("X", [rgb(100, 150, 200), rgb(200, 150, 100)]);
    expect(result).toContain("X");
    expect(result).toEndWith("\x1b[39m");
  });
});

describe("s() with 24-bit (RGB) color", () => {
  it("should produce 24-bit foreground ANSI escape", () => {
    const result = s("trucolor", { color: rgb(255, 128, 0) });
    expect(result).toContain("\x1b[38;2;255;128;0m");
    expect(result).toContain("trucolor");
    expect(result).toEndWith("\x1b[39m"); // clear fg only
  });

  it("should produce 24-bit background ANSI escape", () => {
    const result = s("bg", { backgroundColor: rgb(0, 100, 200) });
    expect(result).toContain("\x1b[48;2;0;100;200m");
  });

  it("should work with hex() color", () => {
    const result = s("hex", { color: hex("#d8a0ff") });
    expect(result).toContain("\x1b[38;2;216;160;255m");
  });

  it("should combine 24-bit fg and bg", () => {
    const result = s("full", {
      color: rgb(255, 0, 0),
      backgroundColor: rgb(0, 0, 255),
    });
    expect(result).toContain("\x1b[38;2;255;0;0m");
    expect(result).toContain("\x1b[48;2;0;0;255m");
  });

  it("should support endless mode with extended colors", () => {
    const result = s("no-reset", {
      color: eightBit(208),
      endless: true,
    });
    expect(result).toContain("\x1b[38;5;208m");
    expect(result).not.toEndWith(RESET);
  });
});
