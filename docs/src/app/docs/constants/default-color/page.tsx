import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>DEFAULT_COLOR</h1>
        <p>
          <code>DEFAULT_COLOR</code> is the ANSI escape code that resets only
          the foreground (text) color to the terminal&apos;s default, leaving
          background color and intensity attributes untouched.
        </p>
        <h2 className="mt-8">Definition</h2>
        <Code
          codesnippets={[
            {
              title: "DEFAULT_COLOR Constant",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">DEFAULT_COLOR</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[39m&quot;</span>;
                </div>
              ),
              snippet: `const DEFAULT_COLOR = "\\x1b[39m";`,
            },
          ]}
        />
        <h2 className="mt-8">Description</h2>
        <p>
          The value <code>&quot;\x1b[39m&quot;</code> is SGR parameter 39 —
          &quot;default foreground color&quot;. It restores the terminal&apos;s
          default foreground color without resetting the background, bold, or
          any other attribute. Use it instead of <code>\x1b[0m</code> when you
          only want to cancel a color applied by <code>Colors</code> or a custom{" "}
          <code>getColorCode</code> call.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Reset Foreground Color Only",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Colors</i>,{" "}
                  <i className="text-blue-400">DEFAULT_COLOR</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Resets only foreground — background/intensity untouched
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-emerald-400">Colors</i>.
                  <i className="text-blue-400">red</i> +{" "}
                  <i className="text-orange-400">&quot;Red text&quot;</i> +{" "}
                  <i className="text-blue-400">DEFAULT_COLOR</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">
                    &quot;This is back to default color&quot;
                  </i>
                  );
                </div>
              ),
              snippet: `import { Colors, DEFAULT_COLOR } from "ts-better-console";

// Resets only foreground — background/intensity untouched
console.log(Colors.red + "Red text" + DEFAULT_COLOR);
console.log("This is back to default color");`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
