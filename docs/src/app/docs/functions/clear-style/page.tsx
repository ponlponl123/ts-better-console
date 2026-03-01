import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>clearStyle</h1>
        <p>
          The <code>clearStyle</code> function appends an ANSI reset escape code
          (<code>\x1b[0m</code>) to the end of a string, ensuring all styles
          (color, background, bold, etc.) are cleared after it. This is useful
          when working with the <code>endless</code> option in <code>s()</code>.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">clearStyle</i>(
                  <i className="text-cyan-600">str</i>:{" "}
                  <span className="text-orange-400">string</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function clearStyle(str: string): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>str</code>: The string to append the reset code to.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns the original string with <code>\x1b[0m</code> appended.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">s</i>,{" "}
                  <i className="text-blue-400">clearStyle</i>,{" "}
                  <i className="text-blue-400">cs</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Create an endless styled string, then reset
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">styled</i> ={" "}
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Red text&quot;</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;red&quot;</i>,{" "}
                  <i className="text-blue-400">endless</i>:{" "}
                  <i className="text-orange-400">true</i> {"}"});
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">result</i> ={" "}
                  <i className="text-yellow-400">clearStyle</i>(
                  <i className="text-yellow-400">cs</i>([
                  <i className="text-blue-400">styled</i>,{" "}
                  <i className="text-orange-400">&quot;normal text&quot;</i>],{" "}
                  <i className="text-orange-400">false</i>));
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">result</i>);
                </div>
              ),
              snippet: `import { s, clearStyle, cs } from "ts-better-console";

// Create an endless styled string, then reset
const styled = s("Red text", { color: "red", endless: true });
const result = clearStyle(cs([styled, "normal text"], false));

console.log(result);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
