import { Progress } from "../dist";

const bar = new Progress("Files", 100, {
  label: {
    while: "Installing",
    past: "Installed",
  },
  bar: {
    length: 30,
    animation: {
      type: "rainbow",
      speed: 100,
    },
    color: { completed: "green" },
  },
});

bar.init();
