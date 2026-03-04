import { Input } from "../../src";

const input = new Input({
  label: "Enter your name",
  width: 40,
  styles: {
    label: { color: "cyan", styles: ["bold"] },
  },
});

const value = await input.prompt();
console.log("You entered:", value);
