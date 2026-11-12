import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Reveal } from '../components/ui/Reveal'
import { SectionLabel } from '../components/ui/SectionLabel'
import { GameArtwork } from '../components/visuals/GameArtwork'
import { WalletVisual } from '../components/visuals/WalletVisual'

interface ProjectCardProps {
  index: string
  name: string
  category: string
  description: string
  tags: string[]
  visual: ReactNode
  reverse?: boolean
}

function ProjectCard({
  index,
  name,
  category,
  description,
  tags,
  visual,
  reverse = false,
}: ProjectCardProps) {
  return (
    <Reveal>
      <article className="group grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className={reverse ? 'lg:order-2' : ''}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              {index}
            </span>
            <span className="h-px w-8 bg-ink/15" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {category}
            </span>
          </div>

          <h3 className="mt-6 font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em]">
            {name}
          </h3>
          <p className="mt-5 max-w-md text-[16px] leading-[1.7] text-muted">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 inline-flex items-center gap-3 text-sm font-medium text-ink/70">
            <span className="grid size-9 place-items-center rounded-full border border-ink/15 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
            Case study in progress
          </div>
        </div>

        <div
          className={`relative overflow-hidden rounded-card ${reverse ? 'lg:order-1' : ''}`}
        >
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.025]">
            {visual}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function SelectedWork() {
  return (
    <section id="work" className="bg-paper text-ink">
      <div className="mx-auto max-w-site px-6 py-28 md:py-40">
        <Reveal>
          <SectionLabel index="04" tone="light">
            Selected work
          </SectionLabel>
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <h2 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
              Built with purpose.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A selection of products and worlds currently in development. Different
              formats, the same attention to detail.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          <ProjectCard
            index="01"
            name="CitizenWallet"
            category="Mobile application · Productivity"
            description="A digital wallet designed to simplify everyday life through loyalty cards and receipt management."
            tags={['Product design', 'iOS', 'Android']}
            visual={<WalletVisual />}
          />
          <ProjectCard
            index="02"
            name="AntSpire"
            category="Game development · Strategy"
            description="A strategy game about building and managing an underground ant colony."
            tags={['Game design', 'Unity', 'PC']}
            visual={<GameArtwork className="aspect-[4/3] w-full" showTitle={false} />}
            reverse
          />
        </div>
      </div>
    </section>
  )
}
