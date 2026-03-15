import styles from './Cluster.module.css'
import clsx from 'clsx'

interface ClusterProps {
  children: React.ReactNode
  align?: 'center' | 'start' | 'end'
  justify?: 'spaceBetween' | 'center' | 'start' | 'end'
  gap?: string
  className?: string
  as?: React.ElementType
}

export default function Cluster({
  children,
  align = 'center',
  justify = 'start',
  gap,
  className,
  as: Tag = 'div',
}: ClusterProps) {
  const justifyMap: Record<string, string> = {
    spaceBetween: 'space-between',
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
  }

  const alignMap: Record<string, string> = {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
  }

  return (
    <Tag
      className={clsx(styles.Cluster, className)}
      style={{
        alignItems: alignMap[align],
        justifyContent: justifyMap[justify],
        gap: gap ?? undefined,
      }}
    >
      {children}
    </Tag>
  )
}
