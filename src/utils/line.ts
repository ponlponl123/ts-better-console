import type { DebugLevel } from "../types/line";

const debugLevels: Record<DebugLevel, string> = {
  debug: "\x1b[36mDEBUG\x1b[0m",
  info: "\x1b[34mINFO\x1b[0m",
  warn: "\x1b[33mWARN\x1b[0m",
  error: "\x1b[31mERROR\x1b[0m",
};

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

// debug level
function dl(level: DebugLevel, ...args: any[]): string {
  return cs([cs(["[", debugLevels[level], "]"], false), ...args]);
}

// timestamped and debug level
function tsdl(level: DebugLevel, date: boolean = true, ...args: any[]): string {
  return ts(date, dl(level, ...args));
}

// combine strings
function cs(str: string[], join?: string | false): string {
  return str.join(join === false ? "" : join || " ");
}

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

function toMaxLinesLength(lines: string[], width: number): string[] {
  return lines.flatMap((line) => toMaxLineLength(line, width));
}

export { cs, ts, dl, tsdl, toMaxLineLength, toMaxLinesLength };
