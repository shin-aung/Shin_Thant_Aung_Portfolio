import React from 'react'

type Variant = 'primary' | 'outline' | 'ghost' | 'warm'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent-tech text-white hover:bg-teal-600 shadow-sm hover:shadow-md border-transparent',
  outline:
    'bg-transparent text-accent-tech border-accent-tech hover:bg-teal-50',
  ghost:
    'bg-transparent text-text-muted border-transparent hover:bg-slate-100',
  warm:
    'bg-accent-warm text-white hover:bg-amber-600 shadow-sm border-transparent',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center gap-2 font-body font-medium rounded-xl border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-tech cursor-pointer'

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
