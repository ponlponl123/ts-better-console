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
      try {
        for (let i = 0; i <= progress.total; i++) {
          if (progress.getIsExited()) break;
          await new Promise((resolve) => setTimeout(resolve, 50));
          if (i === 70) {
            progress.error("Failed to download file due to network error.");
            break;
          }
          !progress.getIsExited() && progress.update(i);
        }
      } catch (err) {
        betterConsole.skip();
        betterConsole.log(
          tsflag(
            "error",
            true,
            s("An unexpected error occurred!", { color: "red" }),
          ),
        );
      }
    }),
    new Promise(async (resolve) => {
      try {
        for (let i = 0; i <= progress_withbuffer.total; i++) {
          if (progress_withbuffer.getIsExited()) break;
          await new Promise((resolve) => setTimeout(resolve, 30));
          if (i === 50) {
            progress_withbuffer.error(
              "Video processing failed due to an error.",
            );
            break;
          }
          !progress_withbuffer.getIsExited() &&
            progress_withbuffer.update(i, 5);
        }
      } catch (err) {
        betterConsole.skip();
        betterConsole.log(
          tsflag(
            "error",
            true,
            s("An unexpected error occurred!", { color: "red" }),
          ),
        );
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
