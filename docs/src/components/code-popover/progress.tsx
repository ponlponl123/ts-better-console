import * as Popover from "@radix-ui/react-popover";
import ProgressOptions from "../code-tooltips/progress-options";

function Progress() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ProgressInline />
      </Popover.Trigger>
      <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
        <div className="font-mono text-xs text-zinc-500">
          <ProgressFull />
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export function ProgressInline() {
  return (
    <span className="text-sm underline text-emerald-600 text-shadow-emerald-600/80 dark:text-emerald-400 dark:text-shadow-emerald-400/80 cursor-help hover:text-shadow-[0_3px_12px] apply-transition">
      Progress
    </span>
  );
}

export function ProgressType() {
  return (
    <span>
      <ProgressInline />(<span className="text-cyan-600">title</span>:{" "}
      <span className="text-orange-400">string</span>,{" "}
      <span className="text-cyan-600">total</span>?:{" "}
      <span className="text-cyan-600">number</span>,{" "}
      <span className="text-cyan-600">options</span>?: <ProgressOptions />
      ): <span className="text-emerald-600">Progress</span>
    </span>
  );
}

export function ProgressDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Creates a new progress bar instance.
    </span>
  );
}

export function ProgressFull() {
  return (
    <div className="flex flex-col gap-1">
      <ProgressType />
      <ProgressDescription />
    </div>
  );
}

export default Progress;
