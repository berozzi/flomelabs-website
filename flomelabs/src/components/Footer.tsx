import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SITE_NAME } from '../config/site'

const footerLink =
  'text-sm text-foreground no-underline hover:text-heading hover:underline focus-visible:rounded-[2px]'

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-4 p-6 max-[480px]:flex-col max-[480px]:items-start">
        <p className="text-sm text-foreground">
          © {year} {SITE_NAME}
        </p>
        <nav className="flex flex-wrap gap-4" aria-label="Informacje prawne">
          <Link to="/informacje#polityka-prywatnosci" className={footerLink}>
            Polityka prywatności
          </Link>
          <Link to="/informacje#regulamin" className={footerLink}>
            Regulamin
          </Link>
          <Link to="/informacje#polityka-cookies" className={footerLink}>
            Polityka cookies
          </Link>
          <Link to="/informacje#dane-firmy" className={footerLink}>
            Dane firmy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
