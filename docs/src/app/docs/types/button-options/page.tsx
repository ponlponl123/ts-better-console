import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ButtonOptions</h1>
        <p>
          The <code>ButtonOptions</code> type defines the configuration for an
          individual button in <strong>ts-better-console</strong>. It specifies
          the label, styling, hover styling, and click handler for a terminal
          button.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>ButtonOptions</code> type includes the following properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>label</code>: A string representing the text displayed on the
            button.
          </li>
          <li>
            <code>style</code>: An optional <code>StyleOptions</code> object
            that defines the default styling of the button.
          </li>
          <li>
            <code>hoverStyle</code>: An optional <code>StyleOptions</code>{" "}
            object that defines the styling applied when the button is hovered
            or focused.
          </li>
          <li>
            <code>onClick</code>: A callback function that is invoked when the
            button is clicked.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "ButtonOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">ButtonOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">label</i>:{" "}
                  <span className="text-orange-400">string</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">style</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">hoverStyle</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">onClick</i>: () =&gt;{" "}
                  <span className="text-purple-500">void</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type ButtonOptions = {
  label: string;
  style?: StyleOptions;
  hoverStyle?: StyleOptions;
  onClick: () => void;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use <code>ButtonOptions</code> when creating buttons in the
          terminal:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using ButtonOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">button</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-emerald-400">button</i>.
                  <i className="text-yellow-400">group</i>([
                  <br />
                  <div className="ml-4">
                    {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">label</i>:{" "}
                      <i className="text-orange-400">"Click Me"</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"white"</i>,{" "}
                      <i className="text-blue-400">backgroundColor</i>:{" "}
                      <i className="text-orange-400">"blue"</i> {"}"},
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">hoverStyle</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">"white"</i>,{" "}
                      <i className="text-blue-400">backgroundColor</i>:{" "}
                      <i className="text-orange-400">"cyan"</i> {"}"},
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">onClick</i>: () =&gt; {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-emerald-400">console</i>.
                        <i className="text-yellow-400">log</i>(
                        <i className="text-orange-400">"Button clicked!"</i>);
                      </div>
                      {"}"},
                    </div>
                    {"}"},
                  </div>
                  ]);
                </div>
              ),
              snippet: `import { button } from "ts-better-console";

button.group([
  {
    label: "Click Me",
    style: { color: "white", backgroundColor: "blue" },
    hoverStyle: { color: "white", backgroundColor: "cyan" },
    onClick: () => {
      console.log("Button clicked!");
    },
  },
]);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
