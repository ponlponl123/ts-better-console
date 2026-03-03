import { Card } from "../components/card";
import { cs } from "./line";
import { s } from "./style";
import type { CardOptions, CardWidth } from "../components/card/card.types";
import { ERASE_TO_EOL } from "./ansi";

class betterConsole {
  static json(
    obj: any,
    width: CardWidth = "auto",
    CardOptions: CardOptions = {
      border: {
        style: { color: "gray", styles: ["italic"] },
      },
    },
  ) {
    console.log(
      new Card(cs([JSON.stringify(obj, null, 2)]), width, CardOptions).render(),
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
    process.stdout.write("\r" + ERASE_TO_EOL);
  }

  static clear() {
    console.clear();
  }
}

export default betterConsole;
