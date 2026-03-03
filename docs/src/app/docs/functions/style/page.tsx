import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>
          s (similar to <code>style</code>)
        </h1>
        <p>
          The <code>s</code> function applies ANSI styles to a string for
          terminal output. It supports text color, background color, and text
          styles like bold, italic, underline, and strikethrough. By default, it
          appends a reset code at the end of the string.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">s</i>(
                  <i className="text-cyan-600">str</i>:{" "}
                  <span className="text-orange-400">string</span>,{" "}
                  <i className="text-cyan-600">style</i>:{" "}
                  <span className="text-cyan-400">StyleOptions</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function s(str: string, style: StyleOptions): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>str</code>: The string to style.
          </li>
          <li>
            <code>style</code>: A <code>StyleOptions</code> object with:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>
                <code>color</code>: Text color (e.g.{" "}
                <code>&quot;red&quot;</code>, <code>&quot;cyan&quot;</code>,{" "}
                <code>&quot;green&quot;</code>).
              </li>
              <li>
                <code>backgroundColor</code>: Background color.
              </li>
              <li>
                <code>styles</code>: Array of text styles —{" "}
                <code>&quot;bold&quot;</code>, <code>&quot;italic&quot;</code>,{" "}
                <code>&quot;underline&quot;</code>,{" "}
                <code>&quot;strikethrough&quot;</code>.
              </li>
              <li>
                <code>endless</code>: If <code>true</code>, omits the reset code
                at the end, allowing style to bleed into subsequent text.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns a <code>string</code> with ANSI escape codes applied.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">// Red text</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Error!&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;red&quot;</i> {"}"}));
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Bold cyan with background
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Highlight&quot;</i>,{" "}
                  {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;cyan&quot;</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-orange-400">&quot;blue&quot;</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">styles</i>: [
                    <i className="text-orange-400">&quot;bold&quot;</i>],
                  </div>
                  {"}"}));
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Endless mode (no reset at end)
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;keeps going&quot;</i>,{" "}
                  {"{"} <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;green&quot;</i>,{" "}
                  <i className="text-blue-400">endless</i>:{" "}
                  <i className="text-orange-400">true</i> {"}"}));
                </div>
              ),
              snippet: `import { s } from "ts-better-console";

// Red text
console.log(s("Error!", { color: "red" }));

// Bold cyan with background
console.log(s("Highlight", {
  color: "cyan",
  backgroundColor: "blue",
  styles: ["bold"],
}));

// Endless mode (no reset at end)
console.log(s("keeps going", { color: "green", endless: true }));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
