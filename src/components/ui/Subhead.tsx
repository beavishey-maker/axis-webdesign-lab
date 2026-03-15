import styles from './Subhead.module.css'
import clsx from 'clsx'

interface SubheadProps {
  children: React.ReactNode
  type?: 'medium' | 'small' | 'xs'
  color?: 'brand' | 'default' | 'muted'
  className?: string
  as?: React.ElementType
}

export default function Subhead({
  children,
  type = 'medium',
  color = 'default',
  className,
  as: Tag = 'p',
}: SubheadProps) {
  return (
    <Tag className={clsx(styles.Subhead, styles[`Subhead--${type}`], styles[`Subhead--${color}`], className)}>
      {children}
    </Tag>
  )
}
