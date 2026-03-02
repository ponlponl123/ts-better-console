import { describe, it, expect, beforeEach, afterEach, spyOn } from "bun:test";
import { Progress } from "./progress";

describe("Progress", () => {
  // Suppress stdout writes from the progress bar renderer
  const writeSpy = spyOn(process.stdout, "write").mockImplementation(
    () => true,
  );
  const warnSpy = spyOn(console, "warn").mockImplementation(() => {});
  const errorSpy = spyOn(console, "error").mockImplementation(() => {});

  afterEach(() => {
    writeSpy.mockClear();
    warnSpy.mockClear();
    errorSpy.mockClear();
  });

  // Helper: create, init, and immediately drive to completion
  function createAndComplete(total = 10) {
    const p = new Progress("test", total);
    p.init();
    // Drain the nextTick render
    return p;
  }

  // ── Constructor ────────────────────────────────────────────

  describe("constructor", () => {
    it("should set title and total", () => {
      const p = new Progress("Download", 200);
      expect(p.title).toBe("Download");
      expect(p.total).toBe(200);
    });

    it("should default total to 100", () => {
      const p = new Progress("Upload");
      expect(p.total).toBe(100);
    });

    it("should default current and buffer to 0", () => {
      const p = new Progress("X");
      expect(p.current).toBe(0);
      expect(p.buffer).toBe(0);
    });
  });

  // ── update() ───────────────────────────────────────────────

  describe("update()", () => {
    it("should update current value", () => {
      const p = createAndComplete(100);
      p.update(50);
      expect(p.current).toBe(50);
      p.update(100); // complete to cleanup
    });

    it("should clamp current to total", () => {
      const p = createAndComplete(50);
      p.update(999);
      expect(p.current).toBe(50);
    });

    it("should set buffer value", () => {
      const p = createAndComplete(100);
      p.update(30, 10);
      expect(p.buffer).toBe(10);
      p.update(100); // cleanup
    });

    it("should clamp buffer to remaining (total - current)", () => {
      const p = createAndComplete(100);
      p.update(90, 50);
      expect(p.buffer).toBe(10); // 100 - 90 = 10
      p.update(100); // cleanup
    });

    it("should clamp negative buffer to 0", () => {
      const p = createAndComplete(100);
      p.update(10, -5);
      expect(p.buffer).toBe(0);
      p.update(100);
    });

    it("should emit 'update' event with current and percentage", () => {
      const p = createAndComplete(100);
      let captured: [number, number] | null = null;
      p.on("update", (cur, pct) => {
        captured = [cur, pct];
      });
      p.update(25);
      // @ts-expect-error
      expect(captured).toEqual([25, 0.25]);
      p.update(100);
    });

    it("should emit 'complete' when current reaches total", () => {
      const p = createAndComplete(10);
      let completed = false;
      p.on("complete", () => {
        completed = true;
      });
      p.update(10);
      expect(completed).toBe(true);
    });

    it("should invoke callback with 100 on completion", () => {
      const p = createAndComplete(10);
      let cbValue: number | null = null;
      p.callback = (pct) => {
        cbValue = pct;
      };
      p.update(10);
      // @ts-expect-error
      expect(cbValue).toBe(100);
    });

    it("should not update after cancel", () => {
      const p = createAndComplete(100);
      p.cancel();
      p.update(50);
      expect(p.current).toBe(0); // still 0 — update was ignored
    });
  });

  // ── cancel() ───────────────────────────────────────────────

  describe("cancel()", () => {
    it("should mark isExited as true", () => {
      const p = createAndComplete(100);
      p.cancel();
      expect(p.getIsExited()).toBe(true);
    });

    it("should emit 'cancel' event", () => {
      const p = createAndComplete(100);
      let cancelled = false;
      p.on("cancel", () => {
        cancelled = true;
      });
      p.cancel();
      expect(cancelled).toBe(true);
    });

    it("should be idempotent (no double emit)", () => {
      const p = createAndComplete(100);
      let count = 0;
      p.on("cancel", () => count++);
      p.cancel();
      p.cancel();
      expect(count).toBe(1);
    });
  });

  // ── error() ────────────────────────────────────────────────

  describe("error()", () => {
    it("should mark isExited as true", () => {
      const p = createAndComplete(100);
      // Must register an 'error' listener — EventEmitter throws on unhandled "error" events
      p.on("error", () => {});
      p.error("something broke");
      expect(p.getIsExited()).toBe(true);
    });

    it("should emit 'error' event with args", () => {
      const p = createAndComplete(100);
      let errArgs: any[] = [];
      p.on("error", (...args) => {
        errArgs = args;
      });
      p.error("bad", 42);
      expect(errArgs).toEqual(["bad", 42]);
    });

    it("should be idempotent", () => {
      const p = createAndComplete(100);
      let count = 0;
      p.on("error", () => count++);
      p.error("e1");
      p.error("e2");
      expect(count).toBe(1);
    });
  });

  // ── getIsExited() ──────────────────────────────────────────

  describe("getIsExited()", () => {
    it("should return false initially", () => {
      const p = new Progress("test");
      expect(p.getIsExited()).toBe(false);
    });
  });
});
