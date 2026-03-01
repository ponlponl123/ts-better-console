import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>clear</h1>
        <p>
          The <code>clear</code> method clears the entire terminal screen by
          calling <code>console.clear()</code>. This resets the visible output
          in the terminal.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Method Signature",
              code: (
                <div>
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">clear</i>():{" "}
                  <span className="text-purple-500">void</span>
                </div>
              ),
              snippet: `betterConsole.clear(): void`,
            },
          ]}
        />
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
                    // Clear the terminal screen
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">clear</i>();
                  <br />
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">&quot;Fresh start!&quot;</i>);
                </div>
              ),
              snippet: `import betterConsole from "ts-better-console";

// Clear the terminal screen
betterConsole.clear();

betterConsole.log("Fresh start!");`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
