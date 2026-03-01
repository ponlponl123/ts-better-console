import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>clearLine</h1>
        <p>
          The <code>clearLine</code> method clears the current terminal line by
          writing a carriage return followed by the ANSI erase-line escape code.
          This is useful for overwriting spinner output or progress indicators.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Method Signature",
              code: (
                <div>
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">clearLine</i>():{" "}
                  <span className="text-purple-500">void</span>
                </div>
              ),
              snippet: `betterConsole.clearLine(): void`,
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
                    // Write something, then clear it
                  </span>
                  <br />
                  <i className="text-emerald-400">process</i>.
                  <i className="text-blue-400">stdout</i>.
                  <i className="text-yellow-400">write</i>(
                  <i className="text-orange-400">&quot;Loading...&quot;</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Clear the line and write new content
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">clearLine</i>();
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">&quot;Done!&quot;</i>);
                </div>
              ),
              snippet: `import betterConsole from "ts-better-console";

// Write something, then clear it
process.stdout.write("Loading...");

// Clear the line and write new content
betterConsole.clearLine();
betterConsole.log("Done!");`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
