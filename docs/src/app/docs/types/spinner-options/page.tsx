import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>SpinnerOptions</h1>
        <p>
          The <code>SpinnerOptions</code> type defines the configuration options
          for a spinner component in <strong>ts-better-console</strong>.
          Spinners provide a visual loading indicator in the terminal and can be
          customized with different animation styles, custom frames, and
          intervals.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>SpinnerOptions</code> type includes the following
          properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>style</code>: An optional <code>SpinnerStyle</code> value that
            determines the animation style of the spinner. Available styles are{" "}
            <code>"dots"</code>, <code>"line"</code>, <code>"bounce"</code>, and{" "}
            <code>"arrow"</code>.
          </li>
          <li>
            <code>frames</code>: An optional array of strings that define custom
            animation frames for the spinner, overriding the default style.
          </li>
          <li>
            <code>interval</code>: An optional number (in milliseconds) that
            sets the speed of the spinner animation.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "SpinnerOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">SpinnerOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">style</i>?:{" "}
                  <span className="text-cyan-400">SpinnerStyle</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">frames</i>?:{" "}
                  <span className="text-orange-400">string</span>[];
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">interval</i>?:{" "}
                  <span className="text-orange-400">number</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type SpinnerOptions = {
  style?: SpinnerStyle;
  frames?: string[];
  interval?: number;
};`,
            },
            {
              title: "SpinnerStyle Type",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">SpinnerStyle</i> ={" "}
                  <span className="text-orange-400">
                    "dots" | "line" | "bounce" | "arrow"
                  </span>
                  ;
                </div>
              ),
              snippet: `type SpinnerStyle = "dots" | "line" | "bounce" | "arrow";`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can pass <code>SpinnerOptions</code> when creating a spinner to
          customize its behavior:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using SpinnerOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">spinner</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Using a built-in style
                  </span>
                  <br />
                  <i className="text-emerald-400">spinner</i>(
                  <i className="text-orange-400">"Loading..."</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">style</i>:{" "}
                    <i className="text-orange-400">"dots"</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">interval</i>:{" "}
                    <i className="text-orange-400">80</i>,
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">// Using custom frames</span>
                  <br />
                  <i className="text-emerald-400">spinner</i>(
                  <i className="text-orange-400">"Processing..."</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">frames</i>: [
                    <i className="text-orange-400">"🌑"</i>,{" "}
                    <i className="text-orange-400">"🌒"</i>,{" "}
                    <i className="text-orange-400">"🌓"</i>,{" "}
                    <i className="text-orange-400">"🌔"</i>,{" "}
                    <i className="text-orange-400">"🌕"</i>],
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">interval</i>:{" "}
                    <i className="text-orange-400">150</i>,
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { spinner } from "ts-better-console";

// Using a built-in style
spinner("Loading...", {
  style: "dots",
  interval: 80,
});

// Using custom frames
spinner("Processing...", {
  frames: ["🌑", "🌒", "🌓", "🌔", "🌕"],
  interval: 150,
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
