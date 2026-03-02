import { describe, it, expect } from "bun:test";
import { link } from "./link";

describe("link() — OSC 8 hyperlink", () => {
  const ESC = "\u001b";
  const BEL = "\u0007";

  it("should wrap text in an OSC 8 hyperlink sequence", () => {
    const result = link("Click me", "https://example.com");
    expect(result).toContain("Click me");
    expect(result).toContain("https://example.com");
  });

  it("should start with the OSC 8 opening sequence", () => {
    const result = link("text", "https://url.dev");
    expect(result).toStartWith(`${ESC}]8;;`);
  });

  it("should end with the OSC 8 closing sequence", () => {
    const result = link("text", "https://url.dev");
    expect(result).toEndWith(`${ESC}]8;;${BEL}`);
  });

  it("should embed the URL before BEL, then the text, then close", () => {
    const result = link("label", "https://go.dev");
    // Expected format: \e]8;;URL\aTEXT\e]8;;\a
    const expected = `${ESC}]8;;https://go.dev${BEL}label${ESC}]8;;${BEL}`;
    expect(result).toBe(expected);
  });

  it("should handle empty text", () => {
    const result = link("", "https://example.com");
    expect(result).toContain("https://example.com");
    // Text portion is empty but structure should be intact
    expect(result).toBe(`${ESC}]8;;https://example.com${BEL}${ESC}]8;;${BEL}`);
  });

  it("should handle non-http URLs", () => {
    const result = link("file", "file:///tmp/test.txt");
    expect(result).toContain("file:///tmp/test.txt");
  });

  it("should handle URLs with query params and fragments", () => {
    const url = "https://example.com/path?q=1&v=2#section";
    const result = link("complex", url);
    expect(result).toContain(url);
  });
});
