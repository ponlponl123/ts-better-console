import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>UnSpecifiedColor</h1>
        <p>
          The <code>UnSpecifiedColor</code> type extends the base{" "}
          <code>Color</code> type by adding the option to inherit colors from
          the parent context. This type is commonly used throughout{" "}
          <strong>ts-better-console</strong> to provide flexible color
          customization for various components.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>UnSpecifiedColor</code> type is defined as a union of the{" "}
          <code>Color</code> type and the string literal <code>"inherit"</code>:
        </p>
        <Code
          codesnippets={[
            {
              title: "UnSpecifiedColor Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Color</i> =
                  <br />
                  <div className="ml-4">
                    | <span className="text-orange-400">"black"</span>
                    <br />| <span className="text-orange-400">"red"</span>
                    <br />| <span className="text-orange-400">"green"</span>
                    <br />| <span className="text-orange-400">"yellow"</span>
                    <br />| <span className="text-orange-400">"blue"</span>
                    <br />| <span className="text-orange-400">"magenta"</span>
                    <br />| <span className="text-orange-400">"cyan"</span>
                    <br />| <span className="text-orange-400">"white"</span>
                    <br />| <span className="text-orange-400">"gray"</span>;
                  </div>
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">UnSpecifiedColor</i> ={" "}
                  <span className="text-cyan-400">Color</span> |{" "}
                  <span className="text-orange-400">"inherit"</span>;
                </div>
              ),
              snippet: `type Color =
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white"
  | "gray";

type UnSpecifiedColor = Color | "inherit";`,
            },
          ]}
        />
        <h2 className="mt-8">Accepted Values</h2>
        <p>
          The <code>UnSpecifiedColor</code> type accepts the following values:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>"black"</code>, <code>"red"</code>, <code>"green"</code>,{" "}
            <code>"yellow"</code>, <code>"blue"</code>, <code>"magenta"</code>,{" "}
            <code>"cyan"</code>, <code>"white"</code>, <code>"gray"</code>:
            Standard terminal colors.
          </li>
          <li>
            <code>"inherit"</code>: Inherits the color from the parent context
            or uses the terminal&apos;s default color.
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <p>
          The <code>UnSpecifiedColor</code> type is widely used in various
          components and functions throughout <strong>ts-better-console</strong>
          . Here are some examples:
        </p>
        <h3>Progress Bar State Colors</h3>
        <p>
          Use <code>UnSpecifiedColor</code> to customize progress bar colors for
          different states:
        </p>
        <Code
          codesnippets={[
            {
              title: "Progress Bar Colors Example",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Progress</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">progress</i> ={" "}
                  <i className="text-blue-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">"Loading"</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">colors</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">loaded</i>:{" "}
                        <i className="text-orange-400">"cyan"</i>,
                        <br />
                        <i className="text-blue-400">buffered</i>:{" "}
                        <i className="text-orange-400">"blue"</i>,
                        <br />
                        <i className="text-blue-400">empty</i>:{" "}
                        <i className="text-orange-400">"gray"</i>,
                        <br />
                        <i className="text-blue-400">completed</i>:{" "}
                        <i className="text-orange-400">"green"</i>,
                        <br />
                        <i className="text-blue-400">errored</i>:{" "}
                        <i className="text-orange-400">"red"</i>,
                        <br />
                      </div>
                      {"},"}
                      <br />
                    </div>
                    {"},"}
                    <br />
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { createProgress } from "ts-better-console";

const progress = new Progress("Loading", 100, {
  bar: {
    colors: {
      loaded: "cyan",
      buffered: "blue",
      empty: "gray",
      completed: "green",
      errored: "red",
    },
  },
});`,
            },
          ]}
        />
        <h3>Using Inherit</h3>
        <p>
          Set a color to <code>"inherit"</code> to use the default terminal
          color or inherit from parent styling:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using Inherit Example",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Progress</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">progress</i> ={" "}
                  <i className="text-blue-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">"Processing"</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">colors</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">loaded</i>:{" "}
                        <i className="text-orange-400">"inherit"</i>,
                        <br />
                        <i className="text-blue-400">empty</i>:{" "}
                        <i className="text-orange-400">"inherit"</i>,
                        <br />
                      </div>
                      {"},"}
                      <br />
                    </div>
                    {"},"}
                    <br />
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const progress = new Progress("Processing", 100, {
    bar: {
        colors: {
        loaded: "inherit",
        empty: "inherit",
        },
    },
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
