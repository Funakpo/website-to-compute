import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Cpu,
  Sprout,
  GraduationCap,
  Coins,
  Building2,
  Sun,
  ArrowRight,
} from 'lucide-react'
import { SubHero, SectionHeader, Card } from '@/components/ui-bits'

export const metadata: Metadata = {
  title: 'Smart City | Factory 7 Global Development Group',
  description:
    'The F7 Smart City masterplan — a planned multi-sector development zone where technology, agriculture, education, finance, and infrastructure operate as one unified system.',
}

const zones = [
  {
    icon: Cpu,
    name: 'Technology & Innovation Hub',
    text: 'Data centers, research labs, and startup incubators driving the digital backbone of the city.',
  },
  {
    icon: Sprout,
    name: 'Agriculture & Food Zone',
    text: 'Smart farms, vertical agriculture, and agro-processing facilities ensuring local food security.',
  },
  {
    icon: GraduationCap,
    name: 'Education & Academy District',
    text: 'Campuses, training centers, and digital learning facilities cultivating future-ready talent.',
  },
  {
    icon: Coins,
    name: 'Financial & Commerce Center',
    text: 'A digital economy district enabling borderless trade, banking, and entrepreneurship.',
  },
  {
    icon: Building2,
    name: 'Residential & Community Zone',
    text: 'Sustainable, connected housing designed around livability, mobility, and well-being.',
  },
  {
    icon: Sun,
    name: 'Renewable Energy Grid',
    text: 'Solar and clean energy infrastructure powering the entire city sustainably.',
  },
]

export default function SmartCityPage() {
  return (
    <>
      {/* Hero with city image */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/f7-hero-city.png"
          alt="Aerial view of the planned Factory 7 Smart City"
          fill
          priority
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full border border-gold px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            The Masterplan
          </span>
          <h1 className="text-balance font-heading text-4xl font-bold leading-tight text-foreground sm:text-6xl">
            The F7 Smart City
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
            A planned multi-sector development zone where technology,
            agriculture, education, finance, and infrastructure operate as one
            unified, self-sustaining system — a living blueprint for the future.
          </p>
        </div>
      </section>

      {/* Concept */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeader
            label="The Vision"
            title="A City Built as One System"
            desc="The F7 Smart City is the physical embodiment of the Factory 7 ecosystem — where every sector is designed from day one to feed into the next, creating an integrated economy rather than disconnected silos."
          />
        </div>
      </section>

      {/* Zones */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Integrated Zones" title="Six Connected Districts" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map(({ icon: Icon, name, text }) => (
              <Card key={name}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Economic model */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            label="Economic Model"
            title="A Self-Sustaining Economy"
            desc="Value circulates within the city. Each zone produces, trades, and reinvests, creating a closed-loop economy that grows stronger over time."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { step: 'Produce', text: 'Agriculture, technology, and skilled labor generate goods and services.' },
              { step: 'Trade', text: 'The financial district enables borderless exchange of that value.' },
              { step: 'Secure', text: 'Digital ledgers protect and verify assets across the city.' },
              { step: 'Reinvest', text: 'Profits fund education, infrastructure, and the next cycle of growth.' },
            ].map((s, i) => (
              <div
                key={s.step}
                className="rounded-xl border border-gold/10 bg-card p-6 text-center"
              >
                <span className="font-heading text-3xl font-extrabold text-gold/40">
                  {`0${i + 1}`}
                </span>
                <h4 className="mt-2 text-base font-bold text-gold">{s.step}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Be Part of the Blueprint
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            We are seeking visionary partners and investors to help bring the F7
            Smart City from concept to reality.
          </p>
          <Link
            href="/investors"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-gold to-gold-dark px-7 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5"
          >
            Explore Investment Opportunities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
