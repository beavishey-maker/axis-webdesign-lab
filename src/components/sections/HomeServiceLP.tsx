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

const timeline = [
  { time: '0:00', label: 'ヒアリング開始', done: false },
  { time: '0:30', label: 'デザイン着手', done: false },
  { time: '2:00', label: '実装・コーディング', done: false },
  { time: '3:00', label: '公開完了 🚀', done: true },
]

export default function HomeServiceLP() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <section
      ref={ref}
      className={`${styles.wrap} ${isVisible ? styles['wrap--visible'] : ''}`}
      aria-label="音速LP制作サービス"
    >
      <div className={styles.canvas} aria-hidden="true">
        <SonicNotes speed={3} density={1.2} />
      </div>
      <div className={styles.vignette} aria-hidden="true" />

      <Center>
        <div className={styles.layout}>

          {/* Copy — left */}
          <div className={styles.copy}>
            <div className={styles.badge}>LP Production</div>
            <h2 className={styles.title}>
              <span className={styles.titleAccent}>音速</span>LP
            </h2>
            <p className={styles.tagline}>アイデアが冷める前に、世界へ。</p>
            <p className={styles.desc}>
              ヒアリングからデザイン・実装・公開まで、最短3時間で完成させるLP制作サービス。
              スピードだけでなく、クオリティにも妥協しません。
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
              <Button href="/services/lp" variant="default" size="lg">詳しく見る</Button>
              <Button href="/contact" variant="outline" size="lg">今すぐ相談</Button>
            </div>
          </div>

          {/* Visual — right: delivery timeline card */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.card}>
              <div className={styles.card_head}>
                <span className={styles.card_dot} />
                <span className={styles.card_headLabel}>音速納品タイムライン</span>
              </div>
              <ul className={styles.timeline}>
                {timeline.map((item) => (
                  <li
                    key={item.time}
                    className={`${styles.timeline_item} ${item.done ? styles['timeline_item--done'] : ''}`}
                  >
                    <span className={styles.timeline_node} aria-hidden="true" />
                    <span className={styles.timeline_time}>{item.time}</span>
                    <span className={styles.timeline_label}>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </Center>
    </section>
  )
}
