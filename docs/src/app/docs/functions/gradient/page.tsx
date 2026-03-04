import Code from "@/src/components/code";
import Image from "@/src/components/image";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>gradient</h1>
        <p>
          The <code>gradient()</code> function applies a smooth multi-stop color
          gradient across a string, coloring each character individually. All
          three color levels — named 4-bit strings, 8-bit palette codes, and
          24-bit RGB values — are accepted as stops. Under the hood every stop
          is converted to RGB and linearly interpolated per character, so you
          get pixel-perfect blending regardless of which color type you mix.
        </p>
        <p>
          This is the lower-level building block behind the smooth mode of{" "}
          <code>rainbow()</code>, and it gives you full control over which
          colors to blend and over what span.
        </p>
        <Image
          src="/previews/gradient.png"
          alt="Example of ts-better-console gradient function in action"
          className="w-full"
        />

        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">gradient</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-cyan-600">text</i>:{" "}
                    <span className="text-orange-400">string</span>,
                    <br />
                    <i className="text-cyan-600">colors</i>:{" "}
                    <span className="text-cyan-400">AnyColor</span>[],
                    <br />
                    <i className="text-cyan-600">isBackground</i>?:{" "}
                    <span className="text-purple-500">boolean</span>,
                    <br />
                    <i className="text-cyan-600">size</i>?:{" "}
                    <span className="text-orange-400">number</span>,
                    <br />
                  </div>
                  ): <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function gradient(
  text: string,
  colors: AnyColor[],
  isBackground?: boolean,
  size?: number,
): string`,
            },
          ]}
        />

        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <code>text</code> — the string to colorize. Unicode code points are
            handled correctly (a multi-byte emoji counts as one character).
          </li>
          <li>
            <code>colors</code> — two or more color stops. The first stop is
            applied at the start of the string and the last at the end; any
            stops in between divide the string into equal segments. Accepts any{" "}
            <code>AnyColor</code>: named strings like{" "}
            <code>&quot;cyan&quot;</code>, <code>eightBit()</code> values, or{" "}
            <code>rgb()</code> / <code>hex()</code> values — or any mix of the
            three.
          </li>
          <li>
            <code>isBackground</code> — when <code>true</code>, the gradient is
            applied to the character background instead of the foreground.
            Defaults to <code>false</code>.
          </li>
          <li>
            <code>size</code> — the virtual width used for the interpolation
            position calculation. Defaults to <code>text.length</code>. Setting
            this to a fixed number lets you render the same gradient across
            strings of different lengths (for example, two lines of a multi-line
            banner).
          </li>
        </ul>

        <h2 className="mt-8">Return Value</h2>
        <p>
          A new string where each character is wrapped in the appropriate ANSI
          foreground (or background) escape sequence. The return value ends with
          a default-color reset so text printed after it is unaffected.
        </p>

        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Two-stop gradient",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">gradient</i>,{" "}
                  <i className="text-blue-400">rgb</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Fade from cyan to magenta"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-yellow-400">gradient</i>(
                    <i className="text-orange-400">
                      &quot;Hello, gradient!&quot;
                    </i>
                    , [<i className="text-orange-400">&quot;cyan&quot;</i>,{" "}
                    <i className="text-orange-400">&quot;magenta&quot;</i>])
                  </div>
                  );
                </div>
              ),
              snippet: `import { gradient, rgb } from "ts-better-console";

