import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>CardWidth</h1>
        <p>
          The <code>CardWidth</code> type defines the width of a card component
          in <strong>ts-better-console</strong>. It can either be a fixed
          numeric value or the string <code>"auto"</code> to automatically
          adjust the width based on the card&apos;s content.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>CardWidth</code> type accepts the following values:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>number</code>: A fixed width in characters for the card.
          </li>
          <li>
            <code>"auto"</code>: Automatically determines the card width based
            on the content.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "CardWidth Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">cardWidth</i> ={" "}
                  <span className="text-orange-400">number</span> |{" "}
                  <span className="text-orange-400">"auto"</span>;
                </div>
              ),
              snippet: `type cardWidth = number | "auto";`,
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
                  <i className="text-blue-400">createCard</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Fixed width of 40 characters
                  </span>
                  <br />
                  <i className="text-emerald-400">createCard</i>(
                  <i className="text-orange-400">"Content"</i>,{" "}
                  <i className="text-orange-400">40</i>, {"{"} {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Auto width based on content
                  </span>
                  <br />
                  <i className="text-emerald-400">createCard</i>(
                  <i className="text-orange-400">"Content"</i>,{" "}
                  <i className="text-orange-400">"auto"</i>, {"{"} {"}"});
                </div>
              ),
              snippet: `import { createCard } from "ts-better-console";

// Fixed width of 40 characters
createCard("Content", 40, {});

// Auto width based on content
createCard("Content", "auto", {});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
