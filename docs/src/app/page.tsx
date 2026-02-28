import {
  HandWavingIcon,
  MagicWandIcon,
  TerminalIcon,
  TerminalWindowIcon,
} from "@phosphor-icons/react/dist/ssr";
import * as Popover from "@radix-ui/react-popover";
import * as Tooltip from "@radix-ui/react-tooltip";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)]">
      <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center font-sans gap-16 relative z-10">
        <main className="flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-between py-32 px-16 gap-6 sm:items-start">
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
              href="/docs/getting-started"
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
        <div>
          <div className="w-[640px] relative bg-zinc-200 dark:bg-zinc-900 rounded-lg flex flex-col overflow-hidden">
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
              <div className="flex items-center text-sm">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-emerald-500">betterconsole</span>.
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <span className="text-sm underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                        log
                      </span>
                    </Popover.Trigger>
                    <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                      <div className="font-mono text-xs text-zinc-500">
                        <span className="text-yellow-200">log</span>(...
                        <span className="text-cyan-600">args</span>:{" "}
                        <span className="text-cyan-600">any</span>[]):{" "}
                        <span className="text-cyan-600">string</span>
                      </div>
                      <span className="text-zinc-500">
                        // Basic logging method
                      </span>
                    </Popover.Content>
                  </Popover.Root>
                  (
                </span>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <span className="text-sm underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                      tsdl
                    </span>
                  </Popover.Trigger>
                  <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                    <div className="font-mono text-xs text-zinc-500">
                      <span className="text-yellow-200">tsdl</span>(
                      <span className="text-cyan-600">level</span>:{" "}
                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <span className="text-xs underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                              DebugLevel
                            </span>
                          </Tooltip.Trigger>
                          <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                            <div className="font-mono text-xs text-zinc-500">
                              <span className="text-yellow-200">
                                DebugLevel
                              </span>{" "}
                              is a union type of:
                              <ul className="list-disc list-inside">
                                <li>
                                  <span className="text-cyan-600">"DEBUG"</span>{" "}
                                  - Detailed information for debugging purposes.
                                </li>
                                <li>
                                  <span className="text-cyan-600">"INFO"</span>{" "}
                                  - General informational messages.
                                </li>
                                <li>
                                  <span className="text-cyan-600">"WARN"</span>{" "}
                                  - Potentially harmful situations.
                                </li>
                                <li>
                                  <span className="text-cyan-600">"ERROR"</span>{" "}
                                  - Error events that might still allow the
                                  application to continue running.
                                </li>
                              </ul>
                            </div>
                          </Tooltip.Content>
                        </Tooltip.Root>
                      </Tooltip.Provider>
                      , <span className="text-cyan-600">date</span>?:{" "}
                      <span className="text-cyan-600">boolean</span>, ...
                      <span className="text-cyan-600">args</span>:{" "}
                      <span className="text-cyan-600">any</span>[]):{" "}
                      <span className="text-cyan-600">string</span>
                    </div>
                    <span className="text-zinc-500">
                      // Timestamped & Debug Level
                    </span>
                  </Popover.Content>
                </Popover.Root>
                (
                <span className="text-sm text-orange-400">"Hello, World!"</span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  ));
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
                <span className="text-sm text-zinc-300">Hello, World!</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-emerald-500">
                    <span className="text-blue-500">new</span> betterconsole
                  </span>
                  .
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <span className="text-sm underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                        Progress
                      </span>
                    </Popover.Trigger>
                    <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                      <div className="font-mono text-xs text-zinc-500">
                        <span className="text-yellow-200">Progress</span>(
                        <span className="text-cyan-600">title</span>:{" "}
                        <span className="text-cyan-600">string</span>,{" "}
                        <span className="text-cyan-600">total</span>?:{" "}
                        <span className="text-cyan-600">number</span>,{" "}
                        <span className="text-cyan-600">options</span>?:{" "}
                        <Tooltip.Provider>
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <span className="text-xs underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                                ProgressOptions
                              </span>
                            </Tooltip.Trigger>
                            <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                              <div className="font-mono text-xs text-zinc-500">
                                <span className="text-yellow-200">
                                  ProgressOptions
                                </span>{" "}
                                is an object type with optional properties:
                                <ul className="list-disc list-inside">
                                  <li>
                                    <span className="text-cyan-600">label</span>{" "}
                                    (optional): An object with two string
                                    properties,{" "}
                                    <span className="text-cyan-600">while</span>{" "}
                                    and{" "}
                                    <span className="text-cyan-600">past</span>,
                                    representing the label to display while the
                                    progress is active and after it is
                                    completed, respectively.
                                  </li>
                                  <li>
                                    <span className="text-cyan-600">
                                      barLength
                                    </span>{" "}
                                    (optional): A number representing the length
                                    of the progress bar in characters. Default
                                    is 40.
                                  </li>
                                  <li>
                                    <span className="text-cyan-600">
                                      callout
                                    </span>{" "}
                                    (optional): A boolean indicating whether to
                                    display a callout with the percentage.
                                    Default is false.
                                  </li>
                                </ul>
                              </div>
                            </Tooltip.Content>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                        ): <span className="text-cyan-600">Progress</span>
                      </div>
                      <span className="text-zinc-500">
                        // Creates a new progress bar instance.
                      </span>
                    </Popover.Content>
                  </Popover.Root>
                  (
                </span>
                <span className="text-sm text-orange-400">"Files"</span>,
                <span className="text-sm text-cyan-400">36</span>
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
                  <span className="text-emerald-500">betterconsole</span>.
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <span className="text-sm underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                        log
                      </span>
                    </Popover.Trigger>
                    <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                      <div className="font-mono text-xs text-zinc-500">
                        <span className="text-yellow-200">log</span>(...
                        <span className="text-cyan-600">args</span>:{" "}
                        <span className="text-cyan-600">any</span>[]):{" "}
                        <span className="text-cyan-600">string</span>
                      </div>
                      <span className="text-zinc-500">
                        // Basic logging method
                      </span>
                    </Popover.Content>
                  </Popover.Root>
                  (
                </span>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <span className="text-sm underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                      s
                    </span>
                  </Popover.Trigger>
                  <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                    <div className="font-mono text-xs text-zinc-500">
                      <span className="text-yellow-200">s</span>(
                      <span className="text-cyan-600">str</span>:{" "}
                      <span className="text-cyan-600">string</span>,{" "}
                      <span className="text-cyan-600">style</span>:{" "}
                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <span className="text-xs underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                              StyleOptions
                            </span>
                          </Tooltip.Trigger>
                          <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                            <div className="font-mono text-xs text-zinc-500">
                              <span className="text-yellow-200">
                                StyleOptions
                              </span>{" "}
                              is an object type with optional properties:
                              <ul className="list-disc list-inside">
                                <li>
                                  <span className="text-cyan-600">color</span>{" "}
                                  (optional): A string representing the text
                                  color. It can be one of the following values:{" "}
                                  <span className="text-cyan-600">"black"</span>
                                  , <span className="text-cyan-600">"red"</span>
                                  ,{" "}
                                  <span className="text-cyan-600">"green"</span>
                                  ,{" "}
                                  <span className="text-cyan-600">
                                    "yellow"
                                  </span>
                                  ,{" "}
                                  <span className="text-cyan-600">"blue"</span>,{" "}
                                  <span className="text-cyan-600">
                                    "magenta"
                                  </span>
                                  ,{" "}
                                  <span className="text-cyan-600">"cyan"</span>,{" "}
                                  <span className="text-cyan-600">"white"</span>
                                  , or{" "}
                                  <span className="text-cyan-600">"gray"</span>.
                                </li>
                                <li>
                                  <span className="text-cyan-600">
                                    backgroundColor
                                  </span>{" "}
                                  (optional): A string representing the
                                  background color. It can be the same values as
                                  the color property.
                                </li>
                                <li>
                                  <span className="text-cyan-600">styles</span>{" "}
                                  (optional): An array of strings representing
                                  additional styles. Each string can be one of
                                  the following values:{" "}
                                  <span className="text-cyan-600">"bold"</span>,{" "}
                                  <span className="text-cyan-600">
                                    "italic"
                                  </span>
                                  ,{" "}
                                  <span className="text-cyan-600">
                                    "underline"
                                  </span>
                                  , or{" "}
                                  <span className="text-cyan-600">
                                    "strikethrough"
                                  </span>
                                  .
                                </li>
                                <li>
                                  <span className="text-cyan-600">endless</span>{" "}
                                  (optional): A boolean indicating whether the
                                  style should be endless (not reset after the
                                  string) or not. If set to true, the style will
                                  continue to apply to all subsequent logs until
                                  manually reset.
                                </li>
                              </ul>
                            </div>
                          </Tooltip.Content>
                        </Tooltip.Root>
                      </Tooltip.Provider>
                      ): <span className="text-cyan-600">string</span>
                    </div>
                    <span className="text-zinc-500">
                      // Styles the string with ANSI escape codes for terminal
                      output.
                    </span>
                  </Popover.Content>
                </Popover.Root>
                (<span className="text-sm text-orange-400">"Text..."</span>,{" "}
                <span className="text-sm text-blue-500">{"{"}</span>
                <span className="text-sm text-cyan-400">color</span>:{" "}
                <span className="text-sm text-orange-400">"red"</span>,{" "}
                <span className="text-sm text-cyan-400">styles</span>: [
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
              <br />
              <div className="flex items-center text-sm">
                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-emerald-500">betterconsole</span>.
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <span className="text-sm underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                        log
                      </span>
                    </Popover.Trigger>
                    <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                      <div className="font-mono text-xs text-zinc-500">
                        <span className="text-yellow-200">log</span>(...
                        <span className="text-cyan-600">args</span>:{" "}
                        <span className="text-cyan-600">any</span>[]):{" "}
                        <span className="text-cyan-600">string</span>
                      </div>
                      <span className="text-zinc-500">
                        // Basic logging method
                      </span>
                    </Popover.Content>
                  </Popover.Root>
                  (
                </span>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <span className="text-sm underline text-yellow-200 cursor-help text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
                      link
                    </span>
                  </Popover.Trigger>
                  <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
                    <div className="font-mono text-xs text-zinc-500">
                      <span className="text-yellow-200">link</span>(
                      <span className="text-cyan-600">text</span>:{" "}
                      <span className="text-cyan-600">string</span>,{" "}
                      <span className="text-cyan-600">url</span>:{" "}
                      <span className="text-cyan-600">string</span>):{" "}
                      <span className="text-cyan-600">string</span>
                    </div>
                    <span className="text-zinc-500">
                      // Formats the string as a clickable link in supported
                      terminals. The first argument is the text to display, and
                      the second argument is the URL to link to.
                    </span>
                  </Popover.Content>
                </Popover.Root>
                (<span className="text-sm text-orange-400">"Explore more"</span>
                , <span className="text-sm text-orange-400">"/docs"</span>
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
