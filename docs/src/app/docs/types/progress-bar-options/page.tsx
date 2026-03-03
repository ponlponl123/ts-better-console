import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ProgressBarOptions</h1>
        <p>
          The <code>ProgressBarOptions</code> interface defines the visual
          configuration for a progress bar in <strong>ts-better-console</strong>
          . It controls the bar length, display symbols, animation style, and
          per-state colors.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ProgressBarOptions</code> interface includes the following
          properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>loadedSymbol</code>: Character used for the filled portion of
            the bar. Defaults to <code>&quot;█&quot;</code>.
          </li>
          <li>
            <code>bufferedSymbol</code>: Character used for the buffered
            portion. Defaults to <code>&quot;▒&quot;</code>.
          </li>
          <li>
            <code>emptySymbol</code>: Character used for the empty portion.
            Defaults to <code>&quot;-&quot;</code>.
          </li>
          <li>
            <code>length</code>: The bar width in characters, or{" "}
            <code>&quot;full-width&quot;</code> to fill the terminal. Defaults
            to <code>40</code>. Minimum is <code>10</code>.
          </li>
          <li>
            <code>animation</code>: Set to <code>&quot;rainbow&quot;</code> for
            a scrolling parallax rainbow effect, or <code>false</code> to
            disable. Defaults to <code>false</code>.
          </li>
          <li>
            <code>color</code>: A <code>ProgressBarStateColor</code> object to
            customize colors for each bar segment and state.
          </li>
          <li>
            <code>position</code>: Where to render the bar —{" "}
            <code>&quot;inline&quot;</code>, <code>&quot;top&quot;</code>, or{" "}
            <code>&quot;bottom&quot;</code>. Defaults to{" "}
            <code>&quot;inline&quot;</code>.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ProgressBarOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">ProgressBarOptions</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    loadedSymbol
                  </i>?: <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    bufferedSymbol
                  </i>?: <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    emptySymbol
                  </i>?: <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">length</i>?:{" "}
                  <span className="text-orange-400">number</span> |{" "}
                  <span className="text-orange-400">
                    &quot;full-width&quot;
                  </span>
                  ;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">animation</i>?:{" "}
                  <span className="text-purple-500">false</span> |{" "}
                  <span className="text-orange-400">&quot;rainbow&quot;</span>
                  ;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">color</i>?:{" "}
                  <span className="text-cyan-400">ProgressBarStateColor</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">position</i>?:{" "}
                  <span className="text-cyan-400">FixedPosition</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface ProgressBarOptions {
  loadedSymbol?: string;
  bufferedSymbol?: string;
  emptySymbol?: string;
  length?: number | "full-width";
  animation?: false | "rainbow";
  color?: ProgressBarStateColor;
  position?: FixedPosition;
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          Pass <code>ProgressBarOptions</code> via the <code>bar</code> property
          of <code>ProgressOptions</code>:
        </p>
        <Code
          codesnippets={[
            {
              title: "Custom Bar Appearance",
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
                  <i className="text-orange-400">&quot;Building&quot;</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">loadedSymbol</i>:{" "}
                      <i className="text-orange-400">&quot;#&quot;</i>,
                      <br />
                      <i className="text-blue-400">emptySymbol</i>:{" "}
                      <i className="text-orange-400">&quot;.&quot;</i>,
                      <br />
                      <i className="text-blue-400">length</i>:{" "}
                      <i className="text-orange-400">50</i>,
                      <br />
                      <i className="text-blue-400">animation</i>:{" "}
                      <i className="text-orange-400">&quot;rainbow&quot;</i>
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
                      </div>
                      {"}"},
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Building", 100, {
  bar: {
    loadedSymbol: "#",
    emptySymbol: ".",
    length: 50,
    animation: "rainbow",
    color: {
      loaded: "cyan",
      completed: "green",
    },
  },
});`,
            },
            {
              title: "Full-Width Bar",
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
                  <i className="text-orange-400">&quot;Scanning&quot;</i>,{" "}
                  <i className="text-orange-400">200</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}{" "}
                    <i className="text-blue-400">length</i>:{" "}
                    <i className="text-orange-400">&quot;full-width&quot;</i>{" "}
                    {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const bar = new Progress("Scanning", 200, {
  bar: { length: "full-width" },
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
