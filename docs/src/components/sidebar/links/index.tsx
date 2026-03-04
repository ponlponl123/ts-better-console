import {
  BookOpenIcon,
  CodeSimpleIcon,
  RocketLaunchIcon,
  SwatchesIcon,
  TextAaIcon,
} from "@phosphor-icons/react/dist/ssr";
import { function_links } from "./functions";
import { component_links } from "./components";
import { enum_constants_links } from "./enum-const";
import { utilities_links } from "./utilities";
import { types_links } from "./types";
import { logging_links } from "./logging";
import { string_manager_links } from "./string-manager";
import { style_links } from "./style";
import { converter_links } from "./converter";

export type LibType =
  | "function"
  | "component"
  | "utility"
  | "enum"
  | "constant"
  | "types";
export type SidebarTag =
  | "soon"
  | "new"
  | "updated"
  | "changed"
  | "deprecated"
  | null;

export type SidebarLink = {
  href: string;
  title: string;
  icon: React.ElementType;
  tag?: SidebarTag;
  type?: LibType;
};

export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

const getting_started_links: SidebarLink[] = [
  {
    href: "/docs",
    title: "Introduction",
    icon: BookOpenIcon,
  },
  {
    href: "/docs/quick-start",
    title: "Quick Start",
    icon: RocketLaunchIcon,
  },
  {
    href: "/docs/examples",
    title: "Examples",
    icon: CodeSimpleIcon,
  },
];

const learning_links: SidebarLink[] = [
  {
    href: "/docs/learning/font-effects",
    title: "Font Effects",
    icon: TextAaIcon,
    tag: "new",
  },
  {
    href: "/docs/learning/colors",
    title: "Terminal Colors",
    icon: SwatchesIcon,
    tag: "new",
  },
];

const changelog_links: SidebarLink[] = [
  {
    href: "/docs/changelog",
    title: "Changelog",
    icon: CodeSimpleIcon,
    tag: null,
  },
];

export const sidebar_links: SidebarSection[] = [
  {
    title: "Getting Started",
    links: getting_started_links,
  },
  {
    title: "Learning",
    links: learning_links,
  },
  {
    title: "Converter",
    links: converter_links,
  },
  {
    title: "Logging",
    links: logging_links,
  },
  {
    title: "String Manager",
    links: string_manager_links,
  },
  {
    title: "Style",
    links: style_links,
  },
  {
    title: "Components",
    links: component_links.sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    title: "Functions",
    links: function_links,
  },
  {
    title: "Utilities",
    links: utilities_links,
  },
  {
    title: "Enums & Constants",
    links: enum_constants_links,
  },
  {
    title: "Types",
    links: types_links.sort((a, b) => a.title.localeCompare(b.title)),
  },
  {
    title: "Changelog",
    links: changelog_links.sort((a, b) => a.title.localeCompare(b.title)),
  },
];
