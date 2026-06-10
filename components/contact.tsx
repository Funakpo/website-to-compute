import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to deploy at the edge?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us about your project and we&apos;ll help you get up and running. Whether
              you&apos;re launching a side project or migrating a high-traffic platform, our
              team is here to help.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-muted-foreground">
                  Personalized onboarding for your stack
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-muted-foreground">
                  Migration support from any platform
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-muted-foreground">
                  Response within one business day
                </span>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
