import Code from "@/src/components/code";
import Log from "@/src/components/code-popover/log";
import Style from "@/src/components/code-popover/s";
import {
  BreadIcon,
  CaretRightIcon,
  MagicWandIcon,
  YarnIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Examples</h1>
        <p>
          Here are some examples of how to use{" "}
          <strong>ts-better-console</strong>
          in your TypeScript projects. These examples demonstrate various
          features and use cases of the library to help you get the most out of
          it.
        </p>
        <h2 className="mt-8">Styled Logs</h2>
        <p>
          You can create styled logs using the <code>s</code> function. This
          allows you to customize the appearance of your logs with different
          colors, backgrounds, and styles.
        </p>
        <Code
          codesnippets={[
            {
              title: "Styled Log Example",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-blue-400">betterConsole</i>, {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">
                    <Log />
                  </i>
                  (
                  <i className="text-yellow-400">
                    <Style />
                  </i>
                  (<i className="text-orange-400">"This is a styled log"</i>,{" "}
                  {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">"white"</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-orange-400">"blue"</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">styles</i>: [
                    <i className="text-orange-400">"bold"</i>,{" "}
                    <i className="text-orange-400">"italic"</i>],
                  </div>
                  {"}"}
                  ));
                </div>
              ),
              icon: <></>,
              snippet: `import betterConsole, { s } from "ts-better-console";

betterConsole.log(
  s("This is a styled log", {
    color: "white",
    backgroundColor: "blue",
    styles: ["bold", "italic"],
  })
);`,
            },
          ]}
        />
        <h3>Output</h3>
        <pre className="pre mt-3!">
          <span className="bg-blue-700 text-white font-bold italic">
            This is a styled log
          </span>
        </pre>
        <p>
          In this example, we create a styled log with white text on a blue
          background, and apply bold and italic styles to it.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/docs/quick-start" className="no-underline!">
            <button className="btn">
              Get Started <CaretRightIcon size={14} weight="bold" />
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h2>OS Simulator Demo</h2>
        <p>
          A full-featured terminal demo that simulates a Linux-like OS boot
          sequence using <strong>ts-better-console</strong>. It combines{" "}
          <code>Card</code>, <code>prompt()</code> with password masking and
          arrow-key history, styled logs, and graceful Ctrl+C handling into a
          single cohesive experience.
        </p>
        <p>Run it with:</p>
        <Code
          codesnippets={[
            {
              title: "Run the demo",
              code: (
                <div>
                  <span className="text-zinc-400">$</span>{" "}
                  <i className="text-yellow-400">bun</i>{" "}
                  <i className="text-blue-400">run test/demo/os-sample.ts</i>
                </div>
              ),
              snippet: `bun run test/demo/os-sample.ts`,
            },
          ]}
        />
        <h3 className="mt-4">Highlights</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>Boot sequence</strong> — simulates dmesg-style kernel
            messages with timed delays.
          </li>
          <li>
            <strong>Login prompt</strong> — uses{" "}
            <code>prompt(question, &quot;password&quot;)</code> to mask the
            password entry. Allows up to 3 attempts.
          </li>
          <li>
            <strong>Interactive shell</strong> — uses{" "}
            <code>prompt(question, &quot;text&quot;, true)</code> for a
            shell-like REPL with ↑ / ↓ command history. Supports{" "}
            <code>help</code>, <code>clear</code>, <code>shutdown</code>, and{" "}
            <code>exit</code>.
          </li>
          <li>
            <strong>Graceful Ctrl+C</strong> — intercepts <code>SIGINT</code>{" "}
            and runs a simulated shutdown or emergency boot-interrupt depending
            on how far the boot progressed.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "os-sample.ts — entry point",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-blue-400">betterConsole</i>, {"{"}{" "}
                  <i className="text-blue-400">Card</i>,{" "}
                  <i className="text-blue-400">cs</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // ...imports for booting / login / shell / shutdown
                  </span>
                  <br />
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-purple-400">new</i>{" "}
                    <i className="text-yellow-400">Card</i>(
                    <i className="text-yellow-400">cs</i>([...]),{" "}
                    <i className="text-orange-400">&quot;2/3&quot;</i>, {"{"}{" "}
                    <i className="text-blue-400">border</i>: {"{"}{" "}
                    <i className="text-blue-400">symbols</i>: {"{"}{" "}
                    <i className="text-blue-400">style</i>:{" "}
                    <i className="text-orange-400">&quot;double&quot;</i> {"}"}{" "}
                    {"}"} {"}"}).
                    <i className="text-yellow-400">render</i>()
                  </div>
                  );
                  <br />
                  <br />
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">booting</i>();
                  <br />
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">login</i>();
                  <br />
                  <i className="text-yellow-400">welcomeMessage</i>();
                  <br />
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">shell</i>();
                  <br />
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">shutdown</i>();
                </div>
              ),
              snippet: `import betterConsole, { Card, cs } from "ts-better-console";
import { main as booting, setBootAbort } from "./ponlponl123-os/booting";
import { main as login } from "./ponlponl123-os/login";
import { main as shell, welcomeMessage } from "./ponlponl123-os/shell";
import { main as shutdown, bootInterrupt } from "./ponlponl123-os/shutdown";

betterConsole.clear();
betterConsole.log(
  new Card(
    cs([
      "*blank*\\n", "*blank*\\n",
      "Ponlponl123 OS Simulator\\n",
      "*blank*\\n", "*blank*\\n",
      "Experience a realistic Linux boot sequence\\n",
      "*blank*\\n", "*blank*\\n",
    ]),
    "2/3",
    {
      body: { align: "center", style: { color: "green", styles: ["bold"] } },
      border: { style: { color: "cyan" }, symbols: { style: "double" } },
    },
  ).render(),
);

let isBootComplete = false;
await booting();
isBootComplete = true;
await login();
welcomeMessage();
await shell();
await shutdown();`,
            },
            {
              title: "login.ts — password prompt",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">prompt</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">username</i> ={" "}
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">prompt</i>(
                  <i className="text-orange-400">
                    &quot;ponlponl123-os login: &quot;
                  </i>
                  );
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">password</i> ={" "}
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">prompt</i>(
                  <i className="text-orange-400">
                    {"`"}${"{"}username{"}"}@ponlponl123-os&apos;s password:{" "}
                    {"`"}
                  </i>
                  , <i className="text-orange-400">&quot;password&quot;</i>);
                </div>
              ),
              snippet: `import { prompt } from "ts-better-console";

const username = await prompt("ponlponl123-os login: ");
const password = await prompt(\`\${username}@ponlponl123-os's password: \`, "password");`,
            },
            {
              title: "shell.ts — history-enabled REPL",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">prompt</i>,{" "}
                  <i className="text-blue-400">s</i>,{" "}
                  <i className="text-blue-400">cs</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">command</i> ={" "}
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">prompt</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-yellow-400">cs</i>([
                    <br />
                    <div className="ml-4">
                      <i className="text-yellow-400">s</i>(
                      <i className="text-orange-400">&quot;➜ &quot;</i>, {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;green&quot;</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}
                      ),
                      <br />
                      <i className="text-yellow-400">s</i>(
                      <i className="text-orange-400">
                        &quot;ponlponl123-os$ &quot;
                      </i>
                      , {"{}"}),
                    </div>
                    ]),
                  </div>
                  <br />
                  <div className="ml-4">
                    <i className="text-orange-400">&quot;text&quot;</i>,{" "}
                    <i className="text-orange-400">true</i>,{" "}
                    <span className="text-zinc-500">
                      {"// enable ↑/↓ history"}
                    </span>
                  </div>
                  );
                </div>
              ),
              snippet: `import { prompt, s, cs } from "ts-better-console";

const command = await prompt(
  cs([
    s("➜ ", { color: "green", styles: ["bold"] }),
    s("ponlponl123-os$ ", {}),
  ]),
  "text",
  true, // enable ↑/↓ command history
);`,
            },
          ]}
        />
      </section>
      <section>
        <h2>Explore More!</h2>
        <p>
          This is just a quick overview of some of the features of{" "}
          <strong>ts-better-console</strong>. The library offers many more
          capabilities and customization options to enhance your logging
          experience. Be sure to check out the full documentation for more
          details and examples on how to make the most of{" "}
          <strong>ts-better-console</strong> in your projects.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/docs" className="no-underline!">
            <button className="btn">
              View Documentation <CaretRightIcon size={14} weight="bold" />
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h2>Community Examples</h2>
        <p>
          We also encourage you to explore examples and use cases shared by the
          community. You can find these in our{" "}
          <Link
            href={"https://ponl.link/disgd"}
            target="_blank"
            className="text-blue-600 dark:text-blue-400"
          >
            Discord server
          </Link>
          , where developers share their experiences and creative uses of{" "}
          <strong>ts-better-console</strong>.
        </p>
      </section>
    </div>
  );
}

export default Page;
