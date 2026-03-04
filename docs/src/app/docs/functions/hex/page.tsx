import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>hex</h1>
        <p>
          The <code>hex()</code> function converts a CSS-style hex color string
          into a 24-bit <code>RGBColorValue</code>. Accepts 6-digit (
          <code>&quot;#ff8800&quot;</code>) and 3-digit shorthand (
          <code>&quot;#f80&quot;</code>) formats, with or without the{" "}
          <code>#</code> prefix.
        </p>

        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">hex</i>(
                  <i className="text-cyan-600">hexStr</i>:{" "}
                  <span className="text-orange-400">string</span>):{" "}
                  <span className="text-cyan-400">RGBColorValue</span>
                </div>
              ),
              snippet: `function hex(hexStr: string): RGBColorValue`,
            },
          ]}
        />

        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>hexStr</code>: A hex color string. Accepts:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>
                6-digit: <code>&quot;#ff8800&quot;</code> or{" "}
                <code>&quot;ff8800&quot;</code>
              </li>
              <li>
                3-digit shorthand: <code>&quot;#f80&quot;</code> or{" "}
                <code>&quot;f80&quot;</code> (expands to{" "}
                <code>&quot;ff8800&quot;</code>)
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns an <code>RGBColorValue</code> object:{" "}
          <code>{'{ __type: "rgb", r: number, g: number, b: number }'}</code>
        </p>

        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">s</i>,{" "}
                  <i className="text-blue-400">hex</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">{"// 6-digit hex"}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Brand&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">hex</i>(
                  <i className="text-orange-400">&quot;#3b82f6&quot;</i>) {"}"}
                  ));
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// 3-digit shorthand"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Short&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">hex</i>(
                  <i className="text-orange-400">&quot;#f80&quot;</i>) {"}"}));
                  <br />
                  <br />
                  <span className="text-zinc-500">{"// Without # prefix"}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;No hash&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">hex</i>(
                  <i className="text-orange-400">&quot;ff8800&quot;</i>) {"}"}
                  ));
                  <br />
                  <br />
                  <span className="text-zinc-500">{"// As background"}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;bg&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">backgroundColor</i>:{" "}
                  <i className="text-yellow-400">hex</i>(
                  <i className="text-orange-400">&quot;#1a1a28&quot;</i>) {"}"}
                  ));
                </div>
              ),
              snippet: `import { s, hex } from "ts-better-console";

// 6-digit hex
console.log(s("Brand", { color: hex("#3b82f6") }));

// 3-digit shorthand
console.log(s("Short", { color: hex("#f80") }));

// Without # prefix
console.log(s("No hash", { color: hex("ff8800") }));

// As background
console.log(s("bg", { backgroundColor: hex("#1a1a28") }));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
