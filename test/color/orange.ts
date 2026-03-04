import { s, eightBit, rgb, hex, EightBitColor } from "../../src";

// 8-bit color (256 palette) — using the enum
console.log(
  s("Orange via EightBitColor enum", { color: eightBit(EightBitColor.Orange) }),
);

// 8-bit color — using a raw code
console.log(s("Orange via eightBit(216)", { color: eightBit(216) }));

// 24-bit color — using rgb()
console.log(s("Orange via rgb(255, 136, 0)", { color: rgb(255, 136, 0) }));

// 24-bit color — using hex()
console.log(s("Orange via hex('#ff8800')", { color: hex("#ff8800") }));

// Background color example
console.log(
  s(" Orange background ", {
    backgroundColor: rgb(255, 136, 0),
    color: rgb(0, 0, 0),
  }),
);
