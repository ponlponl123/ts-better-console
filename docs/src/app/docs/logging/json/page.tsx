import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>json</h1>
        <p>
          The <code>json</code> method logs a JSON object inside a styled card
          in the terminal. It automatically formats the object with{" "}
          <code>JSON.stringify</code> and wraps it in a card component with
          configurable width and card options.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Method Signature",
              code: (
                <div>
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">json</i>(
                  <i className="text-cyan-600">obj</i>:{" "}
                  <span className="text-orange-400">any</span>,{" "}
                  <i className="text-cyan-600">width</i>?:{" "}
                  <span className="text-cyan-400">cardWidth</span>,{" "}
                  <i className="text-cyan-600">cardOptions</i>?:{" "}
                  <span className="text-cyan-400">cardOptions</span>):{" "}
                  <span className="text-purple-500">void</span>
                </div>
              ),
              snippet: `betterConsole.json(obj: any, width?: cardWidth, cardOptions?: cardOptions): void`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>obj</code>: The object to be serialized and displayed as
            formatted JSON.
          </li>
          <li>
            <code>width</code>: An optional <code>cardWidth</code> value (number
            or <code>&quot;auto&quot;</code>) to control the card width.
            Defaults to <code>&quot;auto&quot;</code>.
          </li>
          <li>
            <code>cardOptions</code>: An optional <code>cardOptions</code>{" "}
            object to customize the card&apos;s appearance. Defaults to a gray
            italic border style.
          </li>
        </ul>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-blue-400">betterConsole</i>{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">// Log a simple object</span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">json</i>({"{"}{" "}
                  <i className="text-blue-400">name</i>:{" "}
                  <i className="text-orange-400">&quot;Alice&quot;</i>,{" "}
                  <i className="text-blue-400">age</i>:{" "}
                  <i className="text-orange-400">30</i> {"}"});
                </div>
              ),
              snippet: `import betterConsole from "ts-better-console";

// Log a simple object
betterConsole.json({ name: "Alice", age: 30 });`,
            },
            {
              title: "With Custom Width and Options",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-blue-400">betterConsole</i>{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">data</i> = {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">users</i>: [
                    <i className="text-orange-400">&quot;Alice&quot;</i>,{" "}
                    <i className="text-orange-400">&quot;Bob&quot;</i>],
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">count</i>:{" "}
                    <i className="text-orange-400">2</i>,
                  </div>
                  {"}"};
                  <br />
                  <br />
                  <span className="text-zinc-500">// With fixed width</span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">json</i>(
                  <i className="text-blue-400">data</i>,{" "}
                  <i className="text-orange-400">60</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // With custom card styling
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">json</i>(
                  <i className="text-blue-400">data</i>,{" "}
                  <i className="text-orange-400">&quot;auto&quot;</i>, {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">borderStyle</i>: {"{"}{" "}
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">&quot;cyan&quot;</i> {"}"},
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">title</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">content</i>:{" "}
                      <i className="text-orange-400">&quot;User Data&quot;</i>,
                    </div>
                    <div className="ml-4">
                      <i className="text-blue-400">style</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;cyan&quot;</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import betterConsole from "ts-better-console";

const data = {
  users: ["Alice", "Bob"],
  count: 2,
};

// With fixed width
betterConsole.json(data, 60);

// With custom card styling
betterConsole.json(data, "auto", {
  borderStyle: { color: "cyan" },
  title: {
    content: "User Data",
    style: { color: "cyan", styles: ["bold"] },
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
