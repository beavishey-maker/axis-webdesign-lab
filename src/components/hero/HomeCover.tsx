'use client'
import styles from './HomeCover.module.css'
import HeroCopy from './HeroCopy'
import HeroGeometric from './HeroGeometric'
import Button from '@/components/ui/Button'

export default function HomeCover() {
  return (
    <section className={styles.HomeCover} aria-label="ヒーローセクション">
      {/* Colorful gradient background */}
      <div className={styles.HomeCover_bg} aria-hidden="true" />

      {/* Hero video — fades out to reveal white background */}
      <video
        className={styles.HomeCover_video}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        src="/hero.mp4"
      />

      {/* Geometric decorations */}
      <HeroGeometric />

      {/* Content */}
      <div className={styles.HomeCover_content}>
        <HeroCopy />
        <p className={styles.HomeCover_sub}>
          デザインとテクノロジーの交差点に立つ<br />Webデザインスタジオ
        </p>
        <div className={styles.HomeCover_cta}>
          <Button href="/works" variant="default" size="lg">
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
