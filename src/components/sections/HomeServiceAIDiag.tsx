'use client'
import { useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './HomeServiceAIDiag.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Button from '@/components/ui/Button'

const DataNodes = dynamic(() => import('@/components/common/DataNodes'), { ssr: false })

const stats = [
  { value: '93%', label: 'ユーザー満足度' },
  { value: '3.2×', label: '平均滞在時間' },
  { value: '自動', label: 'データ収集' },
]

export default function HomeServiceAIDiag() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <section
      ref={ref}
      className={`${styles.HomeServiceAIDiag} ${isVisible ? styles['HomeServiceAIDiag--visible'] : ''}`}
      aria-label="AI診断・データ収集サービス"
    >
      {/* Data network canvas */}
      <div className={styles.HomeServiceAIDiag_canvas} aria-hidden="true">
        <DataNodes density={0.9} />
      </div>

      {/* Dark vignette */}
      <div className={styles.HomeServiceAIDiag_vignette} aria-hidden="true" />

      <Center>
        <div className={styles.HomeServiceAIDiag_layout}>

          {/* ── Left: copy ── */}
          <div className={styles.HomeServiceAIDiag_copy}>
            <div className={styles.HomeServiceAIDiag_badge}>AI × Data</div>

            <h2 className={styles.HomeServiceAIDiag_title}>
              診断で集める。<br />
              <span className={styles.HomeServiceAIDiag_titleAccent}>データ</span>で育てる。
            </h2>

            <p className={styles.HomeServiceAIDiag_desc}>
              ユーザーに価値ある診断体験を提供しながら、
              属性・症状・行動データを自動収集。
              顧客理解とマーケティング精度を同時に高める、
              次世代のデータ収集モデルです。
            </p>

            <div className={styles.HomeServiceAIDiag_stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.HomeServiceAIDiag_stat}>
                  <span className={styles.HomeServiceAIDiag_statValue}>{s.value}</span>
                  <span className={styles.HomeServiceAIDiag_statLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.HomeServiceAIDiag_cta}>
              <Button href="/services/ai-diagnosis" variant="default" size="lg">
                詳しく見る
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                相談する
              </Button>
            </div>
          </div>

          {/* ── Right: phone mockup ── */}
          <div className={styles.HomeServiceAIDiag_mockupWrap} aria-hidden="true">
            <div className={styles.HomeServiceAIDiag_mockup}>
              {/* Phone notch */}
              <div className={styles.HomeServiceAIDiag_mockupBar}>
                <span className={styles.HomeServiceAIDiag_mockupCamera} />
              </div>
              {/* Screen */}
              <div className={styles.HomeServiceAIDiag_mockupScreen}>
                <Image
                  src="/works/nail-seitai.jpg"
                  alt="爪整体 AI診断サービス"
                  fill
                  className={styles.HomeServiceAIDiag_mockupImg}
                />
              </div>
            </div>
            {/* Score badge floating over mockup */}
            <div className={styles.HomeServiceAIDiag_scoreBadge}>
              <span className={styles.HomeServiceAIDiag_scoreBadge_label}>AI診断スコア</span>
              <span className={styles.HomeServiceAIDiag_scoreBadge_value}>92</span>
              <span className={styles.HomeServiceAIDiag_scoreBadge_status}>健康状態：良好</span>
            </div>
          </div>

        </div>
      </Center>
    </section>
  )
}
