"use client";

import { useState } from "react";
import { Menu, X, Boxes } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-2 font-semibold text-foreground">
          <Boxes className="h-6 w-6 text-primary" aria-hidden="true" />
          <span>Funakpo Compute</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-6 w-6 text-foreground" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Get started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
