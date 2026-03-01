import Code from "@/src/components/code";
import Json from "@/src/components/code-popover/json";
import Log from "@/src/components/code-popover/log";
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
        <h1>Quick Start</h1>
        <p>
          To get started with <strong>ts-better-console</strong>, you can follow
          the installation instructions below. Once installed, you can start
          using the enhanced logging features in your TypeScript projects.
        </p>
        <h2 className="mt-8">Installation</h2>
        <p>
          You can install <strong>ts-better-console</strong> using bun, npm, or
          yarn:
        </p>
        <Code
          codesnippets={[
            {
              title: "npm",
              code: "npm install ts-better-console",
              icon: (
                <svg
                  fill="currentColor"
                  width="16px"
                  height="16px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>npm</title>
                  <path d="M7.415 7.656l17.291 0.024-0.011 17.29h-4.329l0.012-12.974h-4.319l-0.010 12.964h-8.656zM3.207 1.004c-0.002 0-0.003 0-0.005 0-1.214 0-2.198 0.984-2.198 2.198 0 0.002 0 0.004 0 0.006v-0 25.585c0 0.002 0 0.003 0 0.005 0 1.214 0.984 2.198 2.198 2.198 0.002 0 0.004 0 0.006 0h25.585c0.002 0 0.003 0 0.005 0 1.214 0 2.198-0.984 2.198-2.198 0-0.002 0-0.004 0-0.006v0-25.585c0-0.002 0-0.003 0-0.005 0-1.214-0.984-2.198-2.198-2.198-0.002 0-0.004 0-0.006 0h0z" />
                </svg>
              ),
            },
            {
              title: "yarn",
              code: "yarn add ts-better-console",
              icon: <YarnIcon size={16} weight="fill" />,
            },
            {
              title: "bun",
              code: "bun add ts-better-console",
              icon: <BreadIcon size={16} weight="fill" />,
            },
          ]}
        />
        <p>
          After installing, you can import and use the library in your
          TypeScript files to enhance your console logging experience.
        </p>
        <h3>Quick Sample</h3>
        <Code
          classNames={{
            container: "my-3",
          }}
          codesnippets={[
            {
              title: "Example",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;<br />
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.<Log />(
                  <i className="text-orange-400">"Hello, World!"</i>, {"{"}{" "}
                  <i className="text-blue-400">foo</i>:{" "}
                  <i className="text-orange-400">"bar"</i> {"}"});
                  <br />
                  <br />
                  // Output
                  <br />
                  Hello, World! {"{"} foo: "bar" {"}"}
                </div>
              ),
              icon: <></>,
              snippet: `import { s } from "ts-better-console";

betterConsole.log("Hello, World!", { foo: "bar" });`,
            },
            {
              title: "Example JSON Output",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;<br />
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.<Json />(
                  <i className="text-orange-400">"User Data"</i>, {"{"}{" "}
                  <i className="text-blue-400">name</i>:{" "}
                  <i className="text-orange-400">"Alice"</i>,<br />
                  <div className="ml-4">
                    <i className="text-blue-400">age</i>:{" "}
                    <i className="text-orange-400">30</i>,<br />
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">city</i>:{" "}
                    <i className="text-orange-400">"New York"</i>
                    <br />
                  </div>
                  {"}"});
                  <br />
                  <br />
                  // Output
                  {`
┌─────────────────────────┐
│ {                       │
│ "name": "Alice",        │
│ "age": 30,              │
│ "city": "New York"      │
│ }                       │
└─────────────────────────┘`}
                </div>
              ),
              icon: <></>,
              snippet: `import { betterConsole } from "ts-better-console";

betterConsole.json({ name: "Alice", age: 30, city: "New York" });`,
            },
          ]}
        />
      </section>
      <section>
        <h2>Explore More!</h2>
        <p>
          This is just a quick start guide to get you up and running with{" "}
          <strong>ts-better-console</strong>. The library offers many more
          features and customization options to enhance your logging experience.
          Be sure to check out the full documentation for more details and
          examples on how to make the most of <strong>ts-better-console</strong>
          in your projects.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/docs/examples" className="no-underline!">
            <button className="btn">
              Take a look <MagicWandIcon size={18} weight="fill" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Page;
