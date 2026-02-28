import { describe, it } from "bun:test";

describe("Terminal utilities", () => {
  it("should get terminal size", () => {
    const { columns, rows } = process.stdout;
    console.log(`Terminal size: ${columns}x${rows}`);
  });
});
