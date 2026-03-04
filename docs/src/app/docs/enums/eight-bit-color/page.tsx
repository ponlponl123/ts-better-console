import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>EightBitColor</h1>
        <p>
          The <code>EightBitColor</code> enum provides named constants for
          commonly used 8-bit (256) color codes. Use it with the{" "}
          <code>eightBit()</code> helper function to easily reference colors by
          name instead of memorizing code numbers.
        </p>

        <h2 className="mt-8">Enum Definition</h2>
        <Code
          codesnippets={[
            {
              title: "EightBitColor Enum",
              code: (
                <div>
                  <i className="text-purple-400">enum</i>{" "}
                  <i className="text-blue-400">EightBitColor</i> {"{"}
                  <br />
                  <span className="text-zinc-500">
                    &nbsp;&nbsp;{"// Standard colors (0–7)"}
                  </span>
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Black</i> ={" "}
                  <i className="text-orange-400">0</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Red</i> ={" "}
                  <i className="text-orange-400">1</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Green</i> ={" "}
                  <i className="text-orange-400">2</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Yellow</i> ={" "}
                  <i className="text-orange-400">3</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Blue</i> ={" "}
                  <i className="text-orange-400">4</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Magenta</i> ={" "}
                  <i className="text-orange-400">5</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Cyan</i> ={" "}
                  <i className="text-orange-400">6</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">White</i> ={" "}
                  <i className="text-orange-400">7</i>,
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    &nbsp;&nbsp;{"// High-intensity colors (8–15)"}
                  </span>
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    BrightBlack
                  </i> = <i className="text-orange-400">8</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">BrightRed</i> ={" "}
                  <i className="text-orange-400">9</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    BrightGreen
                  </i> = <i className="text-orange-400">10</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    BrightYellow
                  </i> = <i className="text-orange-400">11</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">BrightBlue</i> ={" "}
                  <i className="text-orange-400">12</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    BrightMagenta
                  </i> = <i className="text-orange-400">13</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">BrightCyan</i> ={" "}
                  <i className="text-orange-400">14</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    BrightWhite
                  </i> = <i className="text-orange-400">15</i>,
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    &nbsp;&nbsp;{"// Popular extended colors (16–231)"}
                  </span>
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Orange</i> ={" "}
                  <i className="text-orange-400">208</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Pink</i> ={" "}
                  <i className="text-orange-400">213</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Purple</i> ={" "}
                  <i className="text-orange-400">129</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Teal</i> ={" "}
                  <i className="text-orange-400">30</i>,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">Gold</i> ={" "}
                  <i className="text-orange-400">220</i>,
                  <br />
                  &nbsp;&nbsp;
                  <i className="text-zinc-500">{"// ... and more"}</i>
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `enum EightBitColor {
  // Standard colors (0–7)
  Black = 0, Red = 1, Green = 2, Yellow = 3,
  Blue = 4, Magenta = 5, Cyan = 6, White = 7,

  // High-intensity colors (8–15)
  BrightBlack = 8, BrightRed = 9, BrightGreen = 10,
  BrightYellow = 11, BrightBlue = 12, BrightMagenta = 13,
  BrightCyan = 14, BrightWhite = 15,

  // Popular extended colors (16–231)
  Orange = 208, Pink = 213, Purple = 129, Teal = 30,
  Gold = 220, Lime = 118, Salmon = 209, SkyBlue = 117,
  Lavender = 183, Coral = 203, Turquoise = 80, Violet = 135,
  Indigo = 54, Olive = 142, Maroon = 52, Navy = 17,
  Brown = 130, Peach = 217,
}`,
            },
          ]}
        />

        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Using EightBitColor",
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
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Orange text&quot;</i>,{" "}
                  {"{"} <i className="text-blue-400">color</i>:{" "}
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-emerald-400">EightBitColor</i>.
                  <i className="text-blue-400">Orange</i>) {"}"}));
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

console.log(s("Orange text", { color: eightBit(EightBitColor.Orange) }));
console.log(s("Navy bg", { backgroundColor: eightBit(EightBitColor.Navy) }));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
