import type { StyleOptions } from "./style";

type cardWidth = number | "auto";
type sectionOptions = { content: string; style?: StyleOptions };
type cardOptions = {
  title?: sectionOptions;
  body?: StyleOptions;
  footer?: sectionOptions;
  borderStyle?: StyleOptions;
};

export type { cardWidth, cardOptions };
