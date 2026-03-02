import { describe, it, expect } from "bun:test";
import {
  cs,
  ts,
  flag,
  tsflag,
  toMaxLineLength,
  toMaxLinesLength,
} from "./line";

describe("cs() — combine strings", () => {
  it("should join with a space by default", () => {
    expect(cs(["a", "b", "c"])).toBe("a b c");
  });

  it("should join without separator when join is false", () => {
    expect(cs(["a", "b", "c"], false)).toBe("abc");
  });

  it("should join with a custom separator", () => {
    expect(cs(["a", "b", "c"], " | ")).toBe("a | b | c");
  });

  it("should return empty string for empty array", () => {
    expect(cs([])).toBe("");
  });

  it("should return the single element for single-element array", () => {
    expect(cs(["only"])).toBe("only");
  });
});

describe("flag() — debug level prefix", () => {
  it("should wrap level in brackets with ANSI color", () => {
    const result = flag("debug", "msg");
    expect(result).toContain("[");
    expect(result).toContain("DEBUG");
    expect(result).toContain("]");
    expect(result).toContain("msg");
  });

  it("should color-code each level differently", () => {
    expect(flag("debug")).toContain("\x1b[36m"); // cyan
    expect(flag("info")).toContain("\x1b[34m"); // blue
    expect(flag("warn")).toContain("\x1b[33m"); // yellow
    expect(flag("error")).toContain("\x1b[31m"); // red
  });

  it("should append multiple args after the flag", () => {
    const result = flag("info", "a", "b");
    expect(result).toContain("a");
    expect(result).toContain("b");
  });
});

describe("ts() — timestamped prefix", () => {
  it("should include date and time when date=true", () => {
    const result = ts(true, "hello");
    // Should contain the current year, brackets, and the message
    const year = String(new Date().getFullYear());
    expect(result).toContain(year);
    expect(result).toContain("[");
    expect(result).toContain("]");
    expect(result).toContain("hello");
  });

  it("should omit date when date=false", () => {
    const result = ts(false, "hello");
    const year = String(new Date().getFullYear());
    expect(result).not.toContain(year);
    expect(result).toContain("[");
    expect(result).toContain("hello");
  });

  it("should work with no extra args", () => {
    const result = ts(true);
    expect(result).toContain("[");
    expect(result).toContain("]");
  });
});

describe("tsflag() — timestamped + debug level", () => {
  it("should contain both a timestamp and a level flag", () => {
    const result = tsflag("warn", true, "check");
    const year = String(new Date().getFullYear());
    expect(result).toContain(year);
    expect(result).toContain("WARN");
    expect(result).toContain("check");
  });

  it("should omit date when date=false", () => {
    const result = tsflag("error", false, "oops");
    const year = String(new Date().getFullYear());
    expect(result).not.toContain(year);
    expect(result).toContain("ERROR");
    expect(result).toContain("oops");
  });
});

describe("toMaxLineLength() — word-wrap a single string", () => {
  it("should not wrap short strings", () => {
    const lines = toMaxLineLength("short text", 20);
    expect(lines).toEqual(["short text"]);
  });

  it("should wrap at the given width", () => {
    const lines = toMaxLineLength("hello world foo bar", 12);
    expect(lines.length).toBeGreaterThan(1);
    for (const line of lines) {
      expect(line.length).toBeLessThanOrEqual(12);
    }
  });

  it("should handle a single long word", () => {
    const lines = toMaxLineLength("superlongword", 5);
    // The word exceeds the width but won't be split mid-word;
    // the algorithm produces an empty trimmed line then the word.
    expect(lines.length).toBeGreaterThanOrEqual(1);
    expect(lines.join(" ")).toContain("superlongword");
  });

  it("should return empty array for empty string", () => {
    const lines = toMaxLineLength("", 10);
    expect(lines).toEqual([]);
  });
});

describe("toMaxLinesLength() — word-wrap multiple lines", () => {
  it("should wrap each line independently", () => {
    const lines = toMaxLinesLength(["hello world", "foo bar baz"], 8);
    expect(lines.length).toBeGreaterThan(2);
    for (const line of lines) {
      expect(line.length).toBeLessThanOrEqual(8);
    }
  });

  it("should pass through short lines unchanged", () => {
    const lines = toMaxLinesLength(["aaa", "bbb"], 20);
    expect(lines).toEqual(["aaa", "bbb"]);
  });
});
