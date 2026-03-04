import Code from "@/src/components/code";
import React from "react";

const sgrCodes: {
  code: number | string;
  effect: string;
  note?: string;
}[] = [
  {
    code: 0,
    effect: "Reset / Normal",
    note: "All attributes off. Equivalent to cls constant.",
  },
  { code: 1, effect: "Bold (increased intensity)" },
  {
    code: 2,
    effect: "Dim (decreased intensity)",
    note: "Not widely supported on Windows Terminal.",
  },
  { code: 3, effect: "Italic" },
  { code: 4, effect: "Underline" },
  {
    code: 5,
    effect: "Slow blink",
    note: "Less than 150 blinks per minute. Rarely supported.",
  },
  {
    code: 6,
    effect: "Rapid blink",
    note: "More than 150 blinks per minute. Very rarely supported.",
  },
  { code: 7, effect: "Reverse video (swap fg / bg)" },
  {
    code: 8,
    effect: "Conceal (hidden)",
    note: "Not widely supported. Text is invisible but selectable.",
  },
  { code: 9, effect: "Strikethrough (crossed-out)" },
  { code: 10, effect: "Default (primary) font" },
  {
    code: "11–19",
    effect: "Alternative fonts 1–9",
    note: "Select alternative font n−10. Rarely supported.",
  },
  { code: 20, effect: "Fraktur (Gothic)", note: "Hardly ever supported." },
  {
    code: 21,
    effect: "Doubly underlined; or Bold off",
    note: "Behavior varies by terminal.",
  },
  { code: 22, effect: "Normal intensity", note: "Neither bold nor dim." },
  { code: 23, effect: "Not italic, not Fraktur" },
  { code: 24, effect: "Not underlined" },
  { code: 25, effect: "Not blinking" },
  {
    code: 26,
    effect: "Proportional spacing",
    note: "ITU T.61 / T.416. Not widely supported.",
  },
  { code: 27, effect: "Not reversed" },
  { code: 28, effect: "Reveal (not concealed)" },
  { code: 29, effect: "Not crossed out" },
  {
    code: "30–37",
    effect: "Set foreground color (4-bit standard)",
    note: "30=Black, 31=Red, 32=Green, 33=Yellow, 34=Blue, 35=Magenta, 36=Cyan, 37=White",
  },
  {
    code: 38,
    effect: "Set foreground color (extended)",
    note: "Next args: 5;n for 8-bit or 2;r;g;b for 24-bit.",
  },
  { code: 39, effect: "Default foreground color" },
  {
    code: "40–47",
    effect: "Set background color (4-bit standard)",
    note: "40=Black, 41=Red, 42=Green, 43=Yellow, 44=Blue, 45=Magenta, 46=Cyan, 47=White",
  },
  {
    code: 48,
    effect: "Set background color (extended)",
    note: "Next args: 5;n for 8-bit or 2;r;g;b for 24-bit.",
  },
  { code: 49, effect: "Default background color" },
  { code: 50, effect: "Disable proportional spacing" },
  { code: 51, effect: "Framed", note: "Rarely supported." },
  { code: 52, effect: "Encircled", note: "Rarely supported." },
  { code: 53, effect: "Overlined" },
  { code: 54, effect: "Not framed, not encircled" },
  { code: 55, effect: "Not overlined" },
  { code: "56–57", effect: "(Reserved)" },
  {
    code: 58,
    effect: "Set underline color",
    note: "Next args: 5;n for 8-bit or 2;r;g;b for 24-bit. Kitty, iTerm2, mintty.",
  },
  { code: 59, effect: "Default underline color" },
  {
    code: 60,
    effect: "Ideogram underline or right side line",
    note: "Rarely supported.",
  },
  { code: 61, effect: "Ideogram double underline or double right side line" },
  { code: 62, effect: "Ideogram overline or left side line" },
  { code: 63, effect: "Ideogram double overline or double left side line" },
  { code: 64, effect: "Ideogram stress marking" },
  { code: 65, effect: "No ideogram attributes" },
  { code: "66–72", effect: "(Reserved)" },
  { code: 73, effect: "Superscript", note: "mintty only." },
  { code: 74, effect: "Subscript", note: "mintty only." },
  { code: 75, effect: "Not superscript, not subscript" },
  { code: "76–89", effect: "(Reserved)" },
  {
    code: "90–97",
    effect: "Set bright foreground color",
    note: "90=BrightBlack (Gray), 91=BrightRed, 92=BrightGreen, 93=BrightYellow, 94=BrightBlue, 95=BrightMagenta, 96=BrightCyan, 97=BrightWhite",
  },
  { code: "98–99", effect: "(Reserved)" },
  {
    code: "100–107",
    effect: "Set bright background color",
    note: "100=BrightBlack (Gray), 101=BrightRed, 102=BrightGreen, 103=BrightYellow, 104=BrightBlue, 105=BrightMagenta, 106=BrightCyan, 107=BrightWhite",
  },
];

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Font Effects (SGR Parameters)</h1>
        <p>
          ANSI terminals use <strong>Select Graphic Rendition</strong> (SGR)
          parameters to control text appearance. These are sent as part of an
          escape sequence: <code>{`\\x1b[<code>m`}</code> (or{" "}
          <code>ESC [ &lt;code&gt; m</code>).
        </p>
        <p className="mt-2">
          The table below lists every standardised SGR code from{" "}
          <strong>0 to 107</strong>, its effect, and practical notes on terminal
          compatibility.
        </p>

        <h2 className="mt-8">How It Works</h2>
        <p>
          When you write <code>{`\\x1b[1m`}</code> the terminal sees{" "}
          <em>ESC [</em> (the &quot;Control Sequence Introducer&quot;) followed
          by the number <strong>1</strong> and the letter <strong>m</strong>.
          The number selects the graphic rendition — in this case, <em>Bold</em>
          . Multiple codes can be combined with semicolons:{" "}
          <code>{`\\x1b[1;3;31m`}</code> = bold + italic + red.
        </p>

        <Code
          codesnippets={[
            {
              title: "ANSI SGR Syntax",
              code: (
                <div>
                  <span className="text-zinc-500">{"// General form:"}</span>
                  <br />
                  ESC [ {"<code>"} m
                  <br />
                  <br />
                  <span className="text-zinc-500">{"// Multiple codes:"}</span>
                  <br />
                  ESC [ {"<code1>"} ; {"<code2>"} ; ... m
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Example: bold + italic + red foreground"}
                  </span>
                  <br />
                  <i className="text-orange-400">{`"\\x1b[1;3;31m"`}</i>
                </div>
              ),
              snippet: `// General form:
ESC [ <code> m

// Multiple codes:
ESC [ <code1> ; <code2> ; ... m

// Example: bold + italic + red foreground
"\\x1b[1;3;31m"`,
            },
          ]}
        />

        <h2 className="mt-8">SGR Code Reference (0–107)</h2>

        <div className="my-4 overflow-x-auto border border-foreground/10 rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground/10 bg-foreground/5">
                <th className="px-3 py-2 text-left font-semibold text-foreground/80 w-20">
                  Code
                </th>
                <th className="px-3 py-2 text-left font-semibold text-foreground/80">
                  Effect
                </th>
                <th className="px-3 py-2 text-left font-semibold text-foreground/80">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {sgrCodes.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-foreground/5 hover:bg-foreground/3"
                >
                  <td className="px-3 py-1.5 font-mono text-blue-400">
                    {row.code}
                  </td>
                  <td className="px-3 py-1.5 text-foreground/90">
                    {row.effect}
                  </td>
                  <td className="px-3 py-1.5 text-foreground/50 text-xs">
                    {row.note || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-8">Commonly Used Codes</h2>
        <p>
          Most terminals reliably support a small subset. Here are the ones
          you&apos;ll use most often:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {[
            { code: 0, label: "Reset", desc: "Clears all styles" },
            { code: 1, label: "Bold", desc: "Increased intensity" },
            { code: 2, label: "Dim", desc: "Decreased intensity" },
            { code: 3, label: "Italic", desc: "Italic text" },
            { code: 4, label: "Underline", desc: "Underlined text" },
            { code: 7, label: "Reverse", desc: "Swap fg/bg" },
            { code: 9, label: "Strikethrough", desc: "Crossed-out text" },
            { code: 22, label: "Normal intensity", desc: "Reset bold/dim" },
            { code: 23, label: "No italic", desc: "Reset italic" },
            { code: 24, label: "No underline", desc: "Reset underline" },
          ].map(({ code, label, desc }) => (
            <div
              key={code}
              className="flex items-center gap-3 p-2 border border-foreground/10 rounded-lg"
            >
              <code className="text-blue-400 font-mono w-8 text-right shrink-0">
                {code}
              </code>
              <div>
                <span className="font-medium text-foreground/90">{label}</span>
                <span className="text-foreground/50 text-xs ml-2">{desc}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-8">
          Using with <code>s()</code>
        </h2>
        <p>
          You don&apos;t need to memorize these codes — the <code>s()</code>{" "}
          function and <code>StyleOptions</code> handle the common ones for you:
        </p>

        <Code
          codesnippets={[
            {
              title: "StyleOptions ↔ SGR Mapping",
              code: (
                <div>
                  <span className="text-zinc-500">
                    {"// StyleOptions styles → SGR codes"}
                  </span>
                  <br />
                  <i className="text-orange-400">&quot;bold&quot;</i>{" "}
                  <span className="text-zinc-500">
                    {"→ \\x1b[1m  (code 1)"}
                  </span>
                  <br />
                  <i className="text-orange-400">&quot;italic&quot;</i>{" "}
                  <span className="text-zinc-500">
                    {"→ \\x1b[3m  (code 3)"}
                  </span>
                  <br />
                  <i className="text-orange-400">&quot;underline&quot;</i>{" "}
                  <span className="text-zinc-500">
                    {"→ \\x1b[4m  (code 4)"}
                  </span>
                  <br />
                  <i className="text-orange-400">
                    &quot;strikethrough&quot;
                  </i>{" "}
                  <span className="text-zinc-500">
                    {"→ \\x1b[9m  (code 9)"}
                  </span>
                  <br />
                  <br />
                  <span className="text-zinc-500">
                    {"// Colors → SGR codes 30–37 (fg), 40–47 (bg)"}
                  </span>
                  <br />
                  <span className="text-zinc-500">
                    {
                      "// Extended → SGR code 38;5;n (8-bit) or 38;2;r;g;b (24-bit)"
                    }
                  </span>
                  <br />
                  <span className="text-zinc-500">
                    {"// Reset → SGR code 0 (appended unless endless: true)"}
                  </span>
                </div>
              ),
              snippet: `// StyleOptions styles → SGR codes
"bold"          → \\x1b[1m  (code 1)
"italic"        → \\x1b[3m  (code 3)
"underline"     → \\x1b[4m  (code 4)
"strikethrough" → \\x1b[9m  (code 9)

// Colors → SGR codes 30–37 (fg), 40–47 (bg)
// Extended → SGR code 38;5;n (8-bit) or 38;2;r;g;b (24-bit)
// Reset → SGR code 0 (appended unless endless: true)`,
            },
          ]}
        />

        <h2 className="mt-8">Compatibility Notes</h2>
        <div className="p-4 border border-amber-400/30 bg-amber-400/5 my-4 space-y-2">
          <p className="text-sm">
            <strong>Bold vs Bright:</strong> In some terminals, code 1 (bold)
            also brightens the foreground color. This is legacy behavior —
            modern terminals generally treat bold and color independently.
          </p>
          <p className="text-sm">
            <strong>Blink (5, 6):</strong> Almost universally ignored by modern
            terminals. Never rely on blink being visible.
          </p>
          <p className="text-sm">
            <strong>Dim (2):</strong> Supported in most Linux terminals (GNOME
            Terminal, Konsole, kitty) but may be ignored in older versions of
            Windows Terminal. The constant <code>DIM</code> and{" "}
            <code>DIM_OFF</code> are exported from the ansi module.
          </p>
          <p className="text-sm">
            <strong>Always reset:</strong> If you apply styles manually,
            remember to append <code>{`\\x1b[0m`}</code> (or use{" "}
            <code>cls</code>
            /RESET) to avoid style bleed into subsequent output.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Page;
