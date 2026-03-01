import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>log</h1>
        <p>
          The <code>log</code> method is the basic logging function in{" "}
          <strong>ts-better-console</strong>. It works like{" "}
          <code>console.log</code> but processes string arguments through the
          styling pipeline, allowing styled strings created with <code>s</code>{" "}
          to render properly in the terminal.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Method Signature",
              code: (
                <div>
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(...
                  <i className="text-cyan-600">args</i>:{" "}
                  <span className="text-orange-400">any</span>[]):{" "}
                  <span className="text-purple-500">void</span>
                </div>
              ),
              snippet: `betterConsole.log(...args: any[]): void`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>...args</code>: Any number of arguments to log. String
            arguments are processed through the style pipeline, while non-string
            arguments are passed through as-is.
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
                  <i className="text-blue-400">betterConsole</i>, {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">// Simple text log</span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">&quot;Hello, world!&quot;</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">// Log with styled text</span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Styled message&quot;</i>,{" "}
                  {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;cyan&quot;</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">styles</i>: [
                    <i className="text-orange-400">&quot;bold&quot;</i>],
                  </div>
                  {"}"}));
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Log multiple arguments
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">&quot;Count:&quot;</i>,{" "}
                  <i className="text-orange-400">42</i>,{" "}
                  <i className="text-orange-400">&quot;items&quot;</i>);
                </div>
              ),
              snippet: `import betterConsole, { s } from "ts-better-console";

// Simple text log
betterConsole.log("Hello, world!");

// Log with styled text
betterConsole.log(s("Styled message", {
  color: "cyan",
  styles: ["bold"],
}));

// Log multiple arguments
betterConsole.log("Count:", 42, "items");`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
