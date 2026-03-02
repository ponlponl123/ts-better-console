import { describe, it, expect } from "bun:test";
import {
  s,
  applyUndefinedStyles,
  clearStyle,
  rainbow,
  Colors,
  BackgroundColors,
  Styles,
  cls,
} from "./style";

// ── Constants ────────────────────────────────────────────────
const RESET = "\x1b[0m";

describe("s() — style a string", () => {
  it("should wrap text with foreground color ANSI code", () => {
    const result = s("hello", { color: "red" });
    expect(result).toContain("\x1b[31m");
    expect(result).toContain("hello");
    expect(result).toEndWith(RESET);
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
    expect(result).toEndWith(RESET);
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

describe("cls constant", () => {
  it("should equal the ANSI reset code", () => {
    expect(cls).toBe(RESET);
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
