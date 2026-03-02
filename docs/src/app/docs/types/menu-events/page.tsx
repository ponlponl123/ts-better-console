import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>MenuEvents</h1>
        <p>
          The <code>MenuEvents</code> interface defines the event map for a menu
          component in <strong>ts-better-console</strong>. It describes the
          events that can be emitted by a menu, allowing you to respond to user
          selections and exits.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>MenuEvents</code> interface includes the following events:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>select</code>: Emitted when the user selects a menu item.
            Provides the <code>label</code> (string) of the selected item and
            its <code>index</code> (number) within the menu.
          </li>
          <li>
            <code>exit</code>: Emitted when the user exits the menu. No
            arguments are passed.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "MenuEvents Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">MenuEvents</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">select</i>: [
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
              snippet: `interface MenuEvents {
  select: [label: string, index: number];
  exit: [];
}`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can listen to <code>MenuEvents</code> when using a menu to handle
          user interactions:
        </p>
        <Code
          codesnippets={[
            {
              title: "Listening to MenuEvents",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Menu</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">m</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Menu</i>([
                  <br />
                  <div className="ml-4">
                    {"{"} <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">"Option 1"</i> {"}"},
                  </div>
                  <div className="ml-4">
                    {"{"} <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">"Option 2"</i> {"}"},
                  </div>
                  <div className="ml-4">
                    {"{"} <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">"Option 3"</i> {"}"},
                  </div>
                  ]);
                  <br />
                  <br />
                  <i className="text-emerald-400">m</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">"select"</i>, (
                  <i className="text-cyan-600">label</i>,{" "}
                  <i className="text-cyan-600">index</i>) =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">
                      `Selected: ${"{"}label{"}"} at index ${"{"}index{"}"}`
                    </i>
                    );
                  </div>
                  <div className="ml-4">
                    <i className="text-emerald-400">m</i>.
                    <i className="text-yellow-400">destroy</i>();
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-emerald-400">m</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">"exit"</i>, () =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">"Menu closed"</i>);
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-emerald-400">m</i>.
                  <i className="text-yellow-400">show</i>();
                </div>
              ),
              snippet: `import { Menu } from "ts-better-console";

const m = new Menu([
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
]);

m.on("select", (label, index) => {
  console.log(\`Selected: \${label} at index \${index}\`);
  m.destroy(); // Close menu after selection
});

m.on("exit", () => {
  console.log("Menu closed");
});

m.show();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
