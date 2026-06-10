import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Factory,
  Infinity as InfinityIcon,
  Zap,
  Target,
  Lightbulb,
  Hourglass,
  Landmark,
} from 'lucide-react'
import { SubHero, SectionHeader, Card } from '@/components/ui-bits'

export const metadata: Metadata = {
  title: 'About | Factory 7 Global Development Group',
  description:
    'The vision behind Factory 7 — founder Dibigha Funakpo, our journey, philosophy, and legacy of empowerment across Africa.',
}

const timeline = [
  {
    year: '2010',
    title: 'The Seed of an Idea',
    text: 'The original concept of Factory 7 was shared by a close friend, planting the seed for what would become a global development ecosystem.',
  },
  {
    year: '2017',
    title: 'Public Vision Launch',
    text: 'Dibigha Funakpo began discussing the vision publicly and gradually started building a community around the idea of integrated development.',
  },
  {
    year: '2020 – 2024',
    title: 'Digital Foundation',
    text: 'Through learning, community engagement, and digital platform development, the project grew step by step with early prototypes and partnerships.',
  },
  {
    year: '2025',
    title: 'Ecosystem Launch',
    text: 'Factory 7 Global Development Group Ltd officially launches as a multi-sector ecosystem with live digital platforms and a clear roadmap to 2050 and beyond.',
  },
]

const meaning = [
  {
    icon: Factory,
    title: 'The "Factory" — Engine of Creation',
    text: 'A structured, continuous engine of production and transformation. It represents taking raw potential — in technology, agriculture, or human skill — and processing it through structured systems to create tangible, high-impact value.',
  },
  {
    icon: InfinityIcon,
    title: 'The "7" — Completeness & Synergy',
    text: 'The number 7 is the universal symbol of completeness and wholeness. It represents our holistic approach to global development — operating across a complete cycle of vital, interconnected sectors.',
  },
  {
    icon: Zap,
    title: 'F7 — Speed & Efficiency',
    text: 'In the digital world, "F7" is a function key — a shortcut. Our brand represents cutting through bureaucracy to provide direct, fast-tracked paths to digital literacy and technological empowerment.',
  },
]

const mission = [
  {
    icon: Target,
    title: 'Personal Life Mission',
    text: 'To design and deploy sustainable, multi-sector solutions — spanning digital technology, education, finance, and infrastructure — that drive tangible human progress and empower individuals to unlock their full potential.',
  },
  {
    icon: Lightbulb,
    title: 'The Inspiration',
    text: 'Factory 7 was born from the desire to bridge the gap between human potential and global opportunity — designing interconnected platforms that equip people with the tools, knowledge, and systems they need to achieve genuine independence.',
  },
  {
    icon: Hourglass,
    title: '20-Year Vision',
    text: 'A massive, fully integrated network across borders where core sectors are completely synchronized. The ecosystem becomes self-sustaining, with wealth and innovation in one sector funding development in the next.',
  },
  {
    icon: Landmark,
    title: '100-Year Legacy',
    text: 'The architecture that proved true empowerment comes from building unified, self-sustaining ecosystems — the blueprint used by cities and nations worldwide to lift societies from the ground up.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SubHero
        label="Our Story"
        title="The Vision Behind Factory 7"
        subtitle="From a shared dream in 2010 to a global development ecosystem building the future."
      />

      {/* Founder */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Founder
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Dibigha Funakpo
            </h2>
            <p className="mt-2 text-lg font-semibold text-gold">
              Executive Chairman &amp; Founder
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A Nigerian entrepreneur and technology visionary whose mission is
              to bridge the gap between human potential and global opportunity.
              He believes that sustainable progress is achieved by integrating
              technology, education, finance, agriculture, logistics, and
              infrastructure into one interconnected ecosystem.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Driven by a passion for innovation and community empowerment, he
              founded Factory 7 to create practical solutions that foster
              digital literacy, economic sovereignty, and long-term development —
              building systems that help individuals and communities become
              self-reliant and globally competitive.
            </p>
            <blockquote className="mt-6 border-l-4 border-gold bg-card px-6 py-5 text-lg italic text-foreground/90">
              &ldquo;I want my legacy to be a bridge. A bridge that connected raw
              human potential with global opportunity, and one that remains
              sturdy enough for generations to walk across long into the
              future.&rdquo;
              <footer className="mt-3 text-sm not-italic font-semibold text-gold">
                — Dibigha Funakpo
              </footer>
            </blockquote>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-gold/10">
            <Image
              src="/images/f7-founder.png"
              alt="Dibigha Funakpo, Executive Chairman and Founder of Factory 7"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="bg-navy-light py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Card className="text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-dark font-heading text-3xl font-bold text-navy">
              F7
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              Factory 7 Global Development Group Ltd
            </h3>
            <p className="mt-2 text-muted-foreground">
              A Multi-Sector Development Ecosystem for Sustainable Human Progress
            </p>
            <dl className="mx-auto mt-8 grid max-w-md gap-4 text-left sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Founded
                </dt>
                <dd className="font-semibold text-foreground">2025</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Headquarters
                </dt>
                <dd className="font-semibold text-foreground">
                  Bayelsa State, Nigeria
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Focus
                </dt>
                <dd className="font-semibold text-foreground">
                  Multi-Sector Ecosystem
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader
            label="Our Journey"
            title="From Vision to Ecosystem"
          />
          <ol className="relative ml-3 border-l-2 border-gold/30">
            {timeline.map((item) => (
              <li key={item.year} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-navy bg-gold" />
                <span className="text-sm font-bold uppercase tracking-wide text-gold">
                  {item.year}
                </span>
                <h4 className="mt-1 text-xl font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Meaning of F7 */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Philosophy" title="The Meaning of F7" />
          <div className="grid gap-6 md:grid-cols-3">
            {meaning.map(({ icon: Icon, title, text }) => (
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

      {/* Mission & Legacy */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Mission" title="A Legacy of Empowerment" />
          <div className="grid gap-6 md:grid-cols-2">
            {mission.map(({ icon: Icon, title, text }) => (
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
          <blockquote className="mt-10 border-l-4 border-gold bg-card px-6 py-6 text-lg italic text-foreground/90">
            &ldquo;Ultimately, after 100 years, I don&apos;t want people to just
            look at a logo or a monument. I want them to look at a thriving,
            borderless network of independent individuals, successful businesses,
            and empowered communities — and know that Factory 7 was the bridge
            that helped them cross over into a better future.&rdquo;
            <footer className="mt-3 text-sm not-italic font-semibold text-gold">
              — Dibigha Funakpo, Executive Chairman &amp; Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Africa contribution */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Impact"
            title="Factory 7's Contribution to Africa"
            desc="Replacing the narrative of dependency with an undeniable reality of absolute digital and economic sovereignty."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Borderless Financial Freedom',
                text: 'Deploying secure, localized digital ecosystems that allow African entrepreneurs, traders, and communities to bypass outdated financial bottlenecks and trade globally without barriers.',
              },
              {
                title: 'Monetizing Grassroots Talent',
                text: "Taking Africa's massive, highly skilled informal labor market and organizing it into a verified, high-trust digital network that solves the employment gap.",
              },
              {
                title: 'Self-Sustaining Ecosystems',
                text: 'Building interconnected systems where technology, education, finance, and infrastructure work together to unlock human potential and drive regional growth.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="mb-2 text-lg font-bold text-gold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
