import {
  HandWavingIcon,
  MagicWandIcon,
  TerminalIcon,
  TerminalWindowIcon,
} from "@phosphor-icons/react/dist/ssr";
import * as Popover from "@radix-ui/react-popover";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";
import Style from "../components/code-popover/s";
import Log from "../components/code-popover/log";
import LinkPopover from "../components/code-popover/link";
import TsFlag from "../components/code-popover/tsflag";
import ProgressOptions from "../components/code-tooltips/progress-options";
import Progress from "../components/code-popover/progress";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)]">
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center font-sans max-lg:flex-col xl:gap-16 relative z-10">
        <main className="flex lg:min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-between py-32 px-16 gap-6 sm:items-start">
          <div className="flex items-center gap-4">
            <MagicWandIcon weight="fill" size={36} />
            <h1 className="text-xl font-semibold">TS Better Console</h1>
          </div>
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Looking for a better console logging experience in{" "}
              <span className="text-blue-500">TypeScript</span>?
            </h1>
            <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              The ultimate logging library for TypeScript. Experience enhanced
              type safety, cleaner formatting, and a sleek API.
            </p>
            <span className="text-base text-zinc-500 dark:text-zinc-400">
              <HandWavingIcon
                size={20}
                weight="fill"
                className="inline-block"
              />{" "}
              Say goodbye to messy logs!
            </span>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Link
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              href="/docs/quick-start"
            >
              <TerminalIcon size={16} /> Get Started
            </Link>
            <Link
              className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] backdrop-blur-md backdrop-saturate-150"
              href="/docs"
            >
              Documentation
            </Link>
          </div>
        </main>
        <div className="p-4">
          <div className="w-[640px] max-xl:w-[480px] max-md:w-full relative bg-zinc-200 dark:bg-zinc-900 rounded-lg flex flex-col overflow-hidden">
            <div className="w-full h-12 bg-zinc-300 dark:bg-zinc-800 flex items-center justify-between gap-2 px-4">
              <h1 className="text-sm font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                <TerminalWindowIcon weight="fill" size={20} />
                It&apos;s me!
              </h1>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-2 p-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-green-500">
                  ts-better-console
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  v{process.env.NEXT_PUBLIC_VERSION}
                </span>
              </div>
              <div className="flex flex-wrap items-center text-sm">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-emerald-500">betterConsole</span>.
                  <Log />(
                </span>
                <TsFlag />(
                <span className="text-sm text-orange-400">"info"</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  ),
                </span>
                <span className="text-sm text-orange-400">"Hello, World!"</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  );
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-sm text-zinc-500">
                  [{new Date().toLocaleDateString("en-CA")} -{" "}
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                  })}
                  ]
                </span>
                <span className="text-sm text-cyan-500">[INFO]</span>
                <span className="text-sm dark:text-zinc-300">
                  Hello, World!
                </span>
              </div>
              <div className="flex flex-wrap items-center text-sm">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-emerald-500">
                    <span className="text-blue-500">new</span> betterConsole
                  </span>
                  .
                  <Progress />(
                </span>
                <span className="text-sm text-orange-400">"Files"</span>,
                <span className="text-sm text-cyan-400">46</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  );
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative spinner-5fps">–</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  Loading Files
                  [&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;--------] 46%
                </span>
              </div>
              <div className="flex flex-wrap items-center text-sm">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-emerald-500">betterConsole</span>.
                  <Log />(
                </span>
                <Style />(
                <span className="text-sm text-orange-400">"Text..."</span>,{" "}
                <span className="text-sm text-blue-500">{"{"}</span>
                <span className="text-sm text-cyan-400">color</span>:{" "}
                <span className="text-sm text-orange-400">"red"</span>,{" "}
                <span className="text-sm text-cyan-400">styles</span>:{" "}
                <span>[</span>
                <span className="text-sm text-orange-400">"italic"</span>]
                <span className="text-sm text-blue-500">{"}"}</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  ));
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-red-400 italic">
                  Text with styles!✨
                </span>
              </div>
              <div className="flex flex-wrap items-center text-sm">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-emerald-500">betterConsole</span>.
                  <Log />(
                </span>
                <LinkPopover />(
                <span className="text-sm text-orange-400">
                  "Explore more"
                </span>,{" "}
                <span className="text-sm text-orange-400">"/docs"</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  ));
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link href={"/docs"}>
                  <span className="text-sm px-2 hover:text-black hover:bg-cyan-400 bg-zinc-600 text-white cursor-pointer">
                    Explore more
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] opacity-40 bg-[radial-gradient(circle,_rgb(59,130,246,0.4)_0%,_rgb(168,85,247,0.2)_50%,_transparent_100%)] rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
}
