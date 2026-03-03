import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>aliasAlignment</h1>
        <p>
          <code>aliasAlignment</code> (aliased as <code>aa</code>) normalises
          the extended <code>Align</code> type — which includes convenience
          aliases like <code>&quot;start&quot;</code> and{" "}
          <code>&quot;end&quot;</code> — into the canonical{" "}
          <code>Alignment</code> values accepted by layout functions.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">aliasAlignment</i>(
                  <i className="text-cyan-600">align</i>:{" "}
                  <span className="text-cyan-400">Align</span>):{" "}
                  <span className="text-cyan-400">Alignment</span>
                </div>
              ),
              snippet: `function aliasAlignment(align: Align): Alignment`,
            },
          ]}
        />
        <h2 className="mt-8">Mapping</h2>
        <Code
          codesnippets={[
            {
              title: "Alias Resolution",
              code: (
                <div>
                  <i className="text-orange-400">&quot;start&quot;</i> {"→"}{" "}
                  <i className="text-orange-400">&quot;left&quot;</i>
                  <br />
                  <i className="text-orange-400">&quot;end&quot;</i> {"→"}{" "}
                  <i className="text-orange-400">&quot;right&quot;</i>
                  <br />
                  <i className="text-orange-400">&quot;left&quot;</i> {"→"}{" "}
                  <i className="text-orange-400">&quot;left&quot;</i>{" "}
                  <span className="text-zinc-500">{"// pass-through"}</span>
                  <br />
                  <i className="text-orange-400">&quot;center&quot;</i> {"→"}{" "}
                  <i className="text-orange-400">&quot;center&quot;</i>{" "}
                  <span className="text-zinc-500">{"// pass-through"}</span>
                  <br />
                  <i className="text-orange-400">&quot;right&quot;</i> {"→"}{" "}
                  <i className="text-orange-400">&quot;right&quot;</i>{" "}
                  <span className="text-zinc-500">{"// pass-through"}</span>
                </div>
              ),
              snippet: `"start"  → "left"
"end"    → "right"
"left"   → "left"   // pass-through
"center" → "center" // pass-through
"right"  → "right"  // pass-through`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>align</code>: Any value of type <code>Align</code> (
            <code>&quot;start&quot;</code>, <code>&quot;center&quot;</code>,{" "}
            <code>&quot;end&quot;</code>, <code>&quot;left&quot;</code>,{" "}
            <code>&quot;right&quot;</code>).
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          A canonical <code>Alignment</code> string —{" "}
          <code>&quot;left&quot;</code>, <code>&quot;center&quot;</code>, or{" "}
          <code>&quot;right&quot;</code>.
        </p>
        <h2 className="mt-8">Aliases</h2>
        <p>
          Exported as both <code>aliasAlignment</code> and <code>aa</code>.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Normalising User Input",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">aa</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-yellow-400">aa</i>(
                  <i className="text-orange-400">&quot;start&quot;</i>
                  ); <span className="text-zinc-500">{'// "left"'}</span>
                  <br />
                  <i className="text-yellow-400">aa</i>(
                  <i className="text-orange-400">&quot;end&quot;</i>
                  );{"  "} <span className="text-zinc-500">{'// "right"'}</span>
                  <br />
                  <i className="text-yellow-400">aa</i>(
                  <i className="text-orange-400">&quot;center&quot;</i>
                  ); <span className="text-zinc-500">{'// "center"'}</span>
                </div>
              ),
              snippet: `import { aa } from "ts-better-console";

aa("start");  // "left"
aa("end");    // "right"
aa("center"); // "center"`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
