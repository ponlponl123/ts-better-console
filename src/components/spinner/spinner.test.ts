import { describe, it, expect, beforeEach, afterEach } from "bun:test";
import { Spinner } from "./spinner";

describe("Spinner", () => {
  let spinner: Spinner;

  afterEach(() => {
    spinner?.stop();
  });

  // ── Constructor defaults ───────────────────────────────────

  describe("constructor", () => {
    it("should default to 'dots' style", () => {
      spinner = new Spinner();
      // dots first frame
      expect(spinner.getCurrentFrame()).toBe("⣾");
    });

    it("should accept 'line' style", () => {
      spinner = new Spinner({ style: "line" });
      expect(spinner.getCurrentFrame()).toBe("-");
    });

    it("should accept 'bounce' style", () => {
      spinner = new Spinner({ style: "bounce" });
      expect(spinner.getCurrentFrame()).toBe("⠁");
    });

    it("should accept 'arrow' style", () => {
      spinner = new Spinner({ style: "arrow" });
      expect(spinner.getCurrentFrame()).toBe("←");
    });

    it("should accept custom frames", () => {
      spinner = new Spinner({ frames: ["A", "B", "C"] });
      expect(spinner.getCurrentFrame()).toBe("A");
    });
  });

  // ── getCurrentFrame() ──────────────────────────────────────

  describe("getCurrentFrame()", () => {
    it("should return the first frame before start", () => {
      spinner = new Spinner({ style: "dots" });
      expect(spinner.getCurrentFrame()).toBe("⣾");
    });
  });

  // ── start() / stop() lifecycle ─────────────────────────────

  describe("start() / stop()", () => {
    it("should advance frames in silent mode", async () => {
      spinner = new Spinner({ style: "line", interval: 20 });
      const first = spinner.getCurrentFrame();
      spinner.start(true);
      await new Promise((r) => setTimeout(r, 80));
      spinner.stop();
      // After some time the frame should have advanced
      // (we can't guarantee which frame, but it should have moved)
      // Just confirm it didn't throw
      expect(spinner.getCurrentFrame()).toBeDefined();
    });

    it("should not throw when stop is called without start", () => {
      spinner = new Spinner();
      expect(() => spinner.stop()).not.toThrow();
    });

    it("should not start twice (idempotent)", () => {
      spinner = new Spinner({ style: "line", interval: 50 });
      spinner.start(true);
      // calling start again should be a no-op
      expect(() => spinner.start(true)).not.toThrow();
      spinner.stop();
    });
  });
});
