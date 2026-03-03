import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>SectionOptions</h1>
        <p>
          The <code>SectionOptions</code> type defines the configuration for a
          section within a card component in <strong>ts-better-console</strong>.
          Sections are used for the title and footer areas of a card, providing
          both content and optional styling.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>SectionOptions</code> type includes the following
          properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>content</code>: The text shown in the section.
          </li>
          <li>
            <code>align</code>: Optional alignment —{" "}
            <code>&quot;left&quot;</code>, <code>&quot;center&quot;</code>, or{" "}
            <code>&quot;right&quot;</code>.
          </li>
          <li>
            <code>style</code>: An optional <code>StyleOptions</code> object for
            color, background, and text styles.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "SectionOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">SectionOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">content</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">align</i>?:{" "}
                  <span className="text-cyan-400">Alignment</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">style</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type SectionOptions = {
  content: string;
  align?: Alignment;
  style?: StyleOptions;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use <code>SectionOptions</code> when defining the title or
          footer of a card:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using SectionOptions in a Card",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Card</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Card</i>(
                  <i className="text-orange-400">"Card body content"</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">title</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">content</i>:{" "}
                      <i className="text-orange-400">"Welcome"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">color</i>:{" "}
                        <i className="text-orange-400">"cyan"</i>,
                      </div>
                      <div className="ml-4">
                        <i className="text-blue-400">styles</i>: [
                        <i className="text-orange-400">"bold"</i>],
                      </div>
                      {"}"},
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">footer</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">content</i>:{" "}
                      <i className="text-orange-400">
                        "Press any key to continue"
                      </i>
                      ,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"gray"</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">"italic"</i>] {"}"},
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

new Card("Card body content", {
  title: {
    content: "Welcome",
    style: {
      color: "cyan",
      styles: ["bold"],
    },
  },
  footer: {
    content: "Press any key to continue",
    style: { color: "gray", styles: ["italic"] },
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
