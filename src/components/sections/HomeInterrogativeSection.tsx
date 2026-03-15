'use client'
import { useRef } from 'react'
import styles from './HomeInterrogativeSection.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'

const items = [
  {
    question: 'Why',
    answer: '型にはまらない理由',
    description:
      'テンプレートも、業界の慣習も、関係ない。あなたのブランドに本当に合ったWebだけを作る。それがAxisの自由です。ルールよりも、あなたのビジョンを優先します。',
    color: '#2D4AFF',
  },
  {
    question: 'How',
    answer: '自由な進め方',
    description:
      '急ぎなら最短3時間納品、じっくり作りたければ何度でも修正OK。ヒアリング・デザイン・実装・公開まで一気通貫。あなたのペースと予算で、自由に進められます。',
    color: '#FF2D78',
  },
  {
    question: 'What',
    answer: '全部、自由',
    description:
      'デザインの方向性も、使う技術も、組み合わせも。LP・コーポレートサイト・AIチャットボット・LINE連携・AI診断——何でも自由に組み合わせて、あなただけのWebを。',
    color: '#00C896',
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
              style={{ ['--item-color' as string]: item.color, transitionDelay: `${i * 0.1}s` }}
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
