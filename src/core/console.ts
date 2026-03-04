import { Card } from "../components/card";
import { cs } from "./line";
import { s } from "./style/style";
import type { CardOptions, CardWidth } from "../components/card/card.types";
import { ERASE_TO_EOL } from "./ansi";

/**
 * A drop-in replacement for the built-in `console` with a bit more personality.
 *
 * Every method works just like the regular `console`, except strings get
 * color-coded automatically so your terminal output is actually readable.
 *
 * @example
 * ```ts
 * import bc from "ts-better-console";
 *
 * bc.log("hello world");          // plain
 * bc.warn("something smells off");  // yellow
 * bc.error("everything is fine");   // red
 * bc.json({ key: "value" });         // pretty-printed in a card
 * ```
 */
class betterConsole {
  /**
   * Pretty-prints a JavaScript object as formatted JSON inside a card box.
   * Great for quickly inspecting objects without squinting at one long line.
   */
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

  /** Same as `console.log` — strings just come out plain white so they don't look totally boring. */
  static log(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, {}) : arg,
    );
    console.log(...styledArgs);
  }

  /** Same as `console.warn`, but strings are yellow so warnings actually stand out. */
  static warn(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, { color: "yellow" }) : arg,
    );
    console.warn(...styledArgs);
  }

  /** Same as `console.error`, but strings go red. Hard to miss. */
  static error(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, { color: "red" }) : arg,
    );
    console.error(...styledArgs);
  }

  /** Same as `console.info`, strings are cyan — calm and informative. */
  static info(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, { color: "cyan" }) : arg,
    );
    console.info(...styledArgs);
  }

  /** Same as `console.debug`, strings go magenta so debug noise is easy to spot (and ignore). */
  static debug(...args: any[]) {
    const styledArgs = args.map((arg) =>
      typeof arg === "string" ? s(arg, { color: "magenta" }) : arg,
    );
    console.debug(...styledArgs);
  }

  /** Prints a blank line. Useful when you just want a bit of breathing room between outputs. */
  static skip() {
    process.stdout.write("\n");
  }

  /** Erases the current line in the terminal. Handy for redrawing progress or status in place. */
  static clearLine() {
    process.stdout.write("\r" + ERASE_TO_EOL);
  }

  /** Clears the entire terminal screen. Just like `console.clear()`. */
  static clear() {
    console.clear();
  }
}

export default betterConsole;
