import * as Popover from "@radix-ui/react-popover";
import StyleOptions from "../code-tooltips/style-options";

function Style() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <StyleInline />
      </Popover.Trigger>
      <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
        <div className="font-mono text-xs text-zinc-500">
          <StyleFull />
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export function StyleInline() {
  return (
    <span className="text-sm underline text-yellow-600 text-shadow-yellow-600/80 dark:text-yellow-200 dark:text-shadow-yellow-400/80 cursor-help hover:text-shadow-[0_3px_12px] apply-transition">
      s
    </span>
  );
}

export function StyleType() {
  return (
    <span>
      <StyleInline />(<span className="text-cyan-600">str</span>:{" "}
      <span className="text-orange-400">string</span>,{" "}
      <span className="text-cyan-600">style</span>: <StyleOptions />
      ): <span className="text-orange-400">string</span>
    </span>
  );
}

export function StyleDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Styles the string with ANSI escape codes for terminal output.
    </span>
  );
}

export function StyleFull() {
  return (
    <div className="flex flex-col gap-1">
      <StyleType />
      <StyleDescription />
    </div>
  );
}

export default Style;
