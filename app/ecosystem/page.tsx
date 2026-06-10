import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Smartphone,
  Network,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  CircleDot,
} from 'lucide-react'
import { SubHero, SectionHeader, Card } from '@/components/ui-bits'

export const metadata: Metadata = {
  title: 'Ecosystem | Factory 7 Global Development Group',
  description:
    'The Factory 7 digital ecosystem — F7 Skill Connect, F7 Sovereignty, and F7 Ledger working together as one interconnected system.',
}

const platforms = [
  {
    icon: Smartphone,
    name: 'F7 Skill Connect',
    tagline: 'The Talent Marketplace',
    status: 'Live',
    text: 'A digital marketplace that organizes the informal skilled labor market into a verified, high-trust network. It connects artisans, freelancers, and service providers with clients who need them — solving the employment gap from the ground up.',
    features: [
      'Verified talent profiles & ratings',
      'Secure in-platform hiring',
      'Skill categorization & discovery',
      'Direct client-to-talent matching',
    ],
  },
  {
    icon: Network,
    name: 'F7 Sovereignty',
    tagline: 'The Economic Engine',
    status: 'Live',
    text: 'A localized digital economy platform enabling borderless trade and peer-to-peer commerce. It allows entrepreneurs and communities to bypass outdated financial bottlenecks and participate in a true digital economy.',
    features: [
      'Peer-to-peer trade & commerce',
      'Borderless transactions',
      'Localized digital marketplace',
      'Economic participation tools',
    ],
  },
  {
    icon: ShieldCheck,
    name: 'F7 Ledger',
    tagline: 'The Trust Layer',
    status: 'In Development',
    text: 'A secure asset-tracking and transaction system that brings transparency and trust to the ecosystem. It records, verifies, and secures the value generated across every platform — the financial backbone of Factory 7.',
    features: [
      'Secure asset tracking',
      'Transparent transaction records',
      'Trust & verification layer',
      'Cross-platform value security',
    ],
  },
]

export default function EcosystemPage() {
  return (
    <>
      <SubHero
        label="Digital Platforms"
        title="The Factory 7 Ecosystem"
        subtitle="Three interconnected platforms working as one system — where talent, trade, and trust converge."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Live & In Development"
            title="One Interconnected System"
            desc="Each platform is powerful alone, but transformative together. Talent earns on Skill Connect, trades on Sovereignty, and secures value on Ledger."
          />
          {platforms.map((p, i) => {
            const Icon = p.icon
            return (
              <Card key={p.name} className="md:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-foreground">
                          {p.name}
                        </h3>
                        <p className="text-sm text-gold">{p.tagline}</p>
                      </div>
                      <span
                        className={`ml-auto flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                          p.status === 'Live'
                            ? 'bg-gold/15 text-gold'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        <CircleDot className="h-3 w-3" />
                        {p.status}
                      </span>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                  <ul className="space-y-3 rounded-xl bg-navy/40 p-6">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="sr-only">Platform {i + 1}</span>
              </Card>
            )
          })}
        </div>
      </section>

      {/* How they connect */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            label="The Flywheel"
            title="How the Ecosystem Compounds"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Talent Connects',
                text: 'Skilled individuals join Skill Connect, get verified, and access a stream of clients and work opportunities.',
              },
              {
                step: '02',
                title: 'Value Trades',
                text: 'Earnings flow into Sovereignty, where users trade goods and services in a borderless digital economy.',
              },
              {
                step: '03',
                title: 'Wealth Secures',
                text: 'Ledger records and protects assets, building the trust layer that lets the entire economy scale safely.',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-gold/10 bg-card p-6 text-center"
              >
                <span className="font-heading text-4xl font-extrabold text-gold/40">
                  {s.step}
                </span>
                <h4 className="mt-2 text-lg font-bold text-foreground">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/divisions"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-gold to-gold-dark px-7 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5"
            >
              Explore Our Divisions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
