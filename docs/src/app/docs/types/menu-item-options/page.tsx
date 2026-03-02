import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>MenuItemOptions</h1>
        <p>
          The <code>MenuItemOptions</code> type defines the configuration for an
          individual item within a menu in <strong>ts-better-console</strong>.
          It specifies the label text and optional styling for both the default
          and focused states of the menu item.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>MenuItemOptions</code> type includes the following
          properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>label</code>: A string representing the text displayed for the
            menu item.
          </li>
          <li>
            <code>style</code>: An optional <code>StyleOptions</code> object
            that defines the default styling of the menu item.
          </li>
          <li>
            <code>focusStyle</code>: An optional <code>StyleOptions</code>{" "}
            object that defines the styling applied when the menu item is
            focused or highlighted.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "MenuItemOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">MenuItemOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">label</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">style</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">focusStyle</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type MenuItemOptions = {
  label: string;
  style?: StyleOptions;
  focusStyle?: StyleOptions;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use <code>MenuItemOptions</code> when defining items for a
          menu:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using MenuItemOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Menu</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Menu</i>([
                  <br />
                  <div className="ml-4">
                    {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">"Red"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"red"</i> {"}"},
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">focusStyle</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"white"</i>,{" "}
                      <i className="text-blue-400">backgroundColor</i>:{" "}
                      <i className="text-orange-400">"red"</i> {"}"},
                    </div>
                    {"}"},
                  </div>
                  <div className="ml-4">
                    {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">"Blue"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"blue"</i> {"}"},
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">focusStyle</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"white"</i>,{" "}
                      <i className="text-blue-400">backgroundColor</i>:{" "}
                      <i className="text-orange-400">"blue"</i> {"}"},
                    </div>
                    {"}"},
                  </div>
                  ]).<i className="text-yellow-400">show</i>();
                </div>
              ),
              snippet: `import { Menu } from "ts-better-console";

new Menu([
  {
    label: "Red",
    style: { color: "red" },
    focusStyle: { color: "white", backgroundColor: "red" },
  },
  {
    label: "Blue",
    style: { color: "blue" },
    focusStyle: { color: "white", backgroundColor: "blue" },
  },
]).show();`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
