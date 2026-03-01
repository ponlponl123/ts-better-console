import * as Popover from "@radix-ui/react-popover";

function Link() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <LinkInline />
      </Popover.Trigger>
      <Popover.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
        <div className="font-mono text-xs text-zinc-500">
          <LinkFull />
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export function LinkInline() {
  return (
    <span className="text-sm underline text-yellow-600 text-shadow-yellow-600/80 dark:text-yellow-200 dark:text-shadow-yellow-400/80 cursor-help hover:text-shadow-[0_3px_12px] apply-transition">
      link
    </span>
  );
}

export function LinkType() {
  return (
    <span>
      <LinkInline />(<span className="text-cyan-600">text</span>:{" "}
      <span className="text-orange-400">string</span>,{" "}
      <span className="text-cyan-600">url</span>:{" "}
      <span className="text-orange-400">string</span>):{" "}
      <span className="text-orange-400">string</span>
    </span>
  );
}

export function LinkDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Formats the string as a clickable link in supported terminals. The
      first argument is the text to display, and the second argument is the URL
      to link to.
    </span>
  );
}

export function LinkFull() {
  return (
    <div className="flex flex-col gap-1">
      <LinkType />
      <LinkDescription />
    </div>
  );
}

export default Link;
