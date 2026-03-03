import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>rainbow (rb)</h1>
        <p>
          The <code>rainbow</code> function (also aliased as <code>rb</code>)
          colours each character in a string with a different hue — cycling
          through red, yellow, green, cyan, blue, and magenta. Great for
          eye-catching banners and headings.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">rainbow</i>(
                  <i className="text-cyan-600">str</i>:{" "}
                  <span className="text-orange-400">string</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function rainbow(str: string): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>str</code>: The string to colorise. Each character gets its
            own ANSI colour code, cycling through{" "}
            <code className="text-red-400">red</code>,{" "}
            <code className="text-yellow-400">yellow</code>,{" "}
            <code className="text-green-400">green</code>,{" "}
            <code className="text-cyan-400">cyan</code>,{" "}
            <code className="text-blue-400">blue</code>,{" "}
            <code className="text-purple-400">magenta</code>.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          A <code>string</code> with individual ANSI colour escapes wrapping
          each character.
        </p>
        <h2 className="mt-8">Aliases</h2>
        <p>
          Exported as both <code>rainbow</code> and <code>rb</code> — use
          whichever is cleaner in context.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Rainbow Banner",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rainbow</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">rainbow</i>(
                  <i className="text-orange-400">&quot;Hello, World!&quot;</i>
                  ));
                </div>
              ),
              snippet: `import { rainbow } from "ts-better-console";

console.log(rainbow("Hello, World!"));`,
            },
            {
              title: "Using the rb Alias",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rb</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">rb</i>(
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ));
                </div>
              ),
              snippet: `import { rb } from "ts-better-console";

console.log(rb("ts-better-console"));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
