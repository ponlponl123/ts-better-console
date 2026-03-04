import os from "os";
import betterConsole, { Progress, s } from "../../../../src";
import biosMessages from "./biosMessages.json";
import whileProgressMessages from "./whileProgressMessages.json";
import systemdMessages from "./systemdMessages.json";
import networkMessages from "./networkMessages.json";
import finalMessages from "./finalMessages.json";

type BootingMessage = {
  msg: string;
  delay: number;
};

let isAborted = false;

const setBootAbort = () => {
  isAborted = true;
};

const resetBootAbort = () => {
  isAborted = false;
};

const simulateLogging = async (message: string, delay: number) => {
  if (isAborted) return;
  betterConsole.log(message);
  await new Promise((resolve) => setTimeout(resolve, delay));
};

async function displayBootMessages(messages: BootingMessage[]) {
  for (const msg of messages) {
    if (isAborted) break;
    await simulateLogging(msg.msg, msg.delay);
  }
}

async function displayBootMessagesWithProgress(
  messages: BootingMessage[],
  progressLabel: string,
  progressMessage: string,
) {
  const total = messages.length;
  const progress = new Progress(progressLabel, total, {
    bar: {
      animation: {
        type: "rainbow",
      },
      length: "full-width",
      position: "bottom",
    },
  });

  progress.init();

  for (let i = 0; i < messages.length; i++) {
    if (isAborted) break;
    progress.update(i + 1, undefined, {
      message: progressMessage,
      label: {
        while: "Loading",
        past: "Loaded",
      },
    });
    await simulateLogging(messages[i].msg, messages[i].delay);
  }

  if (!isAborted) {
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
}

async function main() {
  resetBootAbort();

  // BIOS/UEFI Phase
  await displayBootMessages(
    biosMessages.map((msg) => {
      return {
        msg: msg.msg
          .replace("{CPU}", s(os.cpus()[0].model, { color: "yellow" }))
          .replace(
            "{SPEED}",
            s(`${os.cpus()[0].speed} MHz`, { color: "yellow" }),
          )
          .replace(
            "{CORES}",
            s(os.cpus().length.toString(), { color: "yellow" }),
          )
          .replace(
            "{THREADS}",
            s((os.cpus().length * 2).toString(), { color: "yellow" }),
          )
          .replace(
            "{MEMORY}",
            s(`${(os.totalmem() / 1024 ** 3).toFixed(0)} GB ${os.arch()}`, {
              color: "yellow",
            }),
          )
          .replace(
            "{DISK}",
            s("PONLPONL123 Virtual Disk (100 GB)", { color: "yellow" }),
          )
          .replace(
            "{MAC_ADDRESS}",
            s("52:54:00:12:34:56", { color: "yellow" }),
          ),
        delay: msg.delay,
      };
    }),
  );
  if (isAborted) return;

  // Kernel Boot Phase with Progress
  betterConsole.clear();
  await displayBootMessagesWithProgress(
    whileProgressMessages.map((msg) => {
      return {
        msg: msg.msg
          .replace("{CPU}", s(os.cpus()[0].model, { color: "yellow" }))
          .replace(
            "{SPEED}",
            s(`${os.cpus()[0].speed} MHz`, { color: "yellow" }),
          )
          .replace(
            "{CORES}",
            s(os.cpus().length.toString(), { color: "yellow" }),
          )
          .replace(
            "{CORES_MASK}",
            s(
              `#${[...Array(os.cpus().length).keys()].map((i) => i + 1).join(" #")}`,
              {
                color: "yellow",
              },
            ),
          )
          .replace(
            "{BOGOMIPS}",
            s((os.cpus()[0].speed * 2).toString(), { color: "yellow" }),
          ),
        delay: msg.delay,
      };
    }),
    "Kernel Boot",
    "kernel messages...",
  );
  if (isAborted) return;

  // Systemd Services Phase with Progress
  betterConsole.clear();
  await displayBootMessagesWithProgress(
    systemdMessages.map((msg) => {
      return {
        msg: msg.msg.replace(
          "[  OK  ]",
          s("[  OK  ]", { color: "green", styles: ["bold"] }),
        ),
        delay: msg.delay,
      };
    }),
    "System Services",
    "system services...",
  );
  if (isAborted) return;

  // Network Configuration Phase with Progress
  betterConsole.clear();
  await displayBootMessagesWithProgress(
    networkMessages,
    "Network Setup",
    "network configuration...",
  );
  if (isAborted) return;

  // Final Login Screen
  betterConsole.clear();
  await displayBootMessages(finalMessages);
}

if (require.main === module) {
  main();
}

export { main, setBootAbort };
