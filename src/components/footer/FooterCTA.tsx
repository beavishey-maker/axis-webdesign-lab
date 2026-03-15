'use client'
import { useRef } from 'react'
import styles from './FooterCTA.module.css'
import Center from '@/components/layout/Center'
import Button from '@/components/ui/Button'

export default function FooterCTA() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--FooterCTA-loupeX', `${x}px`)
    el.style.setProperty('--FooterCTA-loupeY', `${y}px`)
    el.style.setProperty('--FooterCTA-loupeScale', '1')
  }

  const handleMouseLeave = () => {
    const el = containerRef.current
    if (!el) return
    el.style.setProperty('--FooterCTA-loupeScale', '0')
  }

  return (
    <section
      className={styles.FooterCTA}
      aria-label="お問い合わせCTA"
    >
      <div
        ref={containerRef}
        className={styles.FooterCTA_inner}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          '--FooterCTA-loupeX': '50%',
          '--FooterCTA-loupeY': '50%',
          '--FooterCTA-loupeScale': '0',
        } as React.CSSProperties}
      >
        <div className={styles.FooterCTA_loupe} aria-hidden="true" />
        <Center>
          <div className={styles.FooterCTA_content}>
            <h2 className={styles.FooterCTA_title}>
              Let&apos;s work<br />together.
            </h2>
            <p className={styles.FooterCTA_sub}>
              新しいプロジェクトのご相談、お見積もり、<br />
              まずはカジュアルにお話しましょう。
            </p>
            <div className={styles.FooterCTA_actions}>
              <Button href="/contact" variant="white" size="lg">
                プロジェクトを相談する
              </Button>
              <Button href="/works" variant="outline" size="lg">
                実績を見る
              </Button>
            </div>
          </div>
        </Center>
      </div>
    </section>
  )
}
