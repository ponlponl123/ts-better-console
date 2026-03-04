import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>clearStyle</h1>
        <p>
          The <code>clearStyle</code> function appends targeted ANSI reset
          escape codes to the end of a string based on the provided{" "}
          <code>ClearStyleOptions</code>. Instead of a blanket{" "}
          <code>\x1b[0m</code> reset, it uses precise codes:{" "}
          <code>DEFAULT_COLOR</code> (<code>\x1b[39m</code>) for foreground
          color, <code>DEFAULT_BACKGROUND</code> (<code>\x1b[49m</code>) for
          background color, and <code>NORMAL_INTENSITY</code> (
          <code>\x1b[22m</code>) for bold/dim styles. Falls back to a full{" "}
          <code>\x1b[0m</code> reset only when called with no options. This is
          useful when working with the <code>endless</code> option in{" "}
          <code>s()</code>.
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
                  <span className="text-orange-400">string</span>,{" "}
                  <i className="text-cyan-600">options</i>?:{" "}
                  <span className="text-orange-400">ClearStyleOptions</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function clearStyle(str: string, options?: ClearStyleOptions): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>str</code>: The string to append the reset codes to.
          </li>
          <li>
            <code>options</code> (optional): A <code>ClearStyleOptions</code>{" "}
            object controlling which attributes to reset:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                <code>color</code>: reset foreground color with{" "}
                <code>DEFAULT_COLOR</code> (<code>\x1b[39m</code>)
              </li>
              <li>
                <code>backgroundColor</code>: reset background color with{" "}
                <code>DEFAULT_BACKGROUND</code> (<code>\x1b[49m</code>)
              </li>
              <li>
                <code>style</code>: reset individual styles; bold/dim use{" "}
                <code>NORMAL_INTENSITY</code> (<code>\x1b[22m</code>)
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns the original string with the appropriate targeted reset escape
          codes appended. When no options are provided, falls back to a full{" "}
          <code>\x1b[0m</code> reset.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Targeted Color Reset",
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
                    {/* Reset only foreground color (DEFAULT_COLOR \x1b[39m) */}
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
                  <i className="text-orange-400">false</i>), {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">true</i> {"}"});
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">result</i>);
                </div>
              ),
              snippet: `import { s, clearStyle, cs } from "ts-better-console";

// Reset only foreground color — appends DEFAULT_COLOR (\x1b[39m)
const styled = s("Red text", { color: "red", endless: true });
const result = clearStyle(cs([styled, "normal text"], false), { color: true });

console.log(result);`,
            },
            {
              title: "Targeted Background & Intensity Reset",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">clearStyle</i>,{" "}
                  <i className="text-blue-400">Colors</i>,{" "}
                  <i className="text-blue-400">BackgroundColors</i>,{" "}
                  <i className="text-blue-400">Styles</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {
                      "// Resets fg (DEFAULT_COLOR), bg (DEFAULT_BACKGROUND) and bold (NORMAL_INTENSITY)"
                    }
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">str</i> ={" "}
                  <i className="text-emerald-400">Styles</i>.
                  <i className="text-blue-400">bold</i> +{" "}
                  <i className="text-emerald-400">Colors</i>.
                  <i className="text-blue-400">white</i> +{" "}
                  <i className="text-emerald-400">BackgroundColors</i>.
                  <i className="text-blue-400">blue</i> +{" "}
                  <i className="text-orange-400">&quot;Hello&quot;</i>;
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">clearStyle</i>(
                  <i className="text-blue-400">str</i>, {"{"}{" "}
                  <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">true</i>,{" "}
                  <i className="text-blue-400">backgroundColor</i>:{" "}
                  <i className="text-orange-400">true</i>,{" "}
                  <i className="text-blue-400">style</i>: [
                  <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}));
                </div>
              ),
              snippet: `import { clearStyle, Colors, BackgroundColors, Styles } from "ts-better-console";

// Resets fg (DEFAULT_COLOR \x1b[39m), bg (DEFAULT_BACKGROUND \x1b[49m) and bold (NORMAL_INTENSITY \x1b[22m)
const str = Styles.bold + Colors.white + BackgroundColors.blue + "Hello";
console.log(clearStyle(str, { color: true, backgroundColor: true, style: ["bold"] }));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
