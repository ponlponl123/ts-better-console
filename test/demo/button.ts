import { ButtonGroup } from "../../src";

const buttons = new ButtonGroup([
  {
    label: "Accept",
    onClick: () => console.log("Accepted!"),
    style: { color: "white", backgroundColor: "green" },
    hoverStyle: { color: "white", backgroundColor: "cyan", styles: ["bold"] },
  },
  {
    label: "Decline",
    onClick: () => console.log("Declined!"),
    style: { color: "white", backgroundColor: "red" },
  },
]);

// Listen for click events
buttons.on("click", (label, index) => {
  console.log(`Clicked: ${label} at index ${index}`);
});

// Show the buttons
buttons.show();
