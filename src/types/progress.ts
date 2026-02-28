interface ProgressLabelPair {
  while: string;
  past: string;
}

interface ProgressOptions {
  label?: ProgressLabelPair;
  callout?: string | false;
  barLength?: number;
}

interface ProgressEvents {
  update: [current: number, percentage: number];
  complete: [total: number];
  cancel: [];
  error: [...args: any[]];
}

type ProgressStatus = "active" | "completed" | "cancelled" | "errored";

export type {
  ProgressOptions,
  ProgressLabelPair,
  ProgressEvents,
  ProgressStatus,
};
