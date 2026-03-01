import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>debug</h1>
        <p>
          The <code>debug</code> method logs debug messages to the terminal
          using <code>console.debug</code> with an automatic{" "}
          <span className="text-fuchsia-400 font-semibold">magenta</span> color
          applied to all string arguments. Non-string arguments are passed
          through unchanged.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Method Signature",
              code: (
                <div>
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">debug</i>(
                  <i className="text-cyan-600">...args</i>:{" "}
                  <span className="text-orange-400">any</span>[]):{" "}
                  <span className="text-purple-500">void</span>
                </div>
              ),
              snippet: `betterConsole.debug(...args: any[]): void`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>...args</code>: One or more values to log. String arguments
            are automatically styled with{" "}
            <span className="text-fuchsia-400 font-semibold">magenta</span>{" "}
            color.
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-blue-400">betterConsole</i>{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Log a debug message (displayed in magenta)
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">debug</i>(
                  <i className="text-orange-400">
                    &quot;Processing request #1234&quot;
                  </i>
                  );
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Log multiple arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">debug</i>(
                  <i className="text-orange-400">
                    &quot;Cache hit for key:&quot;
                  </i>
                  , <i className="text-orange-400">&quot;user_123&quot;</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Mix string and non-string arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">debug</i>(
                  <i className="text-orange-400">
                    &quot;Elapsed time (ms):&quot;
                  </i>
                  , <i className="text-orange-400">150</i>);
                </div>
              ),
              snippet: `import betterConsole from "ts-better-console";

// Log a debug message (displayed in magenta)
betterConsole.debug("Processing request #1234");

// Log multiple arguments
betterConsole.debug("Cache hit for key:", "user_123");

// Mix string and non-string arguments
betterConsole.debug("Elapsed time (ms):", 150);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
