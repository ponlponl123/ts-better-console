import betterConsole, {
  cs,
  eightBit,
  gradient,
  prompt,
  rainbowPastelColors,
  s,
} from "../../../src";
import * as os from "os";

function welcomeMessage() {
  betterConsole.clear();
  const load = os.loadavg()[0].toFixed(2);
  const memUsage = (
    ((os.totalmem() - os.freemem()) / os.totalmem()) *
    100
  ).toFixed(1);

  betterConsole.log(
    s(
      gradient(
        `\nWelcome to ponlponl123-os (GNU/Linux ${os.release()} ${os.arch()})\n`,
        rainbowPastelColors.map((c) => eightBit(c), false),
      ),
      {
        styles: ["bold"],
      },
    ),
  );
  betterConsole.log(" * Website:  https://ponlponl123.com");
  betterConsole.log(" * Labs:     https://labs.ponlponl123.com");
  betterConsole.log(" * Links:    https://ponl.link\n");

  betterConsole.log(`System information as of ${new Date().toUTCString()}\n`);
  betterConsole.log(
    `  System load:  ${load}\t\tProcesses:       ${os.cpus().length}`,
  );
  betterConsole.log(`  Memory usage: ${memUsage}%\t\tUsers logged in: 1\n`);

  betterConsole.log(
    s("Type 'help' for a list of available commands.\n", {
      color: "cyan",
    }),
  );
}

async function main() {
  let continueShell = true;
  while (continueShell) {
    const command = await prompt(
      cs([
        s("➜ ", { color: "green", styles: ["bold"] }),
        s("ponlponl123-os$ ", {}),
      ]),
      "text",
      true, // Enable arrow key navigation for command history
    );

    const cmd = command.trim().toLowerCase();

    if (cmd === "help") {
      betterConsole.log("\nAvailable commands:");
      betterConsole.log("- help: Show this help message");
      betterConsole.log("- clear: Clear the console");
      betterConsole.log("- shutdown: Shutdown the shell");
      betterConsole.log("- exit: Exit the shell\n");
    } else if (cmd === "clear") {
      betterConsole.clear();
    } else if (cmd === "shutdown" || cmd === "exit") {
      betterConsole.log("\nShutting down...\n");
      continueShell = false;
    } else if (cmd !== "") {
      betterConsole.log(`\nCommand not found: ${command}\n`);
    }
  }
}

if (require.main === module) {
  welcomeMessage();
  main();
}

export { main, welcomeMessage };
