import * as Tooltip from "@radix-ui/react-tooltip";

function CardWidth() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <CardWidthInline />
        </Tooltip.Trigger>
        <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
          <div className="font-mono text-xs text-zinc-500">
            <CardWidthFull />
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function CardWidthInline() {
  return (
    <span className="text-xs underline text-yellow-600 dark:text-yellow-200 cursor-help text-shadow-yellow-600/80 dark:text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
      CardWidth
    </span>
  );
}

export function CardWidthType() {
  return (
    <span>
      <CardWidthInline />: <span className="text-cyan-600">number</span> |{" "}
      <span className="text-orange-400">"auto"</span>
    </span>
  );
}

export function CardWidthDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Width of the card in characters or "auto" for dynamic width based on
      content.
    </span>
  );
}

export function CardWidthFull() {
  return (
    <div className="flex flex-col gap-1">
      <CardWidthType />
      <CardWidthDescription />
    </div>
  );
}

export default CardWidth;
