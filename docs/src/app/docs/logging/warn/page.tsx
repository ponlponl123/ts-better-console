import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>warn</h1>
        <p>
          The <code>warn</code> method logs warning messages to the terminal
          using <code>console.warn</code> with an automatic{" "}
          <span className="text-yellow-400 font-semibold">yellow</span> color
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
                  <i className="text-yellow-400">warn</i>(
                  <i className="text-cyan-600">...args</i>:{" "}
                  <span className="text-orange-400">any</span>[]):{" "}
                  <span className="text-purple-500">void</span>
                </div>
              ),
              snippet: `betterConsole.warn(...args: any[]): void`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>...args</code>: One or more values to log. String arguments
            are automatically styled with{" "}
            <span className="text-yellow-400 font-semibold">yellow</span> color.
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
                    // Log a warning message (displayed in yellow)
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">warn</i>(
                  <i className="text-orange-400">
                    &quot;Deprecated API usage detected&quot;
                  </i>
                  );
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Log multiple arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">warn</i>(
                  <i className="text-orange-400">
                    &quot;Memory usage high:&quot;
                  </i>
                  , <i className="text-orange-400">&quot;85%&quot;</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Mix string and non-string arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">warn</i>(
                  <i className="text-orange-400">
                    &quot;Retries remaining:&quot;
                  </i>
                  , <i className="text-orange-400">3</i>);
                </div>
              ),
              snippet: `import betterConsole from "ts-better-console";

// Log a warning message (displayed in yellow)
betterConsole.warn("Deprecated API usage detected");

// Log multiple arguments
betterConsole.warn("Memory usage high:", "85%");

// Mix string and non-string arguments
betterConsole.warn("Retries remaining:", 3);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
