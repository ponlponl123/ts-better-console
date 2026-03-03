import { Progress } from "../../src";

const bar = new Progress("Files", 100, {
  label: {
    while: "Installing",
    past: "Installed",
  },
  bar: {
    length: 30,
    animation: "rainbow",
    position: "bottom",
    color: { completed: "green" },
  },
});

bar.init();
