import Code from "@/src/components/code";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>ANSI Constants</h1>
        <p>
          The <code>ansi</code> module exposes every low-level ANSI / VT100
          escape sequence used internally by ts-better-console. You can import
          any of them directly if you need fine-grained terminal control.
        </p>

        {/* Byte enum */}
        <h2 className="mt-8">Byte Enum</h2>
        <p>
          Raw byte values for protocol-level buffer parsing (mouse events,
          escape sequence detection).
        </p>
        <Code
          codesnippets={[
            {
              title: "Byte",
              code: (
                <div>
                  <i className="text-purple-400">enum</i>{" "}
                  <span className="text-cyan-400">Byte</span> {"{"}
                  <div className="ml-4">
                    <i className="text-blue-400">ESC</i> ={" "}
                    <i className="text-orange-400">0x1b</i>,
                    <br />
                    <i className="text-blue-400">BRACKET</i> ={" "}
                    <i className="text-orange-400">0x5b</i>,
                    <br />
                    <i className="text-blue-400">MOUSE_M</i> ={" "}
                    <i className="text-orange-400">0x4d</i>,
                  </div>
                  {"}"}
                </div>
              ),
              snippet: `enum Byte {
  ESC     = 0x1b,
  BRACKET = 0x5b,
  MOUSE_M = 0x4d,
}`,
            },
          ]}
        />

        {/* Control characters */}
        <h2 className="mt-8">Control Characters</h2>
        <Code
          codesnippets={[
            {
              title: "CTRL_C, BACKSPACE",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">CTRL_C</i> ={" "}
                  <i className="text-orange-400">&quot;\x03&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">BACKSPACE</i> ={" "}
                  <i className="text-orange-400">&quot;\x7f&quot;</i>;
                </div>
              ),
              snippet: `const CTRL_C    = "\\x03";
const BACKSPACE = "\\x7f";`,
            },
          ]}
        />

        {/* Primitives */}
        <h2 className="mt-8">Primitives</h2>
        <Code
          codesnippets={[
            {
              title: "ESC, CSI",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">ESC</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">CSI</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[&quot;</i>;
                </div>
              ),
              snippet: `const ESC = "\\x1b";
const CSI = "\\x1b[";`,
            },
          ]}
        />

        {/* Cursor */}
        <h2 className="mt-8">Cursor</h2>
        <Code
          codesnippets={[
            {
              title: "Cursor Constants & Functions",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">CURSOR_SAVE</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b7&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">CURSOR_RESTORE</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b8&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">CURSOR_HIDE</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[?25l&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">CURSOR_SHOW</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[?25h&quot;</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-yellow-400">cursorUp</i> = (
                  <i className="text-cyan-600">n</i>:{" "}
                  <span className="text-orange-400">number</span>) =&gt;{" "}
                  <span className="text-orange-400">`${"{"}</span>
                  <span className="text-blue-400">CSI</span>
                  <span className="text-orange-400">{"}"}</span>
                  <span className="text-orange-400">${"{"}</span>
                  <span className="text-blue-400">n</span>
                  <span className="text-orange-400">{"}"}A`</span>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-yellow-400">cursorDown</i> = (
                  <i className="text-cyan-600">n</i>:{" "}
                  <span className="text-orange-400">number</span>) =&gt;{" "}
                  <span className="text-orange-400">`...B`</span>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-yellow-400">cursorTo</i> = (
                  <i className="text-cyan-600">row</i>:{" "}
                  <span className="text-orange-400">number</span>,{" "}
                  <i className="text-cyan-600">col</i>:{" "}
                  <span className="text-orange-400">number</span> ={" "}
                  <i className="text-orange-400">1</i>) =&gt;{" "}
                  <span className="text-orange-400">`...H`</span>;
                </div>
              ),
              snippet: `const CURSOR_SAVE    = "\\x1b7";
const CURSOR_RESTORE = "\\x1b8";
const CURSOR_HIDE    = "\\x1b[?25l";
const CURSOR_SHOW    = "\\x1b[?25h";

const cursorUp   = (n: number) => \`\${CSI}\${n}A\`;
const cursorDown = (n: number) => \`\${CSI}\${n}B\`;
const cursorTo   = (row: number, col: number = 1) => \`\${CSI}\${row};\${col}H\`;`,
            },
          ]}
        />

        {/* Erase */}
        <h2 className="mt-8">Erase</h2>
        <Code
          codesnippets={[
            {
              title: "Erase Constants",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">ERASE_LINE</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[2K&quot;</i>;{" "}
                  <span className="text-zinc-500">
                    {"// erase entire line"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">ERASE_TO_EOL</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[K&quot;</i>;{" "}
                  <span className="text-zinc-500">
                    {"// erase to end of line"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">ERASE_BELOW</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[0J&quot;</i>;{" "}
                  <span className="text-zinc-500">
                    {"// erase below cursor"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">ERASE_TO_END</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[J&quot;</i>;{" "}
                  <span className="text-zinc-500">
                    {"// erase to end of screen"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">INSERT_LINE</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[L&quot;</i>;{" "}
                  <span className="text-zinc-500">
                    {"// insert blank line"}
                  </span>
                </div>
              ),
              snippet: `const ERASE_LINE   = "\\x1b[2K";  // erase entire line
const ERASE_TO_EOL = "\\x1b[K";   // erase to end of line
const ERASE_BELOW  = "\\x1b[0J";  // erase below cursor
const ERASE_TO_END = "\\x1b[J";   // erase to end of screen
const INSERT_LINE  = "\\x1b[L";   // insert blank line`,
            },
          ]}
        />

        {/* Scroll region */}
        <h2 className="mt-8">Scroll Region</h2>
        <Code
          codesnippets={[
            {
              title: "SCROLL_RESET & scrollRegion",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">SCROLL_RESET</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[r&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-yellow-400">scrollRegion</i> = (
                  <i className="text-cyan-600">top</i>:{" "}
                  <span className="text-orange-400">number</span>,{" "}
                  <i className="text-cyan-600">bottom</i>:{" "}
                  <span className="text-orange-400">number</span>) =&gt;{" "}
                  <span className="text-orange-400">`...r`</span>;
                </div>
              ),
              snippet: `const SCROLL_RESET = "\\x1b[r";
const scrollRegion = (top: number, bottom: number) => \`\${CSI}\${top};\${bottom}r\`;`,
            },
          ]}
        />

        {/* Wrapping & mouse */}
        <h2 className="mt-8">Line Wrapping & Mouse</h2>
        <Code
          codesnippets={[
            {
              title: "WRAP_ON/OFF, MOUSE_ON/OFF",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">WRAP_ON</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[?7h&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">WRAP_OFF</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[?7l&quot;</i>;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">MOUSE_ON</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[?1000h&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">MOUSE_OFF</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[?1000l&quot;</i>;
                </div>
              ),
              snippet: `const WRAP_ON  = "\\x1b[?7h";
const WRAP_OFF = "\\x1b[?7l";

const MOUSE_ON  = "\\x1b[?1000h";
const MOUSE_OFF = "\\x1b[?1000l";`,
            },
          ]}
        />

        {/* Arrow keys */}
        <h2 className="mt-8">Arrow Keys</h2>
        <Code
          codesnippets={[
            {
              title: "KEY_UP, KEY_DOWN, KEY_RIGHT, KEY_LEFT",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">KEY_UP</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[A&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">KEY_DOWN</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[B&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">KEY_RIGHT</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[C&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">KEY_LEFT</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[D&quot;</i>;
                </div>
              ),
              snippet: `const KEY_UP    = "\\x1b[A";
const KEY_DOWN  = "\\x1b[B";
const KEY_RIGHT = "\\x1b[C";
const KEY_LEFT  = "\\x1b[D";`,
            },
          ]}
        />

        {/* SGR helpers */}
        <h2 className="mt-8">SGR Helpers</h2>
        <Code
          codesnippets={[
            {
              title: "RESET, DIM, DIM_OFF",
              code: (
                <div>
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">RESET</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[0m&quot;</i>;{" "}
                  <span className="text-zinc-500">
                    {"// also exported as cls"}
                  </span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">DIM</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[2m&quot;</i>;
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">DIM_OFF</i> ={" "}
                  <i className="text-orange-400">&quot;\x1b[22m&quot;</i>;
                </div>
              ),
              snippet: `const RESET   = "\\x1b[0m";  // also exported as cls
const DIM     = "\\x1b[2m";
const DIM_OFF = "\\x1b[22m";`,
            },
          ]}
        />

        <h2 className="mt-8">Import</h2>
        <Code
          codesnippets={[
            {
              title: "Importing ANSI Constants",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}
                  <div className="ml-4">
                    <i className="text-blue-400">CURSOR_HIDE</i>,{" "}
                    <i className="text-blue-400">CURSOR_SHOW</i>,
                    <br />
                    <i className="text-blue-400">cursorTo</i>,
                    <br />
                    <i className="text-blue-400">ERASE_LINE</i>,
                    <br />
                    <i className="text-blue-400">RESET</i>,
                  </div>
                  {"}"} <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                </div>
              ),
              snippet: `import {
  CURSOR_HIDE, CURSOR_SHOW,
  cursorTo,
  ERASE_LINE,
  RESET,
} from "ts-better-console";`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
