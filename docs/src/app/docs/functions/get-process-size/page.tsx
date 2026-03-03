import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>getProcessSize</h1>
        <p>
          <code>getProcessSize</code> (aliased as <code>ps</code>) reads the
          current terminal dimensions at the moment it is called, returning a{" "}
          <code>TerminalDimensions</code> object. For a one-time snapshot taken
          at import time, use the exported constant <code>size</code> instead.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">getProcessSize</i>():{" "}
                  <span className="text-cyan-400">TerminalDimensions</span>
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Static snapshot captured at module load time"}
                  </i>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">size</i>:{" "}
                  <span className="text-cyan-400">TerminalDimensions</span>
                </div>
              ),
              snippet: `function getProcessSize(): TerminalDimensions

// Static snapshot captured at module load time
const size: TerminalDimensions`,
            },
          ]}
        />
        <h2 className="mt-8">Return Value</h2>
        <p>
          A <code>TerminalDimensions</code> object whose <code>width</code> and{" "}
          <code>height</code> properties each carry a <code>TerminalSize</code>{" "}
          with pre-computed <code>og</code>, <code>half</code>,{" "}
          <code>third</code>, <code>twoThirds</code>, and <code>full</code>{" "}
          values.
        </p>
        <h2 className="mt-8">Aliases</h2>
        <p>
          Exported as both <code>getProcessSize</code> and <code>ps</code>.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Dynamic Terminal Size",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">getProcessSize</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">dim</i> ={" "}
                  <i className="text-yellow-400">getProcessSize</i>();
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">&quot;Terminal width:&quot;</i>
                  , <i className="text-blue-400">dim</i>.
                  <i className="text-cyan-600">width</i>.
                  <i className="text-cyan-600">og</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">&quot;Half width:&quot;</i>,{" "}
                  <i className="text-blue-400">dim</i>.
                  <i className="text-cyan-600">width</i>.
                  <i className="text-cyan-600">half</i>);
                </div>
              ),
              snippet: `import { getProcessSize } from "ts-better-console";

const dim = getProcessSize();
console.log("Terminal width:", dim.width.og);
console.log("Half width:",     dim.width.half);`,
            },
            {
              title: "Static size Constant",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">size</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Captured once when the module was first imported"}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">size</i>.
                  <i className="text-cyan-600">width</i>.
                  <i className="text-cyan-600">og</i>,{" "}
                  <i className="text-blue-400">size</i>.
                  <i className="text-cyan-600">height</i>.
                  <i className="text-cyan-600">og</i>);
                </div>
              ),
              snippet: `import { size } from "ts-better-console";

// Captured once when the module was first imported
console.log(size.width.og, size.height.og);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
