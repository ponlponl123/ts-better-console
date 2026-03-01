import React from "react";

function Page() {
  return (
    <div className="docs flex flex-col gap-12 min-h-screen bg-background text-foreground">
      <section>
        <h1>
          card{" "}
          <span className="text-sm text-foreground/50 px-2 py-0.5 bg-foreground/10 rounded-full align-middle">
            soon
          </span>
        </h1>
        <p>
          The <code>card</code> component is coming soon. It will provide an
          interactive terminal card component with rich content support.
        </p>
        <p className="text-foreground/60 mt-4">
          In the meantime, you can use the <code>createCard</code> utility
          function to create styled cards for terminal output.
        </p>
      </section>
    </div>
  );
}

export default Page;
