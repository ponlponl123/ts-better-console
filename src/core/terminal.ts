import type { TerminalDimensions } from "../types/terminal.types";

/**
 * Returns the current terminal dimensions (columns × rows) with a bunch of
 * pre-calculated fractions (half, third, two-thirds) for both width and height.
 *
 * Call this fresh each time you need it — terminal size can change if the user
 * resizes the window.
 *
 * Aliased as `ps` in the main export.
 *
 * @example
 * ```ts
 * const { width, height } = getProcessSize();
 * console.log(width.half); // half the terminal width
 * ```
 */
function getProcessSize(): TerminalDimensions {
  const { stdout } = process;
  return {
    width: {
      og: stdout.columns,
      half: Math.floor(stdout.columns / 2),
      third: Math.floor(stdout.columns / 3),
      twoThirds: Math.floor((stdout.columns * 2) / 3),
      full: stdout.columns,
    },
    height: {
      og: stdout.rows,
      half: Math.floor(stdout.rows / 2),
      third: Math.floor(stdout.rows / 3),
      twoThirds: Math.floor((stdout.rows * 2) / 3),
      full: stdout.rows,
    },
  };
}

/**
 * A snapshot of the terminal size taken at import time.
 *
 * Cheaper than calling `getProcessSize()` repeatedly, but it won't update
 * if the terminal gets resized after the module loads. Use `getProcessSize()`
 * if you need a live reading.
 */
const size: TerminalDimensions = {
  width: {
    og: process.stdout.columns,
    half: Math.floor(process.stdout.columns / 2),
    third: Math.floor(process.stdout.columns / 3),
    twoThirds: Math.floor((process.stdout.columns * 2) / 3),
    full: process.stdout.columns,
  },
  height: {
    og: process.stdout.rows,
    half: Math.floor(process.stdout.rows / 2),
    third: Math.floor(process.stdout.rows / 3),
    twoThirds: Math.floor((process.stdout.rows * 2) / 3),
    full: process.stdout.rows,
  },
};

export { getProcessSize, size };
