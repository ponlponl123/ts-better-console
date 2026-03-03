import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>flag</h1>
        <p>
          The <code>flag</code> function prepends a colored debug level flag to
          the provided arguments. The flag is wrapped in brackets and colored
          based on the level: <span className="text-cyan-400">DEBUG</span>,{" "}
          <span className="text-blue-400">INFO</span>,{" "}
          <span className="text-yellow-400">WARN</span>, or{" "}
          <span className="text-red-400">ERROR</span>.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">flag</i>(
                  <i className="text-cyan-600">level</i>:{" "}
                  <span className="text-cyan-400">DebugLevel</span>, ...
                  <i className="text-cyan-600">args</i>:{" "}
                  <span className="text-orange-400">any</span>[]):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function flag(level: DebugLevel, ...args: any[]): string`,
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
            <code>...args</code>: Additional values to append after the flag.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns a <code>string</code> with a colored level badge followed by
          the arguments, e.g. <code>[INFO] message</code>.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">flag</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">flag</i>(
                  <i className="text-orange-400">&quot;info&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;Server started&quot;</i>
                  ));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [INFO] Server started
                  </span>
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">flag</i>(
                  <i className="text-orange-400">&quot;warn&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;Deprecated API&quot;</i>
                  ));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [WARN] Deprecated API
                  </span>
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">flag</i>(
                  <i className="text-orange-400">&quot;error&quot;</i>,{" "}
                  <i className="text-orange-400">
                    &quot;Connection failed&quot;
                  </i>
                  ));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [ERROR] Connection failed
                  </span>
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">flag</i>(
                  <i className="text-orange-400">&quot;debug&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;Variable x =&quot;</i>,{" "}
                  <i className="text-orange-400">42</i>));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; [DEBUG] Variable x = 42
                  </span>
                </div>
              ),
              snippet: `import { flag } from "ts-better-console";

console.log(flag("info", "Server started"));
// => [INFO] Server started

console.log(flag("warn", "Deprecated API"));
// => [WARN] Deprecated API

console.log(flag("error", "Connection failed"));
// => [ERROR] Connection failed

console.log(flag("debug", "Variable x =", 42));
// => [DEBUG] Variable x = 42`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
