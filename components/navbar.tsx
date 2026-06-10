'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { F7Logo } from './f7-logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/divisions', label: 'Divisions' },
  { href: '/smart-city', label: 'Smart City' },
  { href: '/investors', label: 'Investors' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <F7Logo />
          <span className="leading-tight">
            <span className="block font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
              Factory 7
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
              Global Development Group
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-xs font-medium uppercase tracking-[0.08em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-gold after:transition-all hover:text-gold ${
                    active
                      ? 'text-gold after:w-full'
                      : 'text-foreground/80 after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="text-foreground lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm border-l border-gold/10 bg-navy-light px-6 pb-8 pt-24">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-lg font-semibold ${
                      pathname === link.href ? 'text-gold' : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
