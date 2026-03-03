import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>TerminalDimensions</h1>
        <p>
          <code>TerminalDimensions</code> is the object returned by{" "}
          <code>getProcessSize()</code> and stored in the <code>size</code>{" "}
          constant. It exposes the terminal's width and height in multiple
          pre-calculated forms — original, half, third, two-thirds, and full —
          so you never have to do the maths yourself.
        </p>
        <h2 className="mt-8">Type Definitions</h2>
        <Code
          codesnippets={[
            {
              title: "TerminalDimensions & TerminalSize",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">TerminalSize</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">og</i>:{" "}
                  <span className="text-orange-400">number</span>;{" "}
                  <span className="text-zinc-500">
                    {"// original dimension"}
                  </span>
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">half</i>:{" "}
                  <span className="text-orange-400">number</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">third</i>:{" "}
                  <span className="text-orange-400">number</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">twoThirds</i>:{" "}
                  <span className="text-orange-400">number</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">full</i>:{" "}
                  <span className="text-orange-400">number</span>;{" "}
                  <span className="text-zinc-500">{"// same as og"}</span>
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">TerminalDimensions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">width</i>:{" "}
                  <span className="text-cyan-400">TerminalSize</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">height</i>:{" "}
                  <span className="text-cyan-400">TerminalSize</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface TerminalSize {
  og: number;       // original dimension
  half: number;
  third: number;
  twoThirds: number;
  full: number;     // same as og
}

type TerminalDimensions = {
  width: TerminalSize;
  height: TerminalSize;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Reading Terminal Dimensions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">size</i>,{" "}
                  <i className="text-blue-400">getProcessSize</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// size: static snapshot captured at import time"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">size</i>.
                  <i className="text-blue-400">width</i>.
                  <i className="text-blue-400">og</i>);{" "}
                  <span className="text-zinc-500">{"// e.g. 220 columns"}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">size</i>.
                  <i className="text-blue-400">width</i>.
                  <i className="text-blue-400">half</i>);{" "}
                  <span className="text-zinc-500">{"// 110"}</span>
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// getProcessSize(): fresh reading each call"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">dims</i> ={" "}
                  <i className="text-yellow-400">getProcessSize</i>();
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">dims</i>.
                  <i className="text-blue-400">height</i>.
                  <i className="text-blue-400">og</i>);{" "}
                  <span className="text-zinc-500">{"// e.g. 50 rows"}</span>
                </div>
              ),
              snippet: `import { size, getProcessSize } from "ts-better-console";

// size: static snapshot captured at import time
console.log(size.width.og);    // e.g. 220 columns
console.log(size.width.half);  // 110

// getProcessSize(): fresh reading each call
const dims = getProcessSize();
console.log(dims.height.og);   // e.g. 50 rows`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
