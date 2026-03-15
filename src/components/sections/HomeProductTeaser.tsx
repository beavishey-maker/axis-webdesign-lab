'use client'
import { useRef, useState } from 'react'
import styles from './HomeProductTeaser.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import IconArrow from '@/components/ui/IconArrow'

const products = [
  {
    id: 'faq-01',
    title: 'どんな業種・規模でも対応できますか？',
    description:
      'はい、対応可能です。飲食店・美容室・整体院などの個人商店から、不動産会社・電気工事会社・政治家事務所まで幅広い業種の実績があります。まずはお気軽にご相談ください。',
  },
  {
    id: 'faq-02',
    title: '最短どれくらいで完成しますか？',
    description:
      'シンプルなLPであれば最短数日〜1週間で公開可能です。AIチャットボットや公式LINEの連携、管理画面の開発を含む場合は内容に応じてご相談のうえ納期をご提案します。',
  },
  {
    id: 'faq-03',
    title: '公式LINEやAIチャットボットも一緒に頼めますか？',
    description:
      'もちろんです。Webサイトの制作と同時に、公式LINEの開設・設定やAIチャットボットの構築をセットでご依頼いただけます。問い合わせ対応を自動化したい方にも最適です。',
  },
  {
    id: 'faq-04',
    title: 'AIを使ったデータ収集サービスとはどういうものですか？',
    description:
      'AI診断コンテンツ（爪診断・体質診断・相性診断など）を通じてユーザーにアクションしてもらい、そのデータをビッグデータとして蓄積・分析するサービスです。マーケティングや商品開発への活用も可能です。',
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
          <Subhead type="small" color="brand">FAQ</Subhead>
          <h2 className={styles.HomeProductTeaser_title}>よくある質問</h2>
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
