import type { StyleOptions } from "../../types/style.types";

type cardWidth = number | "auto";
type sectionOptions = { content: string; style?: StyleOptions };
type cardOptions = {
  title?: sectionOptions;
  body?: StyleOptions;
  footer?: sectionOptions;
  borderStyle?: StyleOptions;
};

export type { cardWidth, cardOptions, sectionOptions };
