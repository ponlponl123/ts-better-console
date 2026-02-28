import { describe, it } from "bun:test";
import betterconsole from ".";
import { link } from "./link";

describe("ts-better-console", () => {
  it("should display a link", () => {
    betterconsole.log(link("Example Website", "https://www.example.com"));
  });

  it("should display a link with custom text", () => {
    betterconsole.log(link("Visit Example", "https://www.example.com"));
  });

  it("should handle empty link text", () => {
    betterconsole.log(link("", "https://www.example.com"));
  });

  it("should handle invalid URLs gracefully", () => {
    betterconsole.log(link("Invalid URL", "invalid-url"));
  });
});
