import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>cs</h1>
        <p>
          The <code>cs</code> (combine strings) function joins an array of
          strings with a configurable separator. By default it joins with a
          space. Pass <code>false</code> to concatenate without any separator.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">cs</i>(
                  <i className="text-cyan-600">str</i>:{" "}
                  <span className="text-orange-400">string</span>[],{" "}
                  <i className="text-cyan-600">join</i>?:{" "}
                  <span className="text-orange-400">string</span> |{" "}
                  <span className="text-orange-400">false</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function cs(str: string[], join?: string | false): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>str</code>: An array of strings to combine.
          </li>
          <li>
            <code>join</code>: The separator string, or <code>false</code> to
            concatenate directly. Defaults to <code>&quot; &quot;</code>{" "}
            (space).
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns the combined <code>string</code>.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">cs</i>,{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Join with space (default)
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">cs</i>([
                  <i className="text-orange-400">&quot;Hello&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;World&quot;</i>]));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; &quot;Hello World&quot;
                  </span>
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Concatenate without separator
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">cs</i>([
                  <i className="text-orange-400">&quot;Hello&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;World&quot;</i>],{" "}
                  <i className="text-orange-400">false</i>));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; &quot;HelloWorld&quot;
                  </span>
                  <br />
                  <br />
                  <span className="text-zinc-500">// Custom separator</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">cs</i>([
                  <i className="text-orange-400">&quot;a&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;b&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;c&quot;</i>],{" "}
                  <i className="text-orange-400">&quot; | &quot;</i>));
                  <br />
                  <span className="text-zinc-500">
                    // =&gt; &quot;a | b | c&quot;
                  </span>
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Combine styled strings
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">cs</i>([
                  <br />
                  <div className="ml-4">
                    <i className="text-yellow-400">s</i>(
                    <i className="text-orange-400">&quot;Error:&quot;</i>, {"{"}{" "}
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;red&quot;</i>,{" "}
                    <i className="text-blue-400">styles</i>: [
                    <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}),
                  </div>
                  <div className="ml-4">
                    <i className="text-orange-400">
                      &quot;Something went wrong&quot;
                    </i>
                    ,
                  </div>
                  ]));
                </div>
              ),
              snippet: `import { cs, s } from "ts-better-console";

// Join with space (default)
console.log(cs(["Hello", "World"]));
// => "Hello World"

// Concatenate without separator
console.log(cs(["Hello", "World"], false));
// => "HelloWorld"

// Custom separator
console.log(cs(["a", "b", "c"], " | "));
// => "a | b | c"

// Combine styled strings
console.log(cs([
  s("Error:", { color: "red", styles: ["bold"] }),
  "Something went wrong",
]));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
