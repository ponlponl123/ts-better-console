import {
  AlarmIcon,
  ClockUserIcon,
  FlagIcon,
  TerminalIcon,
  BroomIcon,
  SprayBottleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SidebarLink } from ".";

export const string_manager_links: SidebarLink[] = [
  {
    href: "/docs/functions/combine-string",
    title: "cs",
    icon: TerminalIcon,
    tag: null,
  },
  {
    href: "/docs/functions/timestamp",
    title: "ts",
    icon: AlarmIcon,
    tag: null,
  },
  { href: "/docs/functions/flag", title: "flag", icon: FlagIcon, tag: null },
  {
    href: "/docs/functions/tsflag",
    title: "tsflag",
    icon: ClockUserIcon,
    tag: null,
  },
  {
    href: "/docs/functions/clear-line",
    title: "clearLine",
    icon: BroomIcon,
    tag: null,
  },
  {
    href: "/docs/functions/clear",
    title: "clear",
    icon: SprayBottleIcon,
    tag: null,
  },
];
