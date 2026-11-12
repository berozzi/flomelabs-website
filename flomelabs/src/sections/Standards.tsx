import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'

const PRINCIPLES = [
  {
    index: '01',
    title: 'Quality First',
    description: "We don't build products just to release them.",
  },
  {
    index: '02',
    title: 'Built to Last',
    description: 'We create solutions designed to evolve.',
  },
  {
    index: '03',
    title: 'Always Evolving',
    description: 'We experiment, learn and improve.',
  },
]

export function Standards() {
  return (
    <section id="standards" className="relative overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(244,242,237,0.04)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/2 size-[520px] -translate-y-1/2 rounded-full bg-accent/5 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-site px-6 py-28 md:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionLabel index="05" tone="dark">
                Our standards
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-8 max-w-[13ch] font-display text-[clamp(2.6rem,5.2vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
                We care about the details.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-sm text-[16px] leading-[1.7] text-paper/55">
                Craft is not a phase of the process. It is the standard we hold every
                decision to — from the first sketch to the release build.
              </p>
            </Reveal>
          </div>

          <div>
            {PRINCIPLES.map((principle, index) => (
              <Reveal
                key={principle.index}
                delay={index * 0.08}
                className={index === 0 ? '' : 'border-t border-paper/10'}
              >
                <div className="group py-9 sm:py-12">
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-accent/70">
                      {principle.index}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-[-0.035em] transition-colors duration-300 group-hover:text-accent">
                        {principle.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-paper/50">
                        {principle.description}
                      </p>
                    </div>
                    <span
                      className="hidden h-px w-10 shrink-0 bg-paper/15 transition-all duration-500 group-hover:w-16 group-hover:bg-accent/60 sm:block"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
