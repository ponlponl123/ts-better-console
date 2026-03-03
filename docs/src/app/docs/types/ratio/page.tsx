import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Ratio</h1>
        <p>
          <code>Ratio</code> is a string literal type representing a fraction of
          the terminal width. It is one of the accepted forms of{" "}
          <code>CardWidth</code> and can also be passed directly to the{" "}
          <code>ratio()</code> utility function to convert it to a pixel count.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "Ratio Type",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Ratio</i> ={" "}
                  <span className="text-orange-400">
                    &quot;1/2&quot; | &quot;1/3&quot; | &quot;2/3&quot; |
                    &quot;full&quot;
                  </span>
                  ;
                </div>
              ),
              snippet: `type Ratio = "1/2" | "1/3" | "2/3" | "full";`,
            },
          ]}
        />
        <h2 className="mt-8">Values</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;1/2&quot;</code> — half the terminal width
          </li>
          <li>
            <code>&quot;1/3&quot;</code> — one third of the terminal width
          </li>
          <li>
            <code>&quot;2/3&quot;</code> — two thirds of the terminal width
          </li>
          <li>
            <code>&quot;full&quot;</code> — the full terminal width (same as
            passing <code>process.stdout.columns</code>)
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Card with Ratio Width",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Card</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Takes up half the terminal"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <i className="text-orange-400">&quot;Half-width card&quot;</i>
                  , <i className="text-orange-400">&quot;1/2&quot;</i>).
                  <i className="text-yellow-400">render</i>();
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

// Takes up half the terminal
const card = new Card("Half-width card", "1/2").render();`,
            },
            {
              title: "ratio() Utility",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">ratio</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Convert a Ratio to a concrete column count"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">cols</i> ={" "}
                  <i className="text-yellow-400">ratio</i>(
                  <i className="text-orange-400">120</i>,{" "}
                  <i className="text-orange-400">&quot;2/3&quot;</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">cols</i>);{" "}
                  <span className="text-zinc-500">{"// 80"}</span>
                </div>
              ),
              snippet: `import { ratio } from "ts-better-console";

// Convert a Ratio to a concrete column count
const cols = ratio(120, "2/3");
console.log(cols); // 80`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
