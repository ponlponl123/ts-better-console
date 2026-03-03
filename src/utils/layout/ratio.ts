import type { Ratio } from "../../types";

function ratio(a: number, b: Ratio): number {
  if (b === "full") return a;
  const [numerator, denominator] = b.split("/").map(Number) as [number, number];
  return Math.round((a * numerator) / denominator);
}

export { ratio };
