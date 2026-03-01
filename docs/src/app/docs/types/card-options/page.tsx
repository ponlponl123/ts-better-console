import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>CardOptions</h1>
        <p>
          The <code>CardOptions</code> type defines the configuration for
          creating a card component in <strong>ts-better-console</strong>. Cards
          provide a structured way to display content in the terminal with a
          title, body, footer, and border styling.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>CardOptions</code> type includes the following properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>title</code>: An optional <code>SectionOptions</code> object
            defining the card&apos;s title section, including its content and
            style.
          </li>
          <li>
            <code>body</code>: An optional <code>StyleOptions</code> object
            defining the styling for the card&apos;s body area.
          </li>
          <li>
            <code>footer</code>: An optional <code>SectionOptions</code> object
            defining the card&apos;s footer section, including its content and
            style.
          </li>
          <li>
            <code>borderStyle</code>: An optional <code>StyleOptions</code>{" "}
            object defining the styling for the card&apos;s border.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "CardOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">cardOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">title</i>?:{" "}
                  <span className="text-cyan-400">sectionOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">body</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">footer</i>?:{" "}
                  <span className="text-cyan-400">sectionOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    borderStyle
                  </i>?: <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type cardOptions = {
  title?: sectionOptions;
  body?: StyleOptions;
  footer?: sectionOptions;
  borderStyle?: StyleOptions;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use <code>CardOptions</code> when creating a card in the
          terminal:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using CardOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">createCard</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-emerald-400">createCard</i>(
                  <i className="text-orange-400">"Hello World"</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">title</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">content</i>:{" "}
                      <i className="text-orange-400">"My Card"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"cyan"</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">"bold"</i>] {"}"},
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">body</i>: {"{"}{" "}
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">"white"</i> {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">footer</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">content</i>:{" "}
                      <i className="text-orange-400">"v1.0.0"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"gray"</i> {"}"},
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">borderStyle</i>: {"{"}{" "}
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">"blue"</i> {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { createCard } from "ts-better-console";

createCard("Hello World", {
  title: {
    content: "My Card",
    style: { color: "cyan", styles: ["bold"] },
  },
  body: { color: "white" },
  footer: {
    content: "v1.0.0",
    style: { color: "gray" },
  },
  borderStyle: { color: "blue" },
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
