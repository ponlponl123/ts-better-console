import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>BorderSymbolStyle</h1>
        <p>
          <code>BorderSymbolStyle</code> decides which characters draw the box
          around a <code>Card</code>. Pick a named preset with{" "}
          <code>style</code>, or override individual characters through{" "}
          <code>custom</code>. Both can be combined — the preset fills in any
          characters that <code>custom</code> leaves unspecified.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>style</code>: A <code>BorderStyle</code> preset —{" "}
            <code>&quot;single&quot;</code>, <code>&quot;double&quot;</code>,{" "}
            <code>&quot;round&quot;</code>, <code>&quot;bold&quot;</code>,{" "}
            <code>&quot;singleDouble&quot;</code>, or{" "}
            <code>&quot;doubleSingle&quot;</code>.
          </li>
          <li>
            <code>custom</code>: A <code>Partial&lt;CardBorderSymbols&gt;</code>{" "}
            object letting you override specific corners, dividers, or the
            horizontal/vertical bar characters.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "BorderSymbolStyle Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">BorderSymbolStyle</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">style</i>?:{" "}
                  <span className="text-cyan-400">BorderStyle</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">custom</i>?:{" "}
                  <span className="text-orange-400">Partial</span>
                  {"<"}
                  <span className="text-cyan-400">CardBorderSymbols</span>
                  {">"};
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type BorderSymbolStyle = {
  style?: BorderStyle;
  custom?: Partial<CardBorderSymbols>;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Preset + Custom Override",
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
                      <i className="text-blue-400">symbols</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">style</i>:{" "}
                        <i className="text-orange-400">&quot;double&quot;</i>,
                        <br />
                        <i className="text-blue-400">custom</i>: {"{"}{" "}
                        <i className="text-blue-400">horizontal</i>:{" "}
                        <i className="text-orange-400">&quot;~&quot;</i> {"}"},
                      </div>
                      {"}"},
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
    symbols: {
      style: "double",
      custom: { horizontal: "~" },
    },
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
