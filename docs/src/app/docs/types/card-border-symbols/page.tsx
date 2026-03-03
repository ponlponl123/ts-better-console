import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>CardBorderSymbols</h1>
        <p>
          <code>CardBorderSymbols</code> is the full set of eight characters
          that make up a <code>Card</code> border. You rarely need to specify
          all of them — pass a <code>Partial&lt;CardBorderSymbols&gt;</code>{" "}
          inside <code>BorderSymbolStyle.custom</code> to override only the ones
          you care about.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>topLeft</code> / <code>topRight</code> — top corners
          </li>
          <li>
            <code>bottomLeft</code> / <code>bottomRight</code> — bottom corners
          </li>
          <li>
            <code>devideLeft</code> / <code>devideRight</code> — divider
            connectors (used between title / body / footer)
          </li>
          <li>
            <code>horizontal</code> — top / bottom / divider bar character
          </li>
          <li>
            <code>vertical</code> — left / right side character
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "CardBorderSymbols Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">CardBorderSymbols</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">topLeft</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">topRight</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">bottomLeft</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">bottomRight</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">devideLeft</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">devideRight</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">horizontal</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">vertical</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type CardBorderSymbols = {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
  devideLeft: string;
  devideRight: string;
  horizontal: string;
  vertical: string;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Full Custom Border",
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
                        <i className="text-blue-400">custom</i>: {"{"}
                        <br />
                        <div className="ml-4">
                          <i className="text-blue-400">topLeft</i>:{" "}
                          <i className="text-orange-400">&quot;╔&quot;</i>,{" "}
                          <i className="text-blue-400">topRight</i>:{" "}
                          <i className="text-orange-400">&quot;╗&quot;</i>,
                          <br />
                          <i className="text-blue-400">bottomLeft</i>:{" "}
                          <i className="text-orange-400">&quot;╚&quot;</i>,{" "}
                          <i className="text-blue-400">bottomRight</i>:{" "}
                          <i className="text-orange-400">&quot;╝&quot;</i>,
                          <br />
                          <i className="text-blue-400">horizontal</i>:{" "}
                          <i className="text-orange-400">&quot;═&quot;</i>,{" "}
                          <i className="text-blue-400">vertical</i>:{" "}
                          <i className="text-orange-400">&quot;║&quot;</i>,
                          <br />
                          <i className="text-blue-400">devideLeft</i>:{" "}
                          <i className="text-orange-400">&quot;╠&quot;</i>,{" "}
                          <i className="text-blue-400">devideRight</i>:{" "}
                          <i className="text-orange-400">&quot;╣&quot;</i>,
                        </div>
                        {"}"},
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
      custom: {
        topLeft: "╔", topRight: "╗",
        bottomLeft: "╚", bottomRight: "╝",
        horizontal: "═", vertical: "║",
        devideLeft: "╠", devideRight: "╣",
      },
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
