import styles from './Button.module.css'
import clsx from 'clsx'
import IconArrow from './IconArrow'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'default' | 'white' | 'outline'
  size?: 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  showArrow?: boolean
}

export default function Button({
  children,
  variant = 'default',
  size = 'md',
  href,
  onClick,
  className,
  type = 'button',
  showArrow = true,
}: ButtonProps) {
  const cls = clsx(
    styles.Button,
    styles[`Button--${variant}`],
    styles[`Button--${size}`],
    className
  )

  const arrowColor = variant === 'default' ? 'white' : variant === 'outline' ? 'brand' : 'default'

  const inner = (
    <>
      <span>{children}</span>
      {showArrow && <IconArrow direction="right" color={arrowColor} size={14} />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}
