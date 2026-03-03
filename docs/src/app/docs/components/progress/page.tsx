import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Progress</h1>
        <p>
          The <code>Progress</code> component creates animated progress bars in
          the terminal with spinner indicators, buffered progress support,
          rainbow animation, configurable symbols and colors, and multi-bar
          rendering. It extends <code>EventEmitter</code> for type-safe event
          handling and supports completion, cancellation, and error states.
          External <code>console.log</code> calls are automatically printed
          above the progress block without disrupting the display.
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
            object to configure labels and bar appearance (length, symbols,
            animation, and colors).
          </li>
        </ul>
        <h2 className="mt-8">Methods</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>init()</code>: Initializes the progress bar, registers it for
            multi-bar rendering, and starts the spinner.
          </li>
          <li>
            <code>update(current, buffer?, options?)</code>: Updates the
            progress value and optional buffer. You can also pass{" "}
            <code>ProgressUpdateOptions</code> to change the bar&apos;s message,
            labels, symbols, or colors mid-flight. Automatically completes when{" "}
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
          <li>
            <code>getIsExited()</code>: Returns <code>true</code> if the
            progress bar has been cancelled or errored.
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
        <h2 className="mt-8">Features</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Multi-bar rendering</strong>: Multiple progress bars render
            together and finish as a group.
          </li>
          <li>
            <strong>Rainbow animation</strong>: Set <code>bar.animation</code>{" "}
            to <code>&quot;rainbow&quot;</code> for a scrolling parallax rainbow
            effect across the bar.
          </li>
          <li>
            <strong>Custom symbols</strong>: Configure <code>loadedSymbol</code>
            , <code>bufferedSymbol</code>, and <code>emptySymbol</code> to
            change the bar characters.
          </li>
          <li>
            <strong>State colors</strong>: Customize colors for loaded,
            buffered, empty, completed, cancelled, and errored states via{" "}
            <code>bar.color</code>.
          </li>
          <li>
            <strong>Full-width mode</strong>: Set <code>bar.length</code> to{" "}
            <code>&quot;full-width&quot;</code> to fill the terminal width.
          </li>
          <li>
            <strong>Safe stdout interception</strong>: External{" "}
            <code>console.log</code> calls are printed above the progress block
            without duplication.
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
                    <i className="text-blue-400">label</i>: {"{"}{" "}
                    <i className="text-blue-400">while</i>:{" "}
                    <i className="text-orange-400">&quot;Installing&quot;</i>,{" "}
                    <i className="text-blue-400">past</i>:{" "}
                    <i className="text-orange-400">&quot;Installed&quot;</i>{" "}
                    {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">length</i>:{" "}
                      <i className="text-orange-400">30</i>,
                      <br />
                      <i className="text-blue-400">animation</i>:{" "}
                      <i className="text-orange-400">&quot;rainbow&quot;</i>
                      ,
                      <br />
                      <i className="text-blue-400">color</i>: {"{"}{" "}
                      <i className="text-blue-400">completed</i>:{" "}
                      <i className="text-orange-400">&quot;cyan&quot;</i> {"}"},
                    </div>
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
                  <br />
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
                    <i className="text-orange-400">5</i>;
                    <br />
                    <i className="text-blue-400">bar</i>.
                    <i className="text-yellow-400">update</i>(
                    <i className="text-blue-400">i</i>);
                    <br />
                    <i className="text-purple-400">if</i> (
                    <i className="text-blue-400">i</i> &gt;={" "}
                    <i className="text-orange-400">50</i>){" "}
                    <i className="text-yellow-400">clearInterval</i>(
                    <i className="text-blue-400">timer</i>);
                  </div>
                  {"}"}, <i className="text-orange-400">200</i>);
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Installing", 50, {
  label: { while: "Installing", past: "Installed" },
  bar: {
    length: 30,
    animation: "rainbow",
    color: { completed: "cyan" },
  },
});

bar.on("complete", (total) => {
  console.log(\`Done! Total: \${total}\`);
});

bar.init();

let i = 0;
const timer = setInterval(() => {
  i += 5;
  bar.update(i);
  if (i >= 50) clearInterval(timer);
}, 200);`,
            },
            {
              title: "Custom Symbols and Colors",
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
                  <i className="text-orange-400">&quot;Uploading&quot;</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">loadedSymbol</i>:{" "}
                      <i className="text-orange-400">&quot;#&quot;</i>,
                      <br />
                      <i className="text-blue-400">bufferedSymbol</i>:{" "}
                      <i className="text-orange-400">&quot;=&quot;</i>,
                      <br />
                      <i className="text-blue-400">emptySymbol</i>:{" "}
                      <i className="text-orange-400">&quot;.&quot;</i>,
                      <br />
                      <i className="text-blue-400">length</i>:{" "}
                      <i className="text-orange-400">&quot;full-width&quot;</i>
                      ,
                      <br />
                      <i className="text-blue-400">color</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">loaded</i>:{" "}
                        <i className="text-orange-400">&quot;cyan&quot;</i>,
                        <br />
                        <i className="text-blue-400">completed</i>:{" "}
                        <i className="text-orange-400">&quot;green&quot;</i>,
                        <br />
                        <i className="text-blue-400">errored</i>:{" "}
                        <i className="text-orange-400">&quot;red&quot;</i>,
                      </div>
                      {"}"},
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-blue-400">bar</i>.
                  <i className="text-yellow-400">init</i>();
                  <br />
                  <br />
                  <i className="text-purple-400">let</i>{" "}
                  <i className="text-blue-400">loaded</i> ={" "}
                  <i className="text-orange-400">0</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">interval</i> ={" "}
                  <i className="text-yellow-400">setInterval</i>(() =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">loaded</i> +={" "}
                    <i className="text-orange-400">
                      Math.floor(Math.random() * 10) + 1
                    </i>
                    ;
                    <br />
                    <i className="text-blue-400">bar</i>.
                    <i className="text-yellow-400">update</i>(
                    <i className="text-blue-400">loaded</i>);
                    <br />
                    <i className="text-purple-400">if</i> (
                    <i className="text-blue-400">loaded</i> &gt;={" "}
                    <i className="text-orange-400">100</i>){" "}
                    <i className="text-yellow-400">clearInterval</i>(
                    <i className="text-blue-400">interval</i>);
                  </div>
                  {"}"}, <i className="text-orange-400">1000</i>);
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Uploading", 100, {
  bar: {
    loadedSymbol: "#",
    bufferedSymbol: "=",
    emptySymbol: ".",
    length: "full-width",
    color: {
      loaded: "cyan",
      completed: "green",
      errored: "red",
    },
  },
});

bar.init();

let loaded = 0;
const interval = setInterval(() => {
  loaded += Math.floor(Math.random() * 10) + 1;
  bar.update(loaded);
  if (loaded >= 100) {
    clearInterval(interval);
  }
}, 1000);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
