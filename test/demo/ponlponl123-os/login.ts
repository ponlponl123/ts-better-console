import { prompt } from "../../../src";

const simulateLoginPrompt = async () => {
  const username = await prompt("ponlponl123-os login: ", "text");

  const password = await prompt(
    `${username}@ponlponl123-os's password: `,
    "password",
  );

  if (username === "ponlponl123" && password === "admin1234") {
    return true;
  } else {
    return false;
  }
};

async function login(): Promise<boolean> {
  return new Promise(async (resolve) => {
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      const success = await simulateLoginPrompt();
      if (success) {
        resolve(true);
        return;
      } else {
        attempts++;
        if (attempts < maxAttempts) {
          console.log(
            `Login incorrect. You have ${maxAttempts - attempts} attempt(s) left.\n`,
          );
        } else {
          console.log("Login incorrect. No more attempts left.\n");
          resolve(false);
        }
      }
    }
  });
}

async function main() {
  await new Promise(async (resolve) => {
    const loginSuccess = await login();
    if (loginSuccess) {
      console.log("\nLogin successful!\n");
    } else {
      console.log("\nLogin failed. Please reboot the system.\n");
      await new Promise(() => {
        setInterval(() => {}, 1 << 30); // Keep alive indefinitely
      });
    }
    resolve(null);
  });
}

if (require.main === module) {
  main();
}

export { main };
