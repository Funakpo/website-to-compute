const steps = [
  {
    number: "01",
    title: "Connect your project",
    description:
      "Link your Git repository or upload your static site. Funakpo Compute detects your framework automatically.",
  },
  {
    number: "02",
    title: "Deploy to the edge",
    description:
      "Every commit builds and ships to our global network instantly, complete with a preview URL.",
  },
  {
    number: "03",
    title: "Scale without limits",
    description:
      "Traffic spikes are handled automatically. Monitor performance and roll back any deploy in one click.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From code to global in three steps
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Go from repository to production without touching infrastructure.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="font-mono text-sm font-medium text-primary">
                {step.number}
              </div>
              <h3 className="mt-3 text-xl font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
