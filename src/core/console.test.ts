import { describe, it, expect, spyOn, afterEach } from "bun:test";
import betterConsole from "./console";

describe("betterConsole", () => {
  // Spy on console methods to capture calls
  const logSpy = spyOn(console, "log");
  const warnSpy = spyOn(console, "warn");
  const errorSpy = spyOn(console, "error");
  const infoSpy = spyOn(console, "info");
  const debugSpy = spyOn(console, "debug");
  const clearSpy = spyOn(console, "clear");
  const writeSpy = spyOn(process.stdout, "write");

  afterEach(() => {
    logSpy.mockClear();
    warnSpy.mockClear();
    errorSpy.mockClear();
    infoSpy.mockClear();
    debugSpy.mockClear();
    clearSpy.mockClear();
    writeSpy.mockClear();
  });

  // ── log ──────────────────────────────────────────────────

  describe("log()", () => {
    it("should call console.log", () => {
      betterConsole.log("hello");
      expect(logSpy).toHaveBeenCalled();
    });

    it("should style string arguments", () => {
      betterConsole.log("text");
      const arg = logSpy.mock.calls[0]![0] as string;
      // s("text", {}) appends a reset code
      expect(arg).toContain("text");
      expect(arg).toContain("\x1b[0m");
    });

    it("should pass non-string arguments through unchanged", () => {
      const obj = { a: 1 };
      betterConsole.log(obj);
      expect(logSpy.mock.calls[0]![0]).toBe(obj);
    });

    it("should handle multiple arguments", () => {
      betterConsole.log("a", 42, "b");
      expect(logSpy.mock.calls[0]!.length).toBe(3);
    });
  });

  // ── warn ─────────────────────────────────────────────────

  describe("warn()", () => {
    it("should call console.warn with yellow-styled strings", () => {
      betterConsole.warn("caution");
      expect(warnSpy).toHaveBeenCalled();
      const arg = warnSpy.mock.calls[0]![0] as string;
      expect(arg).toContain("\x1b[33m"); // yellow
      expect(arg).toContain("caution");
    });
  });

  // ── error ────────────────────────────────────────────────

  describe("error()", () => {
    it("should call console.error with red-styled strings", () => {
      betterConsole.error("fail");
      expect(errorSpy).toHaveBeenCalled();
      const arg = errorSpy.mock.calls[0]![0] as string;
      expect(arg).toContain("\x1b[31m"); // red
      expect(arg).toContain("fail");
    });
  });

  // ── info ─────────────────────────────────────────────────

  describe("info()", () => {
    it("should call console.info with cyan-styled strings", () => {
      betterConsole.info("note");
      expect(infoSpy).toHaveBeenCalled();
      const arg = infoSpy.mock.calls[0]![0] as string;
      expect(arg).toContain("\x1b[36m"); // cyan
      expect(arg).toContain("note");
    });
  });

  // ── debug ────────────────────────────────────────────────

  describe("debug()", () => {
    it("should call console.debug with magenta-styled strings", () => {
      betterConsole.debug("trace");
      expect(debugSpy).toHaveBeenCalled();
      const arg = debugSpy.mock.calls[0]![0] as string;
      expect(arg).toContain("\x1b[35m"); // magenta
      expect(arg).toContain("trace");
    });
  });

  // ── json ─────────────────────────────────────────────────

  describe("json()", () => {
    it("should call console.log with a card containing JSON", () => {
      betterConsole.json({ key: "value" });
      expect(logSpy).toHaveBeenCalled();
      const output = logSpy.mock.calls[0]![0] as string;
      expect(output).toContain("key");
      expect(output).toContain("value");
      // Card borders
      expect(output).toContain("┌");
      expect(output).toContain("└");
    });

    it("should accept a custom width", () => {
      betterConsole.json({ a: 1 }, 30);
      expect(logSpy).toHaveBeenCalled();
    });
  });

  // ── skip / clearLine / clear ─────────────────────────────

  describe("skip()", () => {
    it("should write a newline to stdout", () => {
      betterConsole.skip();
      expect(writeSpy).toHaveBeenCalledWith("\n");
    });
  });

  describe("clearLine()", () => {
    it("should write the clear-line escape sequence", () => {
      betterConsole.clearLine();
      expect(writeSpy).toHaveBeenCalledWith("\r\x1b[K");
    });
  });

  describe("clear()", () => {
    it("should call console.clear", () => {
      betterConsole.clear();
      expect(clearSpy).toHaveBeenCalled();
    });
  });
});
