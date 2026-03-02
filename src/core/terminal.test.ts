import { describe, it, expect } from "bun:test";
import { getProcessSize } from "./terminal";

describe("getProcessSize()", () => {
  it("should return an object with width and height", () => {
    const size = getProcessSize();
    expect(size).toHaveProperty("width");
    expect(size).toHaveProperty("height");
  });

  it("should return numeric values (when running in a TTY)", () => {
    const { width, height } = getProcessSize();
    // In CI or piped mode these can be undefined, so we just
    // verify the shape — but in a TTY they'll be numbers.
    if (process.stdout.isTTY) {
      expect(typeof width).toBe("number");
      expect(typeof height).toBe("number");
      expect(width).toBeGreaterThan(0);
      expect(height).toBeGreaterThan(0);
    }
  });

  it("width should match process.stdout.columns", () => {
    expect(getProcessSize().width).toBe(process.stdout.columns);
  });

  it("height should match process.stdout.rows", () => {
    expect(getProcessSize().height).toBe(process.stdout.rows);
  });
});
