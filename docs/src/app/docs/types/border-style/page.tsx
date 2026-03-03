import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>BorderStyle</h1>
        <p>
          <code>BorderStyle</code> selects one of the six built-in border
          character sets for <code>Card</code>. It is set via{" "}
          <code>BorderSymbolStyle.style</code> inside <code>BorderOptions</code>
          .
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "BorderStyle Type",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">BorderStyle</i> = <br />
                  &nbsp;&nbsp;{" "}
                  <span className="text-orange-400">
                    &quot;single&quot; | &quot;double&quot; | &quot;round&quot;
                    | &quot;bold&quot;
                  </span>
                  <br />
                  &nbsp;&nbsp;|{" "}
                  <span className="text-orange-400">
                    &quot;singleDouble&quot; | &quot;doubleSingle&quot;
                  </span>
                  ;
                </div>
              ),
              snippet: `type BorderStyle =
  | "single"
  | "double"
  | "round"
  | "bold"
  | "singleDouble"
  | "doubleSingle";`,
            },
          ]}
        />
        <h2 className="mt-8">Border Presets</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;single&quot;</code> — standard thin box-drawing
            characters: <code>┌ ─ ┐ │ └ ┘</code>
          </li>
          <li>
            <code>&quot;double&quot;</code> — double-line box-drawing:{" "}
            <code>╔ ═ ╗ ║ ╚ ╝</code>
          </li>
          <li>
            <code>&quot;round&quot;</code> — rounded corners:{" "}
            <code>╭ ─ ╮ │ ╰ ╯</code>
          </li>
          <li>
            <code>&quot;bold&quot;</code> — thick lines:{" "}
            <code>┏ ━ ┓ ┃ ┗ ┛</code>
          </li>
          <li>
            <code>&quot;singleDouble&quot;</code> — single horizontal, double
            vertical
          </li>
          <li>
            <code>&quot;doubleSingle&quot;</code> — double horizontal, single
            vertical
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Choosing a Border Style",
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
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <i className="text-orange-400">&quot;Hello&quot;</i>,{" "}
                  <i className="text-orange-400">30</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">border</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">symbols</i>: {"{"}{" "}
                      <i className="text-blue-400">style</i>:{" "}
                      <i className="text-orange-400">&quot;round&quot;</i> {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  {"}"}).
                  <i className="text-yellow-400">render</i>();
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

const card = new Card("Hello", 30, {
  border: {
    symbols: { style: "round" },
  },
}).render();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
