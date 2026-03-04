import {
  CursorClickIcon,
  ListBulletsIcon,
  LinkIcon,
  ArrowSquareOutIcon,
  KeyReturnIcon,
  HourglassMediumIcon,
  SpinnerIcon,
  CardsIcon,
  TableIcon,
  WarningDiamondIcon,
  ArticleIcon,
  ChatCenteredDotsIcon,
  TextIndentIcon,
  TerminalIcon,
} from "@phosphor-icons/react/dist/ssr";
import { SidebarLink } from ".";

export const component_links: SidebarLink[] = [
  {
    href: "/docs/components/button",
    title: "Button",
    icon: CursorClickIcon,
  },
  {
    href: "/docs/components/menu",
    title: "Menu",
    icon: ListBulletsIcon,
  },
  { href: "/docs/components/link", title: "Link", icon: LinkIcon },
  {
    href: "/docs/components/link-prompt",
    title: "Link Prompt",
    icon: ArrowSquareOutIcon,
    tag: "soon",
  },
  {
    href: "/docs/components/open-link",
    title: "Open Link",
    icon: ArrowSquareOutIcon,
    tag: "soon",
  },
  {
    href: "/docs/components/wait-for-key",
    title: "Wait for key",
    icon: KeyReturnIcon,
    tag: "soon",
  },
  {
    href: "/docs/components/progress",
    title: "Progress",
    icon: HourglassMediumIcon,
    tag: "updated",
  },
  {
    href: "/docs/components/spinner",
    title: "Spinner",
    icon: SpinnerIcon,
  },
  { href: "/docs/components/card", title: "Card", icon: CardsIcon },
  {
    href: "/docs/components/table",
    title: "Table",
    icon: TableIcon,
    tag: "soon",
  },
  {
    href: "/docs/components/alertbox",
    title: "Alertbox",
    icon: WarningDiamondIcon,
    tag: "soon",
  },
  {
    href: "/docs/components/modal",
    title: "Modal",
    icon: ArticleIcon,
    tag: "soon",
  },
  {
    href: "/docs/components/temporary-message",
    title: "TemporaryMessage",
    icon: ChatCenteredDotsIcon,
    tag: "soon",
  },
  {
    href: "/docs/components/input",
    title: "Input",
    icon: TerminalIcon,
  },
  {
    href: "/docs/components/textarea-input",
    title: "Textarea Input",
    icon: TextIndentIcon,
    tag: "soon",
  },
];
