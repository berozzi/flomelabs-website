import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'

const DISCIPLINES = ['Engineering', 'Design', 'Creativity']

export function Philosophy() {
  return (
    <section id="studio" className="relative overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-site px-6 py-28 md:py-40">
        <Reveal>
          <SectionLabel index="02" tone="light">
            Philosophy
          </SectionLabel>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,5.2vw,5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-balance">
              Technology is a tool.{' '}
              <span className="text-gray">Impact is the goal.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:pt-3">
            <p className="max-w-md text-[17px] leading-[1.7] text-muted">
              We believe great digital products begin with great ideas. By combining
              engineering, design and creativity, we turn those ideas into meaningful
              experiences.
            </p>
            <a
              href="#standards"
              className="group mt-10 inline-flex items-center gap-3 border-b border-ink/20 pb-2 text-sm font-medium transition-colors hover:border-ink"
            >
              Our approach
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 border-t border-ink/10 pt-6 sm:grid-cols-3">
          {DISCIPLINES.map((discipline, index) => (
            <Reveal key={discipline} delay={index * 0.06}>
              <div className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                <span className="text-gray">0{index + 1}</span>
                {discipline}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
