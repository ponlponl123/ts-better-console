import { describe, it } from "bun:test";
import betterConsole from "..";
import { cs } from "./line";
import { s } from "./style";
import type { StyleOptions } from "../types/style";

describe("ts-better-console", () => {
  it("should apply styles correctly", async () => {
    const styled: StyleOptions = {
      color: "red",
      backgroundColor: "yellow",
      styles: ["bold", "underline"],
    };
    betterConsole.log(
      cs(
        [
          s("This is a test with styles ", styled),
          s("✨", { ...styled, backgroundColor: "cyan" }),
          s("( ͡° ͜ʖ ͡°)_/¯", styled),
        ],
        false,
      ),
    );
  });

  it("should return rainbow colors", async () => {
    const colors = [
      "red",
      "yellow",
      "green",
      "cyan",
      "blue",
      "magenta",
    ] as const;
    betterConsole.log(
      cs(
        colors.map((color) =>
          s(String(color[0]).toUpperCase().repeat(3), { color }),
        ),
        false,
      ),
    );
  });

  it("should return rainbow background colors", async () => {
    const colors = [
      "red",
      "yellow",
      "green",
      "cyan",
      "blue",
      "magenta",
    ] as const;
    betterConsole.log(
      cs(
        colors.map((color) => s(`   `, { backgroundColor: color })),
        false,
      ),
    );
  });

  it("should return empty string for undefined styles", async () => {
    betterConsole.log(s("No styles", {}));
  });

  it("should handle unknown colors and styles gracefully", async () => {
    betterConsole.log(
      s("Unknown styles", {
        // @ts-expect-error - Testing with invalid values
        color: "unknown",
        // @ts-expect-error - Testing with invalid values
        backgroundColor: "unknown",
        // @ts-expect-error - Testing with invalid values
        styles: ["unknown"],
      }),
    );
  });
});
