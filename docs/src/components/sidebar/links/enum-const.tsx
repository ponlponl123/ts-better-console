import {
  PaletteIcon,
  TerminalIcon,
  AlarmIcon,
  WrenchIcon,
  CodeSimpleIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SidebarLink } from ".";

export const enum_constants_links: SidebarLink[] = [
  {
    href: "/docs/enums/colors",
    title: "Colors",
    icon: PaletteIcon,
    type: "enum",
  },
  {
    href: "/docs/enums/background-colors",
    title: "BackgroundColors",
    icon: TerminalIcon,
    type: "enum",
  },
  {
    href: "/docs/enums/styles",
    title: "Styles",
    icon: AlarmIcon,
    type: "enum",
  },
  {
    href: "/docs/enums/eight-bit-color",
    title: "EightBitColor",
    icon: PaletteIcon,
    type: "enum",
    tag: "new",
  },
  {
    href: "/docs/constants/cls",
    title: "cls",
    icon: WrenchIcon,
    tag: "deprecated",
  },
  {
    href: "/docs/constants/normal-intensity",
    title: "NORMAL_INTENSITY",
    icon: WrenchIcon,
    type: "constant",
  },
  {
    href: "/docs/constants/default-color",
    title: "DEFAULT_COLOR",
    icon: WrenchIcon,
    type: "constant",
  },
  {
    href: "/docs/constants/default-background",
    title: "DEFAULT_BACKGROUND",
    icon: WrenchIcon,
    type: "constant",
  },
  {
    href: "/docs/constants/rainbow-colors",
    title: "rainbowColors",
    icon: PaletteIcon,
    type: "constant",
    tag: "updated",
  },
  {
    href: "/docs/constants/ansi",
    title: "ANSI",
    icon: CodeSimpleIcon,
    type: "constant",
  },
];
