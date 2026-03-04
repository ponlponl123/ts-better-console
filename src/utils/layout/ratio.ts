import type { Ratio } from "../../types";

/**
 * Calculates a fraction of a total number based on a ratio string like `"1/2"`,
 * `"2/3"`, or `"full"`. Handy for figuring out widths relative to terminal size.
 *
 * @example
 * ```ts
 * ratio(80, "1/2");  // 40
 * ratio(80, "2/3");  // 53
 * ratio(80, "full"); // 80
 * ```
 */
function ratio(a: number, b: Ratio): number {
  if (b === "full") return a;
  const [numerator, denominator] = b.split("/").map(Number) as [number, number];
  return Math.round((a * numerator) / denominator);
}

export { ratio };
