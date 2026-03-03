import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>FixedPosition</h1>
        <p>
          <code>FixedPosition</code> controls where an interactive component
          renders relative to the terminal viewport.{" "}
          <code>&quot;top&quot;</code> and <code>&quot;bottom&quot;</code>{" "}
          reserve a scroll region so the component stays pinned while normal
          output scrolls past it. <code>&quot;inline&quot;</code> renders at the
          current cursor position without any scroll-region manipulation.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "FixedPosition Type",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">FixedPosition</i> ={" "}
                  <span className="text-orange-400">
                    &quot;inline&quot; | &quot;top&quot; | &quot;bottom&quot;
                  </span>
                  ;
                </div>
              ),
              snippet: `type FixedPosition = "inline" | "top" | "bottom";`,
            },
          ]}
        />
        <h2 className="mt-8">Values</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;inline&quot;</code> — default; renders where the cursor
            currently is and scrolls with the rest of the output.
          </li>
          <li>
            <code>&quot;top&quot;</code> — pins the component to the first row
            of the terminal. A scroll region is created so log output appears
            below it.
          </li>
          <li>
            <code>&quot;bottom&quot;</code> — pins the component to the last
            row. Log output scrolls above it, keeping the component always
            visible at the bottom.
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Pinned Progress Bar",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Progress</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">bar</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">&quot;Uploading&quot;</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}{" "}
                    <i className="text-blue-400">position</i>:{" "}
                    <i className="text-orange-400">&quot;bottom&quot;</i> {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Uploading", 100, {
  bar: { position: "bottom" },
});`,
            },
            {
              title: "Pinned Input Prompt",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Input</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">input</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Input</i>({"{"}{" "}
                  <i className="text-blue-400">position</i>:{" "}
                  <i className="text-orange-400">&quot;bottom&quot;</i> {"}"});
                </div>
              ),
              snippet: `import { Input } from "ts-better-console";

const input = new Input({ position: "bottom" });`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
