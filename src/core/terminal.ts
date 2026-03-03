import type { TerminalDimensions } from "../types/terminal.types";

function getProcessSize(): TerminalDimensions {
  const { stdout } = process;
  return {
    width: {
      og: stdout.columns,
      half: Math.floor(stdout.columns / 2),
      third: Math.floor(stdout.columns / 3),
      twoThirds: Math.floor((stdout.columns * 2) / 3),
      full: stdout.columns,
    },
    height: {
      og: stdout.rows,
      half: Math.floor(stdout.rows / 2),
      third: Math.floor(stdout.rows / 3),
      twoThirds: Math.floor((stdout.rows * 2) / 3),
      full: stdout.rows,
    },
  };
}

const size: TerminalDimensions = {
  width: {
    og: process.stdout.columns,
    half: Math.floor(process.stdout.columns / 2),
    third: Math.floor(process.stdout.columns / 3),
    twoThirds: Math.floor((process.stdout.columns * 2) / 3),
    full: process.stdout.columns,
  },
  height: {
    og: process.stdout.rows,
    half: Math.floor(process.stdout.rows / 2),
    third: Math.floor(process.stdout.rows / 3),
    twoThirds: Math.floor((process.stdout.rows * 2) / 3),
    full: process.stdout.rows,
  },
};

export { getProcessSize, size };
