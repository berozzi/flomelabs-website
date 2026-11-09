import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'

const NAV_ITEMS = [
  { to: '/', label: 'Strona główna' },
  { to: '/produkty', label: 'Produkty' },
  { to: '/wspolpraca', label: 'Współpraca B2B' },
  { to: '/informacje', label: 'Informacje' },
]

const navLinkBase =
  'border-b-2 px-0.5 py-1.5 text-[15px] no-underline hover:text-heading focus-visible:rounded-[2px] max-md:border-b-0 max-md:py-2.5'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-6 py-4">
        <Logo />
        <button
          ref={menuButtonRef}
          type="button"
          className="relative hidden size-10 cursor-pointer items-center justify-center rounded-md border border-border bg-transparent max-md:flex"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}</span>
          <span
            className="relative block h-0.5 w-[18px] rounded-[1px] bg-heading before:absolute before:left-0 before:top-0 before:h-0.5 before:w-full before:-translate-y-[5px] before:rounded-[1px] before:bg-heading before:content-[''] after:absolute after:left-0 after:top-0 after:h-0.5 after:w-full after:translate-y-[5px] after:rounded-[1px] after:bg-heading after:content-['']"
            aria-hidden="true"
          />
        </button>
        <nav
          id="main-nav"
          className={`flex gap-6 max-md:absolute max-md:inset-x-0 max-md:top-full max-md:flex-col max-md:gap-1 max-md:border-b max-md:border-border max-md:bg-background max-md:px-6 max-md:pb-5 max-md:pt-2 ${
            isMenuOpen ? 'max-md:flex' : 'max-md:hidden'
          }`}
          aria-label="Główna nawigacja"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${navLinkBase} ${
                  isActive
                    ? 'border-accent text-heading max-md:border-transparent max-md:text-accent'
                    : 'border-transparent text-foreground'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
