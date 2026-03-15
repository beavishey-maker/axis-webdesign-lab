'use client'
import { useRef } from 'react'
import styles from './HomeInterrogativeSection.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'

const items = [
  {
    question: 'Why',
    answer: 'Axisに頼む理由',
    description:
      'デザインとエンジニアリングを一体で捉えるチームだから、ビジュアルと実装品質が同時に高水準を保ちます。',
  },
  {
    question: 'How',
    answer: 'どのように進めるか',
    description:
      'リサーチ → 設計 → プロトタイプ → 実装のサイクルを短く回し、早期にフィードバックを取り込みながら進めます。',
  },
  {
    question: 'What',
    answer: '何を提供するか',
    description:
      'UI/UXデザイン、フロントエンド開発、ブランドアイデンティティ、デザインシステム構築を包括的に提供します。',
  },
]

export default function HomeInterrogativeSection() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <section
      ref={ref}
      className={`${styles.HomeInterrogative} ${isVisible ? styles['HomeInterrogative--visible'] : ''}`}
      aria-label="なぜAxisか"
    >
      <Center>
        <Subhead type="small" color="brand" className={styles.HomeInterrogative_label}>
          Our Approach
        </Subhead>
        <div className={styles.HomeInterrogative_grid}>
          {items.map((item, i) => (
            <div
              key={item.question}
              className={styles.HomeInterrogative_item}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={styles.HomeInterrogative_question}>{item.question}</span>
              <h3 className={styles.HomeInterrogative_answer}>{item.answer}</h3>
              <p className={styles.HomeInterrogative_desc}>{item.description}</p>
            </div>
          ))}
        </div>
      </Center>
    </section>
  )
}
