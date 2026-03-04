import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>NORMAL_INTENSITY</h1>
        <p>
          <code>NORMAL_INTENSITY</code> is the ANSI escape code that resets bold
          and dim (intensity) attributes without affecting any other terminal
          attributes such as color or background.
        </p>
        <h2 className="mt-8">Definition</h2>
        <Code
          codesnippets={[
            {
              title: "NORMAL_INTENSITY Constant",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">NORMAL_INTENSITY</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[22m&quot;</span>;
                </div>
              ),
              snippet: `const NORMAL_INTENSITY = "\\x1b[22m";`,
            },
          ]}
        />
        <h2 className="mt-8">Description</h2>
        <p>
          The value <code>&quot;\x1b[22m&quot;</code> is the SGR parameter 22 —
          &quot;normal color or intensity&quot;. It turns off bold and dim
          without resetting foreground color, background color, or any other
          style. This makes it the safe choice when you only want to undo a{" "}
          <code>Styles.bold</code> or <code>Styles.dim</code> without side
          effects.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Reset Bold Only",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Styles</i>,{" "}
                  <i className="text-blue-400">Colors</i>,{" "}
                  <i className="text-blue-400">NORMAL_INTENSITY</i>,{" "}
                  <i className="text-blue-400">DEFAULT_COLOR</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {
                      "// Bold is cleared; the red foreground continues until DEFAULT_COLOR"
                    }
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">Colors</i>.
                    <i className="text-blue-400">red</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-emerald-400">Styles</i>.
                    <i className="text-blue-400">bold</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-orange-400">&quot;Bold red&quot;</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">NORMAL_INTENSITY</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-orange-400">
                      &quot; still red, not bold&quot;
                    </i>{" "}
                    +
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">DEFAULT_COLOR</i>
                  </div>
                  );
                </div>
              ),
              snippet: `import { Styles, Colors, NORMAL_INTENSITY, DEFAULT_COLOR } from "ts-better-console";

// Bold is cleared; the red foreground continues until DEFAULT_COLOR
console.log(
  Colors.red +
  Styles.bold +
  "Bold red" +
  NORMAL_INTENSITY +
  " still red, not bold" +
  DEFAULT_COLOR
);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
