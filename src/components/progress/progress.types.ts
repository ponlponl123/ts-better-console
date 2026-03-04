import type { UnSpecifiedColor } from "../../types/style.types";
import type { FixedPosition } from "../../types/terminal.types";

type ProgressAnimation = "rainbow" | "rainbow-smooth";

interface ProgressAnimationOptions {
  type: ProgressAnimation;
  speed?: number;
  size?: number;
}

interface ProgressLabelPair {
  while: string;
  past: string;
}

interface ProgressBarOptions {
  loadedSymbol?: string;
  bufferedSymbol?: string;
  emptySymbol?: string;
  length?: number | "full-width";
  animation?: false | ProgressAnimationOptions;
  color?: ProgressBarStateColor;
  position?: FixedPosition;
}

interface ProgressBarStateColor {
  loaded?: UnSpecifiedColor;
  buffered?: UnSpecifiedColor;
  empty?: UnSpecifiedColor;
  completed?: UnSpecifiedColor;
  cancelled?: UnSpecifiedColor;
  errored?: UnSpecifiedColor;
}

interface ProgressOptions {
  label?: ProgressLabelPair;
  bar?: ProgressBarOptions;
}

interface ProgressUpdateOptions extends ProgressOptions {
  message?: string;
}

interface ProgressEvents {
  update: [current: number, percentage: number];
  complete: [total: number];
  cancel: [];
  error: [...args: any[]];
}

type ProgressStatus = "active" | "completed" | "cancelled" | "errored";

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
};
