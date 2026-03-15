'use client'
import { useRef, useState } from 'react'
import styles from './HomeProductTeaser.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import IconArrow from '@/components/ui/IconArrow'

const products = [
  {
    id: 'designkit',
    title: 'Axis Design Kit',
    description:
      'Figmaで使えるAxisオリジナルUIコンポーネントキット。400以上のコンポーネントとデザイントークンを収録。',
  },
  {
    id: 'cssframework',
    title: 'Axis CSS Framework',
    description:
      'Tailwindに依存しないネイティブCSSのレイアウトシステム。プリミティブコンポーネントで構成された軽量フレームワーク。',
  },
  {
    id: 'dataviz',
    title: 'Axis Data Viz',
    description:
      'React + D3で構築したデータビジュアライゼーションライブラリ。アクセシブルなチャートコンポーネント群。',
  },
]

export default function HomeProductTeaser() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      ref={ref}
      className={`${styles.HomeProductTeaser} ${isVisible ? styles['HomeProductTeaser--visible'] : ''}`}
      aria-label="プロダクト紹介"
    >
      <Center>
        <div className={styles.HomeProductTeaser_header}>
          <Subhead type="small" color="brand">Products</Subhead>
          <h2 className={styles.HomeProductTeaser_title}>Axis Tools</h2>
        </div>

        <div className={styles.HomeProductTeaser_list} role="list">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`${styles.HomeProductTeaser_item} ${openId === product.id ? styles['HomeProductTeaser_item--open'] : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              role="listitem"
            >
              <button
                className={styles.HomeProductTeaser_toggle}
                onClick={() => toggle(product.id)}
                aria-expanded={openId === product.id}
                aria-controls={`product-body-${product.id}`}
              >
                <span className={styles.HomeProductTeaser_itemTitle}>{product.title}</span>
                <span className={styles.HomeProductTeaser_arrow}>
                  <IconArrow direction={openId === product.id ? 'up' : 'down'} size={18} />
                </span>
              </button>
              <div
                id={`product-body-${product.id}`}
                className={styles.HomeProductTeaser_body}
                hidden={openId !== product.id}
              >
                <p className={styles.HomeProductTeaser_desc}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Center>
    </section>
  )
}
