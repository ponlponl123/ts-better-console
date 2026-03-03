import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>InputStyleOptions</h1>
        <p>
          The <code>InputStyleOptions</code> type lets you style the three
          visual parts of an <code>Input</code> component independently — the
          input field itself, the label, and the border.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>input</code>: A <code>StyleOptions</code> object applied to
            the text inside the input field.
          </li>
          <li>
            <code>label</code>: A <code>StyleOptions</code> object applied to
            the label text.
          </li>
          <li>
            <code>border</code>: A <code>StyleOptions</code> object applied to
            the border surrounding the input.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "InputStyleOptions Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">InputStyleOptions</i> = {"{"}
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">input</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">label</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  &nbsp;&nbsp;<i className="text-cyan-600">border</i>?:{" "}
                  <span className="text-cyan-400">StyleOptions</span>;
                  <br />
                  {"}"}
                </div>
              ),
              snippet: `type InputStyleOptions = {
  input?: StyleOptions;
  label?: StyleOptions;
  border?: StyleOptions;
};`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Styled Input",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">Input</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">input</i> ={" "}
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-emerald-400">Input</i>({"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">&quot;Username&quot;</i>,
                    <br />
                    <i className="text-blue-400">styles</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">input</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;white&quot;</i> {"}"}
                      ,
                      <br />
                      <i className="text-blue-400">label</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;cyan&quot;</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}
                      ,
                      <br />
                      <i className="text-blue-400">border</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;green&quot;</i> {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Input } from "ts-better-console";

const input = new Input({
  label: "Username",
  styles: {
    input: { color: "white" },
    label: { color: "cyan", styles: ["bold"] },
    border: { color: "green" },
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
