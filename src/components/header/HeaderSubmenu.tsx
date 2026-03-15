'use client'
import styles from './HeaderSubmenu.module.css'
import Link from 'next/link'

interface SubmenuItem {
  label: string
  description: string
  href: string
}

interface HeaderSubmenuProps {
  isOpen: boolean
  items: SubmenuItem[]
  id: string
}

export default function HeaderSubmenu({ isOpen, items, id }: HeaderSubmenuProps) {
  return (
    <div
      id={id}
      className={`${styles.Submenu} ${isOpen ? styles['Submenu--open'] : ''}`}
      role="region"
    >
      <div className={styles.Submenu_inner}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={styles.Submenu_item}>
            <span className={styles.Submenu_itemLabel}>{item.label}</span>
            <span className={styles.Submenu_itemDesc}>{item.description}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
