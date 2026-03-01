import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Progress</h1>
        <p>
          The <code>Progress</code> component creates animated progress bars in
          the terminal with spinner indicators, buffered progress support, and
          multi-bar rendering. It extends <code>EventEmitter</code> for
          type-safe event handling and supports completion, cancellation, and
          error states.
        </p>
        <h2 className="mt-8">Constructor</h2>
        <Code
          codesnippets={[
            {
              title: "Constructor Signature",
              code: (
                <div>
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">Progress</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-cyan-600">title</i>:{" "}
                    <span className="text-orange-400">string</span>,
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">total</i>?:{" "}
                    <span className="text-orange-400">number</span>,
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">options</i>?:{" "}
                    <span className="text-cyan-400">ProgressOptions</span>,
                  </div>
                  )
                </div>
              ),
              snippet: `new Progress(title: string, total?: number, options?: ProgressOptions)`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>title</code>: The title displayed alongside the progress bar.
          </li>
          <li>
            <code>total</code>: The total value representing 100% completion.
            Defaults to <code>100</code>.
          </li>
          <li>
            <code>options</code>: An optional <code>ProgressOptions</code>{" "}
            object to configure bar length, callout, and labels.
          </li>
        </ul>
        <h2 className="mt-8">Methods</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>init()</code>: Initializes the progress bar, registers it for
            multi-bar rendering, and starts the spinner.
          </li>
          <li>
            <code>update(current: number, buffer?: number)</code>: Updates the
            progress value and optional buffer. Automatically completes when{" "}
            <code>current</code> reaches <code>total</code>.
          </li>
          <li>
            <code>cancel()</code>: Cancels the progress bar and emits the{" "}
            <code>&quot;cancel&quot;</code> event.
          </li>
          <li>
            <code>error(...args: any[])</code>: Sets the error state and emits
            the <code>&quot;error&quot;</code> event with the provided
            arguments.
          </li>
        </ul>
        <h2 className="mt-8">Events</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;update&quot;</code>: Emitted on each update. Passes{" "}
            <code>(current: number, percentage: number)</code>.
          </li>
          <li>
            <code>&quot;complete&quot;</code>: Emitted when progress reaches
            total. Passes <code>(total: number)</code>.
          </li>
          <li>
            <code>&quot;cancel&quot;</code>: Emitted when progress is cancelled.
          </li>
          <li>
            <code>&quot;error&quot;</code>: Emitted on error with the error
            arguments.
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
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
                  <i className="text-blue-400">Progress</i>(
                  <i className="text-orange-400">&quot;Downloading&quot;</i>,{" "}
                  <i className="text-orange-400">100</i>);
                  <br />
                  <i className="text-blue-400">bar</i>.
                  <i className="text-yellow-400">init</i>();
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Simulate progress updates
                  </span>
                  <br />
                  <i className="text-purple-400">let</i>{" "}
                  <i className="text-blue-400">i</i> ={" "}
                  <i className="text-orange-400">0</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">timer</i> ={" "}
                  <i className="text-yellow-400">setInterval</i>(() =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">i</i> +={" "}
                    <i className="text-orange-400">10</i>;
                    <br />
                    <i className="text-blue-400">bar</i>.
                    <i className="text-yellow-400">update</i>(
                    <i className="text-blue-400">i</i>);
                    <br />
                    <i className="text-purple-400">if</i> (
                    <i className="text-blue-400">i</i> &gt;={" "}
                    <i className="text-orange-400">100</i>){" "}
                    <i className="text-yellow-400">clearInterval</i>(
                    <i className="text-blue-400">timer</i>);
                  </div>
                  {"}"}, <i className="text-orange-400">200</i>);
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Downloading", 100);
bar.init();

// Simulate progress updates
let i = 0;
const timer = setInterval(() => {
  i += 10;
  bar.update(i);
  if (i >= 100) clearInterval(timer);
}, 200);`,
            },
            {
              title: "With Options and Events",
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
                  <i className="text-blue-400">Progress</i>(
                  <i className="text-orange-400">&quot;Installing&quot;</i>,{" "}
                  <i className="text-orange-400">50</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">barLength</i>:{" "}
                    <i className="text-orange-400">30</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">label</i>: {"{"}{" "}
                    <i className="text-blue-400">while</i>:{" "}
                    <i className="text-orange-400">&quot;Installing&quot;</i>,{" "}
                    <i className="text-blue-400">past</i>:{" "}
                    <i className="text-orange-400">&quot;Installed&quot;</i>{" "}
                    {"}"},
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-blue-400">bar</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">&quot;complete&quot;</i>, (
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
                  <i className="text-blue-400">bar</i>.
                  <i className="text-yellow-400">init</i>();
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Installing", 50, {
  barLength: 30,
  label: { while: "Installing", past: "Installed" },
});

bar.on("complete", (total) => {
  console.log(\`Done! Total: \${total}\`);
});

bar.init();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
