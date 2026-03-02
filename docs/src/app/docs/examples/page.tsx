import Code from "@/src/components/code";
import Log from "@/src/components/code-popover/log";
import Style from "@/src/components/code-popover/s";
import {
  BreadIcon,
  CaretRightIcon,
  MagicWandIcon,
  YarnIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Examples</h1>
        <p>
          Here are some examples of how to use{" "}
          <strong>ts-better-console</strong>
          in your TypeScript projects. These examples demonstrate various
          features and use cases of the library to help you get the most out of
          it.
        </p>
        <h2 className="mt-8">Styled Logs</h2>
        <p>
          You can create styled logs using the <code>s</code> function. This
          allows you to customize the appearance of your logs with different
          colors, backgrounds, and styles.
        </p>
        <Code
          codesnippets={[
            {
              title: "Styled Log Example",
              code: (
                <div>
                  <i className="text-purple-400">import</i>{" "}
                  <i className="text-blue-400">betterConsole</i>, {"{"}{" "}
                  <i className="text-blue-400">s</i> {"}"}{" "}
                  <i className="text-purple-400">from</i>{" "}
                  <i className="text-orange-400">"ts-better-console"</i>;
                  <br />
                  <br />
                  <i className="text-emerald-400">betterConsole</i>.
                  <i className="text-yellow-400">
                    <Log />
                  </i>
                  (
                  <i className="text-yellow-400">
                    <Style />
                  </i>
                  (<i className="text-orange-400">"This is a styled log"</i>,{" "}
                  {"{"}
                  <br />
                  <div className="ml-4">
                    <i className="text-blue-400">color</i>:{" "}
                    <i className="text-orange-400">"white"</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">backgroundColor</i>:{" "}
                    <i className="text-orange-400">"blue"</i>,
                  </div>
                  <div className="ml-4">
                    <i className="text-blue-400">styles</i>: [
                    <i className="text-orange-400">"bold"</i>,{" "}
                    <i className="text-orange-400">"italic"</i>],
                  </div>
                  {"}"}
                  ));
                </div>
              ),
              icon: <></>,
              snippet: `import betterConsole, { s } from "ts-better-console";

betterConsole.log(
  s("This is a styled log", {
    color: "white",
    backgroundColor: "blue",
    styles: ["bold", "italic"],
  })
);`,
            },
          ]}
        />
        <h3>Output</h3>
        <pre className="pre mt-3!">
          <span className="bg-blue-700 text-white font-bold italic">
            This is a styled log
          </span>
        </pre>
        <p>
          In this example, we create a styled log with white text on a blue
          background, and apply bold and italic styles to it.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/docs/quick-start" className="no-underline!">
            <button className="btn">
              Get Started <CaretRightIcon size={14} weight="bold" />
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h2>Explore More!</h2>
        <p>
          This is just a quick overview of some of the features of{" "}
          <strong>ts-better-console</strong>. The library offers many more
          capabilities and customization options to enhance your logging
          experience. Be sure to check out the full documentation for more
          details and examples on how to make the most of{" "}
          <strong>ts-better-console</strong> in your projects.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/docs" className="no-underline!">
            <button className="btn">
              View Documentation <CaretRightIcon size={14} weight="bold" />
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h2>Community Examples</h2>
        <p>
          We also encourage you to explore examples and use cases shared by the
          community. You can find these in our{" "}
          <Link
            href={"https://ponl.link/disgd"}
            target="_blank"
            className="text-blue-600 dark:text-blue-400"
          >
            Discord server
          </Link>
          , where developers share their experiences and creative uses of{" "}
          <strong>ts-better-console</strong>.
        </p>
      </section>
    </div>
  );
}

export default Page;
