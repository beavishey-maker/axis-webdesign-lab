'use client'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import styles from './HomeServiceLP.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Button from '@/components/ui/Button'

const SonicNotes = dynamic(() => import('@/components/common/SonicNotes'), { ssr: false })

const stats = [
  { value: '3h~', label: '最短納品' },
  { value: '¥49,800~', label: '価格' },
  { value: '∞', label: '修正回数' },
]

export default function HomeServiceLP() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <section
      ref={ref}
      className={`${styles.HomeServiceLP} ${isVisible ? styles['HomeServiceLP--visible'] : ''}`}
      aria-label="音速LP制作サービス"
    >
      {/* Flying notes canvas */}
      <div className={styles.HomeServiceLP_canvas} aria-hidden="true">
        <SonicNotes speed={3} density={1.5} />
      </div>

      <Center>
        <div className={styles.HomeServiceLP_inner}>
          <div className={styles.HomeServiceLP_badge}>New Service</div>

          <h2 className={styles.HomeServiceLP_title}>
            <span className={styles.HomeServiceLP_titleEn}>音速</span>
            <span className={styles.HomeServiceLP_titleJa}>LP</span>
          </h2>

          <p className={styles.HomeServiceLP_tagline}>
            アイデアが冷める前に、世界へ。
          </p>

          <p className={styles.HomeServiceLP_desc}>
            ヒアリングからデザイン・実装・公開まで、最短3時間で完成させるLP制作サービス。
            スピードだけでなく、クオリティにも妥協しません。
          </p>

          <div className={styles.HomeServiceLP_stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.HomeServiceLP_stat}>
                <span className={styles.HomeServiceLP_statValue}>{s.value}</span>
                <span className={styles.HomeServiceLP_statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.HomeServiceLP_cta}>
            <Button href="/services/lp" variant="default" size="lg">
              詳しく見る
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              今すぐ相談
            </Button>
          </div>
        </div>
      </Center>
    </section>
  )
}
