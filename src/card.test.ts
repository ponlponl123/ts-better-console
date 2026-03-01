import { describe, it } from "bun:test";
import betterConsole from ".";
import { createCard } from "./card";

describe("ts-better-console", () => {
  it("should display a card with title and content", () => {
    betterConsole.log(
      createCard("This is the content of the card.", "auto", {
        title: { content: "Card Title" },
      }),
    );
  });

  it("should display a card with title, content, and footer", () => {
    betterConsole.log(
      createCard("This is the content of the card.", "auto", {
        title: { content: "Card Title" },
        footer: { content: "Card Footer" },
      }),
    );
  });

  it("should display a card with content and footer", () => {
    betterConsole.log(
      createCard("This is the content of the card.", "auto", {
        footer: { content: "Card Footer" },
      }),
    );
  });

  it("should display a card with content only", () => {
    betterConsole.log(createCard("This is the content of the card.", "auto"));
  });

  it("should handle long content in the card", () => {
    const longContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    betterConsole.log(
      createCard(longContent, "auto", {
        title: { content: "Long Content Card" },
        footer: { content: "Card Footer" },
      }),
    );
  });
});
