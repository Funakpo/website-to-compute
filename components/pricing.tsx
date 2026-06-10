import { Check } from "lucide-react";

const plans = [
  {
    name: "Hobby",
    price: "$0",
    period: "/mo",
    description: "For personal projects and experiments.",
    features: ["100 GB bandwidth", "Global edge network", "Automatic HTTPS", "Community support"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/mo",
    description: "For growing teams shipping in production.",
    features: [
      "1 TB bandwidth",
      "Preview deployments",
      "Real-time analytics",
      "Email support",
      "Custom domains",
    ],
    cta: "Get started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced needs.",
    features: [
      "Unlimited bandwidth",
      "99.99% uptime SLA",
      "SSO & audit logs",
      "Dedicated support",
      "Custom contracts",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, usage-based pricing
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-primary bg-card ring-1 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-accent/40 px-3 py-1 text-xs font-medium text-accent-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-medium text-card-foreground">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-muted text-foreground hover:bg-background"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
