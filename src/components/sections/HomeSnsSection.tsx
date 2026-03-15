'use client'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './HomeSnsSection.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Button from '@/components/ui/Button'

const points = [
  {
    id: 'attention',
    emoji: '📱',
    color: '#2D4AFF',
    bg: 'rgba(45,74,255,0.08)',
    label: 'SNSで注目を集めても',
    heading: 'みんな、すぐ\n目移りする。',
    body: 'リール・TikTok・ストーリーズ——コンテンツが溢れるSNS時代、どんなに刺さる投稿でも3秒後には次の投稿へ。お金と時間をかけて集めた注目は、放っておけばそのまま流れていく。',
    image: '/2.png',
  },
  {
    id: 'convert',
    emoji: '⚡',
    color: '#FF2D78',
    bg: 'rgba(255,45,120,0.08)',
    label: '最後の一押しが全てを決める',
    heading: '打率を上げる\n「決め」の場所。',
    body: '野球と同じ。どれだけ出塁しても、打点がなければ点が入らない。HPやLPは、SNSで興味を持った人を「行動」まで連れていく最後の決定打。ここが弱ければ、すべての努力がもったいない。',
    image: '/3.png',
  },
  {
    id: 'asset',
    emoji: '🏆',
    color: '#00C896',
    bg: 'rgba(0,200,150,0.08)',
    label: '資産として働き続ける',
    heading: '24時間、無言で\n売り続ける。',
    body: 'SNS投稿は流れていくが、HPは積み上がる。一度作れば検索からも人が来る。寝ている間も、旅行中も、あなたの代わりに説明し、信頼を積み、問い合わせを呼び込み続ける最強のセールスマンだ。',
    image: '/10.png',
  },
]

export default function HomeSnsSection() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <section
      ref={ref}
      className={`${styles.HomeSns} ${isVisible ? styles['HomeSns--visible'] : ''}`}
      aria-label="なぜHPが必要か"
    >
      {/* ── Header ── */}
      <div className={styles.HomeSns_head}>
        <Center>
          <p className={styles.HomeSns_eyebrow}>Why you need a website</p>
          <h2 className={styles.HomeSns_title}>
            SNSだけでは、<br />
            <span className={styles.HomeSns_titleAccent}>もったいない。</span>
          </h2>
          <p className={styles.HomeSns_subtitle}>
            時間とお金をかけてSNSで注目を集めても、<br className={styles.HomeSns_br} />
            最後の「決め」が弱ければ全部こぼれてしまう。<br className={styles.HomeSns_br} />
            集客の打率を上げるのがHP・LPの本当の仕事です。
          </p>
        </Center>
      </div>

      {/* ── 3 cards ── */}
      <Center>
        <div className={styles.HomeSns_grid}>
          {points.map((p, i) => (
            <div
              key={p.id}
              className={styles.HomeSns_card}
              style={{
                '--card-color': p.color,
                '--card-bg': p.bg,
                animationDelay: `${i * 0.15}s`,
              } as React.CSSProperties}
            >
              <div className={styles.HomeSns_cardImg}>
                <Image src={p.image} alt="" fill className={styles.HomeSns_cardImgEl} />
              </div>
              <div className={styles.HomeSns_cardTop}>
                <span className={styles.HomeSns_emoji} aria-hidden="true">{p.emoji}</span>
                <span className={styles.HomeSns_label}>{p.label}</span>
              </div>
              <h3 className={styles.HomeSns_cardHeading}>
                {p.heading.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </h3>
              <p className={styles.HomeSns_cardBody}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* ── Bottom statement ── */}
        <div className={styles.HomeSns_cta}>
          <p className={styles.HomeSns_ctaText}>
            打率を上げる。それが<strong>Axis Web Design Lab</strong> のHP・LP制作です。
          </p>
          <Button href="/contact" variant="default" size="lg">
            まず相談してみる
          </Button>
        </div>
      </Center>
    </section>
  )
}
