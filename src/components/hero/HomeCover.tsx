'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './HomeCover.module.css'
import HeroCopy from './HeroCopy'
import HeroGeometric from './HeroGeometric'
import HeroIntro from './HeroIntro'
import Button from '@/components/ui/Button'

export default function HomeCover() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <section className={styles.HomeCover} aria-label="ヒーローセクション">
      {/* Colorful gradient background */}
      <div className={styles.HomeCover_bg} aria-hidden="true" />

      {/* Geometric decorations */}
      <HeroGeometric />

      {/* Canvas intro — plays behind the text */}
      {!introDone && <HeroIntro onDone={() => setIntroDone(true)} />}

      {/* Background image */}
      <Image
        src="/1.png"
        alt=""
        fill
        className={styles.HomeCover_bgImg}
        priority
        aria-hidden="true"
      />

      {/* Content — always on top, letters fly in immediately */}
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
    </section>
  )
}
