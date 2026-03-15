import styles from './Stack.module.css'
import clsx from 'clsx'

type SpaceKey = 'space-3' | 'space-4' | 'space-5' | 'space-6' | 'space-7' | 'space-8'

interface StackProps {
  children: React.ReactNode
  space?: SpaceKey
  className?: string
  as?: React.ElementType
}

export default function Stack({
  children,
  space = 'space-6',
  className,
  as: Tag = 'div',
}: StackProps) {
  return (
    <Tag
      className={clsx(styles.Stack, className)}
      style={{ '--Stack-space': `var(--${space})` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
