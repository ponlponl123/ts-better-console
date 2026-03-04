import Code from "@/src/components/code";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>RGBColorValue</h1>
        <p>
          <code>RGBColorValue</code> is an object type representing a full
          24-bit true color as red, green, and blue channel values (0–255 each).
          It is produced by the{" "}
          <Link href="/docs/functions/rgb">
            <code>rgb(r, g, b)</code>
          </Link>{" "}
          or{" "}
          <Link href="/docs/functions/hex">
            <code>hex(str)</code>
          </Link>{" "}
          helpers and is part of the{" "}
          <Link href="/docs/types/any-color">
            <code>AnyColor</code>
          </Link>{" "}
          union. Supported by every modern terminal.
        </p>

        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "RGBColorValue",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">RGBColorValue</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">__type</i>:{" "}
                  <span className="text-orange-400">&quot;rgb&quot;</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">r</i>:{" "}
                  <span className="text-orange-400">number</span>;
                  <span className="text-zinc-500"> {"// 0–255"}</span>
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">g</i>:{" "}
                  <span className="text-orange-400">number</span>;
                  <span className="text-zinc-500"> {"// 0–255"}</span>
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">b</i>:{" "}
                  <span className="text-orange-400">number</span>;
                  <span className="text-zinc-500"> {"// 0–255"}</span>
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface RGBColorValue {
  __type: "rgb";
  r: number; // 0–255
  g: number; // 0–255
  b: number; // 0–255
}`,
            },
          ]}
        />

        <h2 className="mt-8">Properties</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>__type</code>: Discriminant literal{" "}
            <code>&quot;rgb&quot;</code> — used internally by{" "}
            <code>getColorCode()</code> to select the{" "}
            <code>ESC[38;2;r;g;bm</code> / <code>ESC[48;2;r;g;bm</code> SGR
            sequence.
          </li>
          <li>
            <code>r</code>: Red channel intensity, clamped to 0–255.
          </li>
          <li>
            <code>g</code>: Green channel intensity, clamped to 0–255.
          </li>
          <li>
            <code>b</code>: Blue channel intensity, clamped to 0–255.
          </li>
        </ul>
        <p className="mt-2">
          The <code>__type</code> field is managed by the library — do not set
          it manually. Always use the{" "}
          <Link href="/docs/functions/rgb">
            <code>rgb()</code>
          </Link>{" "}
          or{" "}
          <Link href="/docs/functions/hex">
            <code>hex()</code>
          </Link>{" "}
          factories, which also clamp all channel values to 0–255.
        </p>

        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Create via rgb()",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rgb</i>,{" "}
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
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Custom color!&quot;</i>,{" "}
                  {"{"} <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">rgb</i>(
                  <i className="text-orange-400">255, 140, 0</i>) {"}"}));
                </div>
              ),
              snippet: `import { rgb, s } from "ts-better-console";

console.log(s("Custom color!", { color: rgb(255, 140, 0) }));`,
            },
            {
              title: "Create via hex()",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">hex</i>,{" "}
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
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Hex color!&quot;</i>,{" "}
                  {"{"} <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">hex</i>(
                  <i className="text-orange-400">&quot;#ff8c00&quot;</i>) {"}"}
                  ));
                </div>
              ),
              snippet: `import { hex, s } from "ts-better-console";

console.log(s("Hex color!", { color: hex("#ff8c00") }));`,
            },
            {
              title: "As a Gradient Stop",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rgb</i>,{" "}
                  <i className="text-blue-400">gradient</i> {"}"}{" "}
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
                    <i className="text-yellow-400">gradient</i>(
                    <i className="text-orange-400">
                      &quot;Sunset gradient!&quot;
                    </i>
                    , [<i className="text-yellow-400">rgb</i>(
                    <i className="text-orange-400">255, 94, 77</i>),{" "}
                    <i className="text-yellow-400">rgb</i>(
                    <i className="text-orange-400">255, 165, 0</i>)]),
                  </div>
                  );
                </div>
              ),
              snippet: `import { rgb, gradient } from "ts-better-console";

console.log(
  gradient("Sunset gradient!", [rgb(255, 94, 77), rgb(255, 165, 0)]),
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
                  <i className="text-blue-400">RGBColorValue</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                </div>
              ),
              snippet: `import type { RGBColorValue } from "ts-better-console";`,
            },
          ]}
        />

        <h2 className="mt-8">Related</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link href="/docs/functions/rgb">
              <code>rgb(r, g, b)</code>
            </Link>{" "}
            — factory function for <code>RGBColorValue</code>
          </li>
          <li>
            <Link href="/docs/functions/hex">
              <code>hex(str)</code>
            </Link>{" "}
            — create an <code>RGBColorValue</code> from a hex string
          </li>
          <li>
            <Link href="/docs/types/eight-bit-color-value">
              <code>EightBitColorValue</code>
            </Link>{" "}
            — 8-bit (256-color) alternative
          </li>
          <li>
            <Link href="/docs/types/extended-color">
              <code>ExtendedColor</code>
            </Link>{" "}
            — union of both object-based color types
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
