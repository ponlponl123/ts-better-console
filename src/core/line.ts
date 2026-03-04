import type { DebugLevel } from "../types/line.types";

const debugLevels: Record<DebugLevel, string> = {
  debug: "\x1b[36mDEBUG\x1b[0m",
  info: "\x1b[34mINFO\x1b[0m",
  warn: "\x1b[33mWARN\x1b[0m",
  error: "\x1b[31mERROR\x1b[0m",
};

/**
 * Adds a timestamp prefix to your log output. Useful for scripts where you
 * want to know when something happened without reaching for a full logger.
 *
 * @param date - Include the date part (YYYY-MM-DD). Defaults to `true`.
 * @param args - Whatever you want to log after the timestamp.
 *
 * @example
 * ```ts
 * console.log(ts());               // [2025-01-01 - 12:34:56]
 * console.log(ts(false, "hello")); // [12:34:56] hello
 * ```
 */
// timestamped
function ts(date: boolean = true, ...args: any[]): string {
  const now = new Date();
  const dateStr = date
    ? `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
    : "";
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  return cs([
    cs(["[", date ? dateStr + " - " : "", `${h}:${m}:${s}`, "]"], false),
    ...args,
  ]);
}

/**
 * Prefixes your message with a color-coded debug level badge like `[INFO]` or `[ERROR]`.
 * Great for logging systems where you want to scan the level at a glance.
 *
 * Aliased as `fg` in the main export.
 *
 * @example
 * ```ts
 * console.log(flag("warn", "disk space low"));
 * // [WARN] disk space low
 * ```
 */
// debug level
function flag(level: DebugLevel, ...args: any[]): string {
  return cs([cs(["[", debugLevels[level], "]"], false), ...args]);
}

/**
 * Combines `ts()` and `flag()` into one call — you get both the timestamp
 * and the level badge in a single line. Basically `ts()` but with a flag.
 *
 * Aliased as `tsfg` in the main export.
 *
 * @example
 * ```ts
 * console.log(tsflag("error", true, "something broke"));
 * // [2025-01-01 - 12:34:56] [ERROR] something broke
 * ```
 */
// timestamped and debug level
function tsflag(
  level: DebugLevel,
  date: boolean = true,
  ...args: any[]
): string {
  return ts(date, flag(level, ...args));
}

/**
 * Joins an array of strings with spaces (or a custom separator).
 * Think of it as a friendlier `Array.join()` that defaults to a space,
 * or pass `false` to join with nothing at all.
 *
 * Aliased as `cs` in the main export.
 *
 * @example
 * ```ts
 * cs(["hello", "world"]);          // "hello world"
 * cs(["\x1b[31m", "text"], false); // "\x1b[31mtext" (no space)
 * cs(["a", "b", "c"], "-");        // "a-b-c"
 * ```
 */
// combine strings
function cs(str: string[], join?: string | false): string {
  return str.join(join === false ? "" : join || " ");
}

/**
 * Wraps a string into an array of lines, each no longer than `width` characters.
 * Word-aware — it won't chop words in half.
 *
 * @example
 * ```ts
 * toMaxLineLength("hello world foo bar", 10);
 * // ["hello", "world foo", "bar"]
 * ```
 */
function toMaxLineLength(str: string, width: number): string[] {
  const lines: string[] = [];
  let currentLine = "";
  for (const word of str.split(" ")) {
    if ((currentLine + word).length > width) {
      lines.push(currentLine.trim());
      currentLine = "";
    }
    currentLine += word + " ";
  }
  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }
  return lines;
}

/**
 * Same as `toMaxLineLength` but for multiple lines at once.
 * Runs each line through word-wrapping and flattens the results.
 */
function toMaxLinesLength(lines: string[], width: number): string[] {
  return lines.flatMap((line) => toMaxLineLength(line, width));
}

export { cs, ts, flag, tsflag, toMaxLineLength, toMaxLinesLength };
