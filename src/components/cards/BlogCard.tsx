import styles from './BlogCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'

interface BlogCardProps {
  title: string
  category: string
  date: string
  thumbnail?: string
  excerpt?: string
  href: string
}

export default function BlogCard({ title, category, date, thumbnail, excerpt, href }: BlogCardProps) {
  return (
    <Link href={href} className={styles.BlogCard}>
      <div className={styles.BlogCard_thumbWrap}>
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
            className={styles.BlogCard_img}
            loading="lazy"
          />
        ) : (
          <div className={styles.BlogCard_imgPlaceholder} aria-hidden="true" />
        )}
      </div>
      <div className={styles.BlogCard_body}>
        <div className={styles.BlogCard_meta}>
          <Badge variant="brand">{category}</Badge>
          <time className={styles.BlogCard_date} dateTime={date}>
            {new Date(date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>
        <h3 className={styles.BlogCard_title}>{title}</h3>
        {excerpt && <p className={styles.BlogCard_excerpt}>{excerpt}</p>}
      </div>
    </Link>
  )
}
