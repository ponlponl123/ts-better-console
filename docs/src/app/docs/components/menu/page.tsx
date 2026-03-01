import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>menu</h1>
        <p>
          The <code>Menu</code> component creates an interactive selectable menu
          in the terminal with keyboard and mouse support. It displays a list of
          items with customizable icons, focus styles, and emits events on
          selection. It extends <code>EventEmitter</code> for type-safe event
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
                  <i className="text-blue-400">Menu</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-cyan-600">items</i>:{" "}
                    <span className="text-cyan-400">MenuItemOptions</span>[],
                  </div>
                  <div className="ml-4">
                    <i className="text-cyan-600">options</i>?:{" "}
                    <span className="text-cyan-400">MenuOptions</span>,
                  </div>
                  )
                </div>
              ),
              snippet: `new Menu(items: MenuItemOptions[], options?: MenuOptions)`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>items</code>: An array of <code>MenuItemOptions</code>{" "}
            objects, each defining a menu item&apos;s label and optional
            style/focus style.
          </li>
          <li>
            <code>options</code>: An optional <code>MenuOptions</code> object to
            configure selected/unselected icons (defaults to <code>◉</code> /{" "}
            <code>○</code>), default index, item style, and focus style.
          </li>
        </ul>
        <h2 className="mt-8">Methods</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>show()</code>: Renders the menu and starts listening for mouse
            and keyboard input. Hides the cursor and enables raw mode.
          </li>
          <li>
            <code>destroy()</code>: Stops listening, restores terminal state,
            and emits the <code>&quot;exit&quot;</code> event.
          </li>
        </ul>
        <h2 className="mt-8">Events</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;select&quot;</code>: Emitted when an item is selected
            via click or Enter. Passes{" "}
            <code>(label: string, index: number)</code>.
          </li>
          <li>
            <code>&quot;exit&quot;</code>: Emitted when the menu is destroyed
            (via <code>q</code>, <code>Ctrl+C</code>, or <code>destroy()</code>
            ).
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
                  <i className="text-blue-400">Menu</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">menu</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">Menu</i>([
                  <br />
                  <div className="ml-4">
                    {"{"} <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">&quot;Option 1&quot;</i>{" "}
                    {"}"},
                  </div>
                  <div className="ml-4">
                    {"{"} <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">&quot;Option 2&quot;</i>{" "}
                    {"}"},
                  </div>
                  <div className="ml-4">
                    {"{"} <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">&quot;Option 3&quot;</i>{" "}
                    {"}"},
                  </div>
                  ]);
                  <br />
                  <br />
                  <i className="text-blue-400">menu</i>.
                  <i className="text-yellow-400">on</i>(
                  <i className="text-orange-400">&quot;select&quot;</i>, (
                  <i className="text-cyan-600">label</i>,{" "}
                  <i className="text-cyan-600">index</i>) =&gt; {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-emerald-400">console</i>.
                    <i className="text-yellow-400">log</i>(
                    <i className="text-orange-400">
                      `Selected: ${"{"}label{"}"}`
                    </i>
                    );
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-blue-400">menu</i>.
                  <i className="text-yellow-400">show</i>();
                </div>
              ),
              snippet: `import { Menu } from "ts-better-console";

const menu = new Menu([
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
]);

menu.on("select", (label, index) => {
  console.log(\`Selected: \${label}\`);
});

menu.show();`,
            },
            {
              title: "With Custom Options",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Menu</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">menu</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-blue-400">Menu</i>(
                  <br />
                  <div className="ml-4">
                    [
                    <br />
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">
                        &quot;Start Server&quot;
                      </i>{" "}
                      {"}"},
                    </div>
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">&quot;Run Tests&quot;</i>{" "}
                      {"}"},
                    </div>
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">
                        &quot;Build Project&quot;
                      </i>{" "}
                      {"}"},
                    </div>
                    ],
                  </div>
                  <div className="ml-4">
                    {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">selectedIcon</i>:{" "}
                      <i className="text-orange-400">&quot;▸&quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">unselectedIcon</i>:{" "}
                      <i className="text-orange-400">&quot; &quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">defaultIndex</i>:{" "}
                      <i className="text-orange-400">0</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">focusStyle</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;green&quot;</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  );
                  <br />
                  <br />
                  <i className="text-blue-400">menu</i>.
                  <i className="text-yellow-400">show</i>();
                </div>
              ),
              snippet: `import { Menu } from "ts-better-console";

const menu = new Menu(
  [
    { label: "Start Server" },
    { label: "Run Tests" },
    { label: "Build Project" },
  ],
  {
    selectedIcon: "▸",
    unselectedIcon: " ",
    defaultIndex: 0,
    focusStyle: { color: "green", styles: ["bold"] },
  },
);

menu.show();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
