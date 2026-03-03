import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>button</h1>
        <p>
          The <code>ButtonGroup</code> component creates an interactive row of
          clickable buttons in the terminal. It supports mouse clicks, keyboard
          navigation (arrow keys + Enter), and customizable styling with hover
          effects. It extends <code>EventEmitter</code> for type-safe event
          handling.
        </p>
        <h2 className="mt-8">Constructor</h2>
        <Code
          codesnippets={[
            {
              title: "Constructor Signature",
              code: (
                <div>
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">ButtonGroup</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-cyan-600">buttons</i>:{" "}
                    <span className="text-cyan-400">ButtonOptions</span>[],
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">options</i>?:{" "}
                    <span className="text-cyan-400">ButtonGroupOptions</span>,
                  </div>
                  )
                </div>
              ),
              snippet: `new ButtonGroup(buttons: ButtonOptions[], options?: ButtonGroupOptions)`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>buttons</code>: An array of <code>ButtonOptions</code>{" "}
            objects, each defining a button&apos;s label, click handler, and
            optional style/hover style.
          </li>
          <li>
            <code>options</code>: An optional <code>ButtonGroupOptions</code>{" "}
            object to configure the gap between buttons (defaults to{" "}
            <code>2</code>), border style, alignment (
            <code>&quot;left&quot;</code>, <code>&quot;center&quot;</code>,{" "}
            <code>&quot;right&quot;</code>, <code>&quot;start&quot;</code>,{" "}
            <code>&quot;end&quot;</code>), and position (
            <code>&quot;inline&quot;</code>, <code>&quot;top&quot;</code>,{" "}
            <code>&quot;bottom&quot;</code>).
          </li>
        </ul>
        <h2 className="mt-8">Methods</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>show()</code>: Renders the buttons and starts listening for
            mouse and keyboard input. Hides the cursor and enables raw mode.
          </li>
          <li>
            <code>destroy()</code>: Stops listening, restores terminal state
            (cursor, raw mode, mouse tracking), and emits the{" "}
            <code>&quot;exit&quot;</code> event.
          </li>
        </ul>
        <h2 className="mt-8">Events</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;click&quot;</code>: Emitted when a button is clicked or
            activated via Enter. Passes{" "}
            <code>(label: string, index: number)</code>.
          </li>
          <li>
            <code>&quot;exit&quot;</code>: Emitted when the button group is
            destroyed (via <code>q</code>, <code>Ctrl+C</code>, or{" "}
            <code>destroy()</code>).
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
                  <i className="text-blue-400">ButtonGroup</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">buttons</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">ButtonGroup</i>([
                  <br />
                  <div className="ml-4">
                    {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">&quot;Accept&quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">onClick</i>: () =&gt;{" "}
                      <i className="text-emerald-400">console</i>.
                      <i className="text-yellow-400">log</i>(
                      <i className="text-orange-400">&quot;Accepted!&quot;</i>),
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;white&quot;</i>,{" "}
                      <i className="text-blue-400">backgroundColor</i>:{" "}
                      <i className="text-orange-400">&quot;green&quot;</i> {"}"}
                      ,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">hoverStyle</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;white&quot;</i>,{" "}
                      <i className="text-blue-400">backgroundColor</i>:{" "}
                      <i className="text-orange-400">&quot;cyan&quot;</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">&quot;Decline&quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">onClick</i>: () =&gt;{" "}
                      <i className="text-emerald-400">console</i>.
                      <i className="text-yellow-400">log</i>(
                      <i className="text-orange-400">&quot;Declined!&quot;</i>),
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;white&quot;</i>,{" "}
                      <i className="text-blue-400">backgroundColor</i>:{" "}
                      <i className="text-orange-400">&quot;red&quot;</i> {"}"},
                    </div>
                    {"}"},
                  </div>
                  ]);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Listen for click events
                  </span>
                  <br />
                  <i className="text-blue-400">buttons</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">&quot;click&quot;</i>, (
                  <i className="text-cyan-600">label</i>,{" "}
                  <i className="text-cyan-600">index</i>) =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">
                      `Clicked: ${"{"}label{"}"} at index ${"{"}index{"}"}`
                    </i>
                    );
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <span className="text-zinc-500">// Show the buttons</span>
                  <br />
                  <i className="text-blue-400">buttons</i>.
                  <i className="text-yellow-400">show</i>();
                </div>
              ),
              snippet: `import { ButtonGroup } from "ts-better-console";

const buttons = new ButtonGroup([
  {
    label: "Accept",
    onClick: () => console.log("Accepted!"),
    style: { color: "white", backgroundColor: "green" },
    hoverStyle: { color: "white", backgroundColor: "cyan", styles: ["bold"] },
  },
  {
    label: "Decline",
    onClick: () => console.log("Declined!"),
    style: { color: "white", backgroundColor: "red" },
  },
]);

// Listen for click events
buttons.on("click", (label, index) => {
  console.log(\`Clicked: \${label} at index \${index}\`);
});

// Show the buttons
buttons.show();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
