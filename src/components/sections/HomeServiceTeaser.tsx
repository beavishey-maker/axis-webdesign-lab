'use client'
import { useRef } from 'react'
import styles from './HomeServiceTeaser.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Button from '@/components/ui/Button'

const services = [
  {
    id: 'lp',
    title: 'LP・ホームページ制作',
    description:
      '飲食店・美容室・個人商店のLPを丁寧に仕上げます。ブランドの世界観を大切にしながら、集客・予約につながるデザインを提供します。',
    icon: '◎',
    color: 'var(--color-brand)',
  },
  {
    id: 'corp',
    title: 'コーポレートサイト',
    description:
      '企業・法人の信頼感を伝えるWebサイトを制作します。採用・IR・サービス紹介など目的に応じた設計で、ブランド価値を高めます。',
    icon: '⊡',
    color: 'var(--color-accent-4)',
  },
  {
    id: 'admin',
    title: '管理画面・システム開発',
    description:
      '予約管理・顧客管理・在庫管理など、業務を効率化する管理画面を開発します。使いやすいUIで現場に馴染むシステムを構築します。',
    icon: '⌥',
    color: 'var(--color-accent-3)',
  },
  {
    id: 'line',
    title: '公式LINE構築・設定',
    description:
      'LINE公式アカウントの開設からリッチメニュー設計・自動応答シナリオの構築まで対応。顧客との継続的な接点を整備します。',
    icon: '◈',
    color: 'var(--color-accent-1)',
  },
  {
    id: 'chatbot',
    title: 'AIチャットボット開発',
    description:
      '24時間自動で問い合わせ対応できるAIチャットボットを構築します。FAQへの回答から予約誘導まで、業種に合わせてカスタマイズします。',
    icon: '◉',
    color: '#00C896',
  },
  {
    id: 'ai-diag',
    title: 'AI診断・データ活用',
    description:
      'AI診断コンテンツを通じてユーザーと接点を持ちながら、ビッグデータを収集・分析するサービスを構築します。各種問診・相性診断などに応用可能です。',
    icon: '⬡',
    color: '#FF6B35',
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
              style={{ ['--service-color' as string]: service.color, transitionDelay: `${i * 0.1}s` }}
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
