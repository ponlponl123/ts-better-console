import Code from "@/src/components/code";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Color Types</h1>
        <p>
          <strong>ts-better-console</strong> uses a small hierarchy of types to
          represent terminal colors. At the top sits <code>AnyColor</code>,
          which is accepted everywhere a color can be specified — in{" "}
          <Link href="/docs/types/style-options">
            <code>StyleOptions</code>
          </Link>
          ,{" "}
          <Link href="/docs/types/unspecified-color">
            <code>UnSpecifiedColor</code>
          </Link>
          , and the helper functions{" "}
          <Link href="/docs/functions/gradient">
            <code>gradient()</code>
          </Link>
          .
        </p>

        <h2 className="mt-8">Color</h2>
        <p>
          The base named-color union — nine strings mapping to the standard
          4-bit ANSI foreground palette:
        </p>
        <Code
          codesnippets={[
            {
              title: "Color",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Color</i> =
                  <div className="ml-4">
                    | <span className="text-orange-400">"black"</span>
                    <br />| <span className="text-orange-400">"red"</span>
                    <br />| <span className="text-orange-400">"green"</span>
                    <br />| <span className="text-orange-400">"yellow"</span>
                    <br />| <span className="text-orange-400">"blue"</span>
                    <br />| <span className="text-orange-400">"magenta"</span>
                    <br />| <span className="text-orange-400">"cyan"</span>
                    <br />| <span className="text-orange-400">"white"</span>
                    <br />| <span className="text-orange-400">"gray"</span>;
                  </div>
                </div>
              ),
              snippet: `type Color =
  | "black" | "red"   | "green"  | "yellow"
  | "blue"  | "magenta" | "cyan"  | "white"
  | "gray";`,
            },
          ]}
        />

        <h2 className="mt-8">EightBitColorValue</h2>
        <p>
          Produced by{" "}
          <Link href="/docs/functions/eight-bit">
            <code>eightBit(code)</code>
          </Link>
          . Selects a color from the 256-color xterm palette (codes 0–255).
        </p>
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
                  <span className="text-orange-400">"8bit"</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">code</i>:{" "}
                  <span className="text-orange-400">number</span>;
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

        <h2 className="mt-8">RGBColorValue</h2>
        <p>
          Produced by{" "}
          <Link href="/docs/functions/rgb">
            <code>rgb(r, g, b)</code>
          </Link>{" "}
          or{" "}
          <Link href="/docs/functions/hex">
            <code>hex(hexStr)</code>
          </Link>
          . Full 24-bit true color — supported by every modern terminal.
        </p>
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
                  <span className="text-orange-400">"rgb"</span>;
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

        <h2 className="mt-8">ExtendedColor</h2>
        <p>
          Union of the two object-based color types. Any function that accepts{" "}
          <code>AnyColor</code> can also accept an <code>ExtendedColor</code>{" "}
          directly.
        </p>
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

        <h2 className="mt-8">AnyColor</h2>
        <p>
          The top-level color type accepted everywhere throughout the library.
          Named 4-bit strings, 8-bit palette objects, and 24-bit RGB objects are
          all valid.
        </p>
        <Code
          codesnippets={[
            {
              title: "AnyColor",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">AnyColor</i> ={" "}
                  <span className="text-cyan-400">Color</span> |{" "}
                  <span className="text-cyan-400">ExtendedColor</span>;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// All three of these are valid AnyColor values:"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">a</i>:{" "}
                  <span className="text-cyan-400">AnyColor</span> ={" "}
                  <i className="text-orange-400">"cyan"</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">b</i>:{" "}
                  <span className="text-cyan-400">AnyColor</span> ={" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-orange-400">208</i>);
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">c</i>:{" "}
                  <span className="text-cyan-400">AnyColor</span> ={" "}
                  <i className="text-yellow-400">rgb</i>(
                  <i className="text-orange-400">255, 136, 0</i>);
                </div>
              ),
              snippet: `type AnyColor = Color | ExtendedColor;

// All three of these are valid AnyColor values:
const a: AnyColor = "cyan";
const b: AnyColor = eightBit(208);
const c: AnyColor = rgb(255, 136, 0);`,
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
                  <i className="text-blue-400">AnyColor</i>,{" "}
                  <i className="text-blue-400">Color</i>,{" "}
                  <i className="text-blue-400">ExtendedColor</i>,
                  <br />
                  &nbsp;&nbsp;
                  <i className="text-blue-400">EightBitColorValue</i>,{" "}
                  <i className="text-blue-400">RGBColorValue</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                </div>
              ),
              snippet: `import type {
  AnyColor,
  Color,
  ExtendedColor,
  EightBitColorValue,
  RGBColorValue,
} from "ts-better-console";`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
