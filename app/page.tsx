import Link from 'next/link'
import Image from 'next/image'
import {
  Cpu,
  GraduationCap,
  Sprout,
  Coins,
  Truck,
  Building2,
  ArrowRight,
  Quote,
  ChevronDown,
} from 'lucide-react'
import { SectionHeader, Card } from '@/components/ui-bits'

const stats = [
  { value: '5+', label: 'Core Sectors' },
  { value: '3', label: 'Active Platforms' },
  { value: '15+', label: 'Future Divisions' },
  { value: '2050+', label: 'Vision Horizon' },
]

const pillars = [
  {
    icon: Cpu,
    title: 'Digital Technology',
    text: 'Secure digital infrastructure, blockchain integration, and fintech platforms powering borderless economic participation.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    text: 'World-class academies, mentorship programs, and digital literacy initiatives cultivating future-ready leaders.',
  },
  {
    icon: Sprout,
    title: 'Agriculture',
    text: 'Smart farming, livestock production, and agro-processing ensuring food security and economic sustainability.',
  },
  {
    icon: Coins,
    title: 'Finance',
    text: 'Decentralized transaction systems, asset tracking, and peer-to-peer trade enabling true economic sovereignty.',
  },
  {
    icon: Truck,
    title: 'Logistics',
    text: 'Smart supply chain networks, warehousing, and distribution systems connecting production to markets.',
  },
  {
    icon: Building2,
    title: 'Infrastructure',
    text: 'Future-ready smart cities, renewable energy systems, and integrated community development frameworks.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/images/f7-hero-city.png"
          alt="Futuristic Factory 7 smart city projection at dusk"
          fill
          priority
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-navy-lighter/60"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-28 text-center sm:px-6">
          <span className="mb-6 inline-block rounded-full border border-gold px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Founded 2025
          </span>
          <h1 className="text-balance font-heading text-4xl font-bold leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
            Building <span className="text-gold">Opportunities</span>,
            Empowering <span className="text-gold">Communities</span>, Creating
            the <span className="text-gold">Future</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Factory 7 Global Development Group Ltd is a multi-sector development
            ecosystem integrating technology, education, finance, agriculture,
            logistics, and infrastructure to drive sustainable human progress
            across Africa and beyond.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-gold to-gold-dark px-7 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
            >
              Explore Our Vision <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 rounded-md border border-gold/40 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 z-10 h-6 w-6 -translate-x-1/2 animate-bounce text-gold" />
      </section>

      {/* Stats */}
      <section className="border-y border-gold/10 bg-navy-light py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <span className="block font-heading text-4xl font-extrabold text-gold">
                {s.value}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.1em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Ecosystem"
            title="One Vision. Multiple Pillars."
            desc="Factory 7 operates as an interconnected ecosystem where each sector strengthens the next, creating a self-reinforcing cycle of growth and independence."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
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

      {/* Vision split */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
              The Vision
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              From Fragmentation to Integration
            </h2>
            <span className="my-6 block h-0.5 w-16 bg-gradient-to-r from-gold to-gold-dark" />
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Too often, development happens in isolated silos. A community gains
              digital education but lacks financial tools. Artisans possess
              incredible skills but lack market access. Factory 7 solves this by
              building one unified ecosystem where every sector feeds into the
              next.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              The Academy trains the talent. Skill Connect and Sovereignty give
              them the marketplace and financial tools. Ledger secures their
              assets. Our Agri-Business and Logistics arms provide the physical
              goods that anchor the entire economy.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-gold to-gold-dark px-7 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5"
            >
              Read Our Full Story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <Card>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Quote className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Dibigha Funakpo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Executive Chairman &amp; Founder
                  </p>
                </div>
              </div>
              <p className="italic leading-relaxed text-foreground/90">
                &ldquo;I want my legacy to be a bridge. A bridge that connected
                raw human potential with global opportunity, and one that
                remains sturdy enough for generations to walk across long into
                the future.&rdquo;
              </p>
            </Card>
            <Card>
              <h4 className="mb-2 font-semibold text-gold">F7 Smart City</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A planned multi-sector development zone where technology,
                agriculture, education, finance, and infrastructure operate as
                one unified system.
              </p>
              <Link
                href="/smart-city"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline"
              >
                Explore the Masterplan <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
