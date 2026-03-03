import {
  CaretRightIcon,
  DiscordLogoIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>Introduction</h1>
        <span>
          Welcome to the documentation for <strong>ts-better-console</strong>
        </span>
        <h2 className="mt-8 border-none">What is ts-better-console?</h2>
        <p>
          <strong>ts-better-console</strong> is a{" "}
          <span className="text-blue-600 dark:text-blue-400">TypeScript</span>{" "}
          library for building rich terminal interfaces. Beyond styled logging,
          it ships with interactive components — buttons, menus, progress bars,
          spinners, cards, inputs — plus helpers for timestamps, debug flags,
          clickable links, and more.
        </p>
        <h3 className="mt-8">Why use ts-better-console?</h3>
        <p>
          Plain <code>console.log</code> works fine for quick debugging, but it
          falls flat when you need structured output, colored log levels, or
          anything interactive. <strong>ts-better-console</strong> gives you all
          of that without pulling in a dozen separate packages. Everything is
          typed, tree-shakable, and works with both Node and Bun.
        </p>
        <h3 className="mt-8">Highlights</h3>
        <ul className="list-disc list-inside">
          <li>
            Styled logging with <code>log</code>, <code>warn</code>,{" "}
            <code>error</code>, <code>info</code>, <code>debug</code>, and{" "}
            <code>json</code>
          </li>
          <li>
            Interactive components: <code>ButtonGroup</code>, <code>Menu</code>,{" "}
            <code>Progress</code>, <code>Spinner</code>, <code>Input</code>
          </li>
          <li>
            Visual components: <code>Card</code> with border styles,{" "}
            <code>link</code> for clickable URLs
          </li>
          <li>
            Utility functions: <code>s</code> for styling, <code>cs</code> for
            joining strings, <code>ts</code> / <code>flag</code> /{" "}
            <code>tsflag</code> for timestamps and log levels
          </li>
          <li>Works with Node.js and Bun out of the box</li>
        </ul>
        <h3 className="mt-8">Getting Started</h3>
        <p>
          Head over to the quick start guide to install the package and write
          your first styled log in under a minute.
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
        <h2>Community</h2>
        <p>
          We welcome contributions from the community! If you have any ideas,
          suggestions, or want to report a bug, please feel free to open an
          issue or submit a pull request on our{" "}
          <Link
            href={"https://ponl.link/disgd"}
            target="_blank"
            className="text-blue-600 dark:text-blue-400"
          >
            Discord server
          </Link>
          .
        </p>
        <div className="flex max-sm:flex-col items-center w-full gap-4">
          <Link
            href="https://ponl.link/disgd"
            className="no-underline! flex-1 min-w-0 w-full"
          >
            <button className="btn w-full p-6!">
              <DiscordLogoIcon size={20} weight="fill" />
              Join our Discord
            </button>
          </Link>
          <Link
            href="https://github.com/ponlponl123/ts-better-console"
            className="no-underline! flex-1 min-w-0 w-full"
          >
            <button className="btn w-full p-6!">
              <GithubLogoIcon size={20} weight="fill" />
              GitHub Repository
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h2>License</h2>
        <p>
          <strong>ts-better-console</strong> is licensed under the MIT License.
          See the{" "}
          <Link
            href="https://github.com/ponlponl123/ts-better-console/blob/main/LICENSE"
            target="_blank"
            className="text-blue-600 dark:text-blue-400"
          >
            MIT License
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

export default Page;
