'use client'
import dynamic from 'next/dynamic'
import styles from './page.module.css'

const DataNodes = dynamic(() => import('@/components/common/DataNodes'), { ssr: false })

export default function AIDiagHeroClient() {
  return (
    <div className={styles.heroCanvas} aria-hidden="true">
      <DataNodes density={1.4} />
    </div>
  )
}
