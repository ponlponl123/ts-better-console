// ── Default export ───────────────────────────────────────────
export { default } from "./core/console";

// ── Core utilities ───────────────────────────────────────────
export {
  s,
  applyUndefinedStyles as us,
  applyUndefinedStyles,
  clearStyle,
  rainbow as rb,
  rainbow,
  getColorCode,
  Styles,
  ClearStylesCode,
  StylesCode,
  resolveUnSpecifiedColor,
} from "./core/style/style";
export * from "./core/style/color";
export {
  cs,
  ts,
  flag as fg,
  flag,
  tsflag as tsfg,
  tsflag,
  toMaxLineLength,
  toMaxLinesLength,
} from "./core/line";
export { getProcessSize as ps, getProcessSize, size } from "./core/terminal";

// ── Layout utilities ──────────────────────────────────────────
export { aliasAlignment as aa, aliasAlignment, ratio } from "./utils/layout";

// ── Components ───────────────────────────────────────────────
export { ButtonGroup } from "./components/button";
export { Card } from "./components/card";
export { Input, prompt } from "./components/input";
export { link } from "./components/link";
export { Menu } from "./components/menu";
export { Progress } from "./components/progress";
export { Spinner } from "./components/spinner";

// ── Shared types ─────────────────────────────────────────────
export type {
  StyleOptions,
  Color,
  Style,
  UnSpecifiedColor,
  EightBitColorValue,
  RGBColorValue,
  ExtendedColor,
  AnyColor,
  ClearStyleOptions,
} from "./types/style.types";
export type {
  TerminalDimensions,
  TerminalSize,
  FixedPosition,
} from "./types/terminal.types";
export type {
  Ratio,
  Alignment,
  AlignmentAlias,
  Align,
} from "./types/layout.types";
export type { DebugLevel } from "./types/line.types";

// ── Component types ──────────────────────────────────────────
export type {
  ButtonOptions,
  ButtonGroupOptions,
  ButtonGroupEvents,
} from "./components/button";
export type {
  CardWidth,
  CardOptions,
  SectionOptions,
  BodyOptions,
  BorderStyle,
  BorderSymbolStyle,
  CardBorderSymbols,
  BorderOptions,
} from "./components/card";
export type {
  InputType,
  InputOptions,
  InputEvents,
  InputStyleOptions,
  InputGroupEvents,
  InputGroupOptions,
} from "./components/input";
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
  ProgressUpdateOptions,
  ProgressAnimation,
  ProgressAnimationOptions,
} from "./components/progress";
export type { SpinnerOptions, SpinnerStyle } from "./components/spinner";
