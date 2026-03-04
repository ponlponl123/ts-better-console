import Code from "@/src/components/code";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Rainbow Color Constants</h1>
        <p>
          A collection of constants that define the color palettes used by the{" "}
          <Link href="/docs/functions/rainbow">
            <code>rainbow()</code>
          </Link>{" "}
          function and the progress bar&apos;s rainbow animation. There are
          three palettes — standard (4-bit), extended (8-bit, smooth gradient),
          and pastel — each paired with a pre-computed array of raw ANSI escape
          strings for direct use.
        </p>

        {/* ── Standard ── */}
        <h2 className="mt-8">rainbowColors &amp; rainbowASCIICodes</h2>
        <p>
          Six 4-bit named colors used by <code>rainbow(str)</code> in standard
          mode.
        </p>
        <Code
          codesnippets={[
            {
              title: "rainbowColors & rainbowASCIICodes",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">rainbowColors</i>:{" "}
                  <span className="text-cyan-400">Color</span>[] = [
                  <div className="ml-4">
                    <i className="text-orange-400">&quot;red&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;yellow&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;green&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;cyan&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;blue&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;magenta&quot;</i>,
                  </div>
                  ];
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Pre-mapped ANSI escape sequences (same order)"}
                  </i>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">rainbowASCIICodes</i>:{" "}
                  <span className="text-orange-400">string</span>[] ={" "}
                  <i className="text-blue-400">rainbowColors</i>.
                  <i className="text-yellow-400">map</i>(
                  <i className="text-blue-400">c</i> =&gt;{" "}
                  <span className="text-cyan-400">Colors</span>[
                  <i className="text-blue-400">c</i>]);
                </div>
              ),
              snippet: `const rainbowColors: Color[] = [
  "red",
  "yellow",
  "green",
  "cyan",
  "blue",
  "magenta",
];

// Pre-mapped ANSI escape sequences (same order)
const rainbowASCIICodes: string[] = rainbowColors.map(c => Colors[c]);`,
            },
          ]}
        />
        <table className="w-full text-sm border-collapse mt-4">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left p-2">Index</th>
              <th className="text-left p-2">Color</th>
              <th className="text-left p-2">ANSI code</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0", "red", "\\x1b[31m"],
              ["1", "yellow", "\\x1b[33m"],
              ["2", "green", "\\x1b[32m"],
              ["3", "cyan", "\\x1b[36m"],
              ["4", "blue", "\\x1b[34m"],
              ["5", "magenta", "\\x1b[35m"],
            ].map(([i, color, code]) => (
              <tr key={i} className="border-b border-zinc-800">
                <td className="p-2 text-zinc-400">{i}</td>
                <td className="p-2 text-orange-400">{color}</td>
                <td className="p-2 text-zinc-400 font-mono">{code}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── Extended ── */}
        <h2 className="mt-10">
          rainbowColorsExtended &amp; rainbowExtendedASCIICodes
        </h2>
        <p>
          A 26-stop 8-bit palette used by <code>rainbow(str, true)</code>{" "}
          (smooth mode) and the progress bar{" "}
          <code>&quot;rainbow-smooth&quot;</code> animation. Colors span the
          full spectrum from bright red through orange, yellow, green, teal,
          cyan, blue, and into purple-magenta.
        </p>
        <Code
          codesnippets={[
            {
              title: "rainbowColorsExtended & rainbowExtendedASCIICodes",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">rainbowColorsExtended</i>:{" "}
                  <span className="text-orange-400">number</span>[] = [
                  <div className="ml-4 text-zinc-400">
                    196, 202, 208, 214, 220, 226,{" "}
                    <span className="text-zinc-500">{"// red → yellow"}</span>
                    <br />
                    184, 190, 154, 118, 82, 46,{" "}
                    <span className="text-zinc-500">{"// yellow → green"}</span>
                    <br />
                    47, 48, 50, 51, 44, 39, 33, 27, 21,{" "}
                    <span className="text-zinc-500">{"// green → blue"}</span>
                    <br />
                    57, 93, 129, 165, 201,{" "}
                    <span className="text-zinc-500">{"// blue → magenta"}</span>
                  </div>
                  ];
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">rainbowExtendedASCIICodes</i>:{" "}
                  <span className="text-orange-400">string</span>[] ={" "}
                  <i className="text-blue-400">rainbowColorsExtended</i>.
                  <i className="text-yellow-400">map</i>(
                  <i className="text-blue-400">c</i> =&gt;{" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-blue-400">c</i>),{" "}
                  <i className="text-purple-500">false</i>));
                </div>
              ),
              snippet: `const rainbowColorsExtended: number[] = [
  196, 202, 208, 214, 220, 226, // red → yellow
  184, 190, 154, 118,  82,  46, // yellow → green
   47,  48,  50,  51,  44,  39,
   33,  27,  21,               // green → blue
   57,  93, 129, 165, 201,     // blue → magenta
];

const rainbowExtendedASCIICodes: string[] =
  rainbowColorsExtended.map(c => getColorCode(eightBit(c), false));`,
            },
          ]}
        />

        {/* ── Pastel ── */}
        <h2 className="mt-10">rainbowPastelColors</h2>
        <p>
          A 7-stop pastel 8-bit palette (pink → peach → yellow → green → cyan →
          blue → purple) available for custom cycling. Not currently used by any
          built-in function but exported for manual use.
        </p>
        <Code
          codesnippets={[
            {
              title: "rainbowPastelColors",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">rainbowPastelColors</i>:{" "}
                  <span className="text-orange-400">number</span>[] = [
                  <div className="ml-4 text-zinc-400">
                    217,{" "}
                    <span className="text-zinc-500">{"// pastel pink"}</span>
                    <br />
                    223,{" "}
                    <span className="text-zinc-500">{"// pastel peach"}</span>
                    <br />
                    229,{" "}
                    <span className="text-zinc-500">{"// pastel yellow"}</span>
                    <br />
                    120,{" "}
                    <span className="text-zinc-500">{"// pastel green"}</span>
                    <br />
                    159,{" "}
                    <span className="text-zinc-500">{"// pastel cyan"}</span>
                    <br />
                    147,{" "}
                    <span className="text-zinc-500">{"// pastel blue"}</span>
                    <br />
                    183,{" "}
                    <span className="text-zinc-500">{"// pastel purple"}</span>
                  </div>
                  ];
                </div>
              ),
              snippet: `const rainbowPastelColors: number[] = [
  217, // pastel pink
  223, // pastel peach
  229, // pastel yellow
  120, // pastel green
  159, // pastel cyan
  147, // pastel blue
  183, // pastel purple
];`,
            },
          ]}
        />
        <table className="w-full text-sm border-collapse mt-4">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left p-2">Index</th>
              <th className="text-left p-2">Code</th>
              <th className="text-left p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0", "217", "pastel pink"],
              ["1", "223", "pastel peach"],
              ["2", "229", "pastel yellow"],
              ["3", "120", "pastel green"],
              ["4", "159", "pastel cyan"],
              ["5", "147", "pastel blue"],
              ["6", "183", "pastel purple"],
            ].map(([i, code, desc]) => (
              <tr key={i} className="border-b border-zinc-800">
                <td className="p-2 text-zinc-400">{i}</td>
                <td className="p-2 text-orange-400 font-mono">{code}</td>
                <td className="p-2 text-zinc-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── Usage ── */}
        <h2 className="mt-10">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Custom Rainbow Loop",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rainbowColors</i>,{" "}
                  <i className="text-blue-400">rainbowASCIICodes</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Cycle through the palette manually"}
                  </i>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">words</i> = [
                  <i className="text-orange-400">&quot;hello&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;world&quot;</i>];
                  <br />
                  <i className="text-blue-400">words</i>.
                  <i className="text-yellow-400">forEach</i>((
                  <i className="text-blue-400">w</i>,{" "}
                  <i className="text-blue-400">i</i>) =&gt; {"{"}
                  <div className="ml-4">
                    <i className="text-purple-400">const</i>{" "}
                    <i className="text-blue-400">code</i> ={" "}
                    <i className="text-blue-400">rainbowASCIICodes</i>[
                    <i className="text-blue-400">i</i> %{" "}
                    <i className="text-blue-400">rainbowASCIICodes</i>.
                    <i className="text-cyan-600">length</i>];
                    <br />
                    <i className="text-emerald-400">process</i>.
                    <i className="text-cyan-600">stdout</i>.
                    <i className="text-yellow-400">write</i>(
                    <i className="text-blue-400">code</i> +{" "}
                    <i className="text-blue-400">w</i> +{" "}
                    <i className="text-blue-400">cls</i> +{" "}
                    <i className="text-orange-400">&quot; &quot;</i>);
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { rainbowColors, rainbowASCIICodes, cls } from "ts-better-console";

// Cycle through the palette manually
const words = ["hello", "world"];
words.forEach((w, i) => {
  const code = rainbowASCIICodes[i % rainbowASCIICodes.length];
  process.stdout.write(code + w + cls + " ");
});`,
            },
            {
              title: "Custom Smooth-Palette Loop",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rainbowExtendedASCIICodes</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">text</i> ={" "}
                  <i className="text-orange-400">&quot;smooth rainbow!&quot;</i>
                  ;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">len</i> ={" "}
                  <i className="text-blue-400">rainbowExtendedASCIICodes</i>.
                  <i className="text-cyan-600">length</i>;
                  <br />
                  <i className="text-blue-400">text</i>.
                  <i className="text-yellow-400">split</i>(
                  <i className="text-orange-400">&quot;&quot;</i>).
                  <i className="text-yellow-400">forEach</i>((
                  <i className="text-blue-400">ch</i>,{" "}
                  <i className="text-blue-400">i</i>) =&gt; {"{"}
                  <div className="ml-4">
                    <i className="text-emerald-400">process</i>.
                    <i className="text-cyan-600">stdout</i>.
                    <i className="text-yellow-400">write</i>(
                    <i className="text-blue-400">rainbowExtendedASCIICodes</i>[
                    <i className="text-blue-400">i</i> %{" "}
                    <i className="text-blue-400">len</i>] +{" "}
                    <i className="text-blue-400">ch</i> +{" "}
                    <i className="text-blue-400">cls</i>);
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { rainbowExtendedASCIICodes, cls } from "ts-better-console";

const text = "smooth rainbow!";
const len = rainbowExtendedASCIICodes.length;
text.split("").forEach((ch, i) => {
  process.stdout.write(rainbowExtendedASCIICodes[i % len] + ch + cls);
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
