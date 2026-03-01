"use client";
import React from "react";
import Sidebar from "@/src/components/sidebar";
import { StarIcon } from "@phosphor-icons/react/dist/icons/Star";
import Link from "next/link";
import { CoffeeIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100dvh-5rem)] max-w-7xl mx-auto gap-8 border-b border-foreground/10">
      <div
        className="hidden md:flex flex-col w-64 h-screen overflow-y-auto shrink-0 sticky top-0 border-x border-foreground/10"
        style={{
          scrollbarWidth: "thin",
        }}
      >
        <div className="hidden md:block w-full flex-1 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm p-4">
          <Sidebar />
        </div>
        <div className="h-20 w-full flex flex-col items-start gap-3 p-3">
          <Link
            href="https://github.com/ponlponl123/ts-better-console"
            target="_blank"
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
          >
            <span className="text-sm text-foreground/70 flex items-center gap-1 hover:text-foreground apply-transition active:scale-[0.98]">
              <StarIcon size={16} weight="fill" /> Star on GitHub
            </span>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <Link
              href="https://buymeacoffee.com/ponlponl123"
              target="_blank"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
            >
              <CoffeeIcon size={16} weight="fill" />
            </Link>
            <Link
              href="https://github.com/ponlponl123/ts-better-console"
              target="_blank"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
            >
              <GithubLogoIcon size={16} weight="fill" />
            </Link>
            <Link
              href="https://www.npmjs.com/package/ts-better-console"
              target="_blank"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
            >
              <svg
                fill="currentColor"
                width="15px"
                height="15px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>npm</title>
                <path d="M7.415 7.656l17.291 0.024-0.011 17.29h-4.329l0.012-12.974h-4.319l-0.010 12.964h-8.656zM3.207 1.004c-0.002 0-0.003 0-0.005 0-1.214 0-2.198 0.984-2.198 2.198 0 0.002 0 0.004 0 0.006v-0 25.585c0 0.002 0 0.003 0 0.005 0 1.214 0.984 2.198 2.198 2.198 0.002 0 0.004 0 0.006 0h25.585c0.002 0 0.003 0 0.005 0 1.214 0 2.198-0.984 2.198-2.198 0-0.002 0-0.004 0-0.006v0-25.585c0-0.002 0-0.003 0-0.005 0-1.214-0.984-2.198-2.198-2.198-0.002 0-0.004 0-0.006 0h0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <main className="flex-1 w-full min-w-0 p-4">{children}</main>
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/2 right-1/4 -translate-x-1/2 w-[1000px] h-[1000px] opacity-40 bg-[radial-gradient(circle,_rgb(59,130,246,0.4)_0%,_rgb(168,85,247,0.2)_50%,_transparent_100%)] rounded-full blur-3xl pointer-events-none"></div>
        <div className="fixed top-1/2 left-1/4 translate-y-1/3 translate-x-1/2 w-[1000px] h-[1000px] opacity-30 bg-[radial-gradient(circle,_rgb(59,130,246,0.4)_0%,_rgb(168,85,247,0.2)_50%,_transparent_100%)] rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
}

export default Layout;
