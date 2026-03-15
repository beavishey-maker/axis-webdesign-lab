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
      className={`${styles.wrap} ${isVisible ? styles['wrap--visible'] : ''}`}
      aria-label="AI診断・データ収集サービス"
    >
      <div className={styles.canvas} aria-hidden="true">
        <DataNodes density={0.9} />
      </div>
      <div className={styles.vignette} aria-hidden="true" />

      <Center>
        <div className={styles.layout}>

          {/* Visual — left: phone mockup */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.mockupWrap}>
              <div className={styles.mockup}>
                <div className={styles.mockupBar}>
                  <span className={styles.mockupCamera} />
                </div>
                <div className={styles.mockupScreen}>
                  <Image
                    src="/works/nail-seitai.jpg"
                    alt="爪整体 AI診断サービス"
                    fill
                    className={styles.mockupImg}
                  />
                </div>
              </div>
              <div className={styles.scoreBadge}>
                <span className={styles.scoreBadge_label}>AI診断スコア</span>
                <span className={styles.scoreBadge_value}>92</span>
                <span className={styles.scoreBadge_status}>健康状態：良好</span>
              </div>
            </div>
          </div>

          {/* Copy — right */}
          <div className={styles.copy}>
            <div className={styles.badge}>AI × Data</div>
            <h2 className={styles.title}>
              診断で集める。<br />
              <span className={styles.titleAccent}>データ</span>で育てる。
            </h2>
            <p className={styles.tagline}>ユーザーに価値を。ビジネスに洞察を。</p>
            <p className={styles.desc}>
              ユーザーに価値ある診断体験を提供しながら、
              属性・症状・行動データを自動収集。
              顧客理解とマーケティング精度を同時に高める次世代のデータ収集モデルです。
            </p>
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.cta}>
              <Button href="/services/ai-diagnosis" variant="default" size="lg">詳しく見る</Button>
              <Button href="/contact" variant="outline" size="lg">相談する</Button>
            </div>
          </div>

        </div>
      </Center>
    </section>
  )
}
