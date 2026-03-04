"use client";
import React from "react";

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((c) => clamp(c, 0, 255).toString(16).padStart(2, "0"))
      .join("")
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace(/^#/, "");
  if (h.length === 3) {
    return [
      parseInt(h[0] + h[0], 16),
      parseInt(h[1] + h[1], 16),
      parseInt(h[2] + h[2], 16),
    ];
  }
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function contrastColor(r: number, g: number, b: number): string {
  return 0.299 * r + 0.587 * g + 0.114 * b > 128 ? "#000000" : "#ffffff";
}

export default function ColorPicker() {
  const [r, setR] = React.useState(59);
  const [g, setG] = React.useState(130);
  const [b, setB] = React.useState(246);
  const [hexInput, setHexInput] = React.useState(rgbToHex(59, 130, 246));

  const hex = rgbToHex(r, g, b);
  const [h, s, l] = rgbToHsl(r, g, b);
  const contrast = contrastColor(r, g, b);

  function updateFromHex(value: string) {
    const cleaned = value.replace(/^#/, "");
    setHexInput("#" + cleaned);
    if (/^[0-9a-fA-F]{6}$/.test(cleaned)) {
      const [nr, ng, nb] = hexToRgb(cleaned);
      setR(nr);
      setG(ng);
      setB(nb);
    } else if (/^[0-9a-fA-F]{3}$/.test(cleaned)) {
      const [nr, ng, nb] = hexToRgb(cleaned);
      setR(nr);
      setG(ng);
      setB(nb);
    }
  }

  function updateChannel(channel: "r" | "g" | "b", value: number) {
    const v = clamp(value, 0, 255);
    if (channel === "r") setR(v);
    if (channel === "g") setG(v);
    if (channel === "b") setB(v);
    if (channel === "r") setHexInput(rgbToHex(v, g, b));
    if (channel === "g") setHexInput(rgbToHex(r, v, b));
    if (channel === "b") setHexInput(rgbToHex(r, g, v));
  }

  const [copied, setCopied] = React.useState<string | null>(null);
  function copyText(text: string, label: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  return (
    <div className="my-6 border border-foreground/10 rounded-lg overflow-hidden">
      <div
        className="h-32 flex items-center justify-center transition-colors"
        style={{ backgroundColor: hex, color: contrast }}
      >
        <span className="font-mono text-lg font-bold">{hex.toUpperCase()}</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3">
          <label className="text-sm text-foreground/60 w-10 shrink-0">
            Hex
          </label>
          <input
            type="text"
            value={hexInput}
            onChange={(e) => updateFromHex(e.target.value)}
            className="flex-1 px-3 py-1.5 text-sm font-mono bg-foreground/5 border border-foreground/10 rounded-md focus:outline-none focus:border-blue-500"
            maxLength={7}
          />
        </div>
        {(
          [
            { label: "R", value: r, channel: "r" as const, color: "#ef4444" },
            { label: "G", value: g, channel: "g" as const, color: "#22c55e" },
            { label: "B", value: b, channel: "b" as const, color: "#3b82f6" },
          ] as const
        ).map(({ label, value, channel, color }) => (
          <div key={label} className="flex items-center gap-3">
            <label
              className="text-sm font-bold w-10 shrink-0"
              style={{ color }}
            >
              {label}
            </label>
            <input
              type="range"
              min={0}
              max={255}
              value={value}
              onChange={(e) => updateChannel(channel, Number(e.target.value))}
              className="flex-1 h-2 appearance-none rounded-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${channel === "r" ? `rgb(0,${g},${b})` : channel === "g" ? `rgb(${r},0,${b})` : `rgb(${r},${g},0)`}, ${channel === "r" ? `rgb(255,${g},${b})` : channel === "g" ? `rgb(${r},255,${b})` : `rgb(${r},${g},255)`})`,
              }}
            />
            <input
              type="number"
              min={0}
              max={255}
              value={value}
              onChange={(e) => updateChannel(channel, Number(e.target.value))}
              className="w-14 px-2 py-1 text-sm text-center font-mono bg-foreground/5 border border-foreground/10 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        ))}
        <div className="text-xs text-foreground/50 font-mono">
          hsl({h}, {s}%, {l}%)
        </div>
        <div className="space-y-2 pt-2 border-t border-foreground/10">
          <p className="text-sm text-foreground/60 font-medium">Usage</p>
          {[
            {
              label: "rgb",
              code: `s("text", { color: rgb(${r}, ${g}, ${b}) })`,
            },
            {
              label: "hex",
              code: `s("text", { color: hex("${hex}") })`,
            },
            {
              label: "bg",
              code: `s("text", { backgroundColor: rgb(${r}, ${g}, ${b}) })`,
            },
          ].map(({ label, code }) => (
            <div
              key={label}
              className="flex items-center justify-between gap-2 px-3 py-2 bg-foreground/5 rounded-md cursor-pointer hover:bg-foreground/10 transition-colors"
              onClick={() => copyText(code, label)}
            >
              <code className="text-xs font-mono text-foreground/80 overflow-x-auto">
                {code}
              </code>
              <span className="text-xs text-foreground/50 shrink-0">
                {copied === label ? "Copied!" : "Click to copy"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
