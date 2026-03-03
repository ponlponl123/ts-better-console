import type { FixedPosition } from "../types/terminal.types";
import {
  CURSOR_SAVE,
  CURSOR_RESTORE,
  SCROLL_RESET,
  WRAP_OFF,
  WRAP_ON,
  ERASE_LINE,
  INSERT_LINE,
  cursorTo,
  cursorDown,
  scrollRegion,
} from "./ansi";

function termHeight(): number {
  return process.stdout.rows || 24;
}

/**
 * Builds the ANSI escape sequence to create/grow a scroll region,
 * reserving `reservedRows` at `position` (top or bottom).
 */
function setupScrollRegion(
  position: FixedPosition,
  reservedRows: number,
  previousRows: number = 0,
): string {
  if (position === "inline") return "";

  const h = termHeight();
  const newRows = reservedRows - previousRows;
  if (newRows <= 0) return "";

  let seq = "";

  if (position === "top") {
    seq += CURSOR_SAVE;
    seq += cursorTo(1, 1);
    for (let i = 0; i < newRows; i++) seq += INSERT_LINE;
    seq += scrollRegion(reservedRows + 1, h);
    seq += CURSOR_RESTORE;
    seq += cursorDown(newRows);
  } else {
    seq += "\n".repeat(newRows);
    seq += scrollRegion(1, h - reservedRows);
    seq += cursorTo(h - reservedRows, 1);
  }

  return seq;
}

function resetScrollRegion(): string {
  return SCROLL_RESET;
}

/** Move cursor to the first column of the fixed area at `offset` row. */
function moveToFixed(
  position: Exclude<FixedPosition, "inline">,
  rows: number = 1,
  offset: number = 0,
): string {
  const h = termHeight();
  if (position === "top") {
    return cursorTo(1 + offset, 1);
  }
  return cursorTo(h - rows + 1 + offset, 1);
}

/**
 * Render `content` inside the fixed area (save → move → write → restore).
 * Returns `content` unchanged when `position` is "inline".
 */
function wrapFixed(
  position: FixedPosition,
  content: string,
  rows: number = 1,
  offset: number = 0,
): string {
  if (position === "inline") return content;

  let out = CURSOR_SAVE;
  out += moveToFixed(position, rows, offset);
  out += WRAP_OFF;
  out += content;
  out += WRAP_ON;
  out += CURSOR_RESTORE;
  return out;
}

/** Clear `rows` lines in the fixed area. */
function clearFixed(position: FixedPosition, rows: number = 1): string {
  if (position === "inline") return "";

  let out = CURSOR_SAVE;
  out += moveToFixed(position, rows);
  for (let i = 0; i < rows; i++) {
    out += ERASE_LINE;
    if (i < rows - 1) out += "\n";
  }
  out += CURSOR_RESTORE;
  return out;
}

export {
  setupScrollRegion,
  resetScrollRegion,
  moveToFixed,
  wrapFixed,
  clearFixed,
  termHeight,
};
