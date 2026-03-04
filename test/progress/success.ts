import betterConsole, { Progress, s, tsflag } from "../../src";

const progress = new Progress("Something awesome", 100);
const progress_withbuffer = new Progress("Awesome video", 100, {
  bar: {
    length: "full-width",
    animation: {
      type: "rainbow",
      speed: 100,
    },
  },
});
const progress_withbuffer_smoothrb = new Progress("Something else", 100, {
  bar: {
    length: "full-width",
    animation: {
      type: "rainbow-smooth",
      speed: 100,
      size: 3,
    },
  },
});

(async () => {
  progress.init();
  progress_withbuffer.init();
  progress_withbuffer_smoothrb.init();
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
    new Promise(async (resolve) => {
      for (let i = 0; i <= progress_withbuffer_smoothrb.total; i++) {
        if (progress_withbuffer_smoothrb.getIsExited()) break;
        await new Promise((resolve) => setTimeout(resolve, 30));
        !progress_withbuffer_smoothrb.getIsExited() &&
          progress_withbuffer_smoothrb.update(i, 5);
      }
    }),
  ]);
})();

process.on("SIGINT", () => {
  progress.cancel();
  progress_withbuffer.cancel();
  progress_withbuffer_smoothrb.cancel();
  betterConsole.skip();
  betterConsole.log(
    tsflag("info", true, s("Received SIGINT. Exiting...", { color: "yellow" })),
  );
  process.exit();
});
