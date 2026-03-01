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
          These options allow you to customize the label, callout message, and
          the visual length of the progress bar.
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
            <code>callout</code>: An optional string or <code>false</code>. When
            a string is provided, it displays a callout message alongside the
            progress bar. Set to <code>false</code> to disable the callout.
          </li>
          <li>
            <code>barLength</code>: An optional number that sets the visual
            length (in characters) of the progress bar.
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
                  &nbsp;&nbsp;<i className="text-cyan-600">callout</i>?:{" "}
                  <span className="text-orange-400">string</span> |{" "}
                  <span className="text-purple-500">false</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">barLength</i>?:{" "}
                  <span className="text-orange-400">number</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface ProgressOptions {
  label?: ProgressLabelPair;
  callout?: string | false;
  barLength?: number;
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
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">bar</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">"Files"</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">label</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">while</i>:{" "}
                      <i className="text-orange-400">"Installing"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">past</i>:{" "}
                      <i className="text-orange-400">"Installed"</i>,
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">callout</i>:{" "}
                    <i className="text-orange-400">"Please wait..."</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">barLength</i>:{" "}
                    <i className="text-orange-400">30</i>,
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
  callout: "Please wait...",
  barLength: 30,
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
