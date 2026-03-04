import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>UnSpecifiedColor</h1>
        <p>
          <code>UnSpecifiedColor</code> is a flexible color type used in places
          where a component needs to either receive an explicit color or fall
          back to the terminal&apos;s default foreground. It accepts the full{" "}
          <code>AnyColor</code> union — named 4-bit strings, 8-bit palette
          codes, and 24-bit RGB values — plus the special literal{" "}
          <code>"foreground"</code> that tells the renderer to use whatever the
          parent style already set (or the terminal default, if there is none).
        </p>
        <p>
          You will encounter this type most often on progress bar color options
          and anywhere a component exposes per-state or per-region color
          overrides.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <Code
          codesnippets={[
            {
              title: "UnSpecifiedColor",
              code: (
                <div>
                  <span className="text-zinc-500">
                    {"// The full color union"}
                  </span>
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">Color</i> =
                  <div className="ml-4">
                    | <span className="text-orange-400">"black"</span>
                    <br />| <span className="text-orange-400">"red"</span>
                    <br />| <span className="text-orange-400">"green"</span>
                    <br />| <span className="text-orange-400">"yellow"</span>
                    <br />| <span className="text-orange-400">"blue"</span>
                    <br />| <span className="text-orange-400">"magenta"</span>
                    <br />| <span className="text-orange-400">"cyan"</span>
                    <br />| <span className="text-orange-400">"white"</span>
                    <br />| <span className="text-orange-400">"gray"</span>;
                  </div>
                  <br />
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">EightBitColorValue</i> {"{"}{" "}
                  <i className="text-cyan-600">__type</i>:{" "}
                  <span className="text-orange-400">"8bit"</span>;{" "}
                  <i className="text-cyan-600">code</i>:{" "}
                  <span className="text-orange-400">number</span> {"}"}
                  <br />
                  <i className="text-purple-400">interface</i>{" "}
                  <i className="text-blue-400">RGBColorValue</i> {"{"}{" "}
                  <i className="text-cyan-600">__type</i>:{" "}
                  <span className="text-orange-400">"rgb"</span>;{" "}
                  <i className="text-cyan-600">r</i>:{" "}
                  <span className="text-orange-400">number</span>;{" "}
                  <i className="text-cyan-600">g</i>:{" "}
                  <span className="text-orange-400">number</span>;{" "}
                  <i className="text-cyan-600">b</i>:{" "}
                  <span className="text-orange-400">number</span> {"}"}
                  <br />
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">ExtendedColor</i> ={" "}
                  <span className="text-cyan-400">EightBitColorValue</span> |{" "}
                  <span className="text-cyan-400">RGBColorValue</span>;
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">AnyColor</i> ={" "}
                  <span className="text-cyan-400">Color</span> |{" "}
                  <span className="text-cyan-400">ExtendedColor</span>;
                  <br />
                  <br />
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">UnSpecifiedColor</i> ={" "}
                  <span className="text-cyan-400">AnyColor</span> |{" "}
                  <span className="text-orange-400">"foreground"</span>;
                </div>
              ),
              snippet: `type Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";

interface EightBitColorValue { __type: "8bit"; code: number }
interface RGBColorValue      { __type: "rgb";  r: number; g: number; b: number }

type ExtendedColor = EightBitColorValue | RGBColorValue;
type AnyColor      = Color | ExtendedColor;

type UnSpecifiedColor = AnyColor | "foreground";`,
            },
          ]}
        />
        <h2 className="mt-8">Accepted Values</h2>
        <p>
          Anything you can pass to the <code>color</code> property of{" "}
          <code>StyleOptions</code> also works here, plus the special{" "}
          <code>"foreground"</code> sentinel:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Named colors</strong> — <code>"black"</code>,{" "}
            <code>"red"</code>, <code>"green"</code>, <code>"yellow"</code>,{" "}
            <code>"blue"</code>, <code>"magenta"</code>, <code>"cyan"</code>,{" "}
            <code>"white"</code>, <code>"gray"</code>. These map to the standard
            4-bit ANSI palette.
          </li>
          <li>
            <strong>8-bit colors</strong> — pass an{" "}
            <code>EightBitColorValue</code> created with{" "}
            <code>eightBit(code)</code>, where <code>code</code> is 0–255. You
            can use the <code>EightBitColor</code> enum for readable named codes
            like <code>EightBitColor.Orange</code>.
          </li>
          <li>
            <strong>24-bit RGB</strong> — pass an <code>RGBColorValue</code>{" "}
            created with <code>rgb(r, g, b)</code> or{" "}
            <code>hex("#rrggbb")</code>. Full true-color support on modern
            terminals.
          </li>
          <li>
            <code>"foreground"</code> — tells the component to inherit the
            current terminal foreground color (or a parent style&apos;s color
            when one is active). Useful when you want one segment of a progress
            bar to stay uncolored.
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <p>
          The <code>UnSpecifiedColor</code> type is widely used in various
          components and functions throughout <strong>ts-better-console</strong>
          . Below are examples covering all three color levels.
        </p>
        <h3>Named (4-bit) colors</h3>
        <p>The simplest option — just pass a color name string directly:</p>
        <Code
          codesnippets={[
            {
              title: "Named color example",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Progress</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">progress</i> ={" "}
                  <i className="text-blue-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">"Loading"</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">colors</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">loaded</i>:{" "}
                        <i className="text-orange-400">"cyan"</i>,
                        <br />
                        <i className="text-blue-400">buffered</i>:{" "}
                        <i className="text-orange-400">"blue"</i>,
                        <br />
                        <i className="text-blue-400">empty</i>:{" "}
                        <i className="text-orange-400">"gray"</i>,
                        <br />
                        <i className="text-blue-400">completed</i>:{" "}
                        <i className="text-orange-400">"green"</i>,
                        <br />
                        <i className="text-blue-400">errored</i>:{" "}
                        <i className="text-orange-400">"red"</i>,
                        <br />
                      </div>
                      {"},"}
                      <br />
                    </div>
                    {"},"}
                    <br />
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const progress = new Progress("Loading", 100, {
  bar: {
    colors: {
      loaded: "cyan",
      buffered: "blue",
      empty: "gray",
      completed: "green",
      errored: "red",
    },
  },
});`,
            },
          ]}
        />
        <h3>Extended colors (8-bit &amp; 24-bit)</h3>
        <p>
          You can use <code>eightBit()</code> or <code>rgb()</code> wherever an{" "}
          <code>UnSpecifiedColor</code> is expected, giving you access to the
          full 256-color palette or true-color RGB:
        </p>
        <Code
          codesnippets={[
            {
              title: "8-bit and RGB color example",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Progress</i>,{" "}
                  <i className="text-blue-400">eightBit</i>,{" "}
                  <i className="text-blue-400">rgb</i>,{" "}
                  <i className="text-blue-400">EightBitColor</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">progress</i> ={" "}
                  <i className="text-blue-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">"Installing"</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">colors</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">loaded</i>:{" "}
                        <i className="text-yellow-400">eightBit</i>(
                        <i className="text-emerald-400">EightBitColor</i>.
                        <i className="text-blue-400">Orange</i>),
                        <br />
                        <i className="text-blue-400">completed</i>:{" "}
                        <i className="text-yellow-400">rgb</i>(
                        <i className="text-orange-400">0, 220, 120</i>),
                        <br />
                        <i className="text-blue-400">errored</i>:{" "}
                        <i className="text-yellow-400">rgb</i>(
                        <i className="text-orange-400">255, 60, 60</i>),
                        <br />
                      </div>
                      {"},"}
                      <br />
                    </div>
                    {"},"}
                    <br />
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress, eightBit, rgb, EightBitColor } from "ts-better-console";

const progress = new Progress("Installing", 100, {
  bar: {
    colors: {
      loaded:    eightBit(EightBitColor.Orange),
      completed: rgb(0, 220, 120),
      errored:   rgb(255, 60, 60),
    },
  },
});`,
            },
          ]}
        />
        <h3>Using &ldquo;foreground&rdquo;</h3>
        <p>
          Set a slot to <code>"foreground"</code> to skip coloring that segment
          entirely — it will render in the terminal&apos;s default text color:
        </p>
        <Code
          codesnippets={[
            {
              title: '"foreground" example',
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Progress</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">progress</i> ={" "}
                  <i className="text-blue-400">new</i>{" "}
                  <i className="text-emerald-400">Progress</i>(
                  <i className="text-orange-400">"Processing"</i>,{" "}
                  <i className="text-orange-400">100</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">bar</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">colors</i>: {"{"}
                      <br />
                      <div className="ml-4">
                        <i className="text-blue-400">loaded</i>:{" "}
                        <i className="text-orange-400">"cyan"</i>,
                        <br />
                        <i className="text-blue-400">empty</i>:{" "}
                        <i className="text-orange-400">"foreground"</i>,
                        <br />
                      </div>
                      {"},"}
                      <br />
                    </div>
                    {"},"}
                    <br />
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Progress } from "ts-better-console";

const progress = new Progress("Processing", 100, {
  bar: {
    colors: {
      loaded: "cyan",
      empty:  "foreground", // uses the terminal's default color
    },
  },
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
