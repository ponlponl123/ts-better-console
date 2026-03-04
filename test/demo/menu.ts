import { Menu } from "../../src";
const menu = new Menu([
  { label: "Option 1" },
  { label: "Option 2" },
  { label: "Option 3" },
]);

menu.on("select", (label, index) => {
  console.log(`Selected: ${label}`);
});

menu.show();
