// ── Default export ───────────────────────────────────────────
export { default } from "./core/console";

// ── Core utilities ───────────────────────────────────────────
export {
  s,
  applyUndefinedStyles,
  clearStyle,
  rainbow,
  Colors,
  BackgroundColors,
  Styles,
  cls,
} from "./core/style";
export {
  cs,
  ts,
  flag,
  tsflag,
  toMaxLineLength,
  toMaxLinesLength,
} from "./core/line";
export { getProcessSize } from "./core/terminal";

// ── Components ───────────────────────────────────────────────
export { ButtonGroup } from "./components/button";
export { createCard } from "./components/card";
export { link } from "./components/link";
export { Menu } from "./components/menu";
export { Progress } from "./components/progress";
export { Spinner } from "./components/spinner";

// ── Shared types ─────────────────────────────────────────────
export type { StyleOptions, Color, Style } from "./types/style.types";
export type { DebugLevel } from "./types/line.types";

// ── Component types ──────────────────────────────────────────
export type {
  ButtonOptions,
  ButtonGroupOptions,
  ButtonGroupEvents,
} from "./components/button";
export type { cardWidth, cardOptions, sectionOptions } from "./components/card";
export type {
  MenuItemOptions,
  MenuOptions,
  MenuEvents,
} from "./components/menu";
export type {
  ProgressOptions,
  ProgressLabelPair,
  ProgressEvents,
  ProgressStatus,
  ProgressBarOptions,
  ProgressBarStateColor,
} from "./components/progress";
export type { SpinnerOptions, SpinnerStyle } from "./components/spinner";
