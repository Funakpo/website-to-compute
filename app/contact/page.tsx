'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { SubHero, Card } from '@/components/ui-bits'

const details = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Road Akenfa 1, Bayelsa State, Nigeria',
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'f7globalgroup@gmail.com',
    href: 'mailto:f7globalgroup@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 806 038 7136',
    href: 'tel:+2348060387136',
  },
]

const subjects = [
  'General Inquiry',
  'Investment & Partnership',
  'Join the Community',
  'Media & Press',
  'Careers',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SubHero
        label="Contact"
        title="Let's Start a Conversation"
        subtitle="Whether you want to invest, partner, or join the community — we'd love to hear from you."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
          {/* Details */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Reach out directly or send us a message and our team will respond
              promptly.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-foreground transition-colors hover:text-gold"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <Card className="md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-gold" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-foreground">
                  Message Sent
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Thank you for reaching out to Factory 7. Our team will get back
                  to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-md border border-gold/40 px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" type="text" required />
                  <Field id="email" label="Email" type="email" required />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="org" label="Organization" type="text" />
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-md border border-gold/20 bg-navy px-4 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    >
                      {subjects.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-md border border-gold/20 bg-navy px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-gold to-gold-dark px-7 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 sm:w-auto"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </>
  )
}

function Field({
  id,
  label,
  type,
  required,
}: {
  id: string
  label: string
  type: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full rounded-md border border-gold/20 bg-navy px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
    </div>
  )
}
