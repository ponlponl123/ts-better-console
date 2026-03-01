import * as Tooltip from "@radix-ui/react-tooltip";
import StyleOptions from "./style-options";
import SectionOptions from "./section-options";

function CardOptions() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <CardOptionsInline />
        </Tooltip.Trigger>
        <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
          <div className="font-mono text-xs text-zinc-500">
            <CardOptionsFull />
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function CardOptionsInline() {
  return (
    <span className="text-xs underline text-yellow-600 dark:text-yellow-200 cursor-help text-shadow-yellow-600/80 dark:text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
      CardOptions
    </span>
  );
}

export function CardOptionsType() {
  return (
    <span>
      <CardOptionsInline />:{" {"}
      <br />
      &nbsp;&nbsp;<i className="text-cyan-600">title</i>?: <SectionOptions />;
      <br />
      &nbsp;&nbsp;<i className="text-cyan-600">body</i>?: <StyleOptions />
      ;
      <br />
      &nbsp;&nbsp;<i className="text-cyan-600">footer</i>?:
      <SectionOptions />;
      <br />
      &nbsp;&nbsp;<i className="text-cyan-600">borderStyle</i>?:{" "}
      <StyleOptions />;
      <br />
      {"}"}
    </span>
  );
}

export function CardOptionsDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Configuration options for customizing the appearance of the card.
    </span>
  );
}

export function CardOptionsFull() {
  return (
    <div className="flex flex-col gap-1">
      <CardOptionsType />
      <CardOptionsDescription />
    </div>
  );
}

export default CardOptions;
