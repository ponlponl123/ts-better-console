import { ButtonGroup } from "../dist";

(async () => {
  interface ButtonConfig {
    label: string;
    onClick: () => void;
  }

  interface ButtonGroupOptions {
    align?: "center" | "left" | "right";
  }

  const runButtonGroup = async (
    options?: ButtonGroupOptions,
  ): Promise<void> => {
    await new Promise((resolve) => {
      const buttons = new ButtonGroup(
        [
          { label: "OK", onClick: () => console.log("\nOK clicked!") },
          { label: "Cancel", onClick: () => console.log("\nCancelled!") },
          { label: "Click me!", onClick: () => console.log("\nClicked me!") },
        ] as ButtonConfig[],
        options,
      );

      buttons.on("click", (label: string, index: number) => {
        console.log(`\nButton "${label}" (index ${index}) clicked`);
        buttons.destroy();
      });

      buttons.once("exit", () => resolve(undefined));
      buttons.show();
    });
  };

  await runButtonGroup();
  await runButtonGroup({ align: "center" });
  await runButtonGroup({ align: "right" });
})();
