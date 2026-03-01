import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>SpinnerStyleOptions</h1>
        <p>
          The <code>SpinnerStyle</code> type defines the available built-in
          animation styles for a spinner component in{" "}
          <strong>ts-better-console</strong>. Each style provides a different
          visual animation pattern for the loading indicator.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>SpinnerStyle</code> type accepts the following string
          values:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>"dots"</code>: A dots-based animation (e.g., ⠋ ⠙ ⠹ ⠸ ⠼ ⠴ ⠦ ⠧ ⠇
            ⠏).
          </li>
          <li>
            <code>"line"</code>: A line-based animation (e.g., - \ | /).
          </li>
          <li>
            <code>"bounce"</code>: A bouncing animation style.
          </li>
          <li>
            <code>"arrow"</code>: An arrow-based animation (e.g., ← ↖ ↑ ↗ → ↘ ↓
            ↙).
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "SpinnerStyle Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">SpinnerStyle</i> ={" "}
                  <span className="text-orange-400">
                    "dots" | "line" | "bounce" | "arrow"
                  </span>
                  ;
                </div>
              ),
              snippet: `type SpinnerStyle = "dots" | "line" | "bounce" | "arrow";`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use <code>SpinnerStyle</code> within{" "}
          <code>SpinnerOptions</code> to select a built-in animation:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using SpinnerStyle",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">spinner</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <span className="text-zinc-500">// Dots style</span>
                  <br />
                  <i className="text-emerald-400">spinner</i>(
                  <i className="text-orange-400">"Loading..."</i>, {"{"}{" "}
                  <i className="text-blue-400">style</i>:{" "}
                  <i className="text-orange-400">"dots"</i> {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">// Line style</span>
                  <br />
                  <i className="text-emerald-400">spinner</i>(
                  <i className="text-orange-400">"Loading..."</i>, {"{"}{" "}
                  <i className="text-blue-400">style</i>:{" "}
                  <i className="text-orange-400">"line"</i> {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">// Bounce style</span>
                  <br />
                  <i className="text-emerald-400">spinner</i>(
                  <i className="text-orange-400">"Loading..."</i>, {"{"}{" "}
                  <i className="text-blue-400">style</i>:{" "}
                  <i className="text-orange-400">"bounce"</i> {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">// Arrow style</span>
                  <br />
                  <i className="text-emerald-400">spinner</i>(
                  <i className="text-orange-400">"Loading..."</i>, {"{"}{" "}
                  <i className="text-blue-400">style</i>:{" "}
                  <i className="text-orange-400">"arrow"</i> {"}"});
                </div>
              ),
              snippet: `import { spinner } from "ts-better-console";

// Dots style
spinner("Loading...", { style: "dots" });

// Line style
spinner("Loading...", { style: "line" });

// Bounce style
spinner("Loading...", { style: "bounce" });

// Arrow style
spinner("Loading...", { style: "arrow" });`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
