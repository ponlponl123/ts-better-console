import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ButtonGroupOptions</h1>
        <p>
          Optional configuration passed as the second argument to{" "}
          <code>new ButtonGroup(buttons, options)</code>. Controls spacing,
          border styling, alignment, and whether the buttons render inline or
          in a fixed position.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "ButtonGroupOptions",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">ButtonGroupOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">gap</i>?:{" "}
                  <span className="text-orange-400">number</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">borderStyle</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">align</i>?:{" "}
                  <span className="text-cyan-400">Align</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">position</i>?:{" "}
                  <span className="text-cyan-400">FixedPosition</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type ButtonGroupOptions = {
  gap?: number;
  borderStyle?: StyleOptions;
  align?: Align;
  position?: FixedPosition;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Properties</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>gap</code> — horizontal spacing between buttons. Defaults
            to <code>2</code>.
          </li>
          <li>
            <code>borderStyle</code> — a <code>StyleOptions</code> object
            applied to the button borders.
          </li>
          <li>
            <code>align</code> — horizontal alignment of the button group.
            Accepts <code>&quot;left&quot;</code>,{" "}
            <code>&quot;center&quot;</code>, <code>&quot;right&quot;</code>,{" "}
            <code>&quot;start&quot;</code>, or <code>&quot;end&quot;</code>.
            Defaults to <code>&quot;left&quot;</code>.
          </li>
          <li>
            <code>position</code> — where the buttons appear:{" "}
            <code>&quot;inline&quot;</code> (default),{" "}
            <code>&quot;top&quot;</code>, or <code>&quot;bottom&quot;</code>.
            Non-inline positions use scroll regions to pin the buttons.
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Example",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">ButtonGroup</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">&quot;ts-better-console&quot;</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">buttons</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">ButtonGroup</i>(
                  <br />
                  <div className="ml-4">
                    [
                    <br />
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">&quot;Yes&quot;</i>,{" "}
                      <i className="text-blue-400">onClick</i>: () =&gt; {"{}"}
                      {" }"},
                    </div>
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">&quot;No&quot;</i>,{" "}
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
                      <i className="text-orange-400">4</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">align</i>:{" "}
                      <i className="text-orange-400">&quot;center&quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">position</i>:{" "}
                      <i className="text-orange-400">&quot;bottom&quot;</i>,
                    </div>
                    {"}"},
                  </div>
                  );
                  <br />
                  <br />
                  <i className="text-blue-400">buttons</i>.
                  <i className="text-yellow-400">show</i>();
                </div>
              ),
              snippet: `import { ButtonGroup } from "ts-better-console";

const buttons = new ButtonGroup(
  [
    { label: "Yes", onClick: () => {} },
    { label: "No", onClick: () => {} },
  ],
  {
    gap: 4,
    align: "center",
    position: "bottom",
  },
);

buttons.show();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
