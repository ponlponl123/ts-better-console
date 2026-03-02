import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>DebugLevel</h1>
        <p>
          The <code>DebugLevel</code> type defines the severity levels available
          for debug logging in <strong>ts-better-console</strong>. It is used to
          filter and categorize log messages based on their importance, making
          it easier to control which messages are displayed during development
          and debugging.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>DebugLevel</code> type accepts the following string values:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>"debug"</code>: The most verbose level, used for detailed
            debugging information.
          </li>
          <li>
            <code>"info"</code>: General informational messages about
            application flow.
          </li>
          <li>
            <code>"warn"</code>: Warning messages that indicate potential issues
            or unexpected behavior.
          </li>
          <li>
            <code>"error"</code>: Error messages indicating failures or critical
            issues.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "DebugLevel Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">DebugLevel</i> ={" "}
                  <span className="text-orange-400">
                    "debug" | "info" | "warn" | "error"
                  </span>
                  ;
                </div>
              ),
              snippet: `type DebugLevel = "debug" | "info" | "warn" | "error";`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use <code>DebugLevel</code> to set the minimum log level for
          your application, controlling which messages are displayed:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using DebugLevel",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-yellow-400">flag</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Only show warnings and errors
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">flag</i>(
                  <i className="text-orange-400">"warn"</i>,{" "}
                  <i className="text-orange-400">"This is a warning"</i>));
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Show all messages including debug
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">flag</i>(
                  <i className="text-orange-400">"debug"</i>,{" "}
                  <i className="text-orange-400">"Detailed debug info"</i>));
                </div>
              ),
              snippet: `import { flag } from "ts-better-console";

// Only show warnings and errors
console.log(flag("warn", "This is a warning"));

// Show all messages including debug
console.log(flag("debug", "Detailed debug info"));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
