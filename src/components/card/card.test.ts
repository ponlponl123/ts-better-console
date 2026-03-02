import { describe, it, expect } from "bun:test";
import { createCard } from "./card";

// Strip ANSI codes for easier assertions
const stripAnsi = (str: string) => str.replace(/\x1b\[[0-9;]*m/g, "");

describe("createCard()", () => {
  // ── Basic rendering ────────────────────────────────────────

  it("should render a card with top and bottom borders", () => {
    const card = createCard("hello", 20);
    const raw = stripAnsi(card);
    expect(raw).toContain("┌");
    expect(raw).toContain("┘");
    expect(raw).toContain("└");
    expect(raw).toContain("┐");
  });

  it("should contain the content text", () => {
    const card = createCard("some content", 30);
    expect(stripAnsi(card)).toContain("some content");
  });

  it("should render with the correct border width", () => {
    const width = 24;
    const card = stripAnsi(createCard("x", width));
    const topLine = card.split("\n")[0]!;
    // top border = ┌ + ─×width + ┐ = width + 2 chars
    expect(topLine.length).toBe(width + 2);
  });

  // ── Auto width ─────────────────────────────────────────────

  it("should auto-size width to fit content", () => {
    const content = "short";
    const card = stripAnsi(createCard(content, "auto"));
    const topLine = card.split("\n")[0]!;
    // auto width = max(line lengths) + 2, minimum 12
    // border row = ┌ + ─×width + ┐ = width + 2 chars
    const expectedWidth = Math.max(content.length + 2, 12);
    expect(topLine.length).toBe(expectedWidth + 2);
  });

  // ── Minimum width ─────────────────────────────────────────

  it("should enforce a minimum width of 12", () => {
    const card = stripAnsi(createCard("x", 5));
    const topLine = card.split("\n")[0]!;
    expect(topLine.length).toBe(12 + 2); // min 12 + 2 corners
  });

  // ── Title ──────────────────────────────────────────────────

  it("should render a title section when provided", () => {
    const card = stripAnsi(
      createCard("body", 30, { title: { content: "Title" } }),
    );
    expect(card).toContain("Title");
    expect(card).toContain("├"); // divider below title
    expect(card).toContain("┤");
  });

  // ── Footer ─────────────────────────────────────────────────

  it("should render a footer section when provided", () => {
    const card = stripAnsi(
      createCard("body", 30, { footer: { content: "Footer" } }),
    );
    expect(card).toContain("Footer");
    expect(card).toContain("├"); // divider above footer
  });

  // ── Title + Footer ─────────────────────────────────────────

  it("should render both title and footer", () => {
    const card = stripAnsi(
      createCard("body", 30, {
        title: { content: "Top" },
        footer: { content: "Bottom" },
      }),
    );
    expect(card).toContain("Top");
    expect(card).toContain("Bottom");
    // Should have 2 divider rows (├...┤)
    const dividers = card.split("\n").filter((l) => l.includes("├"));
    expect(dividers.length).toBe(2);
  });

  // ── Styling options ────────────────────────────────────────

  it("should apply border style ANSI codes", () => {
    const card = createCard("text", 20, {
      borderStyle: { color: "gray", styles: ["italic"] },
    });
    expect(card).toContain("\x1b[90m"); // gray
    expect(card).toContain("\x1b[3m"); // italic
  });

  it("should apply body style ANSI codes", () => {
    const card = createCard("text", 20, {
      body: { color: "blue" },
    });
    expect(card).toContain("\x1b[34m"); // blue
  });

  it("should apply title style ANSI codes", () => {
    const card = createCard("text", 20, {
      title: { content: "Styled Title", style: { color: "red" } },
    });
    expect(card).toContain("\x1b[31m"); // red
    expect(stripAnsi(card)).toContain("Styled Title");
  });

  // ── Multi-line / wrapping ──────────────────────────────────

  it("should handle multi-line content", () => {
    const card = stripAnsi(createCard("line1\nline2\nline3", 20));
    expect(card).toContain("line1");
    expect(card).toContain("line2");
    expect(card).toContain("line3");
  });

  it("should word-wrap content that exceeds the width", () => {
    const long = "word ".repeat(20).trim();
    const card = stripAnsi(createCard(long, 20));
    const contentLines = card
      .split("\n")
      .filter((l) => l.startsWith("│") && !l.includes("├") && !l.includes("┤"));
    expect(contentLines.length).toBeGreaterThan(1);
  });

  // ── No options ─────────────────────────────────────────────

  it("should render cleanly with no options", () => {
    const card = stripAnsi(createCard("bare"));
    expect(card).toContain("bare");
    expect(card).toContain("┌");
    expect(card).toContain("└");
  });
});
