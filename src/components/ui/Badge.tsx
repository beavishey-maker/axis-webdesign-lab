import styles from './Badge.module.css'
import clsx from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'pink' | 'yellow' | 'teal' | 'orange'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span className={clsx(styles.Badge, styles[`Badge--${variant}`], className)}>
      {children}
    </span>
  )
}
