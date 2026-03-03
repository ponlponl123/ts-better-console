import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>
          us (similar to <code>applyUndefinedStyles</code>)
        </h1>
        <p>
          <code>applyUndefinedStyles</code> (aliased as <code>us</code>) is a
          safe wrapper around <code>s()</code> that only applies styling when a{" "}
          <code>StyleOptions</code> object is actually provided. If{" "}
          <code>style</code> is <code>undefined</code>, the original string is
          returned unchanged — making it ideal for optional styling in
          components and utilities.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">applyUndefinedStyles</i>(
                  <i className="text-cyan-600">str</i>:{" "}
                  <span className="text-orange-400">string</span>,{" "}
                  <i className="text-cyan-600">style</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function applyUndefinedStyles(str: string, style?: StyleOptions): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>str</code>: The string to optionally style.
          </li>
          <li>
            <code>style</code>: An optional <code>StyleOptions</code> object. If
            omitted or <code>undefined</code>, <code>str</code> is returned
            as-is.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          The styled string if <code>style</code> was provided, otherwise the
          original <code>str</code>.
        </p>
        <h2 className="mt-8">Aliases</h2>
        <p>
          Exported as both <code>applyUndefinedStyles</code> and <code>us</code>
          .
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Conditional Styling",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">us</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">label</i>(
                  <i className="text-cyan-600">text</i>:{" "}
                  <span className="text-orange-400">string</span>,{" "}
                  <i className="text-cyan-600">style</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>) {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-purple-400">return</i>{" "}
                    <i className="text-yellow-400">us</i>(
                    <i className="text-blue-400">text</i>,{" "}
                    <i className="text-blue-400">style</i>);
                  </div>
                  {"}"}
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Styled when style is provided"}
                  </span>
                  <br />
                  <i className="text-yellow-400">label</i>(
                  <i className="text-orange-400">&quot;OK&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;green&quot;</i> {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Plain string when style is omitted"}
                  </span>
                  <br />
                  <i className="text-yellow-400">label</i>(
                  <i className="text-orange-400">&quot;OK&quot;</i>);
                </div>
              ),
              snippet: `import { us } from "ts-better-console";

function label(text: string, style?: StyleOptions) {
  return us(text, style);
}

// Styled when style is provided
label("OK", { color: "green" });

// Plain string when style is omitted
label("OK");`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
