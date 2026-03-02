"use client";
import Accordion from "./accordion";
import {
  AlarmIcon,
  BookOpenIcon,
  BracketsCurlyIcon,
  BroomIcon,
  CardsIcon,
  ClockIcon,
  ClockUserIcon,
  CodeSimpleIcon,
  CubeIcon,
  CursorClickIcon,
  EyesIcon,
  FlagIcon,
  HourglassMediumIcon,
  InfoIcon,
  LinkIcon,
  ListBulletsIcon,
  PaintBrushIcon,
  PaintRollerIcon,
  PaletteIcon,
  RocketLaunchIcon,
  SpinnerIcon,
  SprayBottleIcon,
  TableIcon,
  TerminalIcon,
  WarningDiamondIcon,
  WarningIcon,
  WrenchIcon,
} from "@phosphor-icons/react/dist/ssr";
import { ActiveLink } from "./header";
import { twMerge } from "tailwind-merge";

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
  const DocsActiveLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <ActiveLink
      href={href}
      className="text-sm text-foreground/70 hover:text-foreground flex items-center gap-2 p-2 rounded-md hover:bg-foreground/5"
      classNames={{
        active: twMerge(
          "text-foreground/90 bg-foreground/5 hover:text-foreground",
          classNames?.link?.active,
        ),
        inactive: classNames?.link?.inactive,
      }}
    >
      {children}
    </ActiveLink>
  );
  return (
    <div className={twMerge(" ", className || "")}>
      <Accordion title="Getting Started" classNames={accordionClassNames}>
        <ul className="flex flex-col gap-1">
          <li>
            <DocsActiveLink href="/docs">
              <BookOpenIcon weight="bold" size={16} /> Introduction
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/quick-start">
              <RocketLaunchIcon weight="bold" size={16} /> Quick Start
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/examples">
              <CubeIcon weight="bold" size={16} /> Examples
            </DocsActiveLink>
          </li>
        </ul>
      </Accordion>
      <Accordion title="Logging" classNames={accordionClassNames}>
        <ul className="flex flex-col gap-1">
          <li>
            <DocsActiveLink href="/docs/logging/log">
              <EyesIcon weight="bold" size={16} /> log
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/logging/json">
              <BracketsCurlyIcon weight="bold" size={16} /> json
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/logging/info">
              <InfoIcon weight="bold" size={16} /> info
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/logging/warn">
              <WarningIcon weight="bold" size={16} /> warn
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/logging/error">
              <WarningDiamondIcon weight="bold" size={16} /> error
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/logging/debug">
              <WrenchIcon weight="bold" size={16} /> debug
            </DocsActiveLink>
          </li>
        </ul>
      </Accordion>
      <Accordion title="Components" classNames={accordionClassNames}>
        <ul className="flex flex-col gap-1">
          <li>
            <DocsActiveLink href="/docs/components/button">
              <CursorClickIcon weight="bold" size={16} /> button
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/components/menu">
              <ListBulletsIcon weight="bold" size={16} /> menu
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/components/link">
              <LinkIcon weight="bold" size={16} /> link
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/components/progress">
              <HourglassMediumIcon weight="bold" size={16} /> Progress
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/components/spinner">
              <SpinnerIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1"> spinner</div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/components/card">
              <CardsIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                card
                <span className="text-xs text-amber-500/50 px-2 py-0.5 bg-amber-500/10 rounded-full">
                  beta
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/components/table">
              <TableIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                table{" "}
                <span className="text-xs text-foreground/50 px-2 py-0.5 bg-foreground/10 rounded-full">
                  soon
                </span>
              </div>
            </DocsActiveLink>
          </li>
        </ul>
      </Accordion>
      <Accordion title="Function" classNames={accordionClassNames}>
        <ul className="flex flex-col gap-1">
          <li>
            <DocsActiveLink href="/docs/functions/style">
              <PaletteIcon weight="bold" size={16} /> s
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/functions/combine-string">
              <TerminalIcon weight="bold" size={16} /> cs
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/functions/timestamp">
              <AlarmIcon weight="bold" size={16} /> ts
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/functions/flag">
              <FlagIcon weight="bold" size={16} /> flag
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/functions/tsflag">
              <ClockUserIcon weight="bold" size={16} /> tsflag
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/functions/clear-style">
              <PaintRollerIcon weight="bold" size={16} /> clearStyle
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/functions/clear-line">
              <BroomIcon weight="bold" size={16} /> clearLine
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/functions/clear">
              <SprayBottleIcon weight="bold" size={16} /> clear
            </DocsActiveLink>
          </li>
        </ul>
      </Accordion>
      <Accordion title="Utilities" classNames={accordionClassNames}>
        <ul className="flex flex-col gap-1">
          <li>
            <DocsActiveLink href="/docs/utilities/createCard">
              <CardsIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                createCard
                <span className="text-xs text-amber-500/50 px-2 py-0.5 bg-amber-500/10 rounded-full">
                  beta
                </span>
              </div>
            </DocsActiveLink>
          </li>
        </ul>
      </Accordion>
      <Accordion title="Enum & Constants" classNames={accordionClassNames}>
        <ul className="flex flex-col gap-1">
          <li>
            <DocsActiveLink href="/docs/enums/colors">
              <PaletteIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                Colors
                <span className="text-xs text-violet-500/50 px-2 py-0.5 bg-violet-500/10 rounded-full">
                  enum
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/enums/background-colors">
              <TerminalIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                BackgroundColors
                <span className="text-xs text-violet-500/50 px-2 py-0.5 bg-violet-500/10 rounded-full">
                  enum
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/enums/styles">
              <AlarmIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                Styles
                <span className="text-xs text-violet-500/50 px-2 py-0.5 bg-violet-500/10 rounded-full">
                  enum
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/constants/cls">
              <WrenchIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                cls
                <span className="text-xs text-blue-500/50 px-2 py-0.5 bg-blue-500/10 rounded-full">
                  const
                </span>
              </div>
            </DocsActiveLink>
          </li>
        </ul>
      </Accordion>
      <Accordion title="Types" classNames={accordionClassNames}>
        <ul className="flex flex-col gap-1">
          <li>
            <DocsActiveLink href="/docs/types/button-group-events">
              <CursorClickIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ButtonGroupEvents
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/button-group-options">
              <CursorClickIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ButtonGroupOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/button-options">
              <CursorClickIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ButtonOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/card-options">
              <CardsIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                CardOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/card-width">
              <CardsIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                CardWidth
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/debug-level">
              <FlagIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                DebugLevel
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/menu-events">
              <ListBulletsIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                MenuEvents
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/menu-item-options">
              <ListBulletsIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                MenuItemOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/menu-options">
              <ListBulletsIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                MenuOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/progress-events">
              <ClockUserIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ProgressEvents
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/progress-label-pair">
              <CardsIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ProgressLabelPair
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/progress-options">
              <HourglassMediumIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ProgressOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/progress-bar-options">
              <HourglassMediumIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ProgressBarOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/progress-bar-state-color">
              <PaletteIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ProgressBarStateColor
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/progress-status">
              <ClockIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                ProgressStatus
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/section-options">
              <PaintRollerIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                SectionOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/spinner-options">
              <SpinnerIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                SpinnerOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/spinner-style-options">
              <SpinnerIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                SpinnerStyleOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/style-options">
              <PaintBrushIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                StyleOptions
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
          <li>
            <DocsActiveLink href="/docs/types/unspecified-color">
              <PaletteIcon weight="bold" size={16} />
              <div className="flex flex-wrap items-center gap-1">
                {" "}
                UnSpecifiedColor
                <span className="text-xs text-cyan-500/50 px-2 py-0.5 bg-cyan-500/10 rounded-full">
                  types
                </span>
              </div>
            </DocsActiveLink>
          </li>
        </ul>
      </Accordion>
      <Accordion title="Changelog" classNames={accordionClassNames}>
        <ul className="flex flex-col gap-1">
          <li>
            <DocsActiveLink href="/docs/changelog">
              <CodeSimpleIcon weight="bold" size={16} /> Changelog
            </DocsActiveLink>
          </li>
        </ul>
      </Accordion>
    </div>
  );
}

export default Sidebar;
