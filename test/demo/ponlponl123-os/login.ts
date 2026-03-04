import { prompt } from "../../../src";

async function login(): Promise<boolean> {
  for (let attempts = 0; attempts < 3; attempts++) {
    const username = await prompt("ponlponl123-os login: ", "text");
    const password = await prompt(
      `${username}@ponlponl123-os's password: `,
      "password",
    );

    if (
      username === "ponlponl123" &&
      password === "onceicancodingforadaywithoutcoffee!"
    ) {
      return true;
    }
    if (attempts < 2) {
      console.log(
        `Login incorrect. You have ${2 - attempts} attempt(s) left.\n`,
      );
    } else {
      console.log("Login incorrect. No more attempts left.\n");
    }
  }
  return false;
}

async function main() {
  const success = await login();
  console.log(
    success
      ? "\nLogin successful!\n"
      : "\nLogin failed. Please reboot the system.\n",
  );
  if (!success) {
    await new Promise(() => setInterval(() => {}, 1 << 30));
  }
}

if (require.main === module) main();

export { main };
