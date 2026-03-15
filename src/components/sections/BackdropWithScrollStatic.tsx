'use client'
import { useEffect, useRef } from 'react'
import styles from './BackdropWithScrollStatic.module.css'
import Center from '@/components/layout/Center'
import Button from '@/components/ui/Button'

export default function BackdropWithScrollStatic() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const el = sectionRef.current
          if (!el) { ticking = false; return }
          const rect = el.getBoundingClientRect()
          const viewH = window.innerHeight
          const progress = Math.max(0, Math.min(1, 1 - rect.top / viewH))
          el.style.setProperty('--ripple-radius', `${progress * 200}%`)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className={styles.Backdrop}
      style={{ '--ripple-radius': '0%' } as React.CSSProperties}
      aria-label="CTAセクション"
    >
      <div className={styles.Backdrop_ripple} aria-hidden="true" />
      <Center>
        <div className={styles.Backdrop_content}>
          <h2 className={styles.Backdrop_title}>
            プロジェクトをAxis<br />と一緒に進めませんか
          </h2>
          <p className={styles.Backdrop_sub}>
            アイデアの段階からご相談ください。<br />
            最適なアプローチを一緒に考えます。
          </p>
          <Button href="/contact" variant="white" size="lg">
            無料で相談する
          </Button>
        </div>
      </Center>
    </section>
  )
}
