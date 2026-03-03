import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ratio</h1>
        <p>
          The <code>ratio</code> function converts a fraction string (
          <code>Ratio</code>) into an actual pixel/character count relative to a
          given total. It is used internally by <code>Card</code> widths but is
          also available for custom layout calculations.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">ratio</i>(
                  <i className="text-cyan-600">a</i>:{" "}
                  <span className="text-orange-400">number</span>,{" "}
                  <i className="text-cyan-600">b</i>:{" "}
                  <span className="text-cyan-400">Ratio</span>):{" "}
                  <span className="text-orange-400">number</span>
                </div>
              ),
              snippet: `function ratio(a: number, b: Ratio): number`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>a</code>: The total (e.g. terminal column count).
          </li>
          <li>
            <code>b</code>: A <code>Ratio</code> fraction string —{" "}
            <code>&quot;1/2&quot;</code>, <code>&quot;1/3&quot;</code>,{" "}
            <code>&quot;2/3&quot;</code>, or <code>&quot;full&quot;</code>.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          A <code>number</code> equal to <code>a × b</code>. For{" "}
          <code>&quot;full&quot;</code> the original value is returned
          unchanged.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Ratio Calculation",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">ratio</i>,{" "}
                  <i className="text-blue-400">size</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-yellow-400">ratio</i>(
                  <i className="text-orange-400">120</i>,{" "}
                  <i className="text-orange-400">&quot;1/2&quot;</i>
                  ); <span className="text-zinc-500">{"// 60"}</span>
                  <br />
                  <i className="text-yellow-400">ratio</i>(
                  <i className="text-orange-400">120</i>,{" "}
                  <i className="text-orange-400">&quot;1/3&quot;</i>
                  ); <span className="text-zinc-500">{"// 40"}</span>
                  <br />
                  <i className="text-yellow-400">ratio</i>(
                  <i className="text-orange-400">120</i>,{" "}
                  <i className="text-orange-400">&quot;2/3&quot;</i>
                  ); <span className="text-zinc-500">{"// 80"}</span>
                  <br />
                  <i className="text-yellow-400">ratio</i>(
                  <i className="text-orange-400">120</i>,{" "}
                  <i className="text-orange-400">&quot;full&quot;</i>){" "}
                  <span className="text-zinc-500">{"// 120"}</span>
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Combined with terminal size"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">halfWidth</i> ={" "}
                  <i className="text-yellow-400">ratio</i>(
                  <i className="text-blue-400">size</i>.
                  <i className="text-cyan-600">width</i>.
                  <i className="text-cyan-600">og</i>,{" "}
                  <i className="text-orange-400">&quot;1/2&quot;</i>);
                </div>
              ),
              snippet: `import { ratio, size } from "ts-better-console";

ratio(120, "1/2");   // 60
ratio(120, "1/3");   // 40
ratio(120, "2/3");   // 80
ratio(120, "full");  // 120

// Combined with terminal size
const halfWidth = ratio(size.width.og, "1/2");`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
