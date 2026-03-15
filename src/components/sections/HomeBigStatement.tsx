'use client'
import { useRef } from 'react'
import styles from './HomeBigStatement.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'

const words = [
  { text: 'Bold', color: '#2D4AFF' },
  { text: 'Fast', color: '#FF2D78' },
  { text: 'Smart', color: '#00C896' },
  { text: 'Yours.', color: '#FF6B35' },
]

export default function HomeBigStatement() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <div
      ref={ref}
      className={`${styles.Statement} ${isVisible ? styles['Statement--visible'] : ''}`}
    >
      {/* Animated background grid lines */}
      <div className={styles.Statement_grid} aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.Statement_gridLine} style={{ ['--gl-i' as string]: i }} />
        ))}
      </div>

      {/* Floating shapes */}
      <div className={styles.Statement_shapes} aria-hidden="true">
        <div className={`${styles.Statement_shape} ${styles.s1}`} />
        <div className={`${styles.Statement_shape} ${styles.s2}`} />
        <div className={`${styles.Statement_shape} ${styles.s3}`} />
        <div className={`${styles.Statement_shape} ${styles.s4}`} />
        <div className={`${styles.Statement_shape} ${styles.s5}`} />
      </div>

      <Center>
        <div className={styles.Statement_inner}>
          <p className={styles.Statement_label}>Our Craft</p>
          <div className={styles.Statement_words}>
            {words.map((w, i) => (
              <span
                key={i}
                className={styles.Statement_word}
                style={{
                  ['--sw-color' as string]: w.color,
                  animationDelay: `${i * 0.15}s`,
                }}
              >
                {w.text}
              </span>
            ))}
          </div>
          <p className={styles.Statement_sub}>
            あなたのビジョンを、世界が驚くWebに変える。
          </p>
        </div>
      </Center>
    </div>
  )
}
