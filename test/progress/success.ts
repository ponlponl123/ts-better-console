import betterConsole, { Progress, s, tsflag } from "../../dist";

const progress = new Progress("Something awesome", 100);
const progress_withbuffer = new Progress("Awesome video", 100, {
  bar: {
    // length: "full-width",
    animation: "rainbow",
  },
});

(async () => {
  progress.init();
  progress_withbuffer.init();

  Promise.all([
    new Promise(async (resolve) => {
      for (let i = 0; i <= progress.total; i++) {
        if (progress.getIsExited()) break;
        await new Promise((resolve) => setTimeout(resolve, 50));
        !progress.getIsExited() && progress.update(i);
      }
    }),
    new Promise(async (resolve) => {
      for (let i = 0; i <= progress_withbuffer.total; i++) {
        if (progress_withbuffer.getIsExited()) break;
        await new Promise((resolve) => setTimeout(resolve, 30));
        !progress_withbuffer.getIsExited() && progress_withbuffer.update(i, 5);
      }
    }),
  ]);
})();

process.on("SIGINT", () => {
  progress.cancel();
  progress_withbuffer.cancel();
  betterConsole.skip();
  betterConsole.log(
    tsflag("info", true, s("Received SIGINT. Exiting...", { color: "yellow" })),
  );
  process.exit();
});
