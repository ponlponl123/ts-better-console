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

export type UnSpecifiedColor = Color | "inherit";

export type Style = "bold" | "italic" | "underline" | "strikethrough";

export type StyleOptions = {
  color?: Color;
  backgroundColor?: Color;
  styles?: Style[];
  endless?: boolean;
};
