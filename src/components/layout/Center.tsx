import styles from './Center.module.css'
import clsx from 'clsx'

interface CenterProps {
  children: React.ReactNode
  type?: 'default' | 'wide'
  className?: string
  as?: React.ElementType
}

export default function Center({
  children,
  type = 'default',
  className,
  as: Tag = 'div',
}: CenterProps) {
  return (
    <Tag className={clsx(styles.Center, styles[`Center--${type}`], className)}>
      {children}
    </Tag>
  )
}
