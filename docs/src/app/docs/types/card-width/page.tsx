import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>CardWidth</h1>
        <p>
          The <code>CardWidth</code> type controls how wide a card (or input)
          should be. You can pass a pixel number, a fraction of the terminal
          width, or let it figure itself out.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>CardWidth</code> type accepts the following values:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>number</code> — a fixed width in characters. Minimum is 12;
            clamped to the terminal width.
          </li>
          <li>
            <code>Ratio</code> — a fraction string: <code>&quot;1/2&quot;</code>
            , <code>&quot;1/3&quot;</code>, <code>&quot;2/3&quot;</code>, or{" "}
            <code>&quot;full&quot;</code>. Calculated relative to the terminal
            width.
          </li>
          <li>
            <code>&quot;auto&quot;</code> — shrinks to fit the content (minimum
            12 characters).
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "CardWidth Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Ratio</i> ={" "}
                  <span className="text-orange-400">"1/2"</span> |{" "}
                  <span className="text-orange-400">"1/3"</span> |{" "}
                  <span className="text-orange-400">"2/3"</span> |{" "}
                  <span className="text-orange-400">"full"</span>;
                  <br />
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">CardWidth</i> ={" "}
                  <span className="text-orange-400">number</span> |{" "}
                  <span className="text-cyan-400">Ratio</span> |{" "}
                  <span className="text-orange-400">"auto"</span>;
                </div>
              ),
              snippet: `type Ratio = "1/2" | "1/3" | "2/3" | "full";

type CardWidth = number | Ratio | "auto";`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use <code>CardWidth</code> to control the width of a card when
          creating it:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using CardWidth",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Card</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Fixed width of 40 characters
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Card</i>(
                  <i className="text-orange-400">"Content"</i>,{" "}
                  <i className="text-orange-400">40</i>, {"{"} {"}"}).render());
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Auto width based on content
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Card</i>(
                  <i className="text-orange-400">"Content"</i>,{" "}
                  <i className="text-orange-400">"auto"</i>, {"{"} {"}"}
                  ).render());
                </div>
              ),
              snippet: `import { Card } from "ts-better-console";

// Fixed width of 40 characters
console.log(new Card("Content", 40, {}).render());

// Auto width based on content
console.log(new Card("Content", "auto", {}).render());`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
