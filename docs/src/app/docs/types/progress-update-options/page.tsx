import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ProgressUpdateOptions</h1>
        <p>
          <code>ProgressUpdateOptions</code> is the argument accepted by{" "}
          <code>Progress.update()</code>. It extends{" "}
          <code>ProgressOptions</code> with an optional <code>message</code>{" "}
          field, letting you change the displayed text, labels, and bar
          appearance all in a single call.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>message</code>: The new status text to display alongside the
            progress bar.
          </li>
          <li>
            <code>label</code>: A <code>ProgressLabelPair</code> to replace the
            active/past label pair.
          </li>
          <li>
            <code>bar</code>: A <code>ProgressBarOptions</code> object to update
            bar appearance mid-run.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ProgressUpdateOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">ProgressUpdateOptions</i>{" "}
                  <i className="text-purple-400">extends</i>{" "}
                  <i className="text-cyan-400">ProgressOptions</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">message</i>?:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  {"}"}
                  <br />
                  <br />
                  <i className="text-zinc-500">
                    {"// Inherits from ProgressOptions:"}
                  </i>
                  <br />
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
              snippet: `interface ProgressUpdateOptions extends ProgressOptions {
  message?: string;
}

// Inherits from ProgressOptions:
interface ProgressOptions {
  label?: ProgressLabelPair;
  bar?: ProgressBarOptions;
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Dynamic Update",
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
                  <i className="text-orange-400">&quot;Loading&quot;</i>,{" "}
                  <i className="text-orange-400">10</i>);
                  <br />
                  <br />
                  <i className="text-blue-400">bar</i>.
                  <i className="text-yellow-400">start</i>();
                  <br />
                  <br />
                  <i className="text-purple-400">for</i> (
                  <i className="text-purple-400">let</i>{" "}
                  <i className="text-blue-400">i</i> ={" "}
                  <i className="text-orange-400">1</i>;{" "}
                  <i className="text-blue-400">i</i> &lt;={" "}
                  <i className="text-orange-400">10</i>;{" "}
                  <i className="text-blue-400">i</i>++) {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>.
                    <i className="text-yellow-400">step</i>(
                    <i className="text-orange-400">1</i>, {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">message</i>:{" "}
                      <i className="text-orange-400">
                        `Step ${"{"}i{"}"}`
                      </i>
                      ,
                    </div>
                    {"}"});
                  </div>
                  {"}"}
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Loading", 10);

bar.start();

for (let i = 1; i <= 10; i++) {
  bar.step(1, {
    message: \`Step \${i}\`,
  });
}`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
