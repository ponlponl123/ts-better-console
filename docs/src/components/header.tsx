"use client";
import {
  GithubLogoIcon,
  HeartIcon,
  MagicWandIcon,
} from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

function ActiveLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-medium",
        isActive
          ? "text-foreground/90 underline hover:text-foreground"
          : "text-foreground/60 hover:text-foreground/90",
      )}
    >
      {children}
    </Link>
  );
}

function Header() {
  return (
    <header className="apply-transition w-full h-20 flex items-center justify-center border-b border-foreground/10 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm relative top-0 z-50">
      <div className="w-full max-w-6xl px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-4">
            <MagicWandIcon
              weight="fill"
              size={36}
              className="p-2 bg-foreground text-background rounded-md"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-lg font-sans font-bold m-0 flex items-center gap-2">
                TS Better Console
                <span className="text-xs text-zinc-500 dark:text-zinc-400 px-1 bg-zinc-200 dark:bg-zinc-700 rounded">
                  v{process.env.NEXT_PUBLIC_VERSION}
                </span>
              </h1>
              <p className="text-xs font-mono text-gray-600 m-0">
                A better console logging library for TypeScript.
              </p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-6">
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
      </div>
    </header>
  );
}

export default Header;
