import { prompt, s } from "../../src";

async function main() {
  const name = await prompt(
    s("Enter your name: ", { color: "cyan", styles: ["bold"] }),
    "password",
  );
  console.log(`Hello, ${name}!`);
}

main();
