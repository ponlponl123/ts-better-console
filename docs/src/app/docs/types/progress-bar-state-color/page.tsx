import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ProgressBarStateColor</h1>
        <p>
          The <code>ProgressBarStateColor</code> interface defines per-state
          color overrides for a progress bar in{" "}
          <strong>ts-better-console</strong>. Each property accepts a color name
          or <code>&quot;foreground&quot;</code> to use the default behavior.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ProgressBarStateColor</code> interface includes the
          following properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>loaded</code>: Color for the filled portion while active.
            Defaults to <code>&quot;foreground&quot;</code>.
          </li>
          <li>
            <code>buffered</code>: Color for the buffered portion while active.
            Defaults to <code>&quot;foreground&quot;</code>.
          </li>
          <li>
            <code>empty</code>: Color for the empty portion. Defaults to{" "}
            <code>&quot;foreground&quot;</code>.
          </li>
          <li>
            <code>completed</code>: Color applied to the bar when progress
            completes. Defaults to <code>&quot;green&quot;</code>.
          </li>
          <li>
            <code>cancelled</code>: Color applied to the bar when cancelled.
            Defaults to <code>&quot;yellow&quot;</code>.
          </li>
          <li>
            <code>errored</code>: Color applied to the bar when errored.
            Defaults to <code>&quot;red&quot;</code>.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ProgressBarStateColor Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">ProgressBarStateColor</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">loaded</i>?:{" "}
                  <span className="text-cyan-400">UnSpecifiedColor</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">buffered</i>?:{" "}
                  <span className="text-cyan-400">UnSpecifiedColor</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">empty</i>?:{" "}
                  <span className="text-cyan-400">UnSpecifiedColor</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">completed</i>?:{" "}
                  <span className="text-cyan-400">UnSpecifiedColor</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">cancelled</i>?:{" "}
                  <span className="text-cyan-400">UnSpecifiedColor</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">errored</i>?:{" "}
                  <span className="text-cyan-400">UnSpecifiedColor</span>;
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // UnSpecifiedColor = Color | &quot;foreground&quot;
                  </span>
                  <br />
                  <span className="text-zinc-500">
                    // Color = &quot;black&quot; | &quot;red&quot; |
                    &quot;green&quot; | &quot;yellow&quot; | &quot;blue&quot; |
                    &quot;magenta&quot; | &quot;cyan&quot; | &quot;white&quot; |
                    &quot;gray&quot;
                  </span>
                </div>
              ),
              snippet: `interface ProgressBarStateColor {
  loaded?: UnSpecifiedColor;
  buffered?: UnSpecifiedColor;
  empty?: UnSpecifiedColor;
  completed?: UnSpecifiedColor;
  cancelled?: UnSpecifiedColor;
  errored?: UnSpecifiedColor;
}

// UnSpecifiedColor = Color | "foreground"
// Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray"`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          Use <code>ProgressBarStateColor</code> via the <code>bar.color</code>{" "}
          property of <code>ProgressOptions</code>:
        </p>
        <Code
          codesnippets={[
            {
              title: "Custom State Colors",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Progress</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">bar</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">&quot;Deploying&quot;</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">color</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">loaded</i>:{" "}
                        <i className="text-orange-400">&quot;cyan&quot;</i>,
                        <br />
                        <i className="text-blue-400">buffered</i>:{" "}
                        <i className="text-orange-400">&quot;blue&quot;</i>,
                        <br />
                        <i className="text-blue-400">completed</i>:{" "}
                        <i className="text-orange-400">&quot;green&quot;</i>,
                        <br />
                        <i className="text-blue-400">cancelled</i>:{" "}
                        <i className="text-orange-400">&quot;yellow&quot;</i>,
                        <br />
                        <i className="text-blue-400">errored</i>:{" "}
                        <i className="text-orange-400">&quot;red&quot;</i>,
                      </div>
                      {"}"},
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Deploying", 100, {
  bar: {
    color: {
      loaded: "cyan",
      buffered: "blue",
      completed: "green",
      cancelled: "yellow",
      errored: "red",
    },
  },
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
