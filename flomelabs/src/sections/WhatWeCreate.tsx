import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { GameArtwork } from '../components/visuals/GameArtwork'
import { PhoneMockup } from '../components/visuals/PhoneMockup'

export function WhatWeCreate() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-site px-6 py-28 md:py-40">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionLabel index="03" tone="dark">
              What we create
            </SectionLabel>
            <h2 className="mt-8 font-display text-[clamp(2.6rem,5.4vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              Different worlds.
              <br />
              One vision.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-paper/55">
              Two disciplines, one standard of craft. We build products people return
              to, and worlds they want to stay in.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-card bg-paper p-7 text-ink sm:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    01 / Applications
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em]">
                    Useful tools.
                    <br />
                    Better experiences.
                  </h3>
                </div>
                <ArrowUpRight
                  className="size-5 shrink-0 text-ink/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
                Mobile products designed for everyday life — clear, fast and built to
                last beyond the first release.
              </p>

              <div className="relative mt-auto flex flex-1 items-end justify-center pt-10">
                <div
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_center,rgba(169,184,255,0.35),transparent_68%)]"
                  aria-hidden="true"
                />
                <PhoneMockup className="relative rotate-0 transition-transform duration-700 ease-out sm:rotate-[-5deg] group-hover:rotate-0 group-hover:scale-[1.03]" />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <article className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-card border border-paper/10 bg-ink-soft p-7 sm:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/45">
                    02 / Games
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em]">
                    New worlds.
                    <br />
                    New experiences.
                  </h3>
                </div>
                <ArrowUpRight
                  className="size-5 shrink-0 text-paper/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/55">
                Atmospheric games with systems worth mastering — made by a team that
                cares about how they feel, not just how they look.
              </p>

              <div className="mt-auto pt-10">
                <GameArtwork className="aspect-[4/3] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
