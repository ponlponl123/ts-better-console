import { Input } from "../../src";

(async () => {
  console.log("=== Input Component Feature Demo ===\n");

  // 1. Basic text input
  console.log("1. Basic text input:");
  const input1 = new Input({ label: "Enter your name" });
  const name = await input1.prompt();
  console.log(`   Result: "${name}"\n`);

  // 2. Password input (masked)
  console.log("2. Password input (masked):");
  const input2 = new Input({
    label: "Enter password",
    type: "password",
  });
  const password = await input2.prompt();
  console.log(
    `   Result: "${password}" (actual value, was masked during input)\n`,
  );

  // 3. With default value
  console.log("3. With default value:");
  const input3 = new Input({
    label: "Company name",
    defaultValue: "Acme Corp",
  });
  const company = await input3.prompt();
  console.log(`   Result: "${company}"\n`);

  // 4. Custom width (auto)
  console.log("4. Auto width:");
  const input4 = new Input({
    label: "Short",
    width: "auto",
  });
  const short = await input4.prompt();
  console.log(`   Result: "${short}"\n`);

  // 5. Custom width (ratio)
  console.log("5. Half-width (1/2):");
  const input5 = new Input({
    label: "Half screen",
    width: "1/2",
  });
  const half = await input5.prompt();
  console.log(`   Result: "${half}"\n`);

  // 6. Centered alignment
  console.log("6. Center aligned:");
  const input6 = new Input({
    label: "Centered input",
    align: "center",
    width: 40,
  });
  const centered = await input6.prompt();
  console.log(`   Result: "${centered}"\n`);

  // 7. Right aligned
  console.log("7. Right aligned:");
  const input7 = new Input({
    label: "Right aligned",
    align: "right",
    width: 40,
  });
  const right = await input7.prompt();
  console.log(`   Result: "${right}"\n`);

  console.log("=== Demo Complete ===");
})();
