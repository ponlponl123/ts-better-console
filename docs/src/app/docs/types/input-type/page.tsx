import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>InputType</h1>
        <p>
          The <code>InputType</code> type defines the possible input modes for
          the <code>Input</code> component.
        </p>
        <h2 className="mt-8">Type Definition</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;text&quot;</code>: Standard text input — characters are
            visible as typed.
          </li>
          <li>
            <code>&quot;password&quot;</code>: Characters are masked with{" "}
            <code>*</code> as the user types.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "InputType Type Definition",
              code: (
                <div>
                  <i className="text-purple-400">type</i>{" "}
                  <i className="text-blue-400">InputType</i> ={" "}
                  <span className="text-orange-400">
                    &quot;text&quot; | &quot;password&quot;
                  </span>
                  ;
                </div>
              ),
              snippet: `type InputType = "text" | "password";`,
            },
          ]}
        />
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Password Input",
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
                    <i className="text-blue-400">type</i>:{" "}
                    <i className="text-orange-400">&quot;password&quot;</i>,
                    <br />
                    <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">
                      &quot;Enter password&quot;
                    </i>
                    ,
                  </div>
                  {"}"});
                </div>
              ),
              snippet: `import { Input } from "ts-better-console";

const input = new Input({
  type: "password",
  label: "Enter password",
});`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
