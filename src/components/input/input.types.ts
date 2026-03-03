import type { CardWidth } from "../card";
import type { Alignment, StyleOptions } from "../../types";
import type { FixedPosition } from "../../types/terminal.types";

type InputType = "text" | "password";

type InputEvents = {
  submit: [value: string];
  change: [value: string];
  exit: [];
};

type InputGroupEvents = {
  submit: [values: string[]];
  change: [values: string[]];
  exit: [];
};

type InputGroupOptions = {
  gap?: number;
  borderStyle?: StyleOptions;
};

type InputStyleOptions = {
  input?: StyleOptions;
  label?: StyleOptions;
  border?: StyleOptions;
};

interface InputOptions {
  type?: InputType;
  label?: string;
  defaultValue?: string;
  width?: CardWidth;
  align?: Alignment;
  position?: FixedPosition;
  styles?: InputStyleOptions;
}

export type {
  InputType,
  InputOptions,
  InputEvents,
  InputGroupOptions,
  InputGroupEvents,
  InputStyleOptions,
};
