// ── Raw bytes (for protocol-level buffer parsing) ────────────

export enum Byte {
  ESC = 0x1b,
  BRACKET = 0x5b,
  MOUSE_M = 0x4d,
}

// ── Control characters ───────────────────────────────────────

export const CTRL_C = "\x03";
export const BACKSPACE = "\x7f";

// ── Primitives ───────────────────────────────────────────────

export const ESC = "\x1b";
export const CSI = "\x1b[";

// ── Cursor ───────────────────────────────────────────────────

export const CURSOR_SAVE = "\x1b7";
export const CURSOR_RESTORE = "\x1b8";
export const CURSOR_HIDE = "\x1b[?25l";
export const CURSOR_SHOW = "\x1b[?25h";
export const cursorUp = (n: number) => `${CSI}${n}A`;
export const cursorDown = (n: number) => `${CSI}${n}B`;
export const cursorTo = (row: number, col: number = 1) =>
  `${CSI}${row};${col}H`;

// ── Erase ────────────────────────────────────────────────────

export const ERASE_LINE = "\x1b[2K";
export const ERASE_TO_EOL = "\x1b[K";
export const ERASE_BELOW = "\x1b[0J";
export const ERASE_TO_END = "\x1b[J";
export const INSERT_LINE = "\x1b[L";

// ── Scroll region ────────────────────────────────────────────

export const SCROLL_RESET = "\x1b[r";
export const scrollRegion = (top: number, bottom: number) =>
  `${CSI}${top};${bottom}r`;

// ── Line wrapping ────────────────────────────────────────────

export const WRAP_ON = "\x1b[?7h";
export const WRAP_OFF = "\x1b[?7l";

// ── Mouse tracking (X10 normal mode) ────────────────────────

export const MOUSE_ON = "\x1b[?1000h";
export const MOUSE_OFF = "\x1b[?1000l";

// ── Arrow / navigation keys ─────────────────────────────────

export const KEY_UP = "\x1b[A";
export const KEY_DOWN = "\x1b[B";
export const KEY_RIGHT = "\x1b[C";
export const KEY_LEFT = "\x1b[D";

// ── SGR helpers (styles not covered by the Colors/Styles enums) ──

export const RESET = "\x1b[0m";
export const DIM = "\x1b[2m";
export const DIM_OFF = "\x1b[22m";
