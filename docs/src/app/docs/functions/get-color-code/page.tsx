import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>getColorCode</h1>
        <p>
          <code>getColorCode</code> converts a color name string to its ANSI SGR
          escape sequence. It is the low-level building block that{" "}
          <code>s()</code> uses internally, exposed so you can construct raw
          ANSI strings when you need direct control.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-cyan-600">color</i>:{" "}
                  <span className="text-orange-400">string</span> |{" "}
                  <span className="text-purple-500">undefined</span>,{" "}
                  <i className="text-cyan-600">isBackground</i>:{" "}
                  <span className="text-purple-500">boolean</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function getColorCode(color: string | undefined, isBackground: boolean): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>color</code>: A color name from the <code>Color</code> type
            (e.g. <code>&quot;red&quot;</code>, <code>&quot;cyan&quot;</code>).
            Returns an empty string when <code>undefined</code>.
          </li>
          <li>
            <code>isBackground</code>: When <code>true</code>, returns the
            background SGR code (40–47 range); when <code>false</code>, returns
            the foreground code (30–37 range).
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          A raw ANSI escape string such as <code>&quot;\x1b[32m&quot;</code>{" "}
          (foreground green) or <code>&quot;\x1b[42m&quot;</code> (background
          green). Returns an empty string for unknown or undefined colors.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Manual ANSI Construction",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">getColorCode</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">fg</i> ={" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-orange-400">&quot;green&quot;</i>,{" "}
                  <i className="text-purple-500">false</i>);
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">bg</i> ={" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-orange-400">&quot;black&quot;</i>,{" "}
                  <i className="text-purple-500">true</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">fg</i> +{" "}
                  <i className="text-blue-400">bg</i> +{" "}
                  <i className="text-orange-400">&quot;Styled text&quot;</i> +{" "}
                  <i className="text-blue-400">cls</i>);
                </div>
              ),
              snippet: `import { getColorCode, cls } from "ts-better-console";

const fg = getColorCode("green", false);  // "\x1b[32m"
const bg = getColorCode("black", true);   // "\x1b[40m"
console.log(fg + bg + "Styled text" + cls);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
