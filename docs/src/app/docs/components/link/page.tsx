import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>link</h1>
        <p>
          The <code>link</code> function creates a clickable hyperlink in
          terminal emulators that support the OSC 8 escape sequence. The link
          text is displayed in the terminal and opens the URL when clicked.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">link</i>(
                  <i className="text-cyan-600">text</i>:{" "}
                  <span className="text-orange-400">string</span>,{" "}
                  <i className="text-cyan-600">url</i>:{" "}
                  <span className="text-orange-400">string</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function link(text: string, url: string): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>text</code>: The display text shown in the terminal.
          </li>
          <li>
            <code>url</code>: The URL that opens when the link is clicked.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>
          Returns a <code>string</code> containing OSC 8 escape sequences that
          render as a clickable hyperlink in supported terminals.
        </p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Basic Usage",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-blue-400">betterConsole</i>, {"{"}{" "}
                  <i className="text-blue-400">link</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Create a clickable link in the terminal
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-yellow-400">link</i>(
                  <i className="text-orange-400">&quot;Visit GitHub&quot;</i>,{" "}
                  <i className="text-orange-400">
                    &quot;https://github.com&quot;
                  </i>
                  ));
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    // Combine with styled text
                  </span>
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-orange-400">&quot;Check out&quot;</i>,{" "}
                  <i className="text-yellow-400">link</i>(
                  <i className="text-orange-400">&quot;the docs&quot;</i>,{" "}
                  <i className="text-orange-400">
                    &quot;https://example.com/docs&quot;
                  </i>
                  ));
                </div>
              ),
              snippet: `import betterConsole, { link } from "ts-better-console";

// Create a clickable link in the terminal
betterConsole.log(link("Visit GitHub", "https://github.com"));

// Combine with styled text
betterConsole.log("Check out", link("the docs", "https://example.com/docs"));`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
