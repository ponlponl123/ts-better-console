import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ts</h1>
        <p>
          The <code>ts</code> (timestamp) function prepends a formatted
          timestamp to the provided arguments. It wraps the current date and
          time in brackets and combines them with the rest of the arguments
          using <code>cs</code>.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">ts</i>(
                  <i className="text-cyan-600">date</i>?:{" "}
                  <span className="text-orange-400">boolean</span>, ...
                  <i className="text-cyan-600">args</i>:{" "}
                  <span className="text-orange-400">any</span>[]):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function ts(date?: boolean, ...args: any[]): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>date</code>: Whether to include the date portion (
            <code>YYYY-MM-DD</code>). Defaults to <code>true</code>.
          </li>
          <li>
            <code>...args</code>: Additional values to append after the
            timestamp.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns a <code>string</code> in the format{" "}
          <code>[YYYY-MM-DD - HH:MM:SS] ...args</code> or{" "}
          <code>[HH:MM:SS] ...args</code> when date is <code>false</code>.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">ts</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">// With date and time</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">ts</i>(
                  <i className="text-orange-400">true</i>,{" "}
                  <i className="text-orange-400">&quot;Server started&quot;</i>
                  ));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [2026-03-01 - 14:30:00] Server started
                  </span>
                  <br />
                  <br />
                  <span className="text-zinc-500">// Time only</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">ts</i>(
                  <i className="text-orange-400">false</i>,{" "}
                  <i className="text-orange-400">
                    &quot;Request received&quot;
                  </i>
                  ));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [14:30:00] Request received
                  </span>
                </div>
              ),
              snippet: `import { ts } from "ts-better-console";

// With date and time
console.log(ts(true, "Server started"));
// => [2026-03-01 - 14:30:00] Server started

// Time only
console.log(ts(false, "Request received"));
// => [14:30:00] Request received`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
