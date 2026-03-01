import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ProgressStatus</h1>
        <p>
          The <code>ProgressStatus</code> type defines the possible states of a
          progress bar in <strong>ts-better-console</strong>. It represents
          where the progress bar is in its lifecycle, from actively running to
          completed, cancelled, or errored.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ProgressStatus</code> type accepts the following string
          values:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>"active"</code>: The progress bar is currently running and
            accepting updates.
          </li>
          <li>
            <code>"completed"</code>: The progress bar has reached 100% and
            finished successfully.
          </li>
          <li>
            <code>"cancelled"</code>: The progress bar was manually cancelled
            before completion.
          </li>
          <li>
            <code>"errored"</code>: The progress bar encountered an error and
            stopped.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ProgressStatus Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">ProgressStatus</i> ={" "}
                  <span className="text-orange-400">
                    "active" | "completed" | "cancelled" | "errored"
                  </span>
                  ;
                </div>
              ),
              snippet: `type ProgressStatus = "active" | "completed" | "cancelled" | "errored";`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can check the <code>ProgressStatus</code> to determine the current
          state of a progress bar:
        </p>
        <Code
          codesnippets={[
            {
              title: "Checking ProgressStatus",
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
                  <i className="text-orange-400">"Loading"</i>,{" "}
                  <i className="text-orange-400">100</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Check the status of the progress bar
                  </span>
                  <br />
                  <i className="text-purple-400">if</i> (
                  <i className="text-emerald-400">bar</i>.
                  <i className="text-blue-400">status</i> ==={" "}
                  <i className="text-orange-400">"active"</i>) {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">"Still in progress..."</i>);
                  </div>
                  {"}"}
                  <br />
                  <br />
                  <i className="text-purple-400">if</i> (
                  <i className="text-emerald-400">bar</i>.
                  <i className="text-blue-400">status</i> ==={" "}
                  <i className="text-orange-400">"completed"</i>) {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">"All done!"</i>);
                  </div>
                  {"}"}
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Loading", 100);

// Check the status of the progress bar
if (bar.status === "active") {
  console.log("Still in progress...");
}

if (bar.status === "completed") {
  console.log("All done!");
}`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
