import Code from "@/src/components/code";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>getColorCode</h1>
        <p>
          <code>getColorCode</code> converts any{" "}
          <Link href="/docs/types/any-color">
            <code>AnyColor</code>
          </Link>{" "}
          value — a named 4-bit color, an 8-bit palette code, or a 24-bit RGB
          object — into its ANSI SGR escape sequence. It is the low-level
          building block that <code>s()</code> uses internally, exposed so you
          can construct raw ANSI strings when you need direct control.
        </p>
        <h2 className="mt-8">Signature</h2>
        <Code
          codesnippets={[
            {
              title: "Function Signature",
              code: (
                <div>
                  <i className="text-purple-400">function</i>{" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-cyan-600">color</i>:{" "}
                  <span className="text-cyan-400">AnyColor</span> |{" "}
                  <span className="text-purple-500">undefined</span>,{" "}
                  <i className="text-cyan-600">isBackground</i>:{" "}
                  <span className="text-purple-500">boolean</span>):{" "}
                  <span className="text-orange-400">string</span>
                </div>
              ),
              snippet: `function getColorCode(color: AnyColor | undefined, isBackground: boolean): string`,
            },
          ]}
        />
        <h2 className="mt-8">Parameters</h2>
        <ul className="list-disc list-inside">
          <li>
            <code>color</code>: An{" "}
            <Link href="/docs/types/any-color">
              <code>AnyColor</code>
            </Link>{" "}
            value — one of:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                A named 4-bit string from the{" "}
                <Link href="/docs/types/any-color">
                  <code>Color</code>
                </Link>{" "}
                type (e.g. <code>&quot;red&quot;</code>,{" "}
                <code>&quot;cyan&quot;</code>). Produces codes in the 30–37 /
                40–47 range.
              </li>
              <li>
                An{" "}
                <Link href="/docs/types/eight-bit-color-value">
                  <code>EightBitColorValue</code>
                </Link>{" "}
                object created by{" "}
                <Link href="/docs/functions/eight-bit">
                  <code>eightBit(code)</code>
                </Link>
                . Produces <code>ESC[38;5;&lt;code&gt;m</code> /
                <code>ESC[48;5;&lt;code&gt;m</code>.
              </li>
              <li>
                An{" "}
                <Link href="/docs/types/rgb-color-value">
                  <code>RGBColorValue</code>
                </Link>{" "}
                object created by{" "}
                <Link href="/docs/functions/rgb">
                  <code>rgb(r, g, b)</code>
                </Link>{" "}
                or{" "}
                <Link href="/docs/functions/hex">
                  <code>hex(str)</code>
                </Link>
                . Produces <code>ESC[38;2;r;g;bm</code> /
                <code>ESC[48;2;r;g;bm</code>.
              </li>
            </ul>
            Returns an empty string when <code>undefined</code>.
          </li>
          <li>
            <code>isBackground</code>: When <code>true</code>, returns the
            background variant of the code; when <code>false</code>, returns the
            foreground variant.
          </li>
        </ul>
        <h2 className="mt-8">Return Value</h2>
        <p>A raw ANSI escape string, for example:</p>
        <ul className="list-disc list-inside">
          <li>
            Named foreground: <code>&quot;\x1b[32m&quot;</code> (green)
          </li>
          <li>
            Named background: <code>&quot;\x1b[42m&quot;</code> (green bg)
          </li>
          <li>
            8-bit foreground: <code>&quot;\x1b[38;5;208m&quot;</code> (orange)
          </li>
          <li>
            RGB foreground: <code>&quot;\x1b[38;2;255;136;0m&quot;</code>
          </li>
        </ul>
        <p className="mt-2">Returns an empty string for undefined input.</p>
        <h2 className="mt-8">Usage</h2>
        <Code
          codesnippets={[
            {
              title: "Named (4-bit) Color",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">getColorCode</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">fg</i> ={" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-orange-400">&quot;green&quot;</i>,{" "}
                  <i className="text-purple-500">false</i>);{" "}
                  <span className="text-zinc-500">{'// "\\x1b[32m"'}</span>
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">bg</i> ={" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-orange-400">&quot;black&quot;</i>,{" "}
                  <i className="text-purple-500">true</i>);{" "}
                  <span className="text-zinc-500">{'// "\\x1b[40m"'}</span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">fg</i> +{" "}
                  <i className="text-blue-400">bg</i> +{" "}
                  <i className="text-orange-400">&quot;Styled text&quot;</i> +{" "}
                  <i className="text-blue-400">cls</i>);
                </div>
              ),
              snippet: `import { getColorCode, cls } from "ts-better-console";

const fg = getColorCode("green", false);  // "\x1b[32m"
const bg = getColorCode("black", true);   // "\x1b[40m"
console.log(fg + bg + "Styled text" + cls);`,
            },
            {
              title: "8-bit (256-color) Code",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">getColorCode</i>,{" "}
                  <i className="text-blue-400">eightBit</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">orange</i> ={" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-yellow-400">eightBit</i>(
                  <i className="text-orange-400">208</i>),{" "}
                  <i className="text-purple-500">false</i>);{" "}
                  <span className="text-zinc-500">
                    {'// "\\x1b[38;5;208m"'}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">orange</i> +{" "}
                  <i className="text-orange-400">&quot;Orange text&quot;</i> +{" "}
                  <i className="text-blue-400">cls</i>);
                </div>
              ),
              snippet: `import { getColorCode, eightBit, cls } from "ts-better-console";

const orange = getColorCode(eightBit(208), false); // "\x1b[38;5;208m"
console.log(orange + "Orange text" + cls);`,
            },
            {
              title: "24-bit RGB Color",
              code: (
                <div>
                  <i className="text-purple-400">import</i> {"{"}{" "}
                  <i className="text-blue-400">getColorCode</i>,{" "}
                  <i className="text-blue-400">rgb</i>,{" "}
                  <i className="text-blue-400">cls</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">
                    &quot;ts-better-console&quot;
                  </i>
                  ;
                  <br />
                  <br />
                  <i className="text-purple-400">const</i>{" "}
                  <i className="text-blue-400">coral</i> ={" "}
                  <i className="text-yellow-400">getColorCode</i>(
                  <i className="text-yellow-400">rgb</i>(
                  <i className="text-orange-400">255, 127, 80</i>),{" "}
                  <i className="text-purple-500">false</i>);{" "}
                  <span className="text-zinc-500">
                    {'// "\\x1b[38;2;255;127;80m"'}
                  </span>
                  <br />
                  <i className="text-emerald-400">console</i>.
                  <i className="text-yellow-400">log</i>(
                  <i className="text-blue-400">coral</i> +{" "}
                  <i className="text-orange-400">&quot;Coral text&quot;</i> +{" "}
                  <i className="text-blue-400">cls</i>);
                </div>
              ),
              snippet: `import { getColorCode, rgb, cls } from "ts-better-console";

const coral = getColorCode(rgb(255, 127, 80), false); // "\x1b[38;2;255;127;80m"
console.log(coral + "Coral text" + cls);`,
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Page;
