'use client'
import { useEffect, useRef } from 'react'
import styles from './HomeCover.module.css'
import HeroCopy from './HeroCopy'
import Button from '@/components/ui/Button'

export default function HomeCover() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.load()
          observer.disconnect()
        }
      },
      { threshold: 0 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.HomeCover} aria-label="ヒーローセクション">
      {/* Fallback gradient background */}
      <div className={styles.HomeCover_bg} aria-hidden="true" />

      {/* Decorative video (if available) */}
      <video
        ref={videoRef}
        className={styles.HomeCover_video}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className={styles.HomeCover_overlay} aria-hidden="true" />

      {/* Content */}
      <div className={styles.HomeCover_content}>
        <HeroCopy />
        <p className={styles.HomeCover_sub}>
          デザインとテクノロジーの交差点に立つ<br />Webデザインスタジオ
        </p>
        <div className={styles.HomeCover_cta}>
          <Button href="/works" variant="white" size="lg">
            実績を見る
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            相談する
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.HomeCover_scroll} aria-hidden="true">
        <span className={styles.HomeCover_scrollDot} />
        <span className={styles.HomeCover_scrollText}>Scroll</span>
      </div>
    </section>
  )
}
