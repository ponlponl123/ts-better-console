import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>
          card{" "}
          <span className="text-sm text-amber-500/50 px-2 py-0.5 bg-amber-500/10 rounded-full align-middle">
            beta
          </span>
        </h1>
        <p>
          The <code>card</code> docs cover the <code>createCard</code> API,
          which renders a bordered card string for terminal output. There is no
          standalone <code>Card</code> class export yet; this page documents
          only the function-based <code>createCard</code> API. It supports auto
          or fixed width, styled title/footer sections, body styling, and border
          styling.
        </p>
        <p className="text-foreground/70 mt-4">
          <strong>Status:</strong> Card is currently <strong>beta</strong> and
          not its own class. To build cards, use the
          <code> createCard(content, width, options)</code> API.
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
              snippet:
                "function createCard(content: string, width: cardWidth = 50, options?: cardOptions): string",
            },
          ]}
        />

        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>content</code>: Text content for the card body (supports
            multi-line strings).
          </li>
          <li>
            <code>width</code>: Fixed numeric width or
            <code>&quot;auto&quot;</code>. Minimum is <code>12</code>; it also
            clamps to terminal width.
          </li>
          <li>
            <code>options</code>: Optional configuration for <code>title</code>,{" "}
            <code>body</code>, <code>footer</code>, and
            <code>borderStyle</code>.
          </li>
        </ul>

        <h2 className="mt-8">Features</h2>
        <ul className="list-disc list-inside">
          <li>
            Renders a complete box using unicode borders (
            <code>┌ ┐ └ ┘ │ ─</code>).
          </li>
          <li>Wraps long lines to fit the card width.</li>
          <li>Supports optional title and footer separators.</li>
          <li>
            Applies style options independently to border, body, and sections.
          </li>
          <li>Returns a pure string, so you can log or compose it freely.</li>
        </ul>

        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic",
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
                  <i className="text-orange-400">&quot;Hello, World!&quot;</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">card</i>);
                </div>
              ),
              snippet: `import { createCard } from "ts-better-console";

const card = createCard("Hello, World!");
console.log(card);`,
            },
            {
              title: "With Title/Footer/Styles",
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
                    <i className="text-blue-400">footer</i>: {"{"}{" "}
                    <i className="text-blue-400">content</i>:{" "}
                    <i className="text-orange-400">&quot;v1.0.0&quot;</i> {"}"},
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
  footer: { content: "v1.0.0" },
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
