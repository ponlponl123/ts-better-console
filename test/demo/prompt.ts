import { prompt } from "../../src";

const name = await prompt("What's your name? ");
console.log(`Hello, ${name}!`);

// Password input
const secret = await prompt("Password: ", "password");

// Shell-like prompt with ↑/↓ history navigation
const cmd = await prompt("$ ", "text", true);
