type color =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray";
type style = "bold" | "italic" | "underline" | "strikethrough";

export type StyleOptions = {
  color?: color;
  backgroundColor?: color;
  styles?: style[];
  endless?: boolean;
};
