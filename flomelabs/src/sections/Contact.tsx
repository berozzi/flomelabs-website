import { ArrowUpRight } from 'lucide-react'
import { SITE } from '../config/site'
import { Reveal } from '../components/ui/Reveal'

const DETAILS = [
  { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { label: 'Studio', value: `${SITE.location} · Working worldwide` },
  { label: 'Availability', value: 'Open for 2026 projects' },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper text-ink">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(169,184,255,0.32),transparent_68%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-site px-6 pb-28 pt-32 md:pb-40 md:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <Reveal>
            <h2 className="max-w-[14ch] font-display text-[clamp(2.8rem,6.4vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-balance">
              Have an idea worth building?
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:pb-3">
            <p className="max-w-sm text-[17px] leading-[1.7] text-muted">
              Let&apos;s talk about technology, collaboration and ideas for the future.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="group mt-9 inline-flex items-center gap-4 rounded-xl bg-ink px-6 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-ink-soft"
            >
              Get in touch
              <span className="grid size-7 place-items-center rounded-full bg-accent text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </a>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Placeholder contact details
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-3">
          {DETAILS.map((detail, index) => (
            <Reveal key={detail.label} delay={index * 0.05}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="mt-3 inline-block text-sm text-ink/75 transition-colors hover:text-ink"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="mt-3 text-sm text-ink/75">{detail.value}</p>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6 border-t border-ink/10 pt-8">
          <a
            href={SITE.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
          >
            LinkedIn
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={SITE.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
          >
            Instagram
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
