import { Zap, Globe, Shield, GitBranch, Gauge, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant deploys",
    description:
      "Push your code and it goes live globally in seconds. No servers to provision, no regions to configure.",
  },
  {
    icon: Globe,
    title: "Global edge network",
    description:
      "Your site runs in 300+ locations, automatically routing every request to the nearest point of presence.",
  },
  {
    icon: Shield,
    title: "Secure by default",
    description:
      "Automatic TLS, DDoS protection, and isolated runtimes keep your workloads safe out of the box.",
  },
  {
    icon: GitBranch,
    title: "Git-native workflow",
    description:
      "Connect a repository and get preview deployments for every branch and pull request automatically.",
  },
  {
    icon: Gauge,
    title: "Real-time observability",
    description:
      "Track latency, traffic, and errors across every region from a single, unified dashboard.",
  },
  {
    icon: Layers,
    title: "Pay per use",
    description:
      "No idle costs. You're billed only for the compute and bandwidth your traffic actually consumes.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to ship at the edge
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A complete platform built for speed, scale, and reliability — without the
            operational overhead.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="bg-card p-8">
              <div className="inline-flex rounded-lg bg-accent/40 p-3">
                <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
