import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>rgb</h1>
        <p>
          The <code>rgb()</code> function creates a 24-bit (true color) value
          from red, green, and blue channel values. Pass the result to{" "}
          <code>color</code> or <code>backgroundColor</code> in{" "}
          <code>StyleOptions</code>.
        </p>

        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">rgb</i>(
                  <i className="text-cyan-600">r</i>:{" "}
                  <span className="text-orange-400">number</span>,{" "}
                  <i className="text-cyan-600">g</i>:{" "}
                  <span className="text-orange-400">number</span>,{" "}
                  <i className="text-cyan-600">b</i>:{" "}
                  <span className="text-orange-400">number</span>):{" "}
                  <span className="text-cyan-400">RGBColorValue</span>
                </div>
              ),
              snippet: `function rgb(r: number, g: number, b: number): RGBColorValue`,
            },
          ]}
        />

        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>r</code>: Red channel (0–255, clamped automatically).
          </li>
          <li>
            <code>g</code>: Green channel (0–255, clamped automatically).
          </li>
          <li>
            <code>b</code>: Blue channel (0–255, clamped automatically).
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
                  <i className="text-blue-400">rgb</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">{"// Foreground color"}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Orange&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">rgb</i>(
                  <i className="text-orange-400">255, 136, 0</i>) {"}"}));
                  <br />
                  <br />
                  <span className="text-zinc-500">{"// Background color"}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Neon&quot;</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-yellow-400">rgb</i>(
                    <i className="text-orange-400">0, 255, 128</i>),
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-yellow-400">rgb</i>(
                    <i className="text-orange-400">20, 20, 40</i>),
                  </div>
                  {"}"}));
                </div>
              ),
              snippet: `import { s, rgb } from "ts-better-console";

// Foreground color
console.log(s("Orange", { color: rgb(255, 136, 0) }));

// Background color
console.log(s("Neon", {
  color: rgb(0, 255, 128),
  backgroundColor: rgb(20, 20, 40),
}));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
