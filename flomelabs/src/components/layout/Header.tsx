import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SITE } from '../../config/site'
import { Logo } from '../ui/Logo'

function prefetchRoute(to: string) {
  if (to === '/work') void import('../../pages/Work')
  if (to === '/contact') void import('../../pages/ContactPage')
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const menu = menuRef.current
    const focusables = menu
      ? Array.from(menu.querySelectorAll<HTMLElement>('a[href], button'))
      : []
    const focusFrame = requestAnimationFrame(() => focusables[0]?.focus())

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(focusFrame)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const solid = scrolled || open || pathname !== '/'
  const pillTone = solid
    ? 'border-ink/10 bg-paper/85 text-ink shadow-[0_8px_30px_-12px_rgba(17,19,24,0.25)] backdrop-blur-xl'
    : 'border-transparent bg-transparent text-paper'

  const isActive = (to: string) =>
    to.startsWith('/#') ? pathname === '/' && hash === to.slice(1) : pathname === to

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-0 overflow-y-auto bg-ink px-6 pb-10 pt-28 text-paper transition-opacity duration-300 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {SITE.nav.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              onMouseEnter={() => prefetchRoute(item.to)}
              onFocus={() => prefetchRoute(item.to)}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between border-b border-paper/10 py-5 font-display text-4xl font-semibold tracking-[-0.04em] transition-[opacity,transform] duration-500 ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${50 + index * 60}ms` : '0ms' }}
            >
              {item.label}
              <ArrowUpRight className="size-5 text-paper/40" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <div className="mt-10 text-sm text-paper/55">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/35">
            Get in touch
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 block text-paper/80 transition-colors hover:text-paper"
          >
            {SITE.email}
          </a>
          <div className="mt-5 flex gap-6 font-mono text-[10px] uppercase tracking-[0.18em]">
            <a
              href={SITE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-paper"
            >
              LinkedIn
            </a>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-paper"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-site px-4 sm:px-6">
        <div
          className={`mt-3 flex h-16 items-center justify-between rounded-2xl border px-4 transition-[background-color,border-color,color,box-shadow] duration-300 sm:px-5 ${pillTone}`}
        >
          <Logo />

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {SITE.nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => prefetchRoute(item.to)}
                onFocus={() => prefetchRoute(item.to)}
                aria-current={isActive(item.to) ? 'page' : undefined}
                className="relative text-sm opacity-70 transition-opacity duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:opacity-100 hover:after:scale-x-100 aria-[current=page]:opacity-100 aria-[current=page]:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            onMouseEnter={() => prefetchRoute('/contact')}
            className={`group hidden items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors duration-300 md:inline-flex ${
              solid
                ? 'border-ink/15 hover:border-ink/40'
                : 'border-paper/20 hover:border-accent'
            }`}
          >
            Let&apos;s talk
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className={`inline-flex size-10 items-center justify-center rounded-lg border transition-colors duration-300 md:hidden ${
              solid ? 'border-ink/15' : 'border-paper/20'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}
