import Code from "@/src/components/code";
import Image from "@/src/components/image";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Card</h1>
        <p>
          The <code>Card</code> class renders a bordered box for terminal
          output. You give it some text, pick a width, and optionally add a
          title, footer, body alignment, or custom border characters. Call{" "}
          <code>.render()</code> and you get back a plain string — log it,
          compose it, do whatever you want with it.
        </p>
        <Image
          src="/previews/card.png"
          alt="Example of ts-better-console card class in action"
          className="w-full"
        />
        <h2 className="mt-8">Constructor</h2>
        <Code
          codesnippets={[
            {
              title: "Signature",
              code: (
                <div>
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-cyan-600">content</i>:{" "}
                    <span className="text-orange-400">string</span>,
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">width</i>?:{" "}
                    <span className="text-cyan-400">CardWidth</span>,
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">options</i>?:{" "}
                    <span className="text-cyan-400">CardOptions</span>,
                  </div>
                  )
                </div>
              ),
              snippet: `new Card(content: string, width?: CardWidth, options?: CardOptions)`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>content</code> — the text body. Newlines are respected and
            long lines are wrapped automatically.
          </li>
          <li>
            <code>width</code> — how wide the card should be. Pass a number
            (minimum 12, clamped to terminal width), a ratio string like{" "}
            <code>&quot;1/2&quot;</code> or <code>&quot;2/3&quot;</code> or{" "}
            <code>&quot;full&quot;</code>, or <code>&quot;auto&quot;</code> to
            fit the content. Defaults to <code>50</code>.
          </li>
          <li>
            <code>options</code> — optional config for title, body, footer,
            alignment, and border styling. See <code>CardOptions</code>.
          </li>
        </ul>
        <h2 className="mt-8">Methods</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>render()</code> — returns the fully rendered card as a styled
            string. Just <code>console.log()</code> it.
          </li>
        </ul>
        <h2 className="mt-8">Border Styles</h2>
        <p>
          Six built-in border presets are available through{" "}
          <code>border.symbols.style</code>:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;single&quot;</code> — <code>┌ ┐ └ ┘ │ ─</code> (default)
          </li>
          <li>
            <code>&quot;double&quot;</code> — <code>╔ ╗ ╚ ╝ ║ ═</code>
          </li>
          <li>
            <code>&quot;round&quot;</code> — <code>╭ ╮ ╰ ╯ │ ─</code>
          </li>
          <li>
            <code>&quot;bold&quot;</code> — <code>┏ ┓ ┗ ┛ ┃ ━</code>
          </li>
          <li>
            <code>&quot;singleDouble&quot;</code> — <code>╒ ╕ ╘ ╛ │ ═</code>
          </li>
          <li>
            <code>&quot;doubleSingle&quot;</code> — <code>╓ ╖ ╙ ╜ ║ ─</code>
          </li>
        </ul>
        <p className="mt-2">
          You can also pass <code>border.symbols.custom</code> with partial or
          full <code>CardBorderSymbols</code> to use your own characters.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic",
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
                  <i className="text-orange-400">&quot;Hello, World!&quot;</i>).
                  <i className="text-yellow-400">render</i>();
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

const card = new Card("Hello, World!").render();
console.log(card);`,
            },
            {
              title: "With Title and Footer",
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
                    &quot;This is the card body.&quot;
                  </i>
                  , <i className="text-orange-400">40</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">title</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">content</i>:{" "}
                      <i className="text-orange-400">&quot;My Card&quot;</i>,
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
                    <i className="text-blue-400">footer</i>: {"{"}{" "}
                    <i className="text-blue-400">content</i>:{" "}
                    <i className="text-orange-400">&quot;v0.1.2&quot;</i> {"}"},
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
                  {"}"}
                  ).
                  <i className="text-yellow-400">render</i>();
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

const card = new Card("This is the card body.", 40, {
  title: {
    content: "My Card",
    style: { color: "cyan", styles: ["bold"] },
  },
  footer: { content: "v0.1.2" },
  border: {
    style: { color: "green" },
    symbols: { style: "round" },
  },
}).render();

console.log(card);`,
            },
            {
              title: "Auto and Ratio Width",
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
                    // Card shrinks to fit the content
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <i className="text-orange-400">&quot;Short text&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;auto&quot;</i>
                  ).
                  <i className="text-yellow-400">render</i>();
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Half the terminal width
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">wide</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <i className="text-orange-400">&quot;Half width&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;1/2&quot;</i>
                  ).
                  <i className="text-yellow-400">render</i>();
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

// Card shrinks to fit the content
const card = new Card("Short text", "auto").render();

// Half the terminal width
const wide = new Card("Half width", "1/2").render();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
