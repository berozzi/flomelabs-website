import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionLabel } from '../components/ui/SectionLabel'
import { HeroVisual } from '../components/visuals/HeroVisual'

const EASE = [0.16, 1, 0.3, 1] as const

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative min-h-svh overflow-hidden bg-ink text-paper">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(244,242,237,0.045)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-52 top-1/3 size-[560px] rounded-full bg-accent/5 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-ink"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-svh max-w-site flex-col px-6 pb-10 pt-28 sm:pt-32 lg:pt-36">
        <motion.div
          className="grid flex-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate={reduce ? undefined : 'show'}
        >
          <div>
            <motion.div variants={item}>
              <SectionLabel index="01" tone="dark">
                Independent digital studio · Poland
              </SectionLabel>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 max-w-[15ch] font-display text-[clamp(3.2rem,7.2vw,7.4rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-balance"
            >
              Ideas deserve to become{' '}
              <span className="text-accent">something real.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-md text-[17px] leading-[1.65] text-paper/60 sm:text-lg"
            >
              We design, develop and build digital products that make a difference.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#work">Explore our work</Button>
              <Button href="#studio" variant="outline-dark">
                Discover the studio
              </Button>
            </motion.div>
          </div>

          <div className="relative lg:-mr-8">
            <HeroVisual />
          </div>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-col justify-between gap-4 border-t border-paper/10 pt-5 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">
            Mobile · Software · Games
          </p>
          <a
            href="#studio"
            className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 transition-colors hover:text-paper"
          >
            Scroll to explore
            <span className="grid size-7 place-items-center rounded-full border border-paper/15 transition-colors group-hover:border-accent">
              <ArrowDown
                className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">
            Est. 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}
