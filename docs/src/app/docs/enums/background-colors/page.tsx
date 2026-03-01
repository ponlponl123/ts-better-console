import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>BackgroundColors</h1>
        <p>
          The <code>BackgroundColors</code> enum provides ANSI escape codes for
          setting text background colors in terminal output. These values are
          used internally by <strong>ts-better-console</strong> to apply
          background color styling via the <code>s</code> function and{" "}
          <code>StyleOptions</code>.
        </p>
        <h2 className="mt-8">Enum Definition</h2>
        <p>
          The <code>BackgroundColors</code> enum maps color names to their
          corresponding ANSI background escape sequences:
        </p>
        <Code
          codesnippets={[
            {
              title: "BackgroundColors Enum",
              code: (
                <div>
                  <i className="text-purple-400">enum</i>{" "}
                  <i className="text-blue-400">BackgroundColors</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">black</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[40m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">red</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[41m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">green</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[42m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">yellow</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[43m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">blue</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[44m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">magenta</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[45m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">cyan</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[46m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">white</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[47m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">gray</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[100m&quot;</span>
                  ,
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `enum BackgroundColors {
  black = "\\x1b[40m",
  red = "\\x1b[41m",
  green = "\\x1b[42m",
  yellow = "\\x1b[43m",
  blue = "\\x1b[44m",
  magenta = "\\x1b[45m",
  cyan = "\\x1b[46m",
  white = "\\x1b[47m",
  gray = "\\x1b[100m",
}`,
            },
          ]}
        />
        <h2 className="mt-8">Available Background Colors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 my-4">
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-black border border-foreground/20" />
            <code>black</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-red-500" />
            <code>red</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-green-500" />
            <code>green</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-yellow-500" />
            <code>yellow</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-blue-500" />
            <code>blue</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-fuchsia-500" />
            <code>magenta</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-cyan-500" />
            <code>cyan</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-white border border-foreground/20" />
            <code>white</code>
          </div>
          <div className="flex items-center gap-2 p-2 border border-foreground/10 rounded-lg">
            <span className="w-4 h-4 rounded bg-gray-500" />
            <code>gray</code>
          </div>
        </div>
        <h2 className="mt-8">Usage</h2>
        <p>
          While the <code>BackgroundColors</code> enum is used internally, you
          typically set background colors via the <code>StyleOptions</code> type
          when using the <code>s</code> function. You can also import and use
          the enum directly for advanced use cases:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using BackgroundColors with StyleOptions",
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
                    // Using backgroundColor via StyleOptions
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Highlighted!&quot;</i>,{" "}
                  {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;white&quot;</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-orange-400">&quot;red&quot;</i>,
                  </div>
                  {"}"}));
                </div>
              ),
              snippet: `import { s } from "ts-better-console";

// Using backgroundColor via StyleOptions
console.log(s("Highlighted!", {
  color: "white",
  backgroundColor: "red",
}));`,
            },
            {
              title: "Using BackgroundColors Enum Directly",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">BackgroundColors</i>,{" "}
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
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">BackgroundColors</i>.
                    <i className="text-blue-400">blue</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-emerald-400">Colors</i>.
                    <i className="text-blue-400">white</i> +
                  </div>
                  <div className="ml-4">
                    <i className="text-orange-400">
                      &quot; White on Blue &quot;
                    </i>{" "}
                    +
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">cls</i>
                  </div>
                  );
                </div>
              ),
              snippet: `import { BackgroundColors, Colors, cls } from "ts-better-console";

// Using the enum values directly
console.log(
  BackgroundColors.blue +
  Colors.white +
  " White on Blue " +
  cls
);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
