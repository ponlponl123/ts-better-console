import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>cls (deprecated)</h1>
        <p>
          The <code>cls</code> constant (<code>\x1b[0m</code>) has been replaced
          by three targeted reset constants. Each one resets only the attribute
          you actually set, preventing accidental side effects:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <Link
              href="/docs/constants/normal-intensity"
              className="text-blue-400 underline"
            >
              NORMAL_INTENSITY
            </Link>{" "}
            — <code>\x1b[22m</code>: resets bold/dim only.
          </li>
          <li>
            <Link
              href="/docs/constants/default-color"
              className="text-blue-400 underline"
            >
              DEFAULT_COLOR
            </Link>{" "}
            — <code>\x1b[39m</code>: resets foreground color only.
          </li>
          <li>
            <Link
              href="/docs/constants/default-background"
              className="text-blue-400 underline"
            >
              DEFAULT_BACKGROUND
            </Link>{" "}
            — <code>\x1b[49m</code>: resets background color only.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Page;
