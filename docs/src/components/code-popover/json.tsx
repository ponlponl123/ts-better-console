import * as Popover from "@radix-ui/react-popover";
import CardOptions from "../code-tooltips/card-options";
import CardWidth from "../code-tooltips/card-width";

function Json() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <JsonInline />
      </Popover.Trigger>
      <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
        <div className="font-mono text-xs text-zinc-500">
          <JsonFull />
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export function JsonInline() {
  return (
    <span className="text-sm underline text-yellow-600 text-shadow-yellow-600/80 dark:text-yellow-200 dark:text-shadow-yellow-400/80 cursor-help hover:text-shadow-[0_3px_12px] apply-transition">
      json
    </span>
  );
}

export function JsonType() {
  return (
    <span>
      <JsonInline />(<span className="text-cyan-600">obj</span>: any,{" "}
      <span className="text-cyan-600">width</span>?: <CardWidth />,{" "}
      <span className="text-cyan-600">options</span>?: <CardOptions />
      ): void
    </span>
  );
}

export function JsonDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Creates a new progress bar instance.
    </span>
  );
}

export function JsonFull() {
  return (
    <div className="flex flex-col gap-1">
      <JsonType />
      <JsonDescription />
    </div>
  );
}

export default Json;
