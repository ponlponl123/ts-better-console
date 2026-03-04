export type Color =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray";

export interface EightBitColorValue {
  __type: "8bit";
  code: number;
}

export interface RGBColorValue {
  __type: "rgb";
  r: number;
  g: number;
  b: number;
}

export type ExtendedColor = EightBitColorValue | RGBColorValue;

export type AnyColor = Color | ExtendedColor;

export type UnSpecifiedColor = AnyColor | "foreground";

export type Style = "bold" | "italic" | "underline" | "strikethrough";

export interface StyleOptions {
  color?: AnyColor;
  backgroundColor?: AnyColor;
  styles?: Style[];
  endless?: boolean;
}

export interface ClearStyleOptions {
  color?: boolean;
  backgroundColor?: boolean;
  style?: Style[];
  endless?: boolean;
}
