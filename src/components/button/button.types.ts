import type { Align } from "../../types";
import type { StyleOptions } from "../../types/style.types";
import type { FixedPosition } from "../../types/terminal.types";

type ButtonOptions = {
  label: string;
  style?: StyleOptions;
  hoverStyle?: StyleOptions;
  onClick: () => void;
};

type ButtonGroupOptions = {
  gap?: number;
  borderStyle?: StyleOptions;
  align?: Align;
  position?: FixedPosition;
};

interface ButtonGroupEvents {
  click: [label: string, index: number];
  exit: [];
}

export type { ButtonOptions, ButtonGroupOptions, ButtonGroupEvents };
