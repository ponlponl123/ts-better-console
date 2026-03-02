import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>MenuOptions</h1>
        <p>
          The <code>MenuOptions</code> type defines the configuration options
          for a menu component in <strong>ts-better-console</strong>. These
          options allow you to customize the appearance and behavior of the
          interactive menu, including selection icons, styling, and the default
          selected index.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>MenuOptions</code> type includes the following properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>selectedIcon</code>: An optional string for the icon displayed
            next to the currently selected menu item.
          </li>
          <li>
            <code>unselectedIcon</code>: An optional string for the icon
            displayed next to unselected menu items.
          </li>
          <li>
            <code>focusStyle</code>: An optional <code>StyleOptions</code>{" "}
            object defining the styling applied to the focused/selected item.
          </li>
          <li>
            <code>itemStyle</code>: An optional <code>StyleOptions</code> object
            defining the default styling for all menu items.
          </li>
          <li>
            <code>defaultIndex</code>: An optional number specifying the index
            of the item that should be selected by default when the menu is
            first displayed.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "MenuOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">MenuOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    selectedIcon
                  </i>?: <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    unselectedIcon
                  </i>?: <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">focusStyle</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">itemStyle</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    defaultIndex
                  </i>?: <span className="text-orange-400">number</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type MenuOptions = {
  selectedIcon?: string;
  unselectedIcon?: string;
  focusStyle?: StyleOptions;
  itemStyle?: StyleOptions;
  defaultIndex?: number;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can pass <code>MenuOptions</code> when creating a menu to
          customize its appearance:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using MenuOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Menu</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Menu</i>(
                  <br />
                  <div className="ml-4">
                    [
                    <br />
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">"Apple"</i> {"}"},
                    </div>
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">"Banana"</i> {"}"},
                    </div>
                    <div className="ml-4">
                      {"{"} <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">"Cherry"</i> {"}"},
                    </div>
                    ],
                  </div>
                  <div className="ml-4">
                    {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">selectedIcon</i>:{" "}
                      <i className="text-orange-400">"👉"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">unselectedIcon</i>:{" "}
                      <i className="text-orange-400">" "</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">focusStyle</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"cyan"</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">"bold"</i>] {"}"},
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">defaultIndex</i>:{" "}
                      <i className="text-orange-400">0</i>,
                    </div>
                    {"}"}
                  </div>
                  ).<i className="text-yellow-400">show</i>();
                </div>
              ),
              snippet: `import { Menu } from "ts-better-console";

new Menu(
  [
    { label: "Apple" },
    { label: "Banana" },
    { label: "Cherry" },
  ],
  {
    selectedIcon: "👉",
    unselectedIcon: "  ",
    focusStyle: { color: "cyan", styles: ["bold"] },
    defaultIndex: 0,
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
