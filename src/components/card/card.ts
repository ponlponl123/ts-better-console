import { getProcessSize } from "../../core/terminal";
import { cs, toMaxLinesLength } from "../../core/line";
import { applyUndefinedStyles } from "../../core/style";
import type { cardWidth, cardOptions } from "./card.types";

function createCard(
  content: string,
  width: cardWidth = 50,
  options?: cardOptions,
): string {
  const contentLines = content.split("\n");
  const terminalWidth = getProcessSize().width;
  if (width === "auto") {
    width = Math.max(...contentLines.map((line) => line.length)) + 2;
  }
  if (width < 12) {
    width = 12;
  }
  if (width > terminalWidth) {
    width = terminalWidth - 4;
  }
  const parsedContent = toMaxLinesLength(contentLines, width - 2).join("\n");
  const horizontalBorder = "─".repeat(width);
  const topBorder = applyUndefinedStyles(
    `┌${horizontalBorder}┐\n`,
    options?.borderStyle,
  );
  const bottomBorder = applyUndefinedStyles(
    `└${horizontalBorder}┘`,
    options?.borderStyle,
  );
  const titleLine = cs([
    options?.title
      ? applyUndefinedStyles("│ ", options?.borderStyle) +
        applyUndefinedStyles(
          options?.title?.content.padEnd(width - 2),
          options?.title?.style,
        ) +
        applyUndefinedStyles(" │\n", options?.borderStyle)
      : "",
  ]);
  const footerLine = cs([
    options?.footer
      ? applyUndefinedStyles("│ ", options?.borderStyle) +
        applyUndefinedStyles(
          options?.footer?.content.padEnd(width - 2),
          options?.footer?.style,
        ) +
        applyUndefinedStyles(" │\n", options?.borderStyle)
      : "",
  ]);
  const paddedContent = parsedContent
    .split("\n")
    .map((line) =>
      cs(
        [
          applyUndefinedStyles("│ ", options?.borderStyle),
          applyUndefinedStyles(line.padEnd(width - 2), options?.body),
          applyUndefinedStyles(" │", options?.borderStyle),
        ],
        false,
      ),
    )
    .join("\n");

  const parts: string[] = [topBorder];

  if (titleLine) {
    parts.push(titleLine);
    parts.push(
      applyUndefinedStyles(`├${"─".repeat(width)}┤\n`, options?.borderStyle),
    );
  }

  parts.push(paddedContent);

  if (footerLine) {
    parts.push(
      applyUndefinedStyles(`\n├${"─".repeat(width)}┤\n`, options?.borderStyle),
    );
    parts.push(footerLine);
  } else {
    parts.push("\n");
  }

  parts.push(bottomBorder);

  return cs(parts, false);
}

export { createCard };
