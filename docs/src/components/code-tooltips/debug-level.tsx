import * as Tooltip from "@radix-ui/react-tooltip";

function DebugLevel() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <DebugLevelInline />
        </Tooltip.Trigger>
        <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
          <div className="font-mono text-xs text-zinc-500">
            <DebugLevelFull />
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function DebugLevelInline() {
  return (
    <span className="text-xs underline text-yellow-600 dark:text-yellow-200 cursor-help text-shadow-yellow-600/80 dark:text-shadow-yellow-400/80 hover:text-shadow-[0_3px_12px] apply-transition">
      DebugLevel
    </span>
  );
}

export function DebugLevelType() {
  return (
    <span>
      <DebugLevelInline /> is a union type of:
      <ul className="list-disc list-inside">
        <li>
          <span className="text-orange-400">"DEBUG"</span> - Detailed
          information for debugging purposes.
        </li>
        <li>
          <span className="text-orange-400">"INFO"</span> - General
          informational messages.
        </li>
        <li>
          <span className="text-orange-400">"WARN"</span> - Potentially harmful
          situations.
        </li>
        <li>
          <span className="text-orange-400">"ERROR"</span> - Error events that
          might still allow the application to continue running.
        </li>
      </ul>
    </span>
  );
}

export function DebugLevelDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // A union type representing the severity level for debug logging.
    </span>
  );
}

export function DebugLevelFull() {
  return (
    <div className="flex flex-col gap-1">
      <DebugLevelType />
      <DebugLevelDescription />
    </div>
  );
}

export default DebugLevel;
