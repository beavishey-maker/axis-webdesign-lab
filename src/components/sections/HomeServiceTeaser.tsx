'use client'
import { useRef } from 'react'
import styles from './HomeServiceTeaser.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Button from '@/components/ui/Button'

const services = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description:
      'ユーザーリサーチから始まり、情報設計・インタラクションデザイン・プロトタイピングまで、一気通貫で対応します。',
    icon: '◎',
    color: 'var(--color-brand)',
  },
  {
    id: 'webdev',
    title: 'Web Development',
    description:
      'Next.js / React をベースに、パフォーマンスとアクセシビリティを両立した高品質なフロントエンドを実装します。',
    icon: '⌥',
    color: 'var(--color-accent-4)',
  },
  {
    id: 'brand',
    title: 'Brand Identity',
    description:
      'ロゴ・カラー・タイポグラフィ・トーン＆マナーを策定し、ブランドの核を視覚言語として定義します。',
    icon: '◈',
    color: 'var(--color-accent-1)',
  },
  {
    id: 'ds',
    title: 'Design System',
    description:
      'コンポーネントライブラリとドキュメントを整備し、デザインと開発の一貫性を保つ共通基盤を構築します。',
    icon: '⊞',
    color: 'var(--color-accent-3)',
  },
]

export default function HomeServiceTeaser() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <section
      ref={ref}
      className={`${styles.HomeServiceTeaser} ${isVisible ? styles['HomeServiceTeaser--visible'] : ''}`}
      aria-label="サービス紹介"
    >
      <Center>
        <div className={styles.HomeServiceTeaser_header}>
          <div>
            <Subhead type="small" color="brand">Services</Subhead>
            <h2 className={styles.HomeServiceTeaser_title}>
              What we do
            </h2>
          </div>
          <Button href="/services" variant="outline" size="md">
            すべてのサービス
          </Button>
        </div>

        <div className={styles.HomeServiceTeaser_grid}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className={styles.HomeServiceTeaser_card}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className={styles.HomeServiceTeaser_icon}
                style={{ color: service.color }}
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className={styles.HomeServiceTeaser_name}>{service.title}</h3>
              <p className={styles.HomeServiceTeaser_desc}>{service.description}</p>
            </div>
          ))}
        </div>
      </Center>
    </section>
  )
}
