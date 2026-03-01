import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>info</h1>
        <p>
          The <code>info</code> method logs messages to the terminal using{" "}
          <code>console.info</code> with an automatic{" "}
          <span className="text-cyan-400 font-semibold">cyan</span> color
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
                  <i className="text-yellow-400">info</i>(
                  <i className="text-cyan-600">...args</i>:{" "}
                  <span className="text-orange-400">any</span>[]):{" "}
                  <span className="text-purple-500">void</span>
                </div>
              ),
              snippet: `betterConsole.info(...args: any[]): void`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>...args</code>: One or more values to log. String arguments
            are automatically styled with{" "}
            <span className="text-cyan-400 font-semibold">cyan</span> color.
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
                    // Log an info message (displayed in cyan)
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">info</i>(
                  <i className="text-orange-400">
                    &quot;Server started on port 3000&quot;
                  </i>
                  );
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Log multiple arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">info</i>(
                  <i className="text-orange-400">
                    &quot;Connected to database:&quot;
                  </i>
                  , <i className="text-orange-400">&quot;mydb&quot;</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Mix string and non-string arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">info</i>(
                  <i className="text-orange-400">&quot;Request count:&quot;</i>,{" "}
                  <i className="text-orange-400">42</i>);
                </div>
              ),
              snippet: `import betterConsole from "ts-better-console";

// Log an info message (displayed in cyan)
betterConsole.info("Server started on port 3000");

// Log multiple arguments
betterConsole.info("Connected to database:", "mydb");

// Mix string and non-string arguments
betterConsole.info("Request count:", 42);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
