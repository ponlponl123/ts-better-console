"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * Compute the approximate sRGB hex for a given 8‑bit color index.
 *
 *   0–7    standard colors
 *   8–15   high-intensity colors
 *   16–231 6×6×6 color cube
 *   232–255 grayscale ramp
 */
function eightBitToHex(code: number): string {
  // Standard 16 colors (approximate terminal defaults)
  const std16: string[] = [
    "#000000",
    "#aa0000",
    "#00aa00",
    "#aa5500",
    "#0000aa",
    "#aa00aa",
    "#00aaaa",
    "#aaaaaa",
    "#555555",
    "#ff5555",
    "#55ff55",
    "#ffff55",
    "#5555ff",
    "#ff55ff",
    "#55ffff",
    "#ffffff",
  ];
  if (code < 16) return std16[code];

  // 6×6×6 color cube (indices 16–231)
  if (code < 232) {
    const idx = code - 16;
    const b = idx % 6;
    const g = Math.floor(idx / 6) % 6;
    const r = Math.floor(idx / 36);
    const toHex = (v: number) =>
      (v === 0 ? 0 : 55 + v * 40).toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  // Grayscale ramp (indices 232–255)
  const gray = 8 + (code - 232) * 10;
  const h = gray.toString(16).padStart(2, "0");
  return `#${h}${h}${h}`;
}

function contrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 128 ? "#000000" : "#ffffff";
}

function ColorCell({
  code,
  selected,
  onClick,
}: {
  code: number;
  selected: boolean;
  onClick: () => void;
}) {
  const bg = eightBitToHex(code);
  const fg = contrastColor(bg);
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "relative aspect-square flex items-center justify-center cursor-pointer hover:scale-110 hover:z-10 border group apply-transition p-0.5 hover:p-1 group/container-hover:opacity-40",
        selected && "p-0",
      )}
      data-selected={selected}
      style={
        {
          "--fg": fg,
          "--bg": bg,
        } as React.CSSProperties
      }
      title={`Code ${code} — ${bg}`}
    >
      <div
        className={twMerge(
          "w-full h-full flex items-center justify-center text-[10px] font-mono apply-transition bg-(--bg) text-(--fg)",
          selected && "font-bold text-sm bg-(--bg)/20 text-(--bg)",
        )}
      >
        {code}
      </div>
    </button>
  );
}

export default function EightBitColorGrid() {
  const [selected, setSelected] = React.useState<number | null>(null);
  const selectedHex = selected !== null ? eightBitToHex(selected) : null;

  return (
    <div className="space-y-6 my-6">
      {selected !== null && (
        <div className="flex items-center gap-4 p-3 border border-foreground/10 bg-background/80 sticky top-4 z-10 backdrop-blur-xl backdrop-saturate-150 shadow-2xl shadow-background">
          <div
            className="w-12 h-12 border border-foreground/20"
            style={{ backgroundColor: selectedHex! }}
          />
          <div className="text-sm">
            <div>
              <span className="text-foreground/60">Code:</span>{" "}
              <code className="text-foreground">{selected}</code>
            </div>
            <div>
              <span className="text-foreground/60">Hex:</span>{" "}
              <code className="text-foreground">{selectedHex}</code>
            </div>
            <div>
              <span className="text-foreground/60">Usage:</span>{" "}
              <code className="text-foreground text-xs">
                s(&quot;text&quot;, {"{"} color: eightBit({selected}) {"}"})
              </code>
            </div>
          </div>
        </div>
      )}
      <div>
        <p className="text-sm text-foreground/60 mb-2 font-medium">
          Standard Colors (0–7)
        </p>
        <div className="grid grid-cols-8 gap-1 group/container">
          {Array.from({ length: 8 }, (_, i) => (
            <ColorCell
              key={i}
              code={i}
              selected={selected === i}
              onClick={() => setSelected(selected === i ? null : i)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-foreground/60 mb-2 font-medium">
          High-Intensity Colors (8–15)
        </p>
        <div className="grid grid-cols-8 gap-1 group/container">
          {Array.from({ length: 8 }, (_, i) => (
            <ColorCell
              key={i + 8}
              code={i + 8}
              selected={selected === i + 8}
              onClick={() => setSelected(selected === i + 8 ? null : i + 8)}
            />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-foreground/60 mb-2 font-medium">
          216 Color Cube (16–231)
        </p>
        <div className="grid grid-cols-18 gap-0.5 max-sm:grid-cols-12 group/container">
          {Array.from({ length: 216 }, (_, i) => {
            const code = i + 16;
            return (
              <ColorCell
                key={code}
                code={code}
                selected={selected === code}
                onClick={() => setSelected(selected === code ? null : code)}
              />
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-sm text-foreground/60 mb-2 font-medium">
          Grayscale Ramp (232–255)
        </p>
        <div className="grid grid-cols-12 gap-1 max-sm:grid-cols-8 group/container">
          {Array.from({ length: 24 }, (_, i) => {
            const code = i + 232;
            return (
              <ColorCell
                key={code}
                code={code}
                selected={selected === code}
                onClick={() => setSelected(selected === code ? null : code)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
