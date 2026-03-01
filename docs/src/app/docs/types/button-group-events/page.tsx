import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ButtonGroupEvents</h1>
        <p>
          The <code>ButtonGroupEvents</code> interface defines the event map for
          a button group component in <strong>ts-better-console</strong>. It
          describes the events that can be emitted by a button group, allowing
          you to listen and respond to user interactions such as clicking a
          button or exiting the button group.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ButtonGroupEvents</code> interface includes the following
          events:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>click</code>: Emitted when a button in the group is clicked.
            Provides the <code>label</code> (string) of the clicked button and
            its <code>index</code> (number) within the group.
          </li>
          <li>
            <code>exit</code>: Emitted when the user exits the button group. No
            arguments are passed.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ButtonGroupEvents Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">ButtonGroupEvents</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">click</i>: [
                  <i className="text-cyan-600">label</i>:{" "}
                  <span className="text-orange-400">string</span>,{" "}
                  <i className="text-cyan-600">index</i>:{" "}
                  <span className="text-orange-400">number</span>];
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">exit</i>: [];
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface ButtonGroupEvents {
  click: [label: string, index: number];
  exit: [];
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can listen to <code>ButtonGroupEvents</code> when using a button
          group to handle user interactions:
        </p>
        <Code
          codesnippets={[
            {
              title: "Listening to ButtonGroupEvents",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">button</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">group</i> ={" "}
                  <i className="text-emerald-400">button</i>.
                  <i className="text-yellow-400">group</i>([
                  <br />
                  <div className="ml-4">
                    {"{"} <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">"Option A"</i>,{" "}
                    <i className="text-blue-400">onClick</i>: () =&gt; {"{}"}
                    {" }"},
                  </div>
                  <div className="ml-4">
                    {"{"} <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">"Option B"</i>,{" "}
                    <i className="text-blue-400">onClick</i>: () =&gt; {"{}"}
                    {" }"},
                  </div>
                  ]);
                  <br />
                  <br />
                  <i className="text-emerald-400">group</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">"click"</i>, (
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
                  <i className="text-emerald-400">group</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">"exit"</i>, () =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">"Exited button group"</i>);
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { button } from "ts-better-console";

const group = button.group([
  { label: "Option A", onClick: () => {} },
  { label: "Option B", onClick: () => {} },
]);

group.on("click", (label, index) => {
  console.log(\`Clicked: \${label} at index \${index}\`);
});

group.on("exit", () => {
  console.log("Exited button group");
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
