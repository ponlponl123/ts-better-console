import type { StyleOptions } from "../../types/style.types";

type ButtonOptions = {
  label: string;
  style?: StyleOptions;
  hoverStyle?: StyleOptions;
  onClick: () => void;
};

type ButtonGroupOptions = {
  gap?: number;
  borderStyle?: StyleOptions;
};

interface ButtonGroupEvents {
  click: [label: string, index: number];
  exit: [];
}

export type { ButtonOptions, ButtonGroupOptions, ButtonGroupEvents };
