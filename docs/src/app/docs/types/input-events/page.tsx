import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>InputEvents</h1>
        <p>
          The <code>InputEvents</code> type maps event names to their callback
          signatures for the <code>Input</code> component. Use them with the{" "}
          <code>.on()</code> method to react to user interaction.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>submit</code>: Fired when the user presses Enter. Receives the
            final <code>string</code> value.
          </li>
          <li>
            <code>change</code>: Fired on every keystroke. Receives the current{" "}
            <code>string</code> value.
          </li>
          <li>
            <code>exit</code>: Fired when the user presses Escape. No arguments.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "InputEvents Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">InputEvents</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">submit</i>: [
                  <i className="text-cyan-600">value</i>:{" "}
                  <span className="text-orange-400">string</span>];
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">change</i>: [
                  <i className="text-cyan-600">value</i>:{" "}
                  <span className="text-orange-400">string</span>];
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">exit</i>: [];
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type InputEvents = {
  submit: [value: string];
  change: [value: string];
  exit: [];
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Listening to Events",
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
                  <i className="text-emerald-400">Input</i>();
                  <br />
                  <br />
                  <i className="text-blue-400">input</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">&quot;change&quot;</i>, (
                  <i className="text-cyan-600">value</i>) =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">&quot;Typing:&quot;</i>,{" "}
                    <i className="text-blue-400">value</i>);
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
                    <i className="text-orange-400">&quot;Submitted:&quot;</i>,{" "}
                    <i className="text-blue-400">value</i>);
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-blue-400">input</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">&quot;exit&quot;</i>, () =&gt;{" "}
                  {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">&quot;Cancelled&quot;</i>);
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Input } from "ts-better-console";

const input = new Input();

input.on("change", (value) => {
  console.log("Typing:", value);
});

input.on("submit", (value) => {
  console.log("Submitted:", value);
});

input.on("exit", () => {
  console.log("Cancelled");
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
