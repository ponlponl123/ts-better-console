import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>tsflag</h1>
        <p>
          The <code>tsflag</code> function combines a timestamp and a debug
          level flag into a single formatted string. It calls <code>ts</code>{" "}
          with <code>flag</code> internally, producing output like{" "}
          <code>[2026-03-01 - 14:30:00] [INFO] message</code>.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">tsflag</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-cyan-600">level</i>:{" "}
                    <span className="text-cyan-400">DebugLevel</span>,
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">date</i>?:{" "}
                    <span className="text-orange-400">boolean</span>,
                  </div>
                  <div className="ml-4">
                    ...<i className="text-cyan-600">args</i>:{" "}
                    <span className="text-orange-400">any</span>[],
                  </div>
                  ): <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function tsflag(level: DebugLevel, date?: boolean, ...args: any[]): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>level</code>: A <code>DebugLevel</code> string —{" "}
            <code>&quot;debug&quot;</code>, <code>&quot;info&quot;</code>,{" "}
            <code>&quot;warn&quot;</code>, or <code>&quot;error&quot;</code>.
          </li>
          <li>
            <code>date</code>: Whether to include the date portion. Defaults to{" "}
            <code>true</code>.
          </li>
          <li>
            <code>...args</code>: Additional values to append after the
            timestamp and flag.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns a <code>string</code> with both timestamp and colored level
          flag.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">tsflag</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Full timestamp with date + info flag
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">tsflag</i>(
                  <i className="text-orange-400">&quot;info&quot;</i>,{" "}
                  <i className="text-orange-400">true</i>,{" "}
                  <i className="text-orange-400">&quot;Server started&quot;</i>
                  ));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [2026-03-01 - 14:30:00] [INFO] Server started
                  </span>
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Time only + error flag
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">tsflag</i>(
                  <i className="text-orange-400">&quot;error&quot;</i>,{" "}
                  <i className="text-orange-400">false</i>,{" "}
                  <i className="text-orange-400">&quot;Connection lost&quot;</i>
                  ));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [14:30:00] [ERROR] Connection lost
                  </span>
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Default date + warn flag
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">tsflag</i>(
                  <i className="text-orange-400">&quot;warn&quot;</i>,{" "}
                  <i className="text-orange-400">true</i>,{" "}
                  <i className="text-orange-400">&quot;High memory&quot;</i>));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [2026-03-01 - 14:30:00] [WARN] High memory
                  </span>
                </div>
              ),
              snippet: `import { tsflag } from "ts-better-console";

// Full timestamp with date + info flag
console.log(tsflag("info", true, "Server started"));
// => [2026-03-01 - 14:30:00] [INFO] Server started

// Time only + error flag
console.log(tsflag("error", false, "Connection lost"));
// => [14:30:00] [ERROR] Connection lost

// Default date + warn flag
console.log(tsflag("warn", true, "High memory"));
// => [2026-03-01 - 14:30:00] [WARN] High memory`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
