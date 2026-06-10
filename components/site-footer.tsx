import { Boxes } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#how-it-works", label: "How it works" },
      { href: "#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#contact", label: "Contact" },
      { href: "#top", label: "About" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2 font-semibold text-foreground">
              <Boxes className="h-6 w-6 text-primary" aria-hidden="true" />
              <span>Funakpo Compute</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The edge deployment platform that turns any website into globally distributed
              compute.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>&copy; {year} Funakpo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
