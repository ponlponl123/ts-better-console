import { describe, it, expect, beforeEach, afterEach } from "bun:test";
import { prompt } from "./input";

type DataListener = (data: Buffer) => void;

describe("prompt()", () => {
  const stdin = process.stdin as any;
  const stdout = process.stdout as any;

  let originalStdinOn: any;
  let originalStdinRemoveListener: any;
  let originalStdinResume: any;
  let originalStdinPause: any;
  let originalStdinSetRawMode: any;
  let originalStdoutWrite: any;
  let originalIsTTY: boolean;

  let writes: string[];
  let dataListener: DataListener | null;
  let rawModeCalls: boolean[];

  const emitData = (value: string) => {
    if (!dataListener) throw new Error("No data listener registered");
    dataListener(Buffer.from(value));
  };

  beforeEach(() => {
    writes = [];
    dataListener = null;
    rawModeCalls = [];

    originalStdinOn = stdin.on;
    originalStdinRemoveListener = stdin.removeListener;
    originalStdinResume = stdin.resume;
    originalStdinPause = stdin.pause;
    originalStdinSetRawMode = stdin.setRawMode;
    originalStdoutWrite = stdout.write;
    originalIsTTY = stdin.isTTY;

    stdin.isTTY = true;
    stdin.on = (event: string, listener: DataListener) => {
      if (event === "data") dataListener = listener;
      return stdin;
    };
    stdin.removeListener = (event: string, listener: DataListener) => {
      if (event === "data" && dataListener === listener) {
        dataListener = null;
      }
      return stdin;
    };
    stdin.resume = () => stdin;
    stdin.pause = () => stdin;
    stdin.setRawMode = (enabled: boolean) => {
      rawModeCalls.push(enabled);
      return stdin;
    };

    stdout.write = (chunk: string | Uint8Array) => {
      writes.push(
        typeof chunk === "string" ? chunk : Buffer.from(chunk).toString(),
      );
      return true;
    };
  });

  afterEach(() => {
    stdin.on = originalStdinOn;
    stdin.removeListener = originalStdinRemoveListener;
    stdin.resume = originalStdinResume;
    stdin.pause = originalStdinPause;
    stdin.setRawMode = originalStdinSetRawMode;
    stdin.isTTY = originalIsTTY;
    stdout.write = originalStdoutWrite;
  });

  it("should echo typed characters in text mode and resolve value", async () => {
    const resultPromise = prompt("Name: ");

    emitData("a");
    emitData("b");
    emitData("\r");

    const result = await resultPromise;

    expect(result).toBe("ab");
    expect(writes.join("")).toBe("Name: ab\n");
    expect(rawModeCalls).toEqual([true, false]);
  });

  it("should not echo value when type is password", async () => {
    const resultPromise = prompt("Password: ", "password");

    emitData("s");
    emitData("e");
    emitData("c");
    emitData("r");
    emitData("e");
    emitData("t");
    emitData("\r");

    const result = await resultPromise;

    expect(result).toBe("secret");
    expect(writes.join("")).toBe("Password: \n");
    expect(rawModeCalls).toEqual([true, false]);
  });

  it("should support backspace and avoid backspace echo in password mode", async () => {
    const resultPromise = prompt("Password: ", "password");

    emitData("a");
    emitData("b");
    emitData("\x7f");
    emitData("c");
    emitData("\r");

    const result = await resultPromise;

    expect(result).toBe("ac");
    expect(writes.join("")).toBe("Password: \n");
  });
});
