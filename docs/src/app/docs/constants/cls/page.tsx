import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>cls</h1>
        <p>
          The <code>cls</code> constant is the ANSI reset escape code used to
          clear all active styles in terminal output. When appended to a styled
          string, it resets the terminal formatting back to its default state,
          preventing styles from bleeding into subsequent text.
        </p>
        <h2 className="mt-8">Definition</h2>
        <Code
          codesnippets={[
            {
              title: "cls Constant",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">cls</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[0m&quot;</span>;
                </div>
              ),
              snippet: `const cls = "\\x1b[0m";`,
            },
          ]}
        />
        <h2 className="mt-8">Description</h2>
        <p>
          The value <code>&quot;\x1b[0m&quot;</code> is the standard ANSI escape
          sequence for resetting all terminal text attributes. This includes:
        </p>
        <ul className="list-disc list-inside">
          <li>Text foreground color</li>
          <li>Text background color</li>
          <li>Text styles (bold, italic, underline, strikethrough)</li>
        </ul>
        <p className="mt-4">
          The <code>s</code> function automatically appends this reset code
          unless the <code>endless</code> option is set to <code>true</code> in{" "}
          <code>StyleOptions</code>. However, when manually constructing styled
          strings using the <code>Colors</code>, <code>BackgroundColors</code>,
          or <code>Styles</code> enums directly, you should append{" "}
          <code>cls</code> at the end to reset the styling.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Using cls to Reset Styles",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Colors</i>,{" "}
                  <i className="text-blue-400">Styles</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Without cls — styles bleed into next text
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-emerald-400">Colors</i>.
                  <i className="text-blue-400">red</i> +{" "}
                  <i className="text-orange-400">&quot;Red text&quot;</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">
                    &quot;This will also be red!&quot;
                  </i>
                  );
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // With cls — styles are properly reset
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-emerald-400">Colors</i>.
                  <i className="text-blue-400">red</i> +{" "}
                  <i className="text-orange-400">&quot;Red text&quot;</i> +{" "}
                  <i className="text-blue-400">cls</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">
                    &quot;This is back to normal&quot;
                  </i>
                  );
                </div>
              ),
              snippet: `import { Colors, Styles, cls } from "ts-better-console";

// Without cls — styles bleed into next text
console.log(Colors.red + "Red text");
console.log("This will also be red!");

// With cls — styles are properly reset
console.log(Colors.red + "Red text" + cls);
console.log("This is back to normal");`,
            },
            {
              title: "Combining Multiple Styles with cls",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Colors</i>,{" "}
                  <i className="text-blue-400">BackgroundColors</i>,{" "}
                  <i className="text-blue-400">Styles</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">Styles</i>.
                    <i className="text-blue-400">bold</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-emerald-400">Colors</i>.
                    <i className="text-blue-400">white</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-emerald-400">BackgroundColors</i>.
                    <i className="text-blue-400">blue</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-orange-400">
                      &quot; Bold white on blue &quot;
                    </i>{" "}
                    +
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">cls</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-orange-400">
                      &quot; Normal text after&quot;
                    </i>
                  </div>
                  );
                </div>
              ),
              snippet: `import { Colors, BackgroundColors, Styles, cls } from "ts-better-console";

console.log(
  Styles.bold +
  Colors.white +
  BackgroundColors.blue +
  " Bold white on blue " +
  cls +
  " Normal text after"
);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
