import styles from './WorkCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import clsx from 'clsx'

interface WorkCardProps {
  title?: string
  expertise?: string[]
  thumbnail?: string
  href?: string
  year?: number
  _skeleton?: boolean
}

export default function WorkCard({
  title,
  expertise,
  thumbnail,
  href = '#',
  year,
  _skeleton = false,
}: WorkCardProps) {
  if (_skeleton) {
    return (
      <div className={clsx(styles.WorkCard, styles['WorkCard--skeleton'])} aria-hidden="true">
        <div className={styles.WorkCard_thumb} />
        <div className={styles.WorkCard_body}>
          <div className={styles.WorkCard_skeletonLine} style={{ width: '70%' }} />
          <div className={styles.WorkCard_skeletonLine} style={{ width: '40%', height: '20px' }} />
        </div>
      </div>
    )
  }

  return (
    <Link href={href} className={styles.WorkCard}>
      <div className={styles.WorkCard_thumbWrap}>
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title ?? ''}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className={styles.WorkCard_img}
            loading="lazy"
          />
        ) : (
          <div className={styles.WorkCard_imgPlaceholder} aria-hidden="true" />
        )}
        <div className={styles.WorkCard_overlay} aria-hidden="true" />
      </div>
      <div className={styles.WorkCard_body}>
        <div className={styles.WorkCard_meta}>
          {expertise?.map((tag) => (
            <Badge key={tag} variant="default">{tag}</Badge>
          ))}
          {year && <span className={styles.WorkCard_year}>{year}</span>}
        </div>
        <h3 className={styles.WorkCard_title}>{title}</h3>
      </div>
    </Link>
  )
}
