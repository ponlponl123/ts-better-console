import * as Tooltip from "@radix-ui/react-tooltip";

function StyleOptions() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <StyleOptionsInline />
        </Tooltip.Trigger>
        <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
          <div className="font-mono text-xs text-zinc-500">
            <StyleOptionsFull />
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function StyleOptionsInline() {
  return (
    <span className="text-xs underline text-yellow-600 text-shadow-yellow-600/80 dark:text-yellow-200 dark:text-shadow-yellow-400/80 cursor-help hover:text-shadow-[0_3px_12px] apply-transition">
      StyleOptions
    </span>
  );
}

export function StyleOptionsType() {
  return (
    <span>
      <StyleOptionsInline /> is an object type with optional properties:
      <ul className="list-disc list-inside">
        <li>
          <span className="text-cyan-600">color</span> (optional): A string
          representing the text color. It can be one of the following values:{" "}
          <span className="text-orange-400">"black"</span>,{" "}
          <span className="text-orange-400">"red"</span>,{" "}
          <span className="text-orange-400">"green"</span>,{" "}
          <span className="text-orange-400">"yellow"</span>,{" "}
          <span className="text-orange-400">"blue"</span>,{" "}
          <span className="text-orange-400">"magenta"</span>,{" "}
          <span className="text-orange-400">"cyan"</span>,{" "}
          <span className="text-orange-400">"white"</span>, or{" "}
          <span className="text-orange-400">"gray"</span>.
        </li>
        <li>
          <span className="text-cyan-600">backgroundColor</span> (optional): A
          string representing the background color. It can be the same values as
          the color property.
        </li>
        <li>
          <span className="text-cyan-600">styles</span> (optional): An array of
          strings representing additional styles. Each string can be one of the
          following values: <span className="text-orange-400">"bold"</span>,{" "}
          <span className="text-orange-400">"italic"</span>,{" "}
          <span className="text-orange-400">"underline"</span>, or{" "}
          <span className="text-orange-400">"strikethrough"</span>.
        </li>
        <li>
          <span className="text-cyan-600">endless</span> (optional): A boolean
          indicating whether the style should be endless (not reset after the
          string) or not. If set to true, the style will continue to apply to
          all subsequent logs until manually reset.
        </li>
      </ul>
    </span>
  );
}

export function StyleOptionsDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Configuration options for customizing text styling with ANSI escape
      codes.
    </span>
  );
}

export function StyleOptionsFull() {
  return (
    <div className="flex flex-col gap-1">
      <StyleOptionsType />
      <StyleOptionsDescription />
    </div>
  );
}

export default StyleOptions;
