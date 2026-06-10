import type { Metadata } from 'next'
import {
  Cpu,
  GraduationCap,
  Coins,
  Sprout,
  Truck,
  Building2,
  Handshake,
  Globe2,
} from 'lucide-react'
import { SubHero, SectionHeader, Card } from '@/components/ui-bits'

export const metadata: Metadata = {
  title: 'Divisions | Factory 7 Global Development Group',
  description:
    'The operating divisions of Factory 7 — technology, education, finance, agriculture, logistics, infrastructure, partnerships, and global outreach.',
}

const divisions = [
  {
    icon: Cpu,
    name: 'F7 Technology & Digital',
    text: 'Building secure digital infrastructure, software platforms, blockchain integration, and the fintech systems that power the entire ecosystem.',
    points: ['Platform Development', 'Blockchain & Security', 'FinTech Systems'],
  },
  {
    icon: GraduationCap,
    name: 'F7 Academy & Education',
    text: 'Cultivating future-ready talent through digital literacy programs, vocational training, mentorship, and leadership development.',
    points: ['Digital Literacy', 'Vocational Training', 'Mentorship Programs'],
  },
  {
    icon: Coins,
    name: 'F7 Finance & Economy',
    text: 'Enabling economic sovereignty through decentralized transactions, asset tracking, peer-to-peer trade, and inclusive financial tools.',
    points: ['Digital Payments', 'Asset Tracking', 'P2P Trade'],
  },
  {
    icon: Sprout,
    name: 'F7 Agri-Business',
    text: 'Ensuring food security through smart farming, livestock production, agro-processing, and modern supply integration.',
    points: ['Smart Farming', 'Livestock', 'Agro-Processing'],
  },
  {
    icon: Truck,
    name: 'F7 Logistics & Supply',
    text: 'Connecting production to markets through smart supply chains, warehousing, and last-mile distribution networks.',
    points: ['Supply Chain', 'Warehousing', 'Distribution'],
  },
  {
    icon: Building2,
    name: 'F7 Infrastructure',
    text: 'Developing future-ready smart cities, renewable energy systems, and integrated community development frameworks.',
    points: ['Smart Cities', 'Renewable Energy', 'Community Dev'],
  },
  {
    icon: Handshake,
    name: 'F7 Partnerships',
    text: 'Forging strategic alliances with governments, institutions, and investors to scale impact and unlock new markets.',
    points: ['Strategic Alliances', 'Investor Relations', 'Institutional Ties'],
  },
  {
    icon: Globe2,
    name: 'F7 Global Outreach',
    text: 'Extending the ecosystem beyond borders, replicating the model across regions and connecting communities worldwide.',
    points: ['Regional Expansion', 'Cross-Border Trade', 'Global Network'],
  },
]

export default function DivisionsPage() {
  return (
    <>
      <SubHero
        label="Our Divisions"
        title="A Complete Cycle of Sectors"
        subtitle="Eight integrated divisions working in synergy to drive sustainable, multi-sector development."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Operating Divisions"
            title="Built for Synergy, Not Silos"
            desc="Each division is a vital pillar. Together they form a complete, self-reinforcing development engine."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map(({ icon: Icon, name, text, points }) => (
              <Card key={name}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            One Ecosystem. Endless Possibilities.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Wealth and innovation generated in one division fund the development
            of the next, creating a self-sustaining cycle where each sector
            strengthens the whole.
          </p>
        </div>
      </section>
    </>
  )
}
