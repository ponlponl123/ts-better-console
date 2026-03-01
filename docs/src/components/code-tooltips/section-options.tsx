import * as Tooltip from "@radix-ui/react-tooltip";
import StyleOptions from "./style-options";

function SectionOptions() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <SectionOptionsInline />
        </Tooltip.Trigger>
        <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
          <div className="font-mono text-xs text-zinc-500">
            <SectionOptionsFull />
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function SectionOptionsInline() {
  return (
    <span className="text-xs underline text-yellow-600 dark:text-yellow-200 cursor-help text-shadow-yellow-600/80 dark:text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
      SectionOptions
    </span>
  );
}

export function SectionOptionsType() {
  return (
    <span>
      <SectionOptionsInline />:{" {"}
      <br />
      &nbsp;&nbsp;<i className="text-cyan-600">content</i>?:{" "}
      <span className="text-orange-400">string</span>;
      <br />
      &nbsp;&nbsp;<i className="text-cyan-600">style</i>?: <StyleOptions />;
      <br />
      {"}"}
    </span>
  );
}

export function SectionOptionsDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Configuration options for customizing the appearance of the section.
    </span>
  );
}

export function SectionOptionsFull() {
  return (
    <div className="flex flex-col gap-1">
      <SectionOptionsType />
      <SectionOptionsDescription />
    </div>
  );
}

export default SectionOptions;
