import { eightBit } from "../../style/color";
import type { Color } from "./code.types";

const defaultColors: Color = {
  function: "blue",
  method: "yellow",
  key: "cyan",
  string: eightBit(216), // bright orange
  number: "yellow",
  boolean: "magenta",
  null: "red",
  undefined: "red",
  symbol: "blue",
  operator: "foreground",
  punctuation: "foreground",
};

export { defaultColors };
