import Code from "@/src/components/code";
import Image from "@/src/components/image";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Input</h1>
        <p>
          There are two ways to collect text input from users. The quick way is
          the standalone <code>prompt()</code> function — it prints a question
          and waits for a line of text. For more control, reach for the{" "}
          <code>Input</code> class, which renders a bordered input box with
          label, password masking, custom styling, and events.
        </p>

        <h2 className="mt-8">prompt()</h2>
        <p>
          A simple one-liner to ask the user something and get a string back.
          Supports plain text and password masking.
        </p>
        <Image
          src="/previews/prompt.png"
          alt="Example of ts-better-console prompt function in action"
          className="w-full"
        />
        <Code
          codesnippets={[
            {
              title: "Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">prompt</i>(
                  <br />
                  <div className="ml-4">
                    <i className="text-cyan-600">question</i>?:{" "}
                    <span className="text-orange-400">string</span>,
                    <br />
                    <i className="text-cyan-600">type</i>?:{" "}
                    <span className="text-cyan-400">InputType</span>,
                    <br />
                    <i className="text-cyan-600">isArrowKeyNavigationEnabled</i>
                    ?: <span className="text-orange-400">boolean</span>,
                  </div>
                  ): <span className="text-cyan-400">Promise</span>&lt;
                  <span className="text-orange-400">string</span>&gt;
                </div>
              ),
              snippet: `function prompt(
  question?: string,
  type?: InputType,
  isArrowKeyNavigationEnabled?: boolean,
): Promise<string>`,
            },
          ]}
        />
        <h3 className="mt-4">Parameters</h3>
        <ul className="list-disc list-inside">
          <li>
            <code>question</code> — the prompt text shown before the cursor.
            Defaults to <code>&quot;&gt; &quot;</code>.
          </li>
          <li>
            <code>type</code> — <code>&quot;text&quot;</code> (default) or{" "}
            <code>&quot;password&quot;</code> (hides what the user types).
          </li>
          <li>
            <code>isArrowKeyNavigationEnabled</code> — when <code>true</code>,
            enables command-history navigation with the ↑ / ↓ arrow keys (like a
            shell). Each submitted value is pushed into an internal history
            buffer. Defaults to <code>false</code>.
          </li>
        </ul>
        <p className="mt-4">
          Cursor movement with ← / → is always active — you can navigate
          anywhere inside the current input to insert or delete characters.
          Backspace removes the character immediately to the left of the cursor,
          not just the last character in the buffer. Control sequences and other
          non-printable keys are silently ignored so they never corrupt the
          input.
        </p>
        <Code
          codesnippets={[
            {
              title: "Basic Example",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">prompt</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">name</i> ={" "}
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">prompt</i>(
                  <i className="text-orange-400">
                    &quot;What&apos;s your name? &quot;
                  </i>
                  );
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">
                    `Hello, ${"{"}name{"}"}!`
                  </i>
                  );
                  <br />
                  <br />
                  <span className="text-zinc-500">// Password input</span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">secret</i> ={" "}
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">prompt</i>(
                  <i className="text-orange-400">&quot;Password: &quot;</i>,{" "}
                  <i className="text-orange-400">&quot;password&quot;</i>);
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Shell-like prompt with ↑/↓ history navigation"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">cmd</i> ={" "}
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-yellow-400">prompt</i>(
                  <i className="text-orange-400">&quot;$ &quot;</i>,{" "}
                  <i className="text-orange-400">&quot;text&quot;</i>,{" "}
                  <i className="text-orange-400">true</i>);
                </div>
              ),
              snippet: `import { prompt } from "ts-better-console";

const name = await prompt("What's your name? ");
console.log(\`Hello, \${name}!\`);

// Password input
const secret = await prompt("Password: ", "password");

// Shell-like prompt with ↑/↓ history navigation
const cmd = await prompt("$ ", "text", true);`,
            },
          ]}
        />

        <h2 className="mt-8">Input class</h2>
        <p>
          For a richer experience, <code>Input</code> renders a bordered text
          field with a label, supports password mode, custom width and styling,
          and emits events as the user types.
        </p>
        <Image
          src="/previews/input.png"
          alt="Example of ts-better-console input class in action"
          className="w-full"
        />
        <Code
          codesnippets={[
            {
              title: "Constructor",
              code: (
                <div>
                  <i className="text-purple-400">new</i>{" "}
                  <i className="text-yellow-400">Input</i>(
                  <i className="text-cyan-600">options</i>?:{" "}
                  <span className="text-cyan-400">InputOptions</span>)
                </div>
              ),
              snippet: `new Input(options?: InputOptions)`,
            },
          ]}
        />
        <h3 className="mt-4">Options</h3>
        <ul className="list-disc list-inside">
          <li>
            <code>type</code> — <code>&quot;text&quot;</code> or{" "}
            <code>&quot;password&quot;</code>. Defaults to{" "}
            <code>&quot;text&quot;</code>.
          </li>
          <li>
            <code>label</code> — text shown in the top border. Defaults to{" "}
            <code>&quot;Type something&quot;</code>.
          </li>
          <li>
            <code>defaultValue</code> — pre-filled value.
          </li>
          <li>
            <code>width</code> — same as Card: number, ratio, or{" "}
            <code>&quot;auto&quot;</code>. Defaults to <code>50</code>.
          </li>
          <li>
            <code>align</code> — <code>&quot;left&quot;</code>,{" "}
            <code>&quot;center&quot;</code>, or <code>&quot;right&quot;</code>.
          </li>
          <li>
            <code>position</code> — <code>&quot;inline&quot;</code>,{" "}
            <code>&quot;top&quot;</code>, or <code>&quot;bottom&quot;</code>.
          </li>
          <li>
            <code>styles</code> — object with <code>input</code>,{" "}
            <code>label</code>, and <code>border</code> style options.
          </li>
        </ul>
        <h3 className="mt-4">Methods</h3>
        <ul className="list-disc list-inside">
          <li>
            <code>prompt()</code> — shows the input and returns a promise that
            resolves with the submitted value.
          </li>
        </ul>
        <h3 className="mt-4">Events</h3>
        <ul className="list-disc list-inside">
          <li>
            <code>&quot;submit&quot;</code> — fired when the user presses Enter.
            Passes the value.
          </li>
          <li>
            <code>&quot;change&quot;</code> — fired on every keystroke. Passes
            the current value.
          </li>
          <li>
            <code>&quot;exit&quot;</code> — fired when the user presses Ctrl+C.
          </li>
        </ul>
        <Code
          codesnippets={[
            {
              title: "Input Class Example",
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
                  <i className="text-yellow-400">Input</i>({"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">label</i>:{" "}
                    <i className="text-orange-400">
                      &quot;Enter your name&quot;
                    </i>
                    ,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">width</i>:{" "}
                    <i className="text-orange-400">40</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">styles</i>: {"{"}
                    <br />
                    <div className="ml-4">
                      <i className="text-blue-400">label</i>: {"{"}{" "}
                      <i className="text-blue-400">color</i>:{" "}
                      <i className="text-orange-400">&quot;cyan&quot;</i>,{" "}
                      <i className="text-blue-400">styles</i>: [
                      <i className="text-orange-400">&quot;bold&quot;</i>] {"}"}
                      ,
                    </div>
                    {"}"},
                  </div>
                  {"}"});
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">value</i> ={" "}
                  <i className="text-purple-400">await</i>{" "}
                  <i className="text-blue-400">input</i>.
                  <i className="text-yellow-400">prompt</i>();
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">&quot;You entered:&quot;</i>,{" "}
                  <i className="text-blue-400">value</i>);
                </div>
              ),
              snippet: `import { Input } from "ts-better-console";

const input = new Input({
  label: "Enter your name",
  width: 40,
  styles: {
    label: { color: "cyan", styles: ["bold"] },
  },
});

const value = await input.prompt();
console.log("You entered:", value);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
