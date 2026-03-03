import os from "os";
import betterConsole, { Progress, s } from "../../../../src";
import shutdownServices from "./shutdownServices.json";
import additionalServices from "./additionalServices.json";
import userSessionMessages from "./userSessionMessages.json";
import networkShutdownMessages from "./networkShutdownMessages.json";
import unmountMessages from "./unmountMessages.json";
import kernelShutdown from "./kernelShutdown.json";
import hardwareShutdownMessages from "./hardwareShutdownMessages.json";
import finalShutdownMessages from "./finalShutdownMessages.json";
import bootInterruptMessages from "./bootInterruptMessages.json";

type ShutdownMessage = {
  msg: string;
  delay: number;
};

const simulateLogging = async (message: string, delay: number) => {
  betterConsole.log(message);
  await new Promise((resolve) => setTimeout(resolve, delay));
};

async function displayShutdownMessages(messages: ShutdownMessage[]) {
  for (const msg of messages) {
    await simulateLogging(msg.msg, msg.delay);
  }
}

async function displayShutdownMessagesWithProgress(
  messages: ShutdownMessage[],
  progressLabel: string,
  progressMessage: string,
) {
  const total = messages.length;
  const progress = new Progress(progressLabel, total, {
    bar: {
      animation: "rainbow",
      length: "full-width",
      position: "bottom",
    },
  });

  progress.init();

  for (let i = 0; i < messages.length; i++) {
    progress.update(i + 1, undefined, {
      message: progressMessage,
      label: {
        while: "Shutting down",
        past: "Shut down",
      },
    });
    await simulateLogging(messages[i].msg, messages[i].delay);
  }

  await new Promise((resolve) => setTimeout(resolve, 300));
}

async function bootInterrupt() {
  betterConsole.log("\n");
  await displayShutdownMessages(bootInterruptMessages);
}

async function main() {
  // Initial shutdown message
  betterConsole.log("\n");
  await simulateLogging(
    s("=== PONLPONL123 LINUX SHUTDOWN SEQUENCE ===", {
      color: "red",
      styles: ["bold"],
    }),
    100,
  );
  await simulateLogging("", 30);

  // User Sessions Shutdown Phase with Progress
  await displayShutdownMessagesWithProgress(
    userSessionMessages.map((msg) => {
      return {
        msg: msg.msg.replace(
          "[  OK  ]",
          s("[  OK  ]", { color: "green", styles: ["bold"] }),
        ),
        delay: msg.delay,
      };
    }),
    "User Sessions",
    "terminating user sessions...",
  );

  // Primary Services Shutdown Phase with Progress
  betterConsole.clear();
  await displayShutdownMessagesWithProgress(
    shutdownServices.map((msg) => {
      return {
        msg: msg.msg.replace(
          "[  OK  ]",
          s("[  OK  ]", { color: "green", styles: ["bold"] }),
        ),
        delay: msg.delay,
      };
    }),
    "System Services",
    "stopping services...",
  );

  // Additional Services Shutdown Phase with Progress
  betterConsole.clear();
  await displayShutdownMessagesWithProgress(
    additionalServices.map((msg) => {
      return {
        msg: msg.msg.replace(
          "[  OK  ]",
          s("[  OK  ]", { color: "green", styles: ["bold"] }),
        ),
        delay: msg.delay,
      };
    }),
    "Additional Services",
    "stopping additional services...",
  );

  // Network Shutdown Phase with Progress
  betterConsole.clear();
  await displayShutdownMessagesWithProgress(
    networkShutdownMessages.map((msg) => {
      return {
        msg: msg.msg.replace(
          "[  OK  ]",
          s("[  OK  ]", { color: "green", styles: ["bold"] }),
        ),
        delay: msg.delay,
      };
    }),
    "Network Shutdown",
    "stopping network services...",
  );

  // Unmount Filesystems Phase with Progress
  betterConsole.clear();
  await displayShutdownMessagesWithProgress(
    unmountMessages.map((msg) => {
      return {
        msg: msg.msg.replace(
          "[  OK  ]",
          s("[  OK  ]", { color: "green", styles: ["bold"] }),
        ),
        delay: msg.delay,
      };
    }),
    "Filesystem Unmount",
    "unmounting filesystems...",
  );

  // Kernel Shutdown Phase with Progress
  betterConsole.clear();
  await displayShutdownMessagesWithProgress(
    kernelShutdown,
    "Kernel Shutdown",
    "shutting down kernel...",
  );

  // Hardware Shutdown Phase with Progress
  betterConsole.clear();
  await displayShutdownMessagesWithProgress(
    hardwareShutdownMessages.map((msg) => {
      return {
        msg: msg.msg.replace(
          "[  OK  ]",
          s("[  OK  ]", { color: "green", styles: ["bold"] }),
        ),
        delay: msg.delay,
      };
    }),
    "Hardware Shutdown",
    "powering off hardware...",
  );

  // Final shutdown screen
  betterConsole.clear();
  await displayShutdownMessages(finalShutdownMessages);

  // Power off message
  betterConsole.log("");
  await simulateLogging(
    s("The system is now shutting down. Power safe to turn off.", {
      color: "cyan",
      styles: ["bold"],
    }),
    500,
  );
  await simulateLogging("", 50);

  betterConsole.clear();
  await simulateLogging(
    s("SYSTEM HALTED", {
      color: "red",
      styles: ["bold"],
    }),
    2000,
  );

  new Promise(() => setTimeout(() => {}, 1000));
  betterConsole.clear();
  process.exit(0);
}

if (require.main === module) {
  main();
}

export { main, bootInterrupt };
