import { describe, it, expect } from "bun:test";
import { Card } from "./card";

// Strip ANSI codes for easier assertions
const stripAnsi = (str: string) => str.replace(/\x1b\[[0-9;]*m/g, "");

describe("Card", () => {
  // ── Basic rendering ────────────────────────────────────────

  it("should render a card with top and bottom borders", () => {
    const card = new Card("hello", 20).render();
    const raw = stripAnsi(card);
    expect(raw).toContain("┌");
    expect(raw).toContain("┘");
    expect(raw).toContain("└");
    expect(raw).toContain("┐");
  });

  it("should contain the content text", () => {
    const card = new Card("some content", 30).render();
    expect(stripAnsi(card)).toContain("some content");
  });

  it("should render with the correct border width", () => {
    const width = 24;
    const card = stripAnsi(new Card("x", width).render());
    const topLine = card.split("\n")[0]!;
    // top border = ┌ + ─×width + ┐ = width + 2 chars
    expect(topLine.length).toBe(width + 2);
  });

  // ── Auto width ─────────────────────────────────────────────

  it("should auto-size width to fit content", () => {
    const content = "short";
    const card = stripAnsi(new Card(content, "auto").render());
    const topLine = card.split("\n")[0]!;
    // auto width = max(line lengths) + 2, minimum 12
    // border row = ┌ + ─×width + ┐ = width + 2 chars
    const expectedWidth = Math.max(content.length + 2, 12);
    expect(topLine.length).toBe(expectedWidth + 2);
  });

  // ── Minimum width ─────────────────────────────────────────

  it("should enforce a minimum width of 12", () => {
    const card = stripAnsi(new Card("x", 5).render());
    const topLine = card.split("\n")[0]!;
    expect(topLine.length).toBe(12 + 2); // min 12 + 2 corners
  });

  // ── Title ──────────────────────────────────────────────────

  it("should render a title section when provided", () => {
    const card = stripAnsi(
      new Card("body", 30, { title: { content: "Title" } }).render(),
    );
    expect(card).toContain("Title");
    expect(card).toContain("├"); // divider below title
    expect(card).toContain("┤");
  });

  // ── Footer ─────────────────────────────────────────────────

  it("should render a footer section when provided", () => {
    const card = stripAnsi(
      new Card("body", 30, { footer: { content: "Footer" } }).render(),
    );
    expect(card).toContain("Footer");
    expect(card).toContain("├"); // divider above footer
  });

  // ── Title + Footer ─────────────────────────────────────────

  it("should render both title and footer", () => {
    const card = stripAnsi(
      new Card("body", 30, {
        title: { content: "Top" },
        footer: { content: "Bottom" },
      }).render(),
    );
    expect(card).toContain("Top");
    expect(card).toContain("Bottom");
    // Should have 2 divider rows (├...┤)
    const dividers = card.split("\n").filter((l) => l.includes("├"));
    expect(dividers.length).toBe(2);
  });

  // ── Styling options ────────────────────────────────────────

  it("should apply border style ANSI codes", () => {
    const card = new Card("text", 20, {
      border: {
        style: { color: "gray", styles: ["italic"] },
      },
    }).render();
    expect(card).toContain("\x1b[90m"); // gray
    expect(card).toContain("\x1b[3m"); // italic
  });

  it("should apply body style ANSI codes", () => {
    const card = new Card("text", 20, {
      body: { style: { color: "blue" } },
    }).render();
    expect(card).toContain("\x1b[34m"); // blue
  });

  it("should apply title style ANSI codes", () => {
    const card = new Card("text", 20, {
      title: { content: "Styled Title", style: { color: "red" } },
    }).render();
    expect(card).toContain("\x1b[31m"); // red
    expect(stripAnsi(card)).toContain("Styled Title");
  });

  // ── Multi-line / wrapping ──────────────────────────────────

  it("should handle multi-line content", () => {
    const card = stripAnsi(new Card("line1\nline2\nline3", 20).render());
    expect(card).toContain("line1");
    expect(card).toContain("line2");
    expect(card).toContain("line3");
  });

  it("should word-wrap content that exceeds the width", () => {
    const long = "word ".repeat(20).trim();
    const card = stripAnsi(new Card(long, 20).render());
    const contentLines = card
      .split("\n")
      .filter((l) => l.startsWith("│") && !l.includes("├") && !l.includes("┤"));
    expect(contentLines.length).toBeGreaterThan(1);
  });

  // ── No options ─────────────────────────────────────────────

  it("should render cleanly with no options", () => {
    const card = stripAnsi(new Card("bare").render());
    expect(card).toContain("bare");
    expect(card).toContain("┌");
    expect(card).toContain("└");
  });
});
