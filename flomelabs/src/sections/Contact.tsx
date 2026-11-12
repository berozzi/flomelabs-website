import { ArrowUpRight } from 'lucide-react'
import { SITE } from '../config/site'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'

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
        className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-site px-6 py-28 md:py-40">
        <Reveal>
          <SectionLabel index="06" tone="light">
            Contact
          </SectionLabel>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
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
              {SITE.email} · Placeholder contact
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
