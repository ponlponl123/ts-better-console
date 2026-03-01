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
        <h3 className="mt-8">What is ts-better-console?</h3>
        <p>
          <strong>ts-better-console</strong> is a{" "}
          <span className="text-blue-600 dark:text-blue-400">TypeScript</span>{" "}
          library that provides an enhanced console logging experience. It
          offers features such as styled logs, log levels, and more, making it
          easier to debug and visualize your logs in the console.
        </p>
        <h3 className="mt-8">Why use ts-better-console?</h3>
        <p>
          Traditional console logging can be limited and difficult to read,
          especially when dealing with complex data structures.{" "}
          <strong>ts-better-console</strong> addresses these issues by providing
          a more structured and visually appealing logging experience, allowing
          developers to quickly identify and understand their logs.
        </p>
        <h3 className="mt-8">Getting Started</h3>
        <p>
          To get started with <strong>ts-better-console</strong>, you can follow
          the installation instructions in the next section. Once installed, you
          can start using the enhanced logging features in your TypeScript
          projects.
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
