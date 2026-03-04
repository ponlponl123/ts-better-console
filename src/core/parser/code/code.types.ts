import type { UnSpecifiedColor } from "../../../types";

type SyntaxType =
  | "function"
  | "method"
  | "key"
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "undefined"
  | "symbol"
  | "operator"
  | "punctuation";

type Color = {
  function: UnSpecifiedColor;
  method: UnSpecifiedColor;
  key: UnSpecifiedColor;
  string: UnSpecifiedColor;
  number: UnSpecifiedColor;
  boolean: UnSpecifiedColor;
  null: UnSpecifiedColor;
  undefined: UnSpecifiedColor;
  symbol: UnSpecifiedColor;
  operator: UnSpecifiedColor;
  punctuation: UnSpecifiedColor;
};

interface CodeParserOptions {
  colors?: Partial<Color>;
}

export type { SyntaxType, Color, CodeParserOptions };
