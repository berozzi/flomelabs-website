import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE } from '../../config/site'
import { LogoMark } from '../ui/Logo'

const year = new Date().getFullYear()

const PRIVACY_APPS = [{ label: 'Vitelo', href: '/privacy-policy/vitelo' }]

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false)

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
                    href={`/${item.href}`}
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

            <div className="mt-8 border-t border-paper/10 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/55">
                Legal
              </p>
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setPrivacyOpen((open) => !open)}
                  className="group inline-flex w-full items-center justify-between gap-3 text-left text-sm text-paper/65 transition-colors hover:text-paper"
                  aria-expanded={privacyOpen}
                  aria-controls="footer-privacy-apps"
                >
                  <span>Privacy Policy</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-paper/45 transition-transform duration-200 ${
                      privacyOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {privacyOpen && (
                  <ul id="footer-privacy-apps" className="mt-3 space-y-2 border-l border-paper/10 pl-3">
                    {PRIVACY_APPS.map((app) => (
                      <li key={app.href}>
                        <Link
                          to={app.href}
                          className="block text-sm text-paper/55 transition-colors hover:text-paper"
                          onClick={() => setPrivacyOpen(false)}
                        >
                          {app.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <p className="mt-6 max-w-[22ch] font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-paper/45">
              Placeholder contact details
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55 transition-colors hover:text-paper"
          >
            Back to home
            <span className="grid size-6 place-items-center rounded-full border border-paper/15 transition-colors group-hover:border-accent">
              <ArrowUpRight
                className="size-3 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
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
