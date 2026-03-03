import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>BorderOptions</h1>
        <p>
          <code>BorderOptions</code> controls everything about a{" "}
          <code>Card</code> border — the color and decoration of the border
          lines (<code>style</code>) and which set of box-drawing characters to
          use (<code>symbols</code>). Both properties are optional, so you can
          change either one independently.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>style</code>: A <code>StyleOptions</code> object applied to
            the border characters themselves — use this to give them a color or
            make them bold.
          </li>
          <li>
            <code>symbols</code>: A <code>BorderSymbolStyle</code> object that
            chooses a built-in <code>BorderStyle</code> preset or supplies fully
            custom border characters via <code>custom</code>.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "BorderOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">BorderOptions</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">style</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">symbols</i>?:{" "}
                  <span className="text-cyan-400">BorderSymbolStyle</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface BorderOptions {
  style?: StyleOptions;
  symbols?: BorderSymbolStyle;
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Colored Border with Preset Style",
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
                  <i className="text-orange-400">&quot;Status: OK&quot;</i>,{" "}
                  <i className="text-orange-400">40</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">border</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;green&quot;</i> {"}"}
                      ,
                      <br />
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

const card = new Card("Status: OK", 40, {
  border: {
    style: { color: "green" },
    symbols: { style: "round" },
  },
}).render();`,
            },
            {
              title: "Custom Border Characters",
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
                  <i className="text-orange-400">&quot;Custom box&quot;</i>,{" "}
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
                          <i className="text-orange-400">&quot;*&quot;</i>,{" "}
                          <i className="text-blue-400">topRight</i>:{" "}
                          <i className="text-orange-400">&quot;*&quot;</i>,
                          <br />
                          <i className="text-blue-400">bottomLeft</i>:{" "}
                          <i className="text-orange-400">&quot;*&quot;</i>,{" "}
                          <i className="text-blue-400">bottomRight</i>:{" "}
                          <i className="text-orange-400">&quot;*&quot;</i>,
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

const card = new Card("Custom box", 30, {
  border: {
    symbols: {
      custom: {
        topLeft: "*", topRight: "*",
        bottomLeft: "*", bottomRight: "*",
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
