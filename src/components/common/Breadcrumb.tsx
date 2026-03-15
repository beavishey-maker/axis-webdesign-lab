import styles from './Breadcrumb.module.css'
import Link from 'next/link'
import IconArrow from '@/components/ui/IconArrow'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.Breadcrumb} aria-label="パンくずリスト">
      <ol className={styles.Breadcrumb_list} role="list">
        <li className={styles.Breadcrumb_item}>
          <Link href="/" className={styles.Breadcrumb_link}>Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className={styles.Breadcrumb_item}>
            <span className={styles.Breadcrumb_sep} aria-hidden="true">
              <IconArrow direction="right" size={12} />
            </span>
            {item.href ? (
              <Link href={item.href} className={styles.Breadcrumb_link}>{item.label}</Link>
            ) : (
              <span className={styles.Breadcrumb_current} aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
