import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>rainbowColors</h1>
        <p>
          <code>rainbowColors</code> is the ordered list of color names used by
          the <code>rainbow()</code> function. Its companion{" "}
          <code>rainbowASCIICodes</code> is the same sequence expressed as raw
          ANSI SGR escape strings — useful when you need the codes directly
          without going through a color lookup.
        </p>
        <h2 className="mt-8">Declarations</h2>
        <Code
          codesnippets={[
            {
              title: "rainbowColors & rainbowASCIICodes",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">rainbowColors</i>:{" "}
                  <span className="text-cyan-400">Color</span>[] = [
                  <div className="ml-4">
                    <i className="text-orange-400">&quot;red&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;yellow&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;green&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;cyan&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;blue&quot;</i>,
                    <br />
                    <i className="text-orange-400">&quot;magenta&quot;</i>,
                  </div>
                  ];
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Pre-mapped ANSI escape sequences (same order)"}
                  </i>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">rainbowASCIICodes</i>:{" "}
                  <span className="text-orange-400">string</span>[] ={" "}
                  <i className="text-blue-400">rainbowColors</i>.
                  <i className="text-yellow-400">map</i>(
                  <i className="text-blue-400">c</i> =&gt;{" "}
                  <span className="text-cyan-400">Colors</span>[
                  <i className="text-blue-400">c</i>]);
                </div>
              ),
              snippet: `const rainbowColors: Color[] = [
  "red",
  "yellow",
  "green",
  "cyan",
  "blue",
  "magenta",
];

// Pre-mapped ANSI escape sequences (same order)
const rainbowASCIICodes: string[] = rainbowColors.map(c => Colors[c]);`,
            },
          ]}
        />
        <h2 className="mt-8">Values</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left p-2">Index</th>
              <th className="text-left p-2">Color</th>
              <th className="text-left p-2">ANSI code</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0", "red", "\\x1b[31m"],
              ["1", "yellow", "\\x1b[33m"],
              ["2", "green", "\\x1b[32m"],
              ["3", "cyan", "\\x1b[36m"],
              ["4", "blue", "\\x1b[34m"],
              ["5", "magenta", "\\x1b[35m"],
            ].map(([i, color, code]) => (
              <tr key={i} className="border-b border-zinc-800">
                <td className="p-2 text-zinc-400">{i}</td>
                <td className="p-2 text-orange-400">{color}</td>
                <td className="p-2 text-zinc-400 font-mono">{code}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Custom Rainbow Loop",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">rainbowColors</i>,{" "}
                  <i className="text-blue-400">rainbowASCIICodes</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Cycle through the palette manually"}
                  </i>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">words</i> = [
                  <i className="text-orange-400">&quot;hello&quot;</i>,{" "}
                  <i className="text-orange-400">&quot;world&quot;</i>];
                  <br />
                  <i className="text-blue-400">words</i>.
                  <i className="text-yellow-400">forEach</i>((
                  <i className="text-blue-400">w</i>,{" "}
                  <i className="text-blue-400">i</i>) =&gt; {"{"}
                  <div className="ml-4">
                    <i className="text-purple-400">const</i>{" "}
                    <i className="text-blue-400">code</i> ={" "}
                    <i className="text-blue-400">rainbowASCIICodes</i>[
                    <i className="text-blue-400">i</i> %{" "}
                    <i className="text-blue-400">rainbowASCIICodes</i>.
                    <i className="text-cyan-600">length</i>];
                    <br />
                    <i className="text-emerald-400">process</i>.
                    <i className="text-cyan-600">stdout</i>.
                    <i className="text-yellow-400">write</i>(
                    <i className="text-blue-400">code</i> +{" "}
                    <i className="text-blue-400">w</i> +{" "}
                    <i className="text-blue-400">cls</i> +{" "}
                    <i className="text-orange-400">&quot; &quot;</i>);
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { rainbowColors, rainbowASCIICodes, cls } from "ts-better-console";

// Cycle through the palette manually
const words = ["hello", "world"];
words.forEach((w, i) => {
  const code = rainbowASCIICodes[i % rainbowASCIICodes.length];
  process.stdout.write(code + w + cls + " ");
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
