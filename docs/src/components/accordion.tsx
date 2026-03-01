"use client";
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";
import { twMerge } from "tailwind-merge";
import React from "react";

function Accordion({
  children,
  className,
  title,
  classNames,
  state,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
  classNames?: {
    button?: { active?: string; inactive?: string };
    content?: { active?: string; inactive?: string };
  };
  state?: boolean;
}) {
  const [open, setOpen] = React.useState(state ?? true);

  return (
    <div className="space-y-4 mb-6 last:mb-0">
      <button
        className={twMerge(
          "flex items-center gap-2 mb-2 apply-transition text-left text-foreground/90 hover:text-foreground bg-transparent border-none cursor-pointer w-full hover:bg-foreground/5 rounded-md p-2",
          open && "bg-foreground/5!",
          className,
          open ? classNames?.button?.active : classNames?.button?.inactive,
        )}
        onClick={() => setOpen(!open)}
      >
        <CaretDownIcon
          size={16}
          weight="bold"
          className={twMerge("apply-transition", open && "rotate-180")}
        />
        <h2 className="text-sm font-semibold">{title}</h2>
      </button>
      {open && (
        <div
          className={twMerge(
            "border border-foreground/10 rounded-lg p-1",
            open ? classNames?.content?.active : classNames?.content?.inactive,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;
