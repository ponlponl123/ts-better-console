import {
  HashIcon,
  PaletteIcon,
  BinaryIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SidebarLink } from ".";

export const converter_links: SidebarLink[] = [
  { href: "/docs/functions/rgb", title: "rgb", icon: PaletteIcon, tag: "new" },
  { href: "/docs/functions/hex", title: "hex", icon: HashIcon, tag: "new" },
  {
    href: "/docs/functions/eight-bit",
    title: "eightBit",
    icon: BinaryIcon,
    tag: "new",
  },
  {
    href: "/docs/functions/get-color-code",
    title: "getColorCode",
    icon: PaletteIcon,
    tag: "updated",
  },
];
