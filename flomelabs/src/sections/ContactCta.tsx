import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

export function ContactCta() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto max-w-site px-6 py-28 md:py-40">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,5.4vw,5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-balance">
              Have an idea worth building?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/contact" variant="solid-dark">
              Get in touch
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
