import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Card</h1>
        <p>
          The <code>Card</code> class creates a styled bordered card for
          terminal output. It supports configurable width, title, footer, body
          styling, border presets, and alignment — all rendered as a single
          string you can print anywhere.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Class Signature",
              code: (
                <div>
                  <i className="text-purple-400">class</i>{" "}
                  <i className="text-yellow-400">Card</i> {"{"} <br />
                  <div className="ml-4">
                    <i className="text-purple-400">constructor</i>(
                    <br />
                    <div className="ml-4">
                      <i className="text-cyan-600">content</i>:{" "}
                      <span className="text-orange-400">string</span>,
                    </div>
                    <div className="ml-4">
                      <i className="text-cyan-600">width</i>:{" "}
                      <span className="text-cyan-400">CardWidth</span> ={" "}
                      <i className="text-orange-400">50</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-cyan-600">options</i>?:{" "}
                      <span className="text-cyan-400">CardOptions</span>,
                    </div>
                    )
                  </div>
                  <div className="ml-4">
                    <i className="text-yellow-400">render</i>():{" "}
                    <span className="text-orange-400">string</span>
                  </div>
                  {"}"}
                </div>
              ),
              snippet: `class Card {
  constructor(content: string, width: CardWidth = 50, options?: CardOptions)
  render(): string
}`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>content</code>: The text to display inside the card. Supports
            multi-line strings with <code>\n</code>.
          </li>
          <li>
            <code>width</code>: A <code>CardWidth</code> value — a number, a
            ratio string (<code>&quot;1/2&quot;</code>,{" "}
            <code>&quot;1/3&quot;</code>, <code>&quot;2/3&quot;</code>,{" "}
            <code>&quot;full&quot;</code>), or <code>&quot;auto&quot;</code>.
            Defaults to <code>50</code>. Minimum width is <code>12</code>, and
            maximum is the terminal width.
          </li>
          <li>
            <code>options</code>: An optional <code>CardOptions</code> object to
            configure the title, footer, body, alignment, and border.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Call <code>.render()</code> to get a <code>string</code> containing
          the fully rendered card with ANSI escape codes for terminal styling.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
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
                    // Simple card with default width (50)
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <i className="text-orange-400">&quot;Hello, World!&quot;</i>).
                  <i className="text-yellow-400">render</i>();
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

// Simple card with default width (50)
const card = new Card("Hello, World!").render();
console.log(card);`,
            },
            {
              title: "Ratio Width",
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
                    // Card takes half the terminal width
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <i className="text-orange-400">&quot;Half width card&quot;</i>
                  , <i className="text-orange-400">&quot;1/2&quot;</i>).
                  <i className="text-yellow-400">render</i>();
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

// Card takes half the terminal width
const card = new Card("Half width card", "1/2").render();
console.log(card);`,
            },
            {
              title: "With Title, Footer & Styling",
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
                  <i className="text-orange-400">
                    &quot;Card body content&quot;
                  </i>
                  , <i className="text-orange-400">40</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">title</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">content</i>:{" "}
                      <i className="text-orange-400">
                        &quot;My Card Title&quot;
                      </i>
                      ,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;cyan&quot;</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">footer</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">content</i>:{" "}
                      <i className="text-orange-400">&quot;v1.0.0&quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;gray&quot;</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">&quot;italic&quot;</i>]{" "}
                      {"}"},
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">border</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;green&quot;</i> {"}"}
                      ,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">symbols</i>: {"{"}{" "}
                      <i className="text-blue-400">style</i>:{" "}
                      <i className="text-orange-400">&quot;round&quot;</i> {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">body</i>: {"{"}{" "}
                    <i className="text-blue-400">style</i>: {"{"}{" "}
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;white&quot;</i> {"}"}{" "}
                    {"}"},
                  </div>
                  {"}"}).
                  <i className="text-yellow-400">render</i>();
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

const card = new Card("Card body content", 40, {
  title: {
    content: "My Card Title",
    style: { color: "cyan", styles: ["bold"] },
  },
  footer: {
    content: "v1.0.0",
    style: { color: "gray", styles: ["italic"] },
  },
  border: {
    style: { color: "green" },
    symbols: { style: "round" },
  },
  body: { style: { color: "white" } },
}).render();

console.log(card);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
