import { ButtonGroup } from "../dist";

const buttons = new ButtonGroup([
  { label: "OK", onClick: () => console.log("\nOK clicked!") },
  { label: "Cancel", onClick: () => console.log("\nCancelled!") },
  { label: "Click me!", onClick: () => console.log("\nClicked me!") },
]);

buttons.on("click", (label, index) => {
  console.log(`\nButton "${label}" (index ${index}) clicked`);
  buttons.destroy();
});

buttons.show();
