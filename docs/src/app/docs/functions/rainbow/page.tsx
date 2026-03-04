import Code from "@/src/components/code";
import Image from "@/src/components/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>rainbow (rb)</h1>
        <p>
          The <code>rainbow</code> function (also aliased as <code>rb</code>)
          colours each character in a string with a different hue. The standard
          mode cycles through six 4-bit colors; the smooth mode uses a 26-stop
          8-bit extended palette for a much richer gradient. Great for
          eye-catching banners and headings.
        </p>
        <Image
          src="/previews/rainbow.png"
          alt="Example of ts-better-console rainbow function in action"
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
                  <i className="text-yellow-400">rainbow</i>(
                  <i className="text-cyan-600">str</i>:{" "}
                  <span className="text-orange-400">string</span>,{" "}
                  <i className="text-cyan-600">smooth</i>?:{" "}
                  <span className="text-purple-500">boolean</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function rainbow(str: string, smooth?: boolean): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>str</code>: The string to colorise.
          </li>
          <li>
            <code>smooth</code> (default <code>false</code>): When{" "}
            <code>false</code>, each character cycles through the six{" "}
            <Link href="/docs/constants/rainbow-colors">
              <code>rainbowColors</code>
            </Link>{" "}
            — <code className="text-red-400">red</code>,{" "}
            <code className="text-yellow-400">yellow</code>,{" "}
            <code className="text-green-400">green</code>,{" "}
            <code className="text-cyan-400">cyan</code>,{" "}
            <code className="text-blue-400">blue</code>,{" "}
            <code className="text-purple-400">magenta</code>. When{" "}
            <code>true</code>, uses the 26-stop{" "}
            <Link href="/docs/constants/rainbow-colors">
              <code>rainbowColorsExtended</code>
            </Link>{" "}
            8-bit palette, distributing colors proportionally across the string
            for a smooth full-spectrum gradient.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          A <code>string</code> with individual ANSI colour escapes wrapping
          each character. In standard mode each character is reset with{" "}
          <code>DEFAULT_COLOR</code> (<code>\x1b[39m</code>), preserving any
          background or intensity attributes applied outside the rainbow string.
          In smooth mode the 8-bit SGR codes are used directly without a
          per-character reset.
        </p>
        <h2 className="mt-8">Aliases</h2>
        <p>
          Exported as both <code>rainbow</code> and <code>rb</code> — use
          whichever is cleaner in context.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Standard Rainbow Banner",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rainbow</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">rainbow</i>(
                  <i className="text-orange-400">&quot;Hello, World!&quot;</i>
                  ));
                </div>
              ),
              snippet: `import { rainbow } from "ts-better-console";

console.log(rainbow("Hello, World!"));`,
            },
            {
              title: "Smooth (Extended Palette) Rainbow",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rainbow</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// 26-stop 8-bit gradient across the string"}
                  </i>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">rainbow</i>(
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  , <i className="text-purple-500">true</i>));
                </div>
              ),
              snippet: `import { rainbow } from "ts-better-console";

// 26-stop 8-bit gradient across the string
console.log(rainbow("ts-better-console", true));`,
            },
            {
              title: "Using the rb Alias",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rb</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">rb</i>(
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ));
                </div>
              ),
              snippet: `import { rb } from "ts-better-console";

console.log(rb("ts-better-console"));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
