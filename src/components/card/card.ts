import { getProcessSize } from "../../core/terminal";
import { cs, toMaxLinesLength } from "../../core/line";
import { applyUndefinedStyles } from "../../core/style/style";
import type { CardWidth, CardOptions, CardBorderSymbols } from "./card.types";
import type { Alignment, Ratio, StyleOptions } from "../../types";
import { ratio } from "../../utils";

const defaultBorderSymbols: CardBorderSymbols = {
  topLeft: "┌",
  topRight: "┐",
  bottomLeft: "└",
  bottomRight: "┘",
  devideLeft: "├",
  devideRight: "┤",
  horizontal: "─",
  vertical: "│",
};

const borderStyleMap: Record<string, CardBorderSymbols> = {
  single: defaultBorderSymbols,
  double: {
    topLeft: "╔",
    topRight: "╗",
    bottomLeft: "╚",
    bottomRight: "╝",
    devideLeft: "╟",
    devideRight: "╢",
    horizontal: "═",
    vertical: "║",
  },
  round: {
    topLeft: "╭",
    topRight: "╮",
    bottomLeft: "╰",
    bottomRight: "╯",
    devideLeft: "├",
    devideRight: "┤",
    horizontal: "─",
    vertical: "│",
  },
  bold: {
    topLeft: "┏",
    topRight: "┓",
    bottomLeft: "┗",
    bottomRight: "┛",
    devideLeft: "┣",
    devideRight: "┫",
    horizontal: "━",
    vertical: "┃",
  },
  singleDouble: {
    topLeft: "╒",
    topRight: "╕",
    bottomLeft: "╘",
    bottomRight: "╛",
    devideLeft: "╞",
    devideRight: "╡",
    horizontal: "═",
    vertical: "│",
  },
  doubleSingle: {
    topLeft: "╓",
    topRight: "╖",
    bottomLeft: "╙",
    bottomRight: "╜",
    devideLeft: "╟",
    devideRight: "╢",
    horizontal: "─",
    vertical: "║",
  },
};

/**
 * Draws a text box with a decorative border right in your terminal.
 *
 * You give it some content and optionally a width, and it handles wrapping,
 * alignment, padding, and border style. Good for highlighting output,
 * displaying help text, or just making things look less sad.
 *
 * @example
 * ```ts
 * const card = new Card("hello world", "1/2", { border: { symbols: { style: "round" } } });
 * console.log(card.render());
 * ```
 */
class Card {
  private width: number = 50;
  private contentLines: string[];
  private leftMargin: number = 0;
  private symbols: CardBorderSymbols = defaultBorderSymbols;
  constructor(
    content: string,
    width: CardWidth = 50,
    private options?: CardOptions,
  ) {
    this.contentLines = content.split("\n");
    const terminalWidth = getProcessSize().width.full;
    if (typeof width === "string") {
      if (width === "auto") {
        this.width = Math.max(
          Math.max(...this.contentLines.map((line) => line.length)) + 2,
          12,
        );
      } else {
        this.width = ratio(terminalWidth, width);
      }
    } else if (typeof width === "number") {
      if (width < 12) {
        this.width = 12;
      } else if (width > terminalWidth) {
        this.width = terminalWidth - 4;
      } else {
        this.width = width;
      }
    } else {
      this.width = 50;
    }
    if (this.options?.align !== "left" && this.options?.align !== undefined) {
      this.leftMargin = terminalWidth - this.width - 4;
      if (this.options?.align === "center") {
        this.leftMargin = Math.floor(this.leftMargin / 2);
      }
    }
    if (this.options?.border?.symbols) {
      if (
        this.options.border.symbols.style &&
        borderStyleMap[this.options.border.symbols.style]
      ) {
        this.symbols =
          borderStyleMap[this.options.border.symbols.style] ||
          defaultBorderSymbols;
      } else if (this.options.border.symbols.custom) {
        this.symbols = {
          ...defaultBorderSymbols,
          ...this.options.border.symbols.custom,
        };
      }
    }
  }

  private renderContent(
    og_content: string,
    align: Alignment = "left",
    style?: StyleOptions,
  ): string {
    if (!og_content && og_content !== "*blank*") return "";
    const content = og_content === "*blank*" ? "" : og_content;
    let paddedTitle: string;
    if (align === "center") {
      const totalPadding = this.width - 4 - content.length;
      const leftPadding = Math.floor(totalPadding / 2);
      const rightPadding = totalPadding - leftPadding;
      paddedTitle =
        " ".repeat(leftPadding) + content + " ".repeat(rightPadding);
    } else if (align === "right") {
      paddedTitle = " ".repeat(this.width - 4 - content.length) + content;
    } else {
      paddedTitle = content.padEnd(this.width - 4);
    }
    return cs([
      applyUndefinedStyles(
        `${" ".repeat(this.leftMargin)}${this.symbols.vertical} `,
        this.options?.border?.style,
      ),
      applyUndefinedStyles(paddedTitle, style),
      applyUndefinedStyles(
        ` ${this.symbols.vertical}`,
        this.options?.border?.style,
      ),
    ]);
  }

  render(): string {
    const parsedContent = toMaxLinesLength(
      this.contentLines,
      this.width - 2,
    ).join("\n");
    const horizontalBorder =
      this.symbols.horizontal?.repeat(this.width) || "─".repeat(this.width);
    const topBorder = applyUndefinedStyles(
      `${" ".repeat(this.leftMargin)}${this.symbols.topLeft}${horizontalBorder}${this.symbols.topRight}\n`,
      this.options?.border?.style,
    );
    const bottomBorder = applyUndefinedStyles(
      `${" ".repeat(this.leftMargin)}${this.symbols.bottomLeft}${horizontalBorder}${this.symbols.bottomRight}`,
      this.options?.border?.style,
    );
    const titleLine = this.renderContent(
      this.options?.title?.content || "",
      this.options?.title?.align,
      this.options?.title?.style,
    );
    const footerLine = this.renderContent(
      this.options?.footer?.content || "",
      this.options?.footer?.align,
      this.options?.footer?.style,
    );
    const paddedContent = parsedContent
      .split("\n")
      .map((line) =>
        this.renderContent(
          line,
          this.options?.body?.align,
          this.options?.body?.style,
        ),
      )
      .join("\n");

    const parts: string[] = [topBorder];

    if (titleLine) {
      parts.push(titleLine);
      parts.push(
        applyUndefinedStyles(
          `\n${" ".repeat(this.leftMargin)}${this.symbols.devideLeft}${this.symbols.horizontal?.repeat(this.width)}${this.symbols.devideRight}\n`,
          this.options?.border?.style,
        ),
      );
    }

    parts.push(paddedContent);

    if (footerLine) {
      parts.push(
        applyUndefinedStyles(
          `\n${" ".repeat(this.leftMargin)}${this.symbols.devideLeft}${this.symbols.horizontal?.repeat(this.width)}${this.symbols.devideRight}\n`,
          this.options?.border?.style,
        ),
      );
      parts.push(footerLine);
    }

    parts.push("\n");

    parts.push(bottomBorder);

    return cs(parts, false);
  }
}

export { Card, borderStyleMap, defaultBorderSymbols };
