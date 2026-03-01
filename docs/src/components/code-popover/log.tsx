import * as Popover from "@radix-ui/react-popover";

function Log() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <LogInline />
      </Popover.Trigger>
      <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
        <div className="font-mono text-xs text-zinc-500">
          <LogFull />
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export function LogInline() {
  return (
    <span className="text-sm underline text-yellow-600 text-shadow-yellow-600/80 dark:text-yellow-200 dark:text-shadow-yellow-400/80 cursor-help hover:text-shadow-[0_3px_12px] apply-transition">
      log
    </span>
  );
}

export function LogType() {
  return (
    <span>
      <LogInline />
      (...<span className="text-cyan-600">args</span>: any[]):{" "}
      <span className="text-orange-400">string</span>
    </span>
  );
}

export function LogDescription() {
  return <span className="text-zinc-500 text-xs">// Basic logging method</span>;
}

export function LogFull() {
  return (
    <div className="flex flex-col gap-1">
      <LogType />
      <LogDescription />
    </div>
  );
}

export default Log;
