import type { Alignment, Ratio } from "../../types";
import type { StyleOptions } from "../../types/style.types";

type CardWidth = number | Ratio | "auto";
type BorderStyle =
  | "single"
  | "double"
  | "round"
  | "bold"
  | "singleDouble"
  | "doubleSingle";
type SectionOptions = {
  content: string;
  align?: Alignment;
  style?: StyleOptions;
};
type BodyOptions = {
  align?: Alignment;
  style?: StyleOptions;
};
interface CardOptions {
  title?: SectionOptions;
  body?: BodyOptions;
  align?: Alignment;
  footer?: SectionOptions;
  border?: BorderOptions;
}
interface BorderOptions {
  style?: StyleOptions;
  symbols?: BorderSymbolStyle;
}
type BorderSymbolStyle = {
  style?: BorderStyle;
  custom?: Partial<CardBorderSymbols>;
};
type CardBorderSymbols = {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
  devideLeft: string;
  devideRight: string;
  horizontal: string;
  vertical: string;
};

export type {
  CardWidth,
  CardOptions,
  SectionOptions,
  BodyOptions,
  BorderStyle,
  BorderOptions,
  BorderSymbolStyle,
  CardBorderSymbols,
};
