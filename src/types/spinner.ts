type SpinnerStyle = "dots" | "line" | "bounce" | "arrow";

type SpinnerOptions = {
  style?: SpinnerStyle;
  frames?: string[];
  interval?: number;
};

export type { SpinnerOptions, SpinnerStyle };
