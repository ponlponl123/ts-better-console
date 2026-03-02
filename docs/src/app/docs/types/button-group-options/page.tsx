import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ButtonGroupOptions</h1>
        <p>
          The <code>ButtonGroupOptions</code> type defines the configuration
          options for a button group in <strong>ts-better-console</strong>.
          These options allow you to customize the layout and appearance of a
          group of buttons displayed in the terminal.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ButtonGroupOptions</code> type includes the following
          properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>gap</code>: An optional number specifying the spacing between
            buttons in the group. Controls how much horizontal space separates
            each button.
          </li>
          <li>
            <code>borderStyle</code>: An optional <code>StyleOptions</code>{" "}
            object that defines the styling for the button group&apos;s border,
            including color, background color, and text styles.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ButtonGroupOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">ButtonGroupOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">gap</i>?:{" "}
                  <span className="text-orange-400">number</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    borderStyle
                  </i>?: <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type ButtonGroupOptions = {
  gap?: number;
  borderStyle?: StyleOptions;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can pass <code>ButtonGroupOptions</code> when creating a button
          group to customize its appearance:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using ButtonGroupOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">ButtonGroup</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-emerald-400">buttonGroup</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">ButtonGroup</i>(
                  <br />
                  <div className="ml-4">
                    [
                    <br />
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">"Yes"</i>,{" "}
                      <i className="text-blue-400">onClick</i>: () =&gt; {"{}"}
                      {" }"},
                    </div>
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">"No"</i>,{" "}
                      <i className="text-blue-400">onClick</i>: () =&gt; {"{}"}
                      {" }"},
                    </div>
                    ],
                  </div>
                  <div className="ml-4">
                    {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">gap</i>:{" "}
                      <i className="text-orange-400">2</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">borderStyle</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">color</i>:{" "}
                        <i className="text-orange-400">"cyan"</i>,
                      </div>
                      <div className="ml-4">
                        <i className="text-blue-400">styles</i>: [
                        <i className="text-orange-400">"bold"</i>],
                      </div>
                      {"}"},
                    </div>
                    {"}"}
                  </div>
                  ).<i className="text-yellow-400">show</i>();
                </div>
              ),
              snippet: `import { ButtonGroup } from "ts-better-console";

const buttonGroup = new ButtonGroup(
  [
    { label: "Yes", onClick: () => {} },
    { label: "No", onClick: () => {} },
  ],
  {
    gap: 2,
    borderStyle: {
      color: "cyan",
      styles: ["bold"],
    },
  }
).show();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
