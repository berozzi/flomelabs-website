import { Link } from 'react-router-dom'
import { SITE_NAME } from '../config/site'

export function Logo() {
  return (
    <Link
      to="/"
      className="text-xl font-semibold tracking-[-0.3px] text-heading no-underline focus-visible:rounded-[2px] focus-visible:outline-offset-4"
      aria-label={`${SITE_NAME} — strona główna`}
    >
      {SITE_NAME}
    </Link>
  )
}
