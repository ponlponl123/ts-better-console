import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ProgressEvents</h1>
        <p>
          The <code>ProgressEvents</code> interface defines the event map for a
          progress bar in <strong>ts-better-console</strong>. It describes all
          the events that can be emitted during the lifecycle of a progress bar,
          allowing you to respond to updates, completion, cancellation, and
          errors.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ProgressEvents</code> interface includes the following
          events:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>update</code>: Emitted when the progress bar is updated.
            Provides the <code>current</code> value (number) and the{" "}
            <code>percentage</code> (number) of completion.
          </li>
          <li>
            <code>complete</code>: Emitted when the progress bar reaches 100%.
            Provides the <code>total</code> value (number).
          </li>
          <li>
            <code>cancel</code>: Emitted when the progress bar is cancelled. No
            arguments are passed.
          </li>
          <li>
            <code>error</code>: Emitted when an error occurs. Accepts any number
            of arguments.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ProgressEvents Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">ProgressEvents</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">update</i>: [
                  <i className="text-cyan-600">current</i>:{" "}
                  <span className="text-orange-400">number</span>,{" "}
                  <i className="text-cyan-600">percentage</i>:{" "}
                  <span className="text-orange-400">number</span>];
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">complete</i>: [
                  <i className="text-cyan-600">total</i>:{" "}
                  <span className="text-orange-400">number</span>];
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">cancel</i>: [];
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">error</i>: [...
                  <i className="text-cyan-600">args</i>:{" "}
                  <span className="text-orange-400">any</span>[]];
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface ProgressEvents {
  update: [current: number, percentage: number];
  complete: [total: number];
  cancel: [];
  error: [...args: any[]];
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can listen to <code>ProgressEvents</code> to track progress bar
          lifecycle:
        </p>
        <Code
          codesnippets={[
            {
              title: "Listening to ProgressEvents",
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
                  <i className="text-orange-400">"Downloading"</i>,{" "}
                  <i className="text-orange-400">100</i>);
                  <br />
                  <br />
                  <i className="text-emerald-400">bar</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">"update"</i>, (
                  <i className="text-cyan-600">current</i>,{" "}
                  <i className="text-cyan-600">percentage</i>) =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">
                      `Progress: ${"{"}percentage{"}"}%`
                    </i>
                    );
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-emerald-400">bar</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">"complete"</i>, (
                  <i className="text-cyan-600">total</i>) =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">
                      `Done! Total: ${"{"}total{"}"}`
                    </i>
                    );
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-emerald-400">bar</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">"cancel"</i>, () =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">"Progress cancelled"</i>);
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-emerald-400">bar</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">"error"</i>, (...
                  <i className="text-cyan-600">args</i>) =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">error</i>(
                    <i className="text-orange-400">"Error:"</i>, ...
                    <i className="text-cyan-600">args</i>);
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Downloading", 100);

bar.on("update", (current, percentage) => {
  console.log(\`Progress: \${percentage}%\`);
});

bar.on("complete", (total) => {
  console.log(\`Done! Total: \${total}\`);
});

bar.on("cancel", () => {
  console.log("Progress cancelled");
});

bar.on("error", (...args) => {
  console.error("Error:", ...args);
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
