"use client";
import {
  GithubLogoIcon,
  HeartIcon,
  ListIcon,
  MagicWandIcon,
} from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

function ActiveLink({
  href,
  children,
  className,
  classNames,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  classNames?: {
    active?: string;
    inactive?: string;
  };
}) {
  const rawPathname = usePathname();
  const basePath = process.env.__NEXT_ROUTER_BASEPATH ?? "";
  const pathname = rawPathname.replace(new RegExp(`^${basePath}`), "") || "/";
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-medium",
        isActive
          ? classNames?.active ||
              "text-foreground/90 underline hover:text-foreground"
          : classNames?.inactive ||
              "text-foreground/60 hover:text-foreground/90",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="md:hidden h-20" />
      <header className="apply-transition w-full h-20 flex items-center justify-center border-b border-foreground/10 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm relative max-md:fixed top-0 z-50">
        <div className="w-full max-w-7xl px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-4">
              <MagicWandIcon
                weight="fill"
                size={36}
                className="p-2 bg-foreground text-background rounded-md"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-lg max-lg:text-base font-sans font-bold m-0 flex max-lg:flex-col max-lg:items-start items-center lg:gap-2">
                  TS Better Console
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 px-1 bg-zinc-200 dark:bg-zinc-700 rounded">
                    v{process.env.NEXT_PUBLIC_VERSION}
                  </span>
                </h1>
                <p className="text-xs font-mono text-gray-600 m-0 max-lg:hidden">
                  A better console logging library for TypeScript.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-6 max-md:hidden">
            <ActiveLink href="/install">Installation</ActiveLink>
            <ActiveLink href="/docs">Docs</ActiveLink>
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/ponlponl123/ts-better-console"
                target="_blank"
              >
                <button className="btn font-sans">
                  <GithubLogoIcon weight="fill" size={18} />
                  GitHub
                </button>
              </Link>
              <Link href="https://buymeacoffee.com/ponlponl123" target="_blank">
                <button className="btn font-sans">
                  <HeartIcon weight="fill" size={18} />
                  Support
                </button>
              </Link>
            </div>
          </div>
          <button
            className="btn font-sans md:hidden! p-3!"
            onClick={() => setNavOpen((open) => !open)}
          >
            <ListIcon weight="bold" size={18} />
          </button>
        </div>
      </header>
      <nav
        className={clsx(
          "apply-transition md:hidden! fixed top-20 left-0 w-full h-[calc(100vh-5rem)] backdrop-blur-sm z-40",
          navOpen ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col items-center h-max gap-2 py-6 px-4 bg-zinc-50/95 dark:bg-zinc-900/95 border-b border-foreground/10">
          <ActiveLink
            className="w-full btn justify-center p-5!"
            classNames={{
              active:
                "text-background! bg-foreground hover:bg-foreground/40! hover:text-foreground!",
            }}
            href="/install"
          >
            Installation
          </ActiveLink>
          <ActiveLink
            className="w-full btn justify-center p-5!"
            classNames={{
              active:
                "text-background! bg-foreground hover:bg-foreground/40! hover:text-foreground!",
            }}
            href="/docs"
          >
            Docs
          </ActiveLink>
          <div className="flex max-sm:flex-col w-full items-center gap-4 mt-4">
            <Link
              href="https://github.com/ponlponl123/ts-better-console"
              target="_blank"
              className="w-full min-w-0"
            >
              <button className="btn font-sans w-full items-center justify-center">
                <GithubLogoIcon weight="fill" size={18} />
                GitHub
              </button>
            </Link>
            <Link
              href="https://buymeacoffee.com/ponlponl123"
              target="_blank"
              className="w-full min-w-0"
            >
              <button className="btn font-sans w-full items-center justify-center">
                <HeartIcon weight="fill" size={18} />
                Support
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
