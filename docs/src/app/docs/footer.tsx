import {
  CoffeeIcon,
  GitForkIcon,
  GitPullRequestIcon,
  HeartIcon,
  StarIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-4 my-4 w-full max-w-4xl mx-auto px-4">
      <div className="w-full p-6 mx-auto border border-rose-500/20 bg-linear-to-tl from-rose-500/5 to-transparent flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <HeartIcon
            size={24}
            weight="fill"
            className="text-rose-500 inline-block"
          />
          <h1 className="text-lg font-semibold max-sm:text-base">
            Want to support this project?
          </h1>
        </div>
        <p className="text-foreground/70 text-sm max-sm:text-xs">
          If you find <code>ts-better-console</code> useful and want to support
          its development, consider starring the GitHub repository or buying me
          a coffee! Your support helps me dedicate more time to improving the
          library and adding new features.
        </p>
        <div className="flex items-center gap-2 mt-2 w-full max-[30rem]:flex-col">
          <Link
            href="https://buymeacoffee.com/ponlponl123"
            target="_blank"
            className="btn text-xs hover:bg-amber-900/10! active:bg-amber-900/20! hover:text-amber-900! apply-transition max-sm:w-full"
          >
            <CoffeeIcon size={16} weight="fill" />
            Buy me a coffee
          </Link>
          <Link
            href="https://github.com/ponlponl123/ts-better-console"
            target="_blank"
            className="btn text-xs hover:bg-yellow-500/10! active:bg-yellow-500/20! hover:text-yellow-500! apply-transition max-sm:w-full"
          >
            <StarIcon size={16} weight="fill" />
            Star on GitHub
          </Link>
        </div>
      </div>
      <div className="w-full p-6 mx-auto border border-violet-500/20 bg-linear-to-tl from-violet-500/5 to-transparent flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <GitPullRequestIcon
            size={24}
            weight="fill"
            className="text-violet-500 inline-block"
          />
          <h1 className="text-lg font-semibold max-sm:text-base">
            Want to contribute to this project?
          </h1>
        </div>
        <p className="text-foreground/70 text-sm max-sm:text-xs">
          Contributions are welcome! If you're interested in improving the
          library, fixing bugs, or adding new features, feel free to check out
          the GitHub repository and submit a pull request. Whether you're a
          seasoned developer or new to open source, your contributions can make
          a difference!
        </p>
        <div className="flex items-center gap-2 mt-2 w-full max-[30rem]:flex-col">
          <Link
            href="https://github.com/ponlponl123/ts-better-console/compare"
            target="_blank"
            className="btn text-xs hover:bg-violet-500/10! active:bg-violet-500/20! hover:text-violet-500! apply-transition max-sm:w-full"
          >
            <GitPullRequestIcon size={16} weight="fill" />
            Make a pull request
          </Link>
          <Link
            href="https://github.com/ponlponl123/ts-better-console/fork"
            target="_blank"
            className="btn text-xs hover:bg-emerald-500/10! active:bg-emerald-500/20! hover:text-emerald-500! apply-transition max-sm:w-full"
          >
            <GitForkIcon size={16} weight="fill" />
            Fork this repository
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
