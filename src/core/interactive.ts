/**
 * Shared helpers for interactive terminal components (raw mode, mouse tracking, cursor).
 * Centralises the repeated stdin/stdout boilerplate so every component
 * doesn't hand-roll the same ANSI escape sequences.
 */

import { Byte, MOUSE_ON, MOUSE_OFF, CURSOR_HIDE, CURSOR_SHOW } from "./ansi";

function enableInteractiveMode(mouse: boolean = true): void {
  if (mouse) process.stdout.write(MOUSE_ON);
  process.stdout.write(CURSOR_HIDE);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);
  process.stdin.resume();
}

function disableInteractiveMode(mouse: boolean = true): void {
  if (mouse) process.stdout.write(MOUSE_OFF);
  process.stdout.write(CURSOR_SHOW);
  if (process.stdin.isTTY) process.stdin.setRawMode(false);
  process.stdin.pause();
}

/**
 * Parse X10 normal-tracking mouse event from raw stdin data.
 * Format: `ESC [ M <button+32> <col+32> <row+32>`
 * Returns `null` when `data` is not a mouse event.
 */
function parseMouseEvent(
  data: Buffer,
): { button: number; col: number; row: number } | null {
  if (
    data.length >= 6 &&
    data[0] === Byte.ESC &&
    data[1] === Byte.BRACKET &&
    data[2] === Byte.MOUSE_M
  ) {
    return {
      button: data[3]! - 32,
      col: data[4]! - 32 - 1,
      row: data[5]! - 32 - 1,
    };
  }
  return null;
}

export { enableInteractiveMode, disableInteractiveMode, parseMouseEvent };
