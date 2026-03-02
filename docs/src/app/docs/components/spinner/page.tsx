import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>spinner</h1>
        <p>
          The <code>Spinner</code> class creates an animated spinner indicator
          in the terminal. It supports multiple built-in styles and custom
          frames with configurable intervals.
        </p>
        <h2 className="mt-8">Constructor</h2>
        <Code
          codesnippets={[
            {
              title: "Constructor Signature",
              code: (
                <div>
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">Spinner</i>(
                  <i className="text-cyan-600">options</i>?:{" "}
                  <span className="text-cyan-400">SpinnerOptions</span>)
                </div>
              ),
              snippet: `new Spinner(options?: SpinnerOptions)`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>options</code>: An optional <code>SpinnerOptions</code>{" "}
            object:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>
                <code>style</code>: A <code>SpinnerStyle</code> preset —{" "}
                <code>&quot;dots&quot;</code>, <code>&quot;line&quot;</code>,{" "}
                <code>&quot;bounce&quot;</code>, or{" "}
                <code>&quot;arrow&quot;</code>. Defaults to{" "}
                <code>&quot;dots&quot;</code>.
              </li>
              <li>
                <code>frames</code>: Custom array of frame strings (overrides
                style preset).
              </li>
              <li>
                <code>interval</code>: Milliseconds between frames. Defaults to{" "}
                <code>100</code>.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="mt-8">Methods</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>start(silent?: boolean)</code>: Starts the spinner animation.
            When <code>silent</code> is <code>true</code>, only cycles frames
            internally without writing to stdout.
          </li>
          <li>
            <code>stop()</code>: Stops the spinner and clears its output.
          </li>
          <li>
            <code>getCurrentFrame()</code>: Returns the current spinner frame
            string.
          </li>
        </ul>
        <h2 className="mt-8">Built-in Styles</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;dots&quot;</code>: ⣾ ⣷ ⣯ ⣟ ⣻ ⣽
          </li>
          <li>
            <code>&quot;line&quot;</code>: - \ | /
          </li>
          <li>
            <code>&quot;bounce&quot;</code>: ⠁ ⠂ ⠄ ⠂
          </li>
          <li>
            <code>&quot;arrow&quot;</code>: ← ↖ ↑ ↗ → ↘ ↓ ↙
          </li>
          <li>
            <code>&quot;moon&quot;</code>: 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘
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
                  <i className="text-blue-400">Spinner</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">spinner</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">Spinner</i>({"{"}{" "}
                  <i className="text-blue-400">style</i>:{" "}
                  <i className="text-orange-400">&quot;dots&quot;</i> {"}"});
                  <br />
                  <i className="text-blue-400">spinner</i>.
                  <i className="text-yellow-400">start</i>();
                  <br />
                  <br />
                  <span className="text-zinc-500">// Stop after 3 seconds</span>
                  <br />
                  <i className="text-yellow-400">setTimeout</i>(() =&gt;{" "}
                  <i className="text-blue-400">spinner</i>.
                  <i className="text-yellow-400">stop</i>(),{" "}
                  <i className="text-orange-400">3000</i>);
                </div>
              ),
              snippet: `import { Spinner } from "ts-better-console";

const spinner = new Spinner({ style: "dots" });
spinner.start();

// Stop after 3 seconds
setTimeout(() => spinner.stop(), 3000);`,
            },
            {
              title: "Custom Frames",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Spinner</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">spinner</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">Spinner</i>({"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">frames</i>: [
                    <i className="text-orange-400">&quot;🧎 &quot;</i>,{" "}
                    <i className="text-orange-400">&quot;🧍 &quot;</i>,{" "}
                    <i className="text-orange-400">&quot;🚶 &quot;</i>,{" "}
                    <i className="text-orange-400">&quot;🏃 &quot;</i>,{" "}
                    <i className="text-orange-400">&quot;🏃💨&quot;</i>,{" "}
                    <i className="text-orange-400">&quot;🏃 &quot;</i>,{" "}
                    <i className="text-orange-400">&quot;🚶 &quot;</i>,{" "}
                    <i className="text-orange-400">&quot;🧍 &quot;</i>
                    ],
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">interval</i>:{" "}
                    <i className="text-orange-400">150</i>,
                  </div>
                  {"}"});
                  <br />
                  <i className="text-blue-400">spinner</i>.
                  <i className="text-yellow-400">start</i>();
                </div>
              ),
              snippet: `import { Spinner } from "ts-better-console";

const spinner = new Spinner({
  frames: ["🧎  ", "🧍  ", "🚶  ", "🏃  ", "🏃💨", "🏃  ", "🚶  ", "🧍  "],
  interval: 300,
});
spinner.start();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
