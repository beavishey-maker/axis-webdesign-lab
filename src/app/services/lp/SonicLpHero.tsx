'use client'
import dynamic from 'next/dynamic'
import styles from './page.module.css'

const SonicNotes = dynamic(() => import('@/components/common/SonicNotes'), { ssr: false })

export default function SonicLpHero() {
  return (
    <div className={styles.heroCanvas} aria-hidden="true">
      <SonicNotes speed={3} density={2} />
    </div>
  )
}
