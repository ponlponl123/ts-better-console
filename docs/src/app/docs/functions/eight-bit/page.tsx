import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>eightBit</h1>
        <p>
          The <code>eightBit()</code> function creates an 8-bit color value that
          can be passed to the <code>color</code> or{" "}
          <code>backgroundColor</code> properties of <code>StyleOptions</code>.
          It accepts a code number from 0 to 255.
        </p>

        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-cyan-600">code</i>:{" "}
                  <span className="text-orange-400">number</span>):{" "}
                  <span className="text-cyan-400">EightBitColorValue</span>
                </div>
              ),
              snippet: `function eightBit(code: number): EightBitColorValue`,
            },
          ]}
        />

        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>code</code>: A number from 0 to 255 (clamped and truncated
            automatically). Can use the <code>EightBitColor</code> enum for
            named values.
          </li>
        </ul>

        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns an <code>EightBitColorValue</code> object:{" "}
          <code>{'{ __type: "8bit", code: number }'}</code>
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
                  <i className="text-blue-400">eightBit</i>,{" "}
                  <i className="text-blue-400">EightBitColor</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">{"// Raw code number"}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Orange&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-orange-400">208</i>) {"}"}));
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// With EightBitColor enum"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Pink&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-emerald-400">EightBitColor</i>.
                  <i className="text-blue-400">Pink</i>) {"}"}));
                  <br />
                  <br />
                  <span className="text-zinc-500">{"// As background"}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;bg&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">backgroundColor</i>:{" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-orange-400">123</i>) {"}"}));
                </div>
              ),
              snippet: `import { s, eightBit, EightBitColor } from "ts-better-console";

// Raw code number
console.log(s("Orange", { color: eightBit(208) }));

// With EightBitColor enum
console.log(s("Pink", { color: eightBit(EightBitColor.Pink) }));

// As background
console.log(s("bg", { backgroundColor: eightBit(123) }));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
