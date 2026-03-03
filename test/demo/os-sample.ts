import betterConsole, { Card, cs } from "../../src";
import { main as booting, setBootAbort } from "./ponlponl123-os/booting";
import { main as login } from "./ponlponl123-os/login";
import { main as shell, welcomeMessage } from "./ponlponl123-os/shell";
import { main as shutdown, bootInterrupt } from "./ponlponl123-os/shutdown";

betterConsole.clear();
betterConsole.log(
  new Card(
    cs([
      "*blank*\n",
      "*blank*\n",
      "Ponlponl123 OS Simulator\n",
      "*blank*\n",
      "*blank*\n",
      "Experience a realistic Linux boot sequence\n",
      "*blank*\n",
      "*blank*\n",
    ]),
    "2/3",
    {
      body: { align: "center", style: { color: "green", styles: ["bold"] } },
      border: {
        style: { color: "cyan" },
        symbols: {
          style: "double",
        },
      },
    },
  ).render(),
);
betterConsole.warn("\nPress Ctrl+C to exit at any time\n");

// Wait for 2 seconds before starting
await new Promise((resolve) => setTimeout(resolve, 2000));

let isBootComplete = false;

(async () => {
  try {
    await booting();
    isBootComplete = true;
    await login();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    welcomeMessage();
    await shell();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await shutdown();
  } catch (error) {
    betterConsole.log("\n\n");
    betterConsole.error("Boot process interrupted");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (isBootComplete) {
      await shutdown();
    } else {
      await bootInterrupt();
    }
  }
})();

process.on("SIGINT", async () => {
  betterConsole.log("\n\n");
  setBootAbort();
  if (isBootComplete) {
    await shutdown();
  } else {
    await bootInterrupt();
  }
  process.exit(0);
});
