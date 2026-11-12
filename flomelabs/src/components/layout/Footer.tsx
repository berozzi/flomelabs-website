import { ArrowUpRight } from 'lucide-react'
import { SITE } from '../../config/site'
import { LogoMark } from '../ui/Logo'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-site px-6 pt-20 md:pt-24">
        <div className="grid gap-12 border-b border-paper/10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-7 text-paper" />
              <span className="font-display text-[17px] font-semibold tracking-[-0.035em]">
                {SITE.name}
              </span>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/50">
              An independent digital studio building applications, software products and
              games with long-term intent.
            </p>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">
              {SITE.location} · Working worldwide
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {[...SITE.nav, { label: 'Standards', href: '#standards' }].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-paper/65 transition-colors hover:text-paper"
                  >
                    {item.label}
                    <ArrowUpRight
                      className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-paper/65 transition-colors hover:text-paper"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-paper/65 transition-colors hover:text-paper"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-paper/65 transition-colors hover:text-paper"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <p className="mt-6 max-w-[22ch] font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-paper/45">
              Placeholder contact details
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55 transition-colors hover:text-paper"
          >
            Back to top
            <span className="grid size-6 place-items-center rounded-full border border-paper/15 transition-colors group-hover:border-accent">
              <ArrowUpRight
                className="size-3 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>

      <div
        className="pointer-events-none relative select-none overflow-hidden px-6 pb-2"
        aria-hidden="true"
      >
        <p className="mx-auto max-w-site font-display text-[clamp(4rem,17.5vw,17rem)] font-semibold leading-[0.8] tracking-[-0.07em] text-paper/[0.045]">
          {SITE.name}
        </p>
      </div>
    </footer>
  )
}
