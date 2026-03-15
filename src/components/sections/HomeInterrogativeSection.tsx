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
      'デザインの美しさと実装の技術を両立するスタジオだから、見た目も動きも妥協しません。個人商店から企業まで、丁寧にヒアリングして世界観を形にします。',
  },
  {
    question: 'How',
    answer: 'どのように進めるか',
    description:
      'ヒアリング → デザイン提案 → 実装 → 公開という流れで迅速に進めます。LPなら最短数日、AIチャットボットやLINE連携も一括でお任せください。',
  },
  {
    question: 'What',
    answer: '何を提供するか',
    description:
      'LP・コーポレートサイト・管理画面・公式LINE・AIチャットボット・AI診断サービスまで、Webに関わるすべてをワンストップで提供します。',
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
