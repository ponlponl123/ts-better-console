import Code from "@/src/components/code";
import Log from "@/src/components/code-popover/log";
import Style from "@/src/components/code-popover/s";
import {
  BreadIcon,
  CaretRightIcon,
  MagicWandIcon,
  YarnIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>StyleOptions</h1>
        <p>
          The <code>StyleOptions</code> type defines the various styling options
          that can be applied to console logs when using the <code>s</code>{" "}
          function from <strong>ts-better-console</strong>. These options allow
          you to customize the appearance of your logs with different colors,
          backgrounds, and styles to make them more visually appealing and
          easier to read.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <p>
          The <code>StyleOptions</code> type includes the following properties:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <code>color</code>: The text color — a named color string, an 8-bit
            color via <code>eightBit()</code>, or a 24-bit color via{" "}
            <code>rgb()</code> / <code>hex()</code>.
          </li>
          <li>
            <code>backgroundColor</code>: The background color (same types as{" "}
            <code>color</code>).
          </li>
          <li>
            <code>styles</code>: An array of strings representing additional
            styles to apply to the log, such as "bold", "italic", or
            "underline".
          </li>
          <li>
            <code>endless</code> : A boolean indicating whether the styled log
            should persist indefinitely until manually cleared, or if it should
            be removed after a certain duration. When set to <code>true</code>,
            the log will remain in the console until explicitly cleared by the
            developer, allowing for long-term visibility of important logs. When
            set to <code>false</code> or omitted, the log will be removed after
            a default duration, which can be customized using the{" "}
            <code>duration</code> property.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "StyleOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">StyleOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">color</i>?:{" "}
                  <span className="text-cyan-400">AnyColor</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">backgroundColor</i>
                  ?: <span className="text-cyan-400">AnyColor</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">styles</i>
                  ?: <span className="text-cyan-400">style</span>[];
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">endless</i>
                  ?: <span className="text-purple-500">boolean</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `interface StyleOptions {
  color?: AnyColor;
  backgroundColor?: AnyColor;
  styles?: Style[];
  endless?: boolean;
};

// AnyColor = Color | ExtendedColor
type Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";
type ExtendedColor = EightBitColorValue | RGBColorValue;`,
            },
            {
              title: "AnyColor & Style",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">AnyColor</i> ={" "}
                  <span className="text-cyan-400">Color</span> |{" "}
                  <span className="text-cyan-400">ExtendedColor</span>;
                  <br />
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Color</i> ={" "}
                  <span className="text-orange-400">
                    &quot;black&quot; | &quot;red&quot; | &quot;green&quot; |
                    &quot;yellow&quot; | &quot;blue&quot; | &quot;magenta&quot;
                    | &quot;cyan&quot; | &quot;white&quot; | &quot;gray&quot;
                  </span>
                  ;
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">ExtendedColor</i> ={" "}
                  <span className="text-cyan-400">EightBitColorValue</span> |{" "}
                  <span className="text-cyan-400">RGBColorValue</span>;
                  <br />
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Style</i> ={" "}
                  <span className="text-orange-400">
                    &quot;bold&quot; | &quot;italic&quot; |
                    &quot;underline&quot; | &quot;strikethrough&quot;
                  </span>
                  ;
                </div>
              ),
              snippet: `type AnyColor = Color | ExtendedColor;
type Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";
type ExtendedColor = EightBitColorValue | RGBColorValue;
type Style = "bold" | "italic" | "underline" | "strikethrough";`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <p>
          You can use the <code>StyleOptions</code> type when calling the{" "}
          <code>s</code> function to apply custom styles to your console logs.
          For example:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using StyleOptions with the s function",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-emerald-400">betterConsole</i>, {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">
                    <Log />
                  </i>
                  (
                  <i className="text-yellow-400">
                    <Style />
                  </i>
                  (<i className="text-orange-400">"This is a styled log"</i>,{" "}
                  {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">"white"</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-orange-400">"blue"</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">styles</i>: [
                    <i className="text-orange-400">"bold"</i>,{" "}
                    <i className="text-orange-400">"italic"</i>],
                  </div>
                  {"}"}
                  ));
                </div>
              ),
              snippet: `import betterConsole, { s } from "ts-better-console";

betterConsole.log(
  s("This is a styled log", {
    color: "white",
    backgroundColor: "blue",
    styles: ["bold", "italic"],
  })
);`,
            },
          ]}
        />
        <h2 className="mt-8">Examples</h2>
        <p>
          Here are some examples of how you can use the{" "}
          <code>StyleOptions</code> type to create styled console logs:
        </p>
        <Code
          codesnippets={[
            {
              title: "Styled Log Examples",
              code: (
                <div>
                  <div className="flex flex-wrap items-center text-sm">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="text-emerald-500">betterConsole</span>.
                      <Log />(
                    </span>
                    <span className="text-sm text-orange-400">
                      "Styled Log"
                    </span>
                    , <span className="text-sm text-cyan-400">{"{"}</span>
                    <span className="text-sm text-cyan-400">color</span>:{" "}
                    <span className="text-sm text-orange-400">"red"</span>,{" "}
                    <span className="text-sm text-cyan-400">
                      backgroundColor
                    </span>
                    : <span className="text-sm text-orange-400">"yellow"</span>,{" "}
                    <span className="text-sm text-cyan-400">styles</span>: [
                    <span className="text-sm text-orange-400">"bold"</span>,{" "}
                    <span className="text-sm text-orange-400">"underline"</span>
                    ],
                    <span className="text-sm text-cyan-400">{"}"}</span>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      );
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-sm text-red-400 bg-yellow-400 font-bold underline">
                      This is a styled log!✨
                    </span>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
