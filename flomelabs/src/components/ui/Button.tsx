import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline-dark' | 'outline-light'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-ink hover:bg-paper',
  'outline-dark':
    'border border-paper/20 text-paper hover:border-accent hover:bg-paper/5',
  'outline-light':
    'border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/5',
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const externalProps: { target?: '_blank'; rel?: string } = external
    ? { target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`}
      {...externalProps}
    >
      {children}
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  )
}
