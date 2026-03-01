import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ProgressLabelPair</h1>
        <p>
          The <code>ProgressLabelPair</code> interface defines a pair of labels
          used by a progress bar in <strong>ts-better-console</strong>. It
          provides two label variants: one displayed while the task is in
          progress and another displayed after the task completes.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ProgressLabelPair</code> interface includes the following
          properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>while</code>: A string displayed as the label while the
            progress bar is actively running (e.g., &quot;Downloading&quot;,
            &quot;Processing&quot;).
          </li>
          <li>
            <code>past</code>: A string displayed as the label after the
            progress bar completes (e.g., &quot;Downloaded&quot;,
            &quot;Processed&quot;).
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ProgressLabelPair Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">ProgressLabelPair</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">while</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">past</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface ProgressLabelPair {
  while: string;
  past: string;
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use <code>ProgressLabelPair</code> within{" "}
          <code>ProgressOptions</code> to customize the labels shown during and
          after progress:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using ProgressLabelPair",
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
                  <i className="text-orange-400">50</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">label</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">while</i>:{" "}
                      <i className="text-orange-400">"Downloading"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">past</i>:{" "}
                      <i className="text-orange-400">"Downloaded"</i>,
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // While running: "Downloading Files [████░░░░░░] 40%"
                  </span>
                  <br />
                  <span className="text-zinc-500">
                    // After complete: "Downloaded Files [██████████] 100%"
                  </span>
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Files", 50, {
  label: {
    while: "Downloading",
    past: "Downloaded",
  },
});

// While running: "Downloading Files [████░░░░░░] 40%"
// After complete: "Downloaded Files [██████████] 100%"`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
