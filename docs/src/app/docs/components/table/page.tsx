import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>
          table{" "}
          <span className="text-sm text-foreground/50 px-2 py-0.5 bg-foreground/10 rounded-full align-middle">
            soon
          </span>
        </h1>
        <p>
          The <code>table</code> component is coming soon. It will provide
          formatted table rendering for terminal output with customizable
          columns, borders, and styling.
        </p>
      </section>
    </div>
  );
}

export default Page;
