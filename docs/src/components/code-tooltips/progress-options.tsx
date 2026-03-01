import * as Tooltip from "@radix-ui/react-tooltip";

function ProgressOptions() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <ProgressOptionsInline />
        </Tooltip.Trigger>
        <Tooltip.Content className="bg-white dark:bg-zinc-800 text-sm max-w-[98vw] text-zinc-700 dark:text-zinc-300 p-2 rounded shadow-lg flex flex-col gap-1 z-50">
          <div className="font-mono text-xs text-zinc-500">
            <ProgressOptionsFull />
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export function ProgressOptionsInline() {
  return (
    <span className="text-xs underline text-yellow-600 text-shadow-yellow-600/80 dark:text-yellow-200 dark:text-shadow-yellow-400/80 cursor-help hover:text-shadow-[0_3px_12px] apply-transition">
      ProgressOptions
    </span>
  );
}

export function ProgressOptionsType() {
  return (
    <span>
      <ProgressOptionsInline /> is an object type with optional properties:
      <ul className="list-disc list-inside">
        <li>
          <span className="text-cyan-600">label</span> (optional): An object
          with two string properties,{" "}
          <span className="text-cyan-600">while</span> and{" "}
          <span className="text-cyan-600">past</span>, representing the label to
          display while the progress is active and after it is completed,
          respectively.
        </li>
        <li>
          <span className="text-cyan-600">barLength</span> (optional): A number
          representing the length of the progress bar in characters. Default is
          40.
        </li>
        <li>
          <span className="text-cyan-600">callout</span> (optional): A boolean
          indicating whether to display a callout with the percentage. Default
          is false.
        </li>
      </ul>
    </span>
  );
}

export function ProgressOptionsDescription() {
  return (
    <span className="text-zinc-500 text-xs">
      // Configuration options for customizing the appearance of the progress
      bar.
    </span>
  );
}

export function ProgressOptionsFull() {
  return (
    <div className="flex flex-col gap-1">
      <ProgressOptionsType />
      <ProgressOptionsDescription />
    </div>
  );
}

export default ProgressOptions;
