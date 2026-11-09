import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary'

interface SharedProps {
  variant?: Variant
  children: ReactNode
}

type ButtonAsLink = SharedProps & LinkProps & { as: 'link' }
type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'anchor' }
type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton

const buttonBase =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-[11px] text-[15px] font-medium no-underline transition-[background-color,border-color,color] duration-150 ease-[ease] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none'

const buttonVariants: Record<Variant, string> = {
  primary:
    'border border-accent bg-accent text-on-accent hover:not-disabled:brightness-[0.92]',
  secondary:
    'border border-border bg-transparent text-heading hover:not-disabled:border-accent-line',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, as = 'button', ...rest } = props
  const className = `${buttonBase} ${buttonVariants[variant]}`

  if (as === 'link') {
    const linkProps = rest as LinkProps
    return (
      <Link className={className} {...linkProps}>
        {children}
      </Link>
    )
  }

  if (as === 'anchor') {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={className} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={className} {...buttonProps}>
      {children}
    </button>
  )
}
