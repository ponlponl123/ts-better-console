import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Alignment</h1>
        <p>
          Three related types handle horizontal alignment throughout{" "}
          <strong>ts-better-console</strong>: <code>Alignment</code> uses
          directional words, <code>AlignmentAlias</code> uses positional words,
          and <code>Align</code> accepts both — making all three interchangeable
          anywhere alignment is needed.
        </p>
        <h2 className="mt-8">Type Definitions</h2>
        <Code
          codesnippets={[
            {
              title: "Alignment Types",
              code: (
                <div>
                  <i className="text-zinc-500">
                    {"// Directional — used in most component options"}
                  </i>
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Alignment</i> ={" "}
                  <span className="text-orange-400">
                    &quot;left&quot; | &quot;center&quot; | &quot;right&quot;
                  </span>
                  ;
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Positional alias — familiar to CSS / flexbox users"}
                  </i>
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">AlignmentAlias</i> ={" "}
                  <span className="text-orange-400">
                    &quot;start&quot; | &quot;center&quot; | &quot;end&quot;
                  </span>
                  ;
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Union — accepts either form"}
                  </i>
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Align</i> ={" "}
                  <span className="text-cyan-400">Alignment</span> |{" "}
                  <span className="text-cyan-400">AlignmentAlias</span>;
                </div>
              ),
              snippet: `// Directional — used in most component options
type Alignment = "left" | "center" | "right";

// Positional alias — familiar to CSS / flexbox users
type AlignmentAlias = "start" | "center" | "end";

// Union — accepts either form
type Align = Alignment | AlignmentAlias;`,
            },
          ]}
        />
        <h2 className="mt-8">Value Mapping</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;left&quot;</code> / <code>&quot;start&quot;</code> —
            content aligned to the left edge
          </li>
          <li>
            <code>&quot;center&quot;</code> — content centred
          </li>
          <li>
            <code>&quot;right&quot;</code> / <code>&quot;end&quot;</code> —
            content aligned to the right edge
          </li>
        </ul>
        <p className="mt-4">
          Use <code>aliasAlignment()</code> to normalise an <code>Align</code>{" "}
          value down to a plain <code>Alignment</code> string when you need a
          canonical form.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Card & Input Alignment",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Card</i>,{" "}
                  <i className="text-blue-400">Input</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Alignment value — left | center | right"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <i className="text-orange-400">&quot;Centred text&quot;</i>,{" "}
                  <i className="text-orange-400">40</i>, {"{"}{" "}
                  <i className="text-blue-400">align</i>:{" "}
                  <i className="text-orange-400">&quot;center&quot;</i> {"}"}).
                  <i className="text-yellow-400">render</i>();
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Alias form — also accepted"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">input</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Input</i>({"{"}{" "}
                  <i className="text-blue-400">align</i>:{" "}
                  <i className="text-orange-400">&quot;end&quot;</i> {"}"});
                </div>
              ),
              snippet: `import { Card, Input } from "ts-better-console";

// Alignment value — left | center | right
const card = new Card("Centred text", 40, { align: "center" }).render();

// Alias form — also accepted
const input = new Input({ align: "end" });`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
