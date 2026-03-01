import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Styles</h1>
        <p>
          The <code>Styles</code> enum provides ANSI escape codes for applying
          text decoration styles in terminal output. These values are used
          internally by <strong>ts-better-console</strong> to apply text styling
          via the <code>s</code> function and <code>StyleOptions</code>.
        </p>
        <h2 className="mt-8">Enum Definition</h2>
        <p>
          The <code>Styles</code> enum maps style names to their corresponding
          ANSI escape sequences:
        </p>
        <Code
          codesnippets={[
            {
              title: "Styles Enum",
              code: (
                <div>
                  <i className="text-purple-400">enum</i>{" "}
                  <i className="text-blue-400">Styles</i> {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">bold</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[1m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">italic</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[3m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">underline</i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[4m&quot;</span>
                  ,
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">
                    strikethrough
                  </i> ={" "}
                  <span className="text-orange-400">&quot;\x1b[9m&quot;</span>
                  ,
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `enum Styles {
  bold = "\\x1b[1m",
  italic = "\\x1b[3m",
  underline = "\\x1b[4m",
  strikethrough = "\\x1b[9m",
}`,
            },
          ]}
        />
        <h2 className="mt-8">Available Styles</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>bold</code> —{" "}
            <span className="font-bold">Makes text bold</span>
          </li>
          <li>
            <code>italic</code> —{" "}
            <span className="italic">Makes text italic</span>
          </li>
          <li>
            <code>underline</code> —{" "}
            <span className="underline">Makes text underlined</span>
          </li>
          <li>
            <code>strikethrough</code> —{" "}
            <span className="line-through">Makes text strikethrough</span>
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <p>
          While the <code>Styles</code> enum is used internally, you typically
          apply styles via the <code>styles</code> array in{" "}
          <code>StyleOptions</code> when using the <code>s</code> function. You
          can also import and use the enum directly for advanced use cases:
        </p>
        <Code
          codesnippets={[
            {
              title: "Using Styles with StyleOptions",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Using styles via StyleOptions
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Bold text&quot;</i>,{" "}
                  {"{"} <i className="text-blue-400">styles</i>: [
                  <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}));
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Bold and italic&quot;</i>
                  , {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">styles</i>: [
                    <i className="text-orange-400">&quot;bold&quot;</i>,{" "}
                    <i className="text-orange-400">&quot;italic&quot;</i>],
                  </div>
                  {"}"}));
                  <br />
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">s</i>(
                  <i className="text-orange-400">&quot;Underlined red&quot;</i>,{" "}
                  {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;red&quot;</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">styles</i>: [
                    <i className="text-orange-400">&quot;underline&quot;</i>],
                  </div>
                  {"}"}));
                </div>
              ),
              snippet: `import { s } from "ts-better-console";

// Using styles via StyleOptions
console.log(s("Bold text", { styles: ["bold"] }));

console.log(s("Bold and italic", {
  styles: ["bold", "italic"],
}));

console.log(s("Underlined red", {
  color: "red",
  styles: ["underline"],
}));`,
            },
            {
              title: "Using Styles Enum Directly",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Styles</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Using the enum values directly
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-emerald-400">Styles</i>.
                  <i className="text-blue-400">bold</i> +{" "}
                  <i className="text-orange-400">&quot;This is bold&quot;</i> +{" "}
                  <i className="text-blue-400">cls</i>);
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-emerald-400">Styles</i>.
                  <i className="text-blue-400">italic</i> +{" "}
                  <i className="text-emerald-400">Styles</i>.
                  <i className="text-blue-400">underline</i> +{" "}
                  <i className="text-orange-400">
                    &quot;Italic underline&quot;
                  </i>{" "}
                  + <i className="text-blue-400">cls</i>);
                </div>
              ),
              snippet: `import { Styles, cls } from "ts-better-console";

// Using the enum values directly
console.log(Styles.bold + "This is bold" + cls);
console.log(Styles.italic + Styles.underline + "Italic underline" + cls);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
