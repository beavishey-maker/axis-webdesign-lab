'use client'
import { useState } from 'react'
import styles from './HomeCover.module.css'
import HeroCopy from './HeroCopy'
import HeroGeometric from './HeroGeometric'
import HeroIntro from './HeroIntro'
import Button from '@/components/ui/Button'

export default function HomeCover() {
  const [done, setDone] = useState(false)

  return (
    <section className={styles.HomeCover} aria-label="ヒーローセクション">
      {/* Colorful gradient background */}
      <div className={styles.HomeCover_bg} aria-hidden="true" />

      {/* Geometric decorations (always visible) */}
      <HeroGeometric />

      {/* Canvas intro — unmounts when animation finishes */}
      {!done && <HeroIntro onDone={() => setDone(true)} />}

      {/* Content — mounts fresh after intro, so animation delays are relative to mount */}
      {done && (
        <>
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

          <div className={styles.HomeCover_scroll} aria-hidden="true">
            <span className={styles.HomeCover_scrollDot} />
            <span className={styles.HomeCover_scrollText}>Scroll</span>
          </div>
        </>
      )}
    </section>
  )
}
