import type { ReactNode } from 'react'

interface SectionLabelProps {
  index: string
  children: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionLabel({
  index,
  children,
  tone = 'dark',
  className = '',
}: SectionLabelProps) {
  const text = tone === 'dark' ? 'text-paper/55' : 'text-muted'
  const line = tone === 'dark' ? 'bg-paper/20' : 'bg-ink/15'

  return (
    <div
      className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] sm:text-[11px] ${text} ${className}`}
    >
      <span className="text-accent">{index}</span>
      <span className={`h-px w-7 ${line}`} aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}
