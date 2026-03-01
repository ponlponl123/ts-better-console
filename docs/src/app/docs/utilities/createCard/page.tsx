import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>createCard</h1>
        <p>
          The <code>createCard</code> function creates a styled bordered card
          for terminal output. It supports configurable width, title, footer,
          body styling, and border styling.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">createCard</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-cyan-600">content</i>:{" "}
                    <span className="text-orange-400">string</span>,
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">width</i>:{" "}
                    <span className="text-cyan-400">cardWidth</span> ={" "}
                    <i className="text-orange-400">50</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">options</i>?:{" "}
                    <span className="text-cyan-400">cardOptions</span>,
                  </div>
                  ): <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function createCard(content: string, width: cardWidth = 50, options?: cardOptions): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>content</code>: The text content to display inside the card.
            Supports multi-line strings.
          </li>
          <li>
            <code>width</code>: A <code>cardWidth</code> value — either a number
            or <code>&quot;auto&quot;</code>. Defaults to <code>50</code>.
            Minimum width is <code>12</code>, and maximum is the terminal width.
          </li>
          <li>
            <code>options</code>: An optional <code>cardOptions</code> object to
            customize the card&apos;s title, footer, body, and border styles.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns a <code>string</code> containing the fully rendered card with
          ANSI escape codes for terminal styling.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">createCard</i> {"}"}{" "}
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
                  <i className="text-yellow-400">createCard</i>(
                  <i className="text-orange-400">&quot;Hello, World!&quot;</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { createCard } from "ts-better-console";

// Simple card with default width (50)
const card = createCard("Hello, World!");
console.log(card);`,
            },
            {
              title: "Auto Width",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">createCard</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Card width auto-adjusts to content
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-yellow-400">createCard</i>(
                  <i className="text-orange-400">&quot;Auto-sized card&quot;</i>
                  , <i className="text-orange-400">&quot;auto&quot;</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { createCard } from "ts-better-console";

// Card width auto-adjusts to content
const card = createCard("Auto-sized card", "auto");
console.log(card);`,
            },
            {
              title: "With Title, Footer & Styling",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">createCard</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-yellow-400">createCard</i>(
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
                    <i className="text-blue-400">borderStyle</i>: {"{"}{" "}
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;green&quot;</i> {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">body</i>: {"{"}{" "}
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;white&quot;</i> {"}"},
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { createCard } from "ts-better-console";

const card = createCard("Card body content", 40, {
  title: {
    content: "My Card Title",
    style: { color: "cyan", styles: ["bold"] },
  },
  footer: {
    content: "v1.0.0",
    style: { color: "gray", styles: ["italic"] },
  },
  borderStyle: { color: "green" },
  body: { color: "white" },
});

console.log(card);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
