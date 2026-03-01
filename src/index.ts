import { createCard, type cardOptions, type cardWidth } from "./card";
import { cs } from "./utils/line";
import { s } from "./utils/style";

class betterConsole {
  static json(
    obj: any,
    width: cardWidth = "auto",
    cardOptions: cardOptions = {
      borderStyle: { color: "gray", styles: ["italic"] },
    },
  ) {
    console.log(
      createCard(cs([JSON.stringify(obj, null, 2)]), width, cardOptions),
    );
  }

  static log(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, {}) : arg,
    );
    console.log(...styledArgs);
  }

  static warn(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, { color: "yellow" }) : arg,
    );
    console.warn(...styledArgs);
  }

  static error(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, { color: "red" }) : arg,
    );
    console.error(...styledArgs);
  }

  static info(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, { color: "cyan" }) : arg,
    );
    console.info(...styledArgs);
  }

  static debug(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, { color: "magenta" }) : arg,
    );
    console.debug(...styledArgs);
  }

  static skip() {
    process.stdout.write("\n");
  }

  static clearLine() {
    process.stdout.write("\r\x1b[K");
  }

  static clear() {
    console.clear();
  }
}

export default betterConsole;

// types
export * from "./types/button";
export * from "./types/card";
export * from "./types/line";
export * from "./types/menu";
export * from "./types/progress";
export * from "./types/spinner";
export * from "./types/style";
// utils
export * from "./utils/line";
export * from "./utils/spinner";
export * from "./utils/style";
export * from "./utils/terminal";
// components
export * from "./card";
export * from "./link";
export * from "./progress";
export * from "./button";
export * from "./menu";
