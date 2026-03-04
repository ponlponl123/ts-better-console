import Code from "@/src/components/code";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ExtendedColor</h1>
        <p>
          <code>ExtendedColor</code> is a union of the two object-based color
          types supported by <strong>ts-better-console</strong>:{" "}
          <Link href="/docs/types/eight-bit-color-value">
            <code>EightBitColorValue</code>
          </Link>{" "}
          (8-bit / 256-color) and{" "}
          <Link href="/docs/types/rgb-color-value">
            <code>RGBColorValue</code>
          </Link>{" "}
          (24-bit true color). Any API that accepts{" "}
          <Link href="/docs/types/any-color">
            <code>AnyColor</code>
          </Link>{" "}
          will also accept an <code>ExtendedColor</code> directly.
        </p>

        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "ExtendedColor",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">ExtendedColor</i> ={" "}
                  <span className="text-cyan-400">EightBitColorValue</span> |{" "}
                  <span className="text-cyan-400">RGBColorValue</span>;
                </div>
              ),
              snippet: `type ExtendedColor = EightBitColorValue | RGBColorValue;`,
            },
          ]}
        />

        <h2 className="mt-8">When to use ExtendedColor</h2>
        <p>
          Use <code>ExtendedColor</code> when you want to accept or pass any
          object-based color value (8-bit or 24-bit) but explicitly exclude
          named 4-bit string colors like <code>&quot;red&quot;</code> or{" "}
          <code>&quot;cyan&quot;</code>. This is useful for type-narrowing
          utilities or function parameters where you know the caller will not
          pass a plain color name.
        </p>
        <p className="mt-2">
          For most use cases, prefer{" "}
          <Link href="/docs/types/any-color">
            <code>AnyColor</code>
          </Link>{" "}
          which includes named colors as well.
        </p>

        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Type Narrowing",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-purple-400">type</i> {"{"}{" "}
                  <i className="text-blue-400">ExtendedColor</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">eightBit</i>,{" "}
                  <i className="text-blue-400">rgb</i>,{" "}
                  <i className="text-blue-400">getColorCode</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">applyExtended</i>(
                  <i className="text-cyan-600">color</i>:{" "}
                  <span className="text-cyan-400">ExtendedColor</span>) {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-purple-400">const</i>{" "}
                    <i className="text-blue-400">code</i> ={" "}
                    <i className="text-yellow-400">getColorCode</i>(
                    <i className="text-blue-400">color</i>,{" "}
                    <i className="text-purple-500">false</i>);
                    <br />
                    <i className="text-emerald-400">process</i>.
                    <i className="text-cyan-600">stdout</i>.
                    <i className="text-yellow-400">write</i>(
                    <i className="text-blue-400">code</i> +{" "}
                    <i className="text-orange-400">
                      &quot;Extended color text\x1b[39m&quot;
                    </i>
                    );
                  </div>
                  {"}"}
                  <br />
                  <br />
                  <i className="text-yellow-400">applyExtended</i>(
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-orange-400">208</i>));{" "}
                  <span className="text-zinc-500">{"// orange"}</span>
                  <br />
                  <i className="text-yellow-400">applyExtended</i>(
                  <i className="text-yellow-400">rgb</i>(
                  <i className="text-orange-400">64, 196, 255</i>));{" "}
                  <span className="text-zinc-500">{"// sky blue"}</span>
                </div>
              ),
              snippet: `import type { ExtendedColor } from "ts-better-console";
import { eightBit, rgb, getColorCode } from "ts-better-console";

function applyExtended(color: ExtendedColor) {
  const code = getColorCode(color, false);
  process.stdout.write(code + "Extended color text\x1b[39m");
}

applyExtended(eightBit(208));        // orange
applyExtended(rgb(64, 196, 255));    // sky blue`,
            },
            {
              title: "All Three AnyColor Forms for Comparison",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-purple-400">type</i> {"{"}{" "}
                  <i className="text-blue-400">AnyColor</i>,{" "}
                  <i className="text-blue-400">ExtendedColor</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">eightBit</i>,{" "}
                  <i className="text-blue-400">rgb</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Named 4-bit — only valid as AnyColor"}
                  </i>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">a</i>:{" "}
                  <span className="text-cyan-400">AnyColor</span> ={" "}
                  <i className="text-orange-400">&quot;cyan&quot;</i>;
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {
                      "// Object-based — valid as both ExtendedColor and AnyColor"
                    }
                  </i>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">b</i>:{" "}
                  <span className="text-cyan-400">ExtendedColor</span> ={" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-orange-400">208</i>);
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">c</i>:{" "}
                  <span className="text-cyan-400">ExtendedColor</span> ={" "}
                  <i className="text-yellow-400">rgb</i>(
                  <i className="text-orange-400">255, 136, 0</i>);
                </div>
              ),
              snippet: `import type { AnyColor, ExtendedColor } from "ts-better-console";
import { eightBit, rgb } from "ts-better-console";

// Named 4-bit — only valid as AnyColor
const a: AnyColor = "cyan";

// Object-based — valid as both ExtendedColor and AnyColor
const b: ExtendedColor = eightBit(208);
const c: ExtendedColor = rgb(255, 136, 0);`,
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
                  <i className="text-blue-400">ExtendedColor</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                </div>
              ),
              snippet: `import type { ExtendedColor } from "ts-better-console";`,
            },
          ]}
        />

        <h2 className="mt-8">Related</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link href="/docs/types/eight-bit-color-value">
              <code>EightBitColorValue</code>
            </Link>{" "}
            — 8-bit (256-color) member of this union
          </li>
          <li>
            <Link href="/docs/types/rgb-color-value">
              <code>RGBColorValue</code>
            </Link>{" "}
            — 24-bit true color member of this union
          </li>
          <li>
            <Link href="/docs/types/any-color">
              <code>AnyColor</code>
            </Link>{" "}
            — <code>Color | ExtendedColor</code>, the top-level color union
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Page;
