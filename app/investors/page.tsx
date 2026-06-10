import type { Metadata } from 'next'
import Link from 'next/link'
import {
  TrendingUp,
  Globe2,
  ShieldCheck,
  Layers,
  Handshake,
  Rocket,
  ArrowRight,
} from 'lucide-react'
import { SubHero, SectionHeader, Card } from '@/components/ui-bits'

export const metadata: Metadata = {
  title: 'Investors & Partners | Factory 7 Global Development Group',
  description:
    'Partner with Factory 7. Discover investment opportunities in a multi-sector development ecosystem building the future of Africa and beyond.',
}

const reasons = [
  {
    icon: Layers,
    title: 'Diversified Ecosystem',
    text: 'Exposure across six high-growth sectors — technology, education, finance, agriculture, logistics, and infrastructure — within a single integrated model.',
  },
  {
    icon: Globe2,
    title: 'Untapped Markets',
    text: "Direct access to Africa's vast informal economy and skilled labor market, organized into verified, scalable digital networks.",
  },
  {
    icon: TrendingUp,
    title: 'Compounding Returns',
    text: 'A self-reinforcing flywheel where growth in one sector fuels expansion in the next, multiplying long-term value.',
  },
  {
    icon: ShieldCheck,
    title: 'Built on Trust',
    text: 'Secure, transparent systems through F7 Ledger ensure verifiable transactions and protected assets across the ecosystem.',
  },
]

const partnerTypes = [
  {
    icon: Rocket,
    title: 'Strategic Investors',
    text: 'Equity partners who share our long-term vision and want a stake in a generational development ecosystem.',
  },
  {
    icon: Handshake,
    title: 'Institutional Partners',
    text: 'Governments, NGOs, and development institutions seeking scalable, measurable social and economic impact.',
  },
  {
    icon: Globe2,
    title: 'Technology Allies',
    text: 'Companies and innovators who want to co-build platforms, infrastructure, and digital solutions at scale.',
  },
]

export default function InvestorsPage() {
  return (
    <>
      <SubHero
        label="Invest & Partner"
        title="Build the Future With Us"
        subtitle="Join a generational opportunity to fund sustainable, multi-sector development across Africa and beyond."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Factory 7"
            title="A Different Kind of Opportunity"
            desc="We are not building a single product. We are building an interconnected economy — and inviting visionary partners to grow with it."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Partnership Models"
            title="Ways to Engage With Us"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {partnerTypes.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Let&apos;s Build a Legacy Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Request our investor brief and discover how you can be part of the
            Factory 7 story.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-gold to-gold-dark px-7 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
