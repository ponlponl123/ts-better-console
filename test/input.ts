import { Input } from "../src";

(async () => {
  const input = new Input({
    label: " Fun fact ",
    type: "text",
    defaultValue: "",
    align: "center",
    width: "1/2",
    styles: {
      input: { color: "cyan" },
      label: { color: "magenta", styles: ["bold"] },
      border: { color: "yellow" },
    },
  });

  console.log("Enter some text (Press Enter to submit, Ctrl+C to cancel):\n");

  const value = await input.prompt();

  console.log(`\nYou entered: "${value}"`);
})();
