import Link from 'next/link'
import { Globe, AtSign, Share2, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { F7Logo } from './f7-logo'

const footerNav = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/divisions', label: 'Our Divisions' },
      { href: '/smart-city', label: 'Smart City' },
      { href: '/community', label: 'Community' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { href: '/ecosystem', label: 'Digital Platforms' },
      { href: '/investors', label: 'Invest & Partner' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
]

const socials = [
  { icon: Globe, label: 'Website' },
  { icon: AtSign, label: 'Social' },
  { icon: Share2, label: 'Share' },
  { icon: MessageCircle, label: 'Chat' },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold/10 bg-navy-light pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-3">
              <F7Logo />
              <span className="font-heading text-lg font-bold">Factory 7</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A multi-sector development ecosystem integrating technology,
              education, finance, agriculture, logistics, and infrastructure for
              sustainable human progress across Africa and beyond.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-muted-foreground transition-colors hover:bg-gold hover:text-navy"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-sm font-semibold text-foreground">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-5 text-sm font-semibold text-foreground">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Road Akenfa 1, Bayelsa State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:f7globalgroup@gmail.com"
                  className="transition-colors hover:text-gold"
                >
                  f7globalgroup@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href="tel:+2348060387136"
                  className="transition-colors hover:text-gold"
                >
                  +234 806 038 7136
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 text-xs text-muted-foreground/70 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Factory 7 Global Development Group
            Ltd. All rights reserved.
          </p>
          <p>factory7global.com</p>
        </div>
      </div>
    </footer>
  )
}
