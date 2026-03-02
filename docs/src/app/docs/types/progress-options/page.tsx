import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ProgressOptions</h1>
        <p>
          The <code>ProgressOptions</code> interface defines the configuration
          options for a progress bar in <strong>ts-better-console</strong>.
          These options allow you to customize the labels and the bar appearance
          including length, symbols, animation, and colors.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ProgressOptions</code> interface includes the following
          properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>label</code>: An optional <code>ProgressLabelPair</code>{" "}
            object that provides two labels — one shown while the progress is
            active and another after completion.
          </li>
          <li>
            <code>bar</code>: An optional <code>ProgressBarOptions</code>{" "}
            object that configures the bar length, symbols, animation, and
            per-state colors.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ProgressOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">ProgressOptions</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">label</i>?:{" "}
                  <span className="text-cyan-400">ProgressLabelPair</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">bar</i>?:{" "}
                  <span className="text-cyan-400">ProgressBarOptions</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface ProgressOptions {
  label?: ProgressLabelPair;
  bar?: ProgressBarOptions;
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can pass <code>ProgressOptions</code> when creating a progress bar
          to customize its appearance:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using ProgressOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Progress</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">&quot;ts-better-console&quot;</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">bar</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">&quot;Files&quot;</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">label</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">while</i>:{" "}
                      <i className="text-orange-400">&quot;Installing&quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">past</i>:{" "}
                      <i className="text-orange-400">&quot;Installed&quot;</i>,
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">length</i>:{" "}
                      <i className="text-orange-400">30</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">animation</i>:{" "}
                      <i className="text-orange-400">&quot;rainbow&quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">color</i>: {"{"}{" "}
                      <i className="text-blue-400">completed</i>:{" "}
                      <i className="text-orange-400">&quot;green&quot;</i>{" "}
                      {"}"},
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Files", 100, {
  label: {
    while: "Installing",
    past: "Installed",
  },
  bar: {
    length: 30,
    animation: "rainbow",
    color: { completed: "green" },
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
