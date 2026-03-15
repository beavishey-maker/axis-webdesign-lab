import styles from './IconArrow.module.css'
import clsx from 'clsx'

interface IconArrowProps {
  direction?: 'right' | 'up' | 'left' | 'down'
  color?: 'white' | 'brand' | 'default'
  size?: number
}

export default function IconArrow({
  direction = 'right',
  color = 'default',
  size = 16,
}: IconArrowProps) {
  const rotationMap: Record<string, number> = {
    right: 0,
    up: -90,
    left: 180,
    down: 90,
  }

  const colorMap: Record<string, string> = {
    white: '#ffffff',
    brand: 'var(--color-brand)',
    default: 'currentColor',
  }

  return (
    <svg
      className={clsx(styles.IconArrow)}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotationMap[direction]}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke={colorMap[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
