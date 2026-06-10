import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Megaphone,
  ArrowRight,
} from 'lucide-react'
import { SubHero, SectionHeader, Card } from '@/components/ui-bits'

export const metadata: Metadata = {
  title: 'Community | Factory 7 Global Development Group',
  description:
    'Join the Factory 7 community — empowering individuals, entrepreneurs, and communities through digital tools, skills, and opportunity.',
}

const ways = [
  {
    icon: GraduationCap,
    title: 'Learn & Grow',
    text: 'Access digital literacy programs, vocational training, and mentorship through the F7 Academy.',
  },
  {
    icon: Briefcase,
    title: 'Offer Your Skills',
    text: 'Join F7 Skill Connect as a verified talent and reach clients who need your expertise.',
  },
  {
    icon: Users,
    title: 'Trade & Earn',
    text: 'Participate in the F7 Sovereignty digital economy to trade goods and services without borders.',
  },
  {
    icon: HeartHandshake,
    title: 'Build Together',
    text: 'Collaborate with a growing community of innovators, entrepreneurs, and changemakers.',
  },
]

export default function CommunityPage() {
  return (
    <>
      <SubHero
        label="Our Community"
        title="Empowerment From the Ground Up"
        subtitle="Factory 7 exists to unlock human potential. Here's how you can be part of the movement."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Get Involved"
            title="Many Ways to Participate"
            desc="Whether you want to learn, work, trade, or build — there's a place for you in the Factory 7 ecosystem."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ways.map(({ icon: Icon, title, text }) => (
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

      {/* Newsletter / join */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Card className="text-center md:p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
              <Megaphone className="h-6 w-6" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Stay Connected
            </h2>
            <p className="mx-auto mt-3 max-w-lg leading-relaxed text-muted-foreground">
              Be the first to hear about new platforms, programs, and
              opportunities. Join our community updates.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="community-email" className="sr-only">
                Email address
              </label>
              <input
                id="community-email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-md border border-gold/20 bg-navy px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="rounded-md bg-gradient-to-br from-gold to-gold-dark px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Join the Movement?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Reach out and discover how Factory 7 can help you grow.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-gold to-gold-dark px-7 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
