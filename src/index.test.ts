import { describe, it, expect } from "bun:test";

/**
 * Barrel-export smoke tests.
 *
 * These verify that every public symbol is reachable through the
 * root `src/index.ts` entry point — which is what library consumers import.
 */

// Default + named exports
import betterConsole, {
  // core / style
  s,
  applyUndefinedStyles,
  clearStyle,
  rainbow,
  Colors,
  BackgroundColors,
  Styles,
  cls,
  // core / line
  cs,
  ts,
  flag,
  tsflag,
  toMaxLineLength,
  toMaxLinesLength,
  // core / terminal
  getProcessSize,
  // components
  ButtonGroup,
  Card,
  link,
  Menu,
  Progress,
  Spinner,
} from ".";

// Type-only imports (compile-time check — if these break, tsc fails)
import type {
  StyleOptions,
  DebugLevel,
  ButtonOptions,
  ButtonGroupOptions,
  ButtonGroupEvents,
  CardWidth,
  CardOptions,
  SectionOptions,
  MenuItemOptions,
  MenuOptions,
  MenuEvents,
  ProgressOptions,
  ProgressLabelPair,
  ProgressEvents,
  ProgressStatus,
  SpinnerOptions,
  SpinnerStyle,
} from ".";

describe("Public API — barrel exports", () => {
  it("should export betterConsole as default", () => {
    expect(betterConsole).toBeDefined();
    expect(typeof betterConsole.log).toBe("function");
    expect(typeof betterConsole.warn).toBe("function");
    expect(typeof betterConsole.error).toBe("function");
    expect(typeof betterConsole.info).toBe("function");
    expect(typeof betterConsole.debug).toBe("function");
    expect(typeof betterConsole.json).toBe("function");
    expect(typeof betterConsole.skip).toBe("function");
    expect(typeof betterConsole.clearLine).toBe("function");
    expect(typeof betterConsole.clear).toBe("function");
  });

  it("should export style utilities", () => {
    expect(typeof s).toBe("function");
    expect(typeof applyUndefinedStyles).toBe("function");
    expect(typeof clearStyle).toBe("function");
    expect(typeof rainbow).toBe("function");
    expect(typeof cls).toBe("string");
    expect(Colors).toBeDefined();
    expect(BackgroundColors).toBeDefined();
    expect(Styles).toBeDefined();
  });

  it("should export line utilities", () => {
    expect(typeof cs).toBe("function");
    expect(typeof ts).toBe("function");
    expect(typeof flag).toBe("function");
    expect(typeof tsflag).toBe("function");
    expect(typeof toMaxLineLength).toBe("function");
    expect(typeof toMaxLinesLength).toBe("function");
  });

  it("should export terminal utilities", () => {
    expect(typeof getProcessSize).toBe("function");
  });

  it("should export component constructors / factories", () => {
    expect(typeof ButtonGroup).toBe("function");
    expect(typeof Card).toBe("function");
    expect(typeof link).toBe("function");
    expect(typeof Menu).toBe("function");
    expect(typeof Progress).toBe("function");
    expect(typeof Spinner).toBe("function");
  });
});

describe("Quick integration sanity checks", () => {
  it("s() + cs() + flag() compose correctly", () => {
    const result = cs([flag("info"), s("hello", { color: "green" })]);
    expect(result).toContain("INFO");
    expect(result).toContain("hello");
    expect(result).toContain("\x1b[32m"); // green
  });

  it("Card renders a string with borders", () => {
    const card = new Card("content", 20).render();
    expect(card).toContain("┌");
    expect(card).toContain("└");
    expect(card).toContain("content");
  });

  it("link() produces an OSC 8 string", () => {
    const result = link("text", "https://example.com");
    expect(result).toContain("https://example.com");
    expect(result).toContain("text");
  });

  it("Spinner can be created and returns a frame", () => {
    const spinner = new Spinner({ style: "dots" });
    expect(spinner.getCurrentFrame()).toBe("⣾");
  });
});
