import { Link } from 'react-router-dom'
import { SITE } from '../../config/site'

interface LogoMarkProps {
  className?: string
}

export function LogoMark({ className = 'size-7' }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <rect
        x="2.5"
        y="2.5"
        width="11.5"
        height="11.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="18" y="2.5" width="11.5" height="11.5" rx="3" className="fill-accent" />
      <rect x="2.5" y="18" width="11.5" height="11.5" rx="3" className="fill-current" />
      <rect
        x="18"
        y="18"
        width="11.5"
        height="11.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${SITE.name} — home`}
    >
      <LogoMark />
      <span className="font-display text-[17px] font-semibold tracking-[-0.035em]">
        {SITE.name}
      </span>
    </Link>
  )
}
