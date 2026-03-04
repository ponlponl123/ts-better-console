import {
  EyesIcon,
  BracketsCurlyIcon,
  InfoIcon,
  WarningIcon,
  WarningDiamondIcon,
  WrenchIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SidebarLink } from ".";

export const logging_links: SidebarLink[] = [
  { href: "/docs/logging/log", title: "log", icon: EyesIcon },
  {
    href: "/docs/logging/json",
    title: "json",
    icon: BracketsCurlyIcon,
  },
  { href: "/docs/logging/info", title: "info", icon: InfoIcon },
  { href: "/docs/logging/warn", title: "warn", icon: WarningIcon },
  {
    href: "/docs/logging/error",
    title: "error",
    icon: WarningDiamondIcon,
  },
  { href: "/docs/logging/debug", title: "debug", icon: WrenchIcon },
  {
    href: "/docs/logging/code",
    title: "code",
    icon: BracketsCurlyIcon,
    tag: "soon",
  },
];
