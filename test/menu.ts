import { Menu } from "../src";

const menu = new Menu([
  { label: "item 1" },
  { label: "item 2" },
  { label: "item 3" },
  { label: "item 4" },
]);

menu.on("select", (label, index) => {
  console.log(`\nSelected "${label}" (index ${index})`);
  menu.destroy();
});

menu.show();
