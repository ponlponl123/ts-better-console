import { prompt, s } from "../../src";

async function main() {
  const name = await prompt(
    s("Enter your name: ", { color: "cyan", styles: ["bold"] }),
  );
  console.log(`Hello, ${name}!`);
}

main();
