import {
  MagicWandIcon,
  PaintBrushIcon,
  PaletteIcon,
  PaintRollerIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SidebarLink } from ".";

export const style_links: SidebarLink[] = [
  {
    href: "/docs/functions/style",
    title: "s",
    icon: PaletteIcon,
    tag: "updated",
  },
  {
    href: "/docs/functions/us",
    title: "us",
    icon: PaintBrushIcon,
  },
  {
    href: "/docs/functions/rainbow",
    title: "rainbow",
    icon: PaletteIcon,
    tag: "updated",
  },
  {
    href: "/docs/functions/gradient",
    title: "gradient",
    icon: MagicWandIcon,
    tag: "new",
  },
  {
    href: "/docs/functions/clear-style",
    title: "clearStyle",
    icon: PaintRollerIcon,
    tag: "updated",
  },
];