// Fade from cyan to magenta
console.log(
  gradient("Hello, gradient!", ["cyan", "magenta"])
);`,
            },
            {
              title: "Multi-stop gradient with mixed color types",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">gradient</i>,{" "}
                  <i className="text-blue-400">rgb</i>,{" "}
                  <i className="text-blue-400">eightBit</i>,{" "}
                  <i className="text-blue-400">EightBitColor</i>,{" "}
                  <i className="text-blue-400">hex</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Sunset: red → orange → yellow → pink"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-yellow-400">gradient</i>(
                    <i className="text-orange-400">
                      &quot;Sunset gradient text&quot;
                    </i>
                    , [
                    <br />
                    <div className="ml-4">
                      <i className="text-yellow-400">rgb</i>(
                      <i className="text-orange-400">220, 30, 30</i>),
                      <br />
                      <i className="text-yellow-400">eightBit</i>(
                      <i className="text-emerald-400">EightBitColor</i>.
                      <i className="text-blue-400">Orange</i>),
                      <br />
                      <i className="text-yellow-400">hex</i>(
                      <i className="text-orange-400">&quot;#ffe066&quot;</i>
                      ),
                      <br />
                      <i className="text-yellow-400">rgb</i>(
                      <i className="text-orange-400">255, 120, 200</i>),
                      <br />
                    </div>
                    ])
                  </div>
                  );
                </div>
              ),
              snippet: `import { gradient, rgb, eightBit, EightBitColor, hex } from "ts-better-console";

// Sunset: red → orange → yellow → pink
console.log(
  gradient("Sunset gradient text", [
    rgb(220, 30, 30),
    eightBit(EightBitColor.Orange),
    hex("#ffe066"),
    rgb(255, 120, 200),
  ])
);`,
            },
            {
              title: "Background gradient",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">gradient</i>,{" "}
                  <i className="text-blue-400">hex</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// isBackground = true → gradient applied to background"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-yellow-400">gradient</i>(
                    <i className="text-orange-400">
                      &quot; Background fade &quot;
                    </i>
                    , [<i className="text-yellow-400">hex</i>(
                    <i className="text-orange-400">&quot;#1e1e2e&quot;</i>),{" "}
                    <i className="text-yellow-400">hex</i>(
                    <i className="text-orange-400">&quot;#3b82f6&quot;</i>)],{" "}
                    <i className="text-purple-500">true</i>)
                  </div>
                  );
                </div>
              ),
              snippet: `import { gradient, hex } from "ts-better-console";

// isBackground = true → gradient applied to background
console.log(
  gradient("  Background fade  ", [hex("#1e1e2e"), hex("#3b82f6")], true)
);`,
            },
            {
              title: "Fixed size for consistent multi-line gradients",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">gradient</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {
                      "// Both lines use the same virtual width (30) so the gradient"
                    }
                  </span>
                  <br />
                  <span className="text-zinc-500">
                    {"// stays in sync even though they have different lengths"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">stops</i> = [
                  <i className="text-orange-400">&quot;blue&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;cyan&quot;</i>];
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">gradient</i>(
                  <i className="text-orange-400">&quot;Short line&quot;</i>,{" "}
                  <i className="text-blue-400">stops</i>,{" "}
                  <i className="text-purple-500">false</i>,{" "}
                  <i className="text-orange-400">30</i>));
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">gradient</i>(
                  <i className="text-orange-400">
                    &quot;A much longer line here&quot;
                  </i>
                  , <i className="text-blue-400">stops</i>,{" "}
                  <i className="text-purple-500">false</i>,{" "}
                  <i className="text-orange-400">30</i>));
                </div>
              ),
              snippet: `import { gradient } from "ts-better-console";

// Both lines use the same virtual width (30) so the gradient
// stays in sync even though they have different lengths
const stops = ["blue", "cyan"];
console.log(gradient("Short line",             stops, false, 30));
console.log(gradient("A much longer line here", stops, false, 30));`,
            },
          ]}
        />

        <h2 className="mt-8">Notes</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Passes an empty string through unchanged.</li>
          <li>
            A single color stop behaves like a plain <code>s()</code> call — the
            whole string is painted that one color.
          </li>
          <li>
            All color types are normalized to RGB internally for interpolation,
            so mixing named strings, <code>eightBit()</code>, and{" "}
            <code>rgb()</code> / <code>hex()</code> in the same stop list works
            fine.
          </li>
          <li>
            The output is a regular string with embedded ANSI codes — it can be
            passed to <code>console.log</code>, concatenated, or used inside a{" "}
            <code>cs()</code> call.
          </li>
        </ul>

        <h2 className="mt-8">Import</h2>
        <Code
          codesnippets={[
            {
              title: "Import",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">gradient</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                </div>
              ),
              snippet: `import { gradient } from "ts-better-console";`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
