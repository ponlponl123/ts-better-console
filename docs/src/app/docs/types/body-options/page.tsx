import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>BodyOptions</h1>
        <p>
          <code>BodyOptions</code> configures the main content area of a{" "}
          <code>Card</code>. It controls how the body text is aligned and styled
          independently of the title and footer sections.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>align</code>: Horizontal alignment of the body text —{" "}
            <code>&quot;left&quot;</code>, <code>&quot;center&quot;</code>, or{" "}
            <code>&quot;right&quot;</code>. Defaults to{" "}
            <code>&quot;left&quot;</code>.
          </li>
          <li>
            <code>style</code>: A <code>StyleOptions</code> object to apply
            color and text decoration to the body content.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "BodyOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">BodyOptions</i> = {"{"}
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
              snippet: `type BodyOptions = {
  align?: Alignment;
  style?: StyleOptions;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          Pass <code>BodyOptions</code> as the <code>body</code> property of{" "}
          <code>CardOptions</code>:
        </p>
        <Code
          codesnippets={[
            {
              title: "Styled & Aligned Body",
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
                    &quot;All systems running.&quot;
                  </i>
                  , <i className="text-orange-400">50</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">body</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">align</i>:{" "}
                      <i className="text-orange-400">&quot;center&quot;</i>,
                      <br />
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;green&quot;</i> {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  {"}"}).
                  <i className="text-yellow-400">render</i>();
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

const card = new Card("All systems running.", 50, {
  body: {
    align: "center",
    style: { color: "green" },
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
