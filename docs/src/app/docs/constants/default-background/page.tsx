import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>DEFAULT_BACKGROUND</h1>
        <p>
          <code>DEFAULT_BACKGROUND</code> is the ANSI escape code that resets
          only the background color to the terminal&apos;s default, leaving
          foreground color and intensity attributes untouched.
        </p>
        <h2 className="mt-8">Definition</h2>
        <Code
          codesnippets={[
            {
              title: "DEFAULT_BACKGROUND Constant",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">DEFAULT_BACKGROUND</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[49m&quot;</span>;
                </div>
              ),
              snippet: `const DEFAULT_BACKGROUND = "\\x1b[49m";`,
            },
          ]}
        />
        <h2 className="mt-8">Description</h2>
        <p>
          The value <code>&quot;\x1b[49m&quot;</code> is SGR parameter 49 —
          &quot;default background color&quot;. It restores the terminal&apos;s
          default background color without resetting the foreground, bold, or
          any other attribute. Use it instead of <code>\x1b[0m</code> when you
          only want to cancel a background applied by{" "}
          <code>BackgroundColors</code> or a custom <code>getColorCode</code>{" "}
          call.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Reset Background Color Only",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">BackgroundColors</i>,{" "}
                  <i className="text-blue-400">DEFAULT_BACKGROUND</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Resets only background — foreground/intensity untouched
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-emerald-400">BackgroundColors</i>.
                  <i className="text-blue-400">blue</i> +{" "}
                  <i className="text-orange-400">
                    &quot;Text on blue background&quot;
                  </i>{" "}
                  + <i className="text-blue-400">DEFAULT_BACKGROUND</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">
                    &quot;Back to default background&quot;
                  </i>
                  );
                </div>
              ),
              snippet: `import { BackgroundColors, DEFAULT_BACKGROUND } from "ts-better-console";

// Resets only background — foreground/intensity untouched
console.log(BackgroundColors.blue + "Text on blue background" + DEFAULT_BACKGROUND);
console.log("Back to default background");`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
