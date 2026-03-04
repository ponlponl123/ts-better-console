import { Progress } from "../../src";

const bar = new Progress("Downloading", 100);
bar.init();

let i = 0;
const timer = setInterval(() => {
  i += 10;
  bar.update(i);
  if (i >= 100) clearInterval(timer);
}, 200);
