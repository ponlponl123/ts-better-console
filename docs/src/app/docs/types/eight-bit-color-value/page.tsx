import Code from "@/src/components/code";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>EightBitColorValue</h1>
        <p>
          <code>EightBitColorValue</code> is an object type representing a color
          chosen from the 256-color xterm palette (codes 0–255). It is produced
          by the{" "}
          <Link href="/docs/functions/eight-bit">
            <code>eightBit(code)</code>
          </Link>{" "}
          helper and is part of the{" "}
          <Link href="/docs/types/any-color">
            <code>AnyColor</code>
          </Link>{" "}
          union.
        </p>

        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "EightBitColorValue",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">EightBitColorValue</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">__type</i>:{" "}
                  <span className="text-orange-400">&quot;8bit&quot;</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">code</i>:{" "}
                  <span className="text-orange-400">number</span>;
                  <span className="text-zinc-500"> {"// 0–255"}</span>
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface EightBitColorValue {
  __type: "8bit";
  code: number; // 0–255
}`,
            },
          ]}
        />

        <h2 className="mt-8">Properties</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>__type</code>: Discriminant literal{" "}
            <code>&quot;8bit&quot;</code> — used internally by{" "}
            <code>getColorCode()</code> to detect the color format.
          </li>
          <li>
            <code>code</code>: An integer in the range 0–255 selecting a color
            from the xterm 256-color table:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>0–7: standard colors (same as the 4-bit named colors)</li>
              <li>8–15: high-intensity / bright variants</li>
              <li>16–231: 6×6×6 color cube</li>
              <li>232–255: grayscale ramp</li>
            </ul>
          </li>
        </ul>
        <p className="mt-2">
          The <code>__type</code> field is managed by the library — do not set
          it manually. Always use the{" "}
          <Link href="/docs/functions/eight-bit">
            <code>eightBit()</code>
          </Link>{" "}
          factory, which also clamps the code to the valid 0–255 range.
        </p>

        <h2 className="mt-8">Palette Ranges</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left p-2">Range</th>
              <th className="text-left p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0–7", "Standard colors (black, red, green, …)"],
              ["8–15", "High-intensity / bright variants"],
              ["16–231", "6×6×6 color cube (216 distinct colors)"],
              ["232–255", "Grayscale ramp from near-black to near-white"],
            ].map(([range, desc]) => (
              <tr key={range} className="border-b border-zinc-800">
                <td className="p-2 text-orange-400 font-mono">{range}</td>
                <td className="p-2 text-zinc-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Creating an EightBitColorValue",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">eightBit</i>,{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-zinc-500">{"// Orange (code 208)"}</i>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Hello!&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-orange-400">208</i>) {"}"}));
                </div>
              ),
              snippet: `import { eightBit, s } from "ts-better-console";

// Orange (code 208)
console.log(s("Hello!", { color: eightBit(208) }));`,
            },
            {
              title: "Using the EightBitColor Enum",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">eightBit</i>,{" "}
                  <i className="text-blue-400">EightBitColor</i>,{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-yellow-400">s</i>(
                    <i className="text-orange-400">&quot;Coral text&quot;</i>,{" "}
                    {"{"} <i className="text-blue-400">color</i>:{" "}
                    <i className="text-yellow-400">eightBit</i>(
                    <i className="text-cyan-400">EightBitColor</i>.
                    <i className="text-blue-400">Coral</i>) {"}"}),
                  </div>
                  );
                </div>
              ),
              snippet: `import { eightBit, EightBitColor, s } from "ts-better-console";

console.log(
  s("Coral text", { color: eightBit(EightBitColor.Coral) }),
);`,
            },
          ]}
        />

        <h2 className="mt-8">Import</h2>
        <Code
          codesnippets={[
            {
              title: "Import",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-purple-400">type</i> {"{"}{" "}
                  <i className="text-blue-400">EightBitColorValue</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                </div>
              ),
              snippet: `import type { EightBitColorValue } from "ts-better-console";`,
            },
          ]}
        />

        <h2 className="mt-8">Related</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link href="/docs/functions/eight-bit">
              <code>eightBit(code)</code>
            </Link>{" "}
            — factory that creates an <code>EightBitColorValue</code>
          </li>
          <li>
            <Link href="/docs/enums/eight-bit-color">
              <code>EightBitColor</code>
            </Link>{" "}
            — named constants for popular 8-bit color codes
          </li>
          <li>
            <Link href="/docs/types/rgb-color-value">
              <code>RGBColorValue</code>
            </Link>{" "}
            — 24-bit true color alternative
          </li>
          <li>
            <Link href="/docs/types/any-color">
              <code>AnyColor</code>
            </Link>{" "}
            — the top-level color union
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Page;
