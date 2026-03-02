import betterConsole, { Color, cs, s } from "../dist";

betterConsole.log(s("This is a styled message!", { color: "cyan" }));

const colors: Color[] = ["red", "yellow", "green", "cyan", "blue", "magenta"];

betterConsole.log(
  cs(
    colors.map((c) => s("███", { color: c })),
    false,
  ),
);

betterConsole.log(
  cs(
    colors.map((c) => s(c[0].toUpperCase().repeat(3), { color: c })),
    false,
  ),
);
