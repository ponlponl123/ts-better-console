import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>CardOptions</h1>
        <p>
          Configuration for the <code>Card</code> class. Controls the title,
          body, footer, alignment on the terminal, and border appearance.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "CardOptions",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">CardOptions</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">title</i>?:{" "}
                  <span className="text-cyan-400">SectionOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">body</i>?:{" "}
                  <span className="text-cyan-400">BodyOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">align</i>?:{" "}
                  <span className="text-cyan-400">Alignment</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">footer</i>?:{" "}
                  <span className="text-cyan-400">SectionOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">border</i>?:{" "}
                  <span className="text-cyan-400">BorderOptions</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface CardOptions {
  title?: SectionOptions;
  body?: BodyOptions;
  align?: Alignment;
  footer?: SectionOptions;
  border?: BorderOptions;
}`,
            },
          ]}
        />
        <h2 className="mt-8">Properties</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>title</code> — a <code>SectionOptions</code> with{" "}
            <code>content</code>, optional <code>align</code>, and optional{" "}
            <code>style</code>. Renders a title row above the body with a
            separator line.
          </li>
          <li>
            <code>body</code> — a <code>BodyOptions</code> object with{" "}
            <code>align</code> and <code>style</code> to control the main
            content area.
          </li>
          <li>
            <code>align</code> — positions the entire card on the terminal:{" "}
            <code>&quot;left&quot;</code>, <code>&quot;center&quot;</code>, or{" "}
            <code>&quot;right&quot;</code>.
          </li>
          <li>
            <code>footer</code> — same shape as <code>title</code>. Renders a
            footer row below the body with a separator line.
          </li>
          <li>
            <code>border</code> — a <code>BorderOptions</code> object with:{" "}
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>
                <code>style</code> — a <code>StyleOptions</code> to color/style
                the border characters.
              </li>
              <li>
                <code>symbols</code> — pick a preset with{" "}
                <code>symbols.style</code> (<code>&quot;single&quot;</code>,{" "}
                <code>&quot;double&quot;</code>, <code>&quot;round&quot;</code>,{" "}
                <code>&quot;bold&quot;</code>,{" "}
                <code>&quot;singleDouble&quot;</code>,{" "}
                <code>&quot;doubleSingle&quot;</code>) or supply your own with{" "}
                <code>symbols.custom</code>.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Example",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Card</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">&quot;ts-better-console&quot;</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">card</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Card</i>(
                  <i className="text-orange-400">&quot;Hello World&quot;</i>,{" "}
                  <i className="text-orange-400">50</i>, {"{"}
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
                      <i className="text-orange-400">&quot;bold&quot;</i>] {"}"},
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
                  <div className="ml-4">
                    <i className="text-blue-400">footer</i>: {"{"}{" "}
                    <i className="text-blue-400">content</i>:{" "}
                    <i className="text-orange-400">&quot;v1.0.0&quot;</i>,{" "}
                    <i className="text-blue-400">style</i>: {"{"}{" "}
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;gray&quot;</i> {"}"}{" "}
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">border</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;blue&quot;</i> {"}"},
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">symbols</i>: {"{"}{" "}
                      <i className="text-blue-400">style</i>:{" "}
                      <i className="text-orange-400">&quot;round&quot;</i> {"}"},
                    </div>
                    {"}"},
                  </div>
                  {"}"}).
                  <i className="text-yellow-400">render</i>();
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

const card = new Card("Hello World", 50, {
  title: {
    content: "My Card",
    style: { color: "cyan", styles: ["bold"] },
  },
  body: { style: { color: "white" } },
  footer: { content: "v1.0.0", style: { color: "gray" } },
  border: {
    style: { color: "blue" },
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
