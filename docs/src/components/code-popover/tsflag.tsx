import * as Popover from "@radix-ui/react-popover";
import DebugLevel from "../code-tooltips/debug-level";

function TsFlag() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <TsFlagInline />
      </Popover.Trigger>
      <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
        <div className="font-mono text-xs text-zinc-500">
          <TsFlagFull />
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export function TsFlagInline() {
  return (
    <span className="text-sm underline text-yellow-600 text-shadow-yellow-600/80 dark:text-yellow-200 dark:text-shadow-yellow-400/80 cursor-help hover:text-shadow-[0_3px_12px] apply-transition">
      tsflag
    </span>
  );
}

export function TsFlagType() {
  return (
    <span>
      <TsFlagInline />(<span className="text-cyan-600">level</span>:{" "}
      <DebugLevel />, <span className="text-cyan-600">date</span>?:{" "}
      <span className="text-purple-500">boolean</span>, ...
      <span className="text-cyan-600">args</span>: any[]):{" "}
      <span className="text-orange-400">string</span>
    </span>
  );
}

export function TsFlagDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Timestamped & Flagged logging method with different debug levels
    </span>
  );
}

export function TsFlagFull() {
  return (
    <div className="flex flex-col gap-1">
      <TsFlagType />
      <TsFlagDescription />
    </div>
  );
}

export default TsFlag;
