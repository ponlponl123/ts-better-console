import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>toMaxLineLength</h1>
        <p>
          <code>toMaxLineLength</code> and its companion{" "}
          <code>toMaxLinesLength</code> are word-wrapping utilities. They split
          text by word boundaries so no line exceeds a given character width —
          useful when building fixed-width layouts or rendering inside a{" "}
          <code>Card</code>.
        </p>
        <h2 className="mt-8">Signatures</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signatures",
              code: (
                <div>
                  <i className="text-zinc-500">
                    {"// Wrap a single string — returns an array of lines"}
                  </i>
                  <br />
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">toMaxLineLength</i>(
                  <i className="text-cyan-600">str</i>:{" "}
                  <span className="text-orange-400">string</span>,{" "}
                  <i className="text-cyan-600">width</i>:{" "}
                  <span className="text-orange-400">number</span>):{" "}
                  <span className="text-orange-400">string</span>[]
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Wrap an array of pre-split lines"}
                  </i>
                  <br />
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">toMaxLinesLength</i>(
                  <i className="text-cyan-600">lines</i>:{" "}
                  <span className="text-orange-400">string</span>[],{" "}
                  <i className="text-cyan-600">width</i>:{" "}
                  <span className="text-orange-400">number</span>):{" "}
                  <span className="text-orange-400">string</span>[]
                </div>
              ),
              snippet: `// Wrap a single string — returns an array of lines
function toMaxLineLength(str: string, width: number): string[]

// Wrap an array of pre-split lines
function toMaxLinesLength(lines: string[], width: number): string[]`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>str</code> / <code>lines</code>: The text (or pre-split lines)
            to wrap.
          </li>
          <li>
            <code>width</code>: Maximum character count per output line. Words
            that would exceed this limit are moved to a new line.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          An array of <code>string</code> lines, each no wider than{" "}
          <code>width</code> characters.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Word-Wrapping a Paragraph",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">toMaxLineLength</i>,{" "}
                  <i className="text-blue-400">toMaxLinesLength</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">paragraph</i> ={" "}
                  <i className="text-orange-400">
                    &quot;The quick brown fox jumps over the lazy dog&quot;
                  </i>
                  ;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">lines</i> ={" "}
                  <i className="text-yellow-400">toMaxLineLength</i>(
                  <i className="text-blue-400">paragraph</i>,{" "}
                  <i className="text-orange-400">20</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">lines</i>);
                  <br />
                  <span className="text-zinc-500">
                    {'// ["The quick brown", "fox jumps over", "the lazy dog"]'}
                  </span>
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Wrapping an already-split array"}
                  </i>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">input</i> = [
                  <i className="text-orange-400">
                    &quot;Line one is short&quot;
                  </i>
                  ,{" "}
                  <i className="text-orange-400">
                    &quot;Line two is much much longer and needs wrapping&quot;
                  </i>
                  ];
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">wrapped</i> ={" "}
                  <i className="text-yellow-400">toMaxLinesLength</i>(
                  <i className="text-blue-400">input</i>,{" "}
                  <i className="text-orange-400">20</i>);
                </div>
              ),
              snippet: `import { toMaxLineLength, toMaxLinesLength } from "ts-better-console";

const paragraph = "The quick brown fox jumps over the lazy dog";
const lines = toMaxLineLength(paragraph, 20);
console.log(lines);
// ["The quick brown", "fox jumps over", "the lazy dog"]

// Wrapping an already-split array
const input = ["Line one is short", "Line two is much much longer and needs wrapping"];
const wrapped = toMaxLinesLength(input, 20);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
