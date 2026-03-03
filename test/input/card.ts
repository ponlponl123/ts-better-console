import { Input } from "../../src";

const input = new Input({
  label: "Type something",
  type: "text",
  defaultValue: "Hello, World!",
});
const value = await input.prompt();
console.log(`You entered: "${value}"`);
