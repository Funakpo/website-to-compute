import type { ReactNode } from 'react'

export function SectionHeader({
  label,
  title,
  desc,
  align = 'center',
}: {
  label?: string
  title: string
  desc?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={`mb-12 max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {label && (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
          {label}
        </span>
      )}
      <h2 className="text-balance font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  )
}

export function SubHero({
  label,
  title,
  subtitle,
}: {
  label: string
  title: string
  subtitle: string
}) {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/f7-banner.png')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-navy-light/85"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
          {label}
        </span>
        <h1 className="text-balance font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-gold/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${className}`}
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-dark transition-transform duration-300 group-hover:scale-x-100" />
      {children}
    </div>
  )
}
