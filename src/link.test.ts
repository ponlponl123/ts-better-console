import { describe, it } from "bun:test";
import betterConsole from ".";
import { link } from "./link";

describe("ts-better-console", () => {
  it("should display a link", () => {
    betterConsole.log(link("Example Website", "https://www.example.com"));
  });

  it("should display a link with custom text", () => {
    betterConsole.log(link("Visit Example", "https://www.example.com"));
  });

  it("should handle empty link text", () => {
    betterConsole.log(link("", "https://www.example.com"));
  });

  it("should handle invalid URLs gracefully", () => {
    betterConsole.log(link("Invalid URL", "invalid-url"));
  });
});
