'use client'
import { useRef } from 'react'
import styles from './HomeHighlightStrip.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'

const items = [
  { text: 'デザイン × コード = 感動', color: '#2D4AFF', icon: '✦', bg: 'rgba(45,74,255,0.08)' },
  { text: '最速3時間で納品', color: '#FF2D78', icon: '⚡', bg: 'rgba(255,45,120,0.08)' },
  { text: 'AIが変える未来のWeb', color: '#00C896', icon: '◎', bg: 'rgba(0,200,150,0.08)' },
  { text: '仙台発、全国対応', color: '#FF6B35', icon: '★', bg: 'rgba(255,107,53,0.08)' },
]

export default function HomeHighlightStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <div
      ref={ref}
      className={`${styles.Strip} ${isVisible ? styles['Strip--visible'] : ''}`}
    >
      <Center>
        <div className={styles.Strip_grid}>
          {items.map((item, i) => (
            <div
              key={i}
              className={styles.Strip_card}
              style={{
                ['--strip-color' as string]: item.color,
                ['--strip-bg' as string]: item.bg,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <span className={styles.Strip_icon} aria-hidden="true">{item.icon}</span>
              <span className={styles.Strip_text}>{item.text}</span>
              <span className={styles.Strip_glow} aria-hidden="true" />
            </div>
          ))}
        </div>
      </Center>
    </div>
  )
}
