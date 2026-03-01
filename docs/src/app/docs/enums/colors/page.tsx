import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Colors</h1>
        <p>
          The <code>Colors</code> enum provides ANSI escape codes for setting
          text foreground colors in terminal output. These values are used
          internally by <strong>ts-better-console</strong> to apply color
          styling via the <code>s</code> function and <code>StyleOptions</code>.
        </p>
        <h2 className="mt-8">Enum Definition</h2>
        <p>
          The <code>Colors</code> enum maps color names to their corresponding
          ANSI escape sequences:
        </p>
        <Code
          codesnippets={[
            {
              title: "Colors Enum",
              code: (
                <div>
                  <i className="text-purple-400">enum</i>{" "}
                  <i className="text-blue-400">Colors</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">black</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[30m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">red</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[31m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">green</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[32m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">yellow</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[33m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">blue</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[34m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">magenta</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[35m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">cyan</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[36m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">white</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[37m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">gray</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[90m&quot;</span>
                  ,
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `enum Colors {
  black = "\\x1b[30m",
  red = "\\x1b[31m",
  green = "\\x1b[32m",
  yellow = "\\x1b[33m",
  blue = "\\x1b[34m",
  magenta = "\\x1b[35m",
  cyan = "\\x1b[36m",
  white = "\\x1b[37m",
  gray = "\\x1b[90m",
}`,
            },
          ]}
        />
        <h2 className="mt-8">Available Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4">
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-black border border-foreground/20" />
            <code>black</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-red-500" />
            <code>red</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-green-500" />
            <code>green</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-yellow-500" />
            <code>yellow</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-blue-500" />
            <code>blue</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-fuchsia-500" />
            <code>magenta</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-cyan-500" />
            <code>cyan</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-white border border-foreground/20" />
            <code>white</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded-full bg-gray-500" />
            <code>gray</code>
          </div>
        </div>
        <h2 className="mt-8">Usage</h2>
        <p>
          While the <code>Colors</code> enum is used internally, you typically
          set colors via the <code>StyleOptions</code> type when using the{" "}
          <code>s</code> function. You can also import and use the enum directly
          for advanced use cases:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using Colors with StyleOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Using color names via StyleOptions
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Hello in red!&quot;</i>,{" "}
                  {"{"} <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;red&quot;</i> {"}"}));
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Hello in cyan!&quot;</i>,{" "}
                  {"{"} <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;cyan&quot;</i> {"}"}));
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">
                    &quot;Hello in yellow!&quot;
                  </i>
                  , {"{"} <i className="text-blue-400">color</i>:{" "}
                  <i className="text-orange-400">&quot;yellow&quot;</i> {"}"}));
                </div>
              ),
              snippet: `import { s } from "ts-better-console";

// Using color names via StyleOptions
console.log(s("Hello in red!", { color: "red" }));
console.log(s("Hello in cyan!", { color: "cyan" }));
console.log(s("Hello in yellow!", { color: "yellow" }));`,
            },
            {
              title: "Using Colors Enum Directly",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Colors</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Using the enum values directly
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-emerald-400">Colors</i>.
                  <i className="text-blue-400">red</i> +{" "}
                  <i className="text-orange-400">&quot;This is red&quot;</i> +{" "}
                  <i className="text-blue-400">cls</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-emerald-400">Colors</i>.
                  <i className="text-blue-400">green</i> +{" "}
                  <i className="text-orange-400">&quot;This is green&quot;</i> +{" "}
                  <i className="text-blue-400">cls</i>);
                </div>
              ),
              snippet: `import { Colors, cls } from "ts-better-console";

// Using the enum values directly
console.log(Colors.red + "This is red" + cls);
console.log(Colors.green + "This is green" + cls);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
