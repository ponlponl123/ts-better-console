import Code from "@/src/components/code";
import EightBitColorGrid from "@/src/components/eight-bit-color-grid";
import ColorPicker from "@/src/components/color-picker";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Terminal Colors</h1>
        <p>
          ANSI terminals support three levels of color, each offering
          increasingly precise control. <strong>ts-better-console</strong>{" "}
          supports all three through the <code>s()</code> function and the{" "}
          <code>color</code> / <code>backgroundColor</code> properties of{" "}
          <code>StyleOptions</code>.
        </p>

        {/* ─── 4-bit ────────────────────────────────────── */}
        <h2 className="mt-8">4-bit Color (Standard)</h2>
        <p>
          The original 8 ANSI colors plus their &quot;bright&quot; variants — 16
          colors total. These are the named color strings you can pass directly:
        </p>
        <p className="text-sm text-foreground/60 mt-1">
          Escape codes: <code>ESC[30–37m</code> (foreground),{" "}
          <code>ESC[40–47m</code> (background), <code>ESC[90–97m</code> (bright
          foreground), <code>ESC[100–107m</code> (bright background).
        </p>

        <h3 className="mt-4 text-lg font-semibold">Available Colors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4">
          {[
            { name: "black", bg: "bg-black border border-foreground/20" },
            { name: "red", bg: "bg-red-500" },
            { name: "green", bg: "bg-green-500" },
            { name: "yellow", bg: "bg-yellow-500" },
            { name: "blue", bg: "bg-blue-500" },
            { name: "magenta", bg: "bg-fuchsia-500" },
            { name: "cyan", bg: "bg-cyan-500" },
            { name: "white", bg: "bg-white border border-foreground/20" },
            { name: "gray", bg: "bg-gray-500" },
          ].map(({ name, bg }) => (
            <div
              key={name}
              className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg"
            >
              <span className={`w-4 h-4 rounded-full ${bg}`} />
              <code>{name}</code>
            </div>
          ))}
        </div>

        <Code
          codesnippets={[
            {
              title: "4-bit Color Usage",
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
                  <span className="text-zinc-500">
                    {"// Named color strings (4-bit)"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Red text&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;red&quot;</i> {"}"}));
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Cyan on yellow&quot;</i>,{" "}
                  {"{"} <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;cyan&quot;</i>,{" "}
                  <i className="text-blue-400">backgroundColor</i>:{" "}
                  <i className="text-orange-400">&quot;yellow&quot;</i> {"}"}));
                </div>
              ),
              snippet: `import { s } from "ts-better-console";

// Named color strings (4-bit)
console.log(s("Red text", { color: "red" }));
console.log(s("Cyan on yellow", { color: "cyan", backgroundColor: "yellow" }));`,
            },
          ]}
        />

        {/* ─── 8-bit ────────────────────────────────────── */}
        <h2 className="mt-12">8-bit Color (256 Palette)</h2>
        <p>
          The 8-bit mode gives you access to <strong>256 colors</strong>:
        </p>
        <ul className="list-disc list-inside mt-2 text-sm text-foreground/80">
          <li>
            <strong>0–7</strong> — Standard colors (same as 4-bit)
          </li>
          <li>
            <strong>8–15</strong> — High-intensity (bright) colors
          </li>
          <li>
            <strong>16–231</strong> — 6 × 6 × 6 color cube (216 colors)
          </li>
          <li>
            <strong>232–255</strong> — Grayscale ramp (24 shades)
          </li>
        </ul>
        <p className="text-sm text-foreground/60 mt-2">
          Escape codes: <code>ESC[38;5;{"{n}"}m</code> (foreground),{" "}
          <code>ESC[48;5;{"{n}"}m</code> (background), where <em>n</em> = 0–255.
        </p>

        <h3 className="mt-4 text-lg font-semibold">256 Color Palette</h3>
        <p className="text-sm text-foreground/60 mb-2">
          Click any cell to see details and copy code.
        </p>
        <EightBitColorGrid />

        <Code
          codesnippets={[
            {
              title: "8-bit Color Usage",
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
                  <span className="text-zinc-500">
                    {"// Using a raw code number"}
                  </span>
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
                    {"// Using the EightBitColor enum"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Navy bg&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">backgroundColor</i>:{" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-emerald-400">EightBitColor</i>.
                  <i className="text-blue-400">Navy</i>) {"}"}));
                </div>
              ),
              snippet: `import { s, eightBit, EightBitColor } from "ts-better-console";

// Using a raw code number
console.log(s("Orange", { color: eightBit(208) }));

// Using the EightBitColor enum
console.log(s("Navy bg", { backgroundColor: eightBit(EightBitColor.Navy) }));`,
            },
          ]}
        />

        {/* ─── 24-bit ───────────────────────────────────── */}
        <h2 className="mt-12">24-bit Color (True Color)</h2>
        <p>
          True color provides the full <strong>16.7 million</strong> color
          spectrum using RGB values (0–255 per channel). Most modern terminals
          support this: kitty, iTerm2, Windows Terminal, GNOME Terminal, VS Code
          integrated terminal, and more.
        </p>
        <p className="text-sm text-foreground/60 mt-2">
          Escape codes:{" "}
          <code>
            ESC[38;2;{"{r}"};{"{g}"};{"{b}"}m
          </code>{" "}
          (foreground),{" "}
          <code>
            ESC[48;2;{"{r}"};{"{g}"};{"{b}"}m
          </code>{" "}
          (background).
        </p>

        <h3 className="mt-4 text-lg font-semibold">Color Picker</h3>
        <p className="text-sm text-foreground/60 mb-2">
          Pick a color and copy the generated code.
        </p>
        <ColorPicker />

        <Code
          codesnippets={[
            {
              title: "rgb() Usage",
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
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Custom&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">rgb</i>(
                  <i className="text-orange-400">255</i>,{" "}
                  <i className="text-orange-400">136</i>,{" "}
                  <i className="text-orange-400">0</i>) {"}"}));
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Mix RGB fg with RGB bg"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Neon&quot;</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-yellow-400">rgb</i>(
                    <i className="text-orange-400">0</i>,{" "}
                    <i className="text-orange-400">255</i>,{" "}
                    <i className="text-orange-400">128</i>),
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-yellow-400">rgb</i>(
                    <i className="text-orange-400">20</i>,{" "}
                    <i className="text-orange-400">20</i>,{" "}
                    <i className="text-orange-400">40</i>),
                  </div>
                  {"}"}));
                </div>
              ),
              snippet: `import { s, rgb } from "ts-better-console";

console.log(s("Custom", { color: rgb(255, 136, 0) }));

// Mix RGB fg with RGB bg
console.log(s("Neon", {
  color: rgb(0, 255, 128),
  backgroundColor: rgb(20, 20, 40),
}));`,
            },
            {
              title: "hex() Usage",
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
                </div>
              ),
              snippet: `import { s, hex } from "ts-better-console";

// 6-digit hex
console.log(s("Brand", { color: hex("#3b82f6") }));

// 3-digit shorthand
console.log(s("Short", { color: hex("#f80") }));

// Without # prefix
console.log(s("No hash", { color: hex("ff8800") }));`,
            },
          ]}
        />

        {/* ─── Comparison ───────────────────────────────── */}
        <h2 className="mt-12">Comparison</h2>
        <div className="my-4 overflow-x-auto border border-foreground/10 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/10 bg-foreground/5">
                <th className="px-3 py-2 text-left font-semibold text-foreground/80">
                  Feature
                </th>
                <th className="px-3 py-2 text-left font-semibold text-foreground/80">
                  4-bit
                </th>
                <th className="px-3 py-2 text-left font-semibold text-foreground/80">
                  8-bit
                </th>
                <th className="px-3 py-2 text-left font-semibold text-foreground/80">
                  24-bit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-foreground/5">
                <td className="px-3 py-1.5 text-foreground/70">Total colors</td>
                <td className="px-3 py-1.5">16</td>
                <td className="px-3 py-1.5">256</td>
                <td className="px-3 py-1.5">16.7M</td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="px-3 py-1.5 text-foreground/70">API</td>
                <td className="px-3 py-1.5">
                  <code className="text-xs">&quot;red&quot;</code>
                </td>
                <td className="px-3 py-1.5">
                  <code className="text-xs">eightBit(n)</code>
                </td>
                <td className="px-3 py-1.5">
                  <code className="text-xs">rgb(r,g,b)</code> /{" "}
                  <code className="text-xs">hex(&quot;#...&quot;)</code>
                </td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="px-3 py-1.5 text-foreground/70">Escape code</td>
                <td className="px-3 py-1.5">
                  <code className="text-xs">ESC[31m</code>
                </td>
                <td className="px-3 py-1.5">
                  <code className="text-xs">ESC[38;5;nm</code>
                </td>
                <td className="px-3 py-1.5">
                  <code className="text-xs">ESC[38;2;r;g;bm</code>
                </td>
              </tr>
              <tr className="border-b border-foreground/5">
                <td className="px-3 py-1.5 text-foreground/70">
                  Compatibility
                </td>
                <td className="px-3 py-1.5 text-green-500">Universal</td>
                <td className="px-3 py-1.5 text-green-500">Very broad</td>
                <td className="px-3 py-1.5 text-yellow-500">
                  Most modern terminals
                </td>
              </tr>
              <tr>
                <td className="px-3 py-1.5 text-foreground/70">Use case</td>
                <td className="px-3 py-1.5 text-xs">Basic highlighting</td>
                <td className="px-3 py-1.5 text-xs">Richer palettes</td>
                <td className="px-3 py-1.5 text-xs">Brand colors, gradients</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-8">Mixing Color Types</h2>
        <p>
          You can freely mix color types — for example, a 24-bit foreground with
          a 4-bit named background:
        </p>
        <Code
          codesnippets={[
            {
              title: "Mixed Color Types",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">s</i>,{" "}
                  <i className="text-blue-400">rgb</i>,{" "}
                  <i className="text-blue-400">eightBit</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// 24-bit fg + 4-bit bg"}
                  </span>
                  <br />
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;mixed&quot;</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-yellow-400">rgb</i>(
                    <i className="text-orange-400">255, 100, 50</i>),
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-orange-400">&quot;blue&quot;</i>,
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// 8-bit fg + 24-bit bg"}
                  </span>
                  <br />
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;combo&quot;</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-yellow-400">eightBit</i>(
                    <i className="text-orange-400">208</i>),
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-yellow-400">rgb</i>(
                    <i className="text-orange-400">20, 20, 40</i>),
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { s, rgb, eightBit } from "ts-better-console";

// 24-bit fg + 4-bit bg
s("mixed", {
  color: rgb(255, 100, 50),
  backgroundColor: "blue",
});

// 8-bit fg + 24-bit bg
s("combo", {
  color: eightBit(208),
  backgroundColor: rgb(20, 20, 40),
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
