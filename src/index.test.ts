import { describe, it } from "bun:test";
import betterConsole, { cs, flag, s } from ".";
import { clearStyle } from "./utils/style";

const { w, d } = { w: process.stdout.columns, d: process.stdout.rows };

describe("ts-better-console", () => {
  it("should display json card", () => {
    const obj = { name: "Alice", age: 30, city: "New York" };
    betterConsole.json(obj);
  });

  it("should log messages with different levels", () => {
    betterConsole.log(cs([s("This is a debug message", { color: "cyan" })]));
    betterConsole.warn(
      cs([s("This is a warning message", { color: "yellow" })]),
    );
    betterConsole.error(cs([s("This is an error message", { color: "red" })]));
    betterConsole.info(
      cs([s("This is an info message", { color: "magenta" })]),
    );
  });

  it("should marked with flag", () => {
    betterConsole.log(flag("warn"), "Hello, World!");
  });

  it("should display simple short json card", () => {
    const obj = { name: "Bob", age: 25, city: "Los Angeles" };
    betterConsole.json(obj);
  });

  it("should display short json card", () => {
    const obj = { name: "Bob", age: 25, city: "Los Angeles" };
    betterConsole.json(obj, "auto", {
      title: { content: "User Info" },
      body: { color: "blue" },
      borderStyle: { color: "gray", styles: ["italic"] },
    });
  });

  it("should display long json card", () => {
    const obj = {
      name: "Alice",
      age: 30,
      city: "New York",
      hobbies: ["reading", "traveling", "coding"],
      education: {
        degree: "Bachelor's",
        major: "Computer Science",
        university: "Example University",
      },
      something_long:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
    betterConsole.json(obj, "auto", {
      title: {
        content: "userinfo.json",
        style: {
          backgroundColor: "white",
          color: "black",
        },
      },
      body: {
        color: "gray",
        styles: ["italic"],
      },
      borderStyle: {
        color: "gray",
        styles: ["italic"],
      },
    });
  });
});
