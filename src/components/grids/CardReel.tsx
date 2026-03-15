import styles from './CardReel.module.css'
import clsx from 'clsx'

interface CardReelProps {
  children: React.ReactNode
  className?: string
}

export default function CardReel({ children, className }: CardReelProps) {
  return (
    <div className={clsx(styles.CardReel, className)} role="list">
      {children}
    </div>
  )
}
