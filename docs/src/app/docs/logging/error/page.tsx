import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>error</h1>
        <p>
          The <code>error</code> method logs error messages to the terminal
          using <code>console.error</code> with an automatic{" "}
          <span className="text-red-400 font-semibold">red</span> color applied
          to all string arguments. Non-string arguments are passed through
          unchanged.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Method Signature",
              code: (
                <div>
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">error</i>(
                  <i className="text-cyan-600">...args</i>:{" "}
                  <span className="text-orange-400">any</span>[]):{" "}
                  <span className="text-purple-500">void</span>
                </div>
              ),
              snippet: `betterConsole.error(...args: any[]): void`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>...args</code>: One or more values to log. String arguments
            are automatically styled with{" "}
            <span className="text-red-400 font-semibold">red</span> color.
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
                    // Log an error message (displayed in red)
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">error</i>(
                  <i className="text-orange-400">
                    &quot;Failed to connect to database&quot;
                  </i>
                  );
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Log multiple arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">error</i>(
                  <i className="text-orange-400">&quot;File not found:&quot;</i>
                  , <i className="text-orange-400">&quot;config.json&quot;</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Mix string and non-string arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">error</i>(
                  <i className="text-orange-400">&quot;Exit code:&quot;</i>,{" "}
                  <i className="text-orange-400">1</i>);
                </div>
              ),
              snippet: `import betterConsole from "ts-better-console";

// Log an error message (displayed in red)
betterConsole.error("Failed to connect to database");

// Log multiple arguments
betterConsole.error("File not found:", "config.json");

// Mix string and non-string arguments
betterConsole.error("Exit code:", 1);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
