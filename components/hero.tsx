import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm text-primary">Edge compute platform</p>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Turn any website into globally distributed compute.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Funakpo Compute deploys your site to a global edge network in seconds. Scale
            to millions of requests, run logic close to your users, and pay only for what
            you use.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
