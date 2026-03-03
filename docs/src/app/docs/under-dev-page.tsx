function UnderDevelopmentPage({ title }: { title: string }) {
  return (
    <div className="docs flex flex-col gap-12 bg-background text-foreground">
      <section>
        <div className="flex items-center gap-2 w-full border-b-2 border-foreground/10 mb-4">
          <h1 className="border-none m-0!">{title}</h1>
          <span className="text-xs text-foreground/50 px-2 py-0.5 bg-foreground/10 rounded-full">
            soon
          </span>
        </div>
        <div className="p-6 border-2 border-amber-400/50 bg-amber-400/10">
          <p className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">
            🚧 Under Development
          </p>
          <p className="text-foreground/80">
            This feature is currently under development. Please check back soon
            for detailed information about the {title} component.
          </p>
          <p>
            or help us to make it by contributing on{" "}
            <a href="https://github.com/ts-better-console/ts-better-console">
              GitHub
            </a>
            !
          </p>
        </div>
      </section>
    </div>
  );
}

export default UnderDevelopmentPage;
