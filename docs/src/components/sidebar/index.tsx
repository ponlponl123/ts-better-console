"use client";
import Accordion from "../accordion";
import { ActiveLink } from "../header";
import { twMerge } from "tailwind-merge";
import { sidebar_links, SidebarLink } from "./links";

function Sidebar({
  className,
  classNames,
}: {
  className?: string;
  classNames?: {
    accordion?: {
      button?: { active?: string; inactive?: string };
      content?: { active?: string; inactive?: string };
    };
    link?: { active?: string; inactive?: string };
  };
}) {
  const accordionClassNames = classNames?.accordion || {
    button: {
      active: twMerge(
        "bg-foreground/5!",
        classNames?.accordion?.button?.active,
      ),
      inactive: classNames?.accordion?.button?.inactive,
    },
    content: {
      active: twMerge(
        "border border-foreground/10 rounded-lg p-1",
        classNames?.accordion?.content?.active,
      ),
      inactive: classNames?.accordion?.content?.inactive,
    },
  };
  const DocsActiveLink = (props: SidebarLink) => (
    <ActiveLink
      href={props.href}
      className="text-sm text-foreground/70 hover:text-foreground flex items-center gap-2 p-2 rounded-md hover:bg-foreground/5"
      classNames={{
        active: twMerge(
          "text-foreground/90 bg-foreground/5 hover:text-foreground",
          classNames?.link?.active,
        ),
        inactive: classNames?.link?.inactive,
      }}
    >
      <props.icon weight="bold" size={16} />
      <div className="flex flex-wrap items-center gap-1">
        {" "}
        {props.title}{" "}
        <div className="flex items-center">
          {props.tag && (
            <span
              className={twMerge(
                "text-xs text-foreground/50 bg-foreground/10 first:pl-2 last:pr-2 px-1 py-0.5 first:rounded-l-full last:rounded-r-full",
                props.tag === "soon" && "text-foreground/50 bg-foreground/10",
                props.tag === "new" && "text-green-500/50 bg-green-500/10",
                props.tag === "updated" && "text-blue-500/50 bg-blue-500/10",
                props.tag === "changed" &&
                  "text-yellow-500/50 bg-yellow-500/10",
                props.tag === "deprecated" && "text-red-500/50 bg-red-500/10",
              )}
            >
              {props.tag}
            </span>
          )}
          {props.type && (
            <span
              className={twMerge(
                "text-xs text-foreground/50 bg-foreground/10 first:pl-2 last:pr-2 px-1 py-0.5 first:rounded-l-full last:rounded-r-full",
                props.type === "function" &&
                  "text-green-500/50 bg-green-500/10",
                props.type === "component" && "text-blue-500/50 bg-blue-500/10",
                props.type === "utility" &&
                  "text-yellow-500/50 bg-yellow-500/10",
                props.type === "enum" && "text-violet-500/50 bg-violet-500/10",
                props.type === "constant" && "text-blue-500/50 bg-blue-500/10",
                props.type === "types" && "text-cyan-500/50 bg-cyan-500/10",
              )}
            >
              {props.type}
            </span>
          )}
        </div>
      </div>
    </ActiveLink>
  );
  return (
    <div className={twMerge(" ", className || "")}>
      {sidebar_links.map(({ title, links }) => (
        <Accordion key={title} title={title} classNames={accordionClassNames}>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <DocsActiveLink {...link} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </div>
  );
}

export default Sidebar;
