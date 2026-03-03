import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>InputOptions</h1>
        <p>
          The <code>InputOptions</code> interface configures an{" "}
          <code>Input</code> component — its type, label, default value, width,
          alignment, position, and styling.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>type</code>: Either <code>&quot;text&quot;</code> or{" "}
            <code>&quot;password&quot;</code>. Password mode masks the input
            with <code>*</code>. Defaults to <code>&quot;text&quot;</code>.
          </li>
          <li>
            <code>label</code>: A text label displayed before the input field.
          </li>
          <li>
            <code>defaultValue</code>: Pre-filled value when the input is first
            shown.
          </li>
          <li>
            <code>width</code>: A <code>CardWidth</code> value — a number, a
            ratio (<code>&quot;1/2&quot;</code>, <code>&quot;full&quot;</code>,
            etc.), or <code>&quot;auto&quot;</code>.
          </li>
          <li>
            <code>align</code>: Horizontal alignment of the input —{" "}
            <code>&quot;left&quot;</code>, <code>&quot;center&quot;</code>, or{" "}
            <code>&quot;right&quot;</code>.
          </li>
          <li>
            <code>position</code>: Where to render the input —{" "}
            <code>&quot;inline&quot;</code>, <code>&quot;top&quot;</code>, or{" "}
            <code>&quot;bottom&quot;</code>.
          </li>
          <li>
            <code>styles</code>: An <code>InputStyleOptions</code> object to
            customise the input field, label, and border independently.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "InputOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">InputOptions</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">type</i>?:{" "}
                  <span className="text-cyan-400">InputType</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">label</i>?:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    defaultValue
                  </i>?: <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">width</i>?:{" "}
                  <span className="text-cyan-400">CardWidth</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">align</i>?:{" "}
                  <span className="text-cyan-400">Alignment</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">position</i>?:{" "}
                  <span className="text-cyan-400">FixedPosition</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">styles</i>?:{" "}
                  <span className="text-cyan-400">InputStyleOptions</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface InputOptions {
  type?: InputType;
  label?: string;
  defaultValue?: string;
  width?: CardWidth;
  align?: Alignment;
  position?: FixedPosition;
  styles?: InputStyleOptions;
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Password Input",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Input</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">input</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Input</i>({"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">type</i>:{" "}
                    <i className="text-orange-400">&quot;password&quot;</i>,
                    <br />
                    <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">&quot;Password&quot;</i>,
                    <br />
                    <i className="text-blue-400">width</i>:{" "}
                    <i className="text-orange-400">40</i>,
                    <br />
                    <i className="text-blue-400">position</i>:{" "}
                    <i className="text-orange-400">&quot;bottom&quot;</i>,
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-blue-400">input</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">&quot;submit&quot;</i>, (
                  <i className="text-cyan-600">value</i>) =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">&quot;Password:&quot;</i>,{" "}
                    <i className="text-blue-400">value</i>);
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Input } from "ts-better-console";

const input = new Input({
  type: "password",
  label: "Password",
  width: 40,
  position: "bottom",
});

input.on("submit", (value) => {
  console.log("Password:", value);
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
