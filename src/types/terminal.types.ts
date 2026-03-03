interface TerminalSize {
  og: number;
  half: number;
  third: number;
  twoThirds: number;
  full: number;
}

type TerminalDimensions = {
  width: TerminalSize;
  height: TerminalSize;
};

type FixedPosition = "inline" | "bottom" | "top";

export type { TerminalDimensions, TerminalSize, FixedPosition };
