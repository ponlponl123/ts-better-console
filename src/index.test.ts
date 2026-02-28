import { describe, it } from "bun:test";
import betterconsole, { cs, s } from ".";
import { clearStyle } from "./utils/style";

const { w, d } = { w: process.stdout.columns, d: process.stdout.rows };

describe("ts-better-console", () => {
  it("should display json card", () => {
    const obj = { name: "Alice", age: 30, city: "New York" };
    betterconsole.json(obj);
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
    betterconsole.json(obj, "auto", {
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
