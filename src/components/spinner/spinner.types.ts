type SpinnerStyle = "dots" | "line" | "bounce" | "arrow" | "moon";

type SpinnerOptions = {
  style?: SpinnerStyle;
  frames?: string[];
  interval?: number;
};

export type { SpinnerOptions, SpinnerStyle };
