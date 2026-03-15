import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FooterCTA from '@/components/footer/FooterCTA'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Button from '@/components/ui/Button'
import SonicLpHero from './SonicLpHero'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: '音速LP制作 | Axis Web Design Lab',
  description:
    'ヒアリングからデザイン・実装・公開まで最短3時間。音速でLPを作るAxis Web Design Labの高速LP制作サービス。',
}

const features = [
  {
    icon: '⚡',
    title: '最短3時間納品',
    desc: 'ヒアリング30分→デザイン1.5h→実装・公開1hの超高速フロー。アイデアが熱いうちに世界へ届けます。',
    color: '#FFD900',
  },
  {
    icon: '🎨',
    title: 'クオリティ妥協なし',
    desc: 'スピードを出しながらもデザインは手抜きなし。モバイルファースト・アクセシビリティ対応で完成度を担保します。',
    color: '#FF2D78',
  },
  {
    icon: '♾',
    title: '無制限修正',
    desc: '納品後のフィードバックにも無制限で対応。「もう少しここを…」が何度でも言えます。',
    color: '#00E87A',
  },
  {
    icon: '📐',
    title: 'フルカスタムデザイン',
    desc: 'テンプレートは使いません。あなたのブランドに合わせた唯一のデザインを一から構築します。',
    color: '#00D4FF',
  },
  {
    icon: '🚀',
    title: 'SEO・パフォーマンス最適化',
    desc: 'Core Web Vitalsを意識した高速ページ。Lighthouseスコア90以上を標準で目指します。',
    color: '#c084fc',
  },
  {
    icon: '🔗',
    title: 'LINE・CRM連携',
    desc: 'フォーム送信をLINE通知・スプレッドシート連携・CRMへ自動連携。リード漏れゼロを実現します。',
    color: '#FF6B35',
  },
]

const steps = [
  {
    num: '01',
    title: 'ヒアリング',
    time: '30分',
    desc: 'オンラインMTG or テキストで目的・ターゲット・参考デザインを確認。ブリーフシートに沿って進むので迷いなく進行できます。',
    color: '#FFD900',
  },
  {
    num: '02',
    title: 'デザイン・実装',
    time: '〜2時間',
    desc: 'Figmaでワイヤー確認後、即コーディング。Next.js / React製で高速かつ保守性の高いコードで実装します。',
    color: '#FF2D78',
  },
  {
    num: '03',
    title: '公開・修正対応',
    time: '〜30分',
    desc: 'Vercel or お客様サーバーへデプロイ。確認後に微調整があれば即対応。翌日以降の修正も無制限で受け付けます。',
    color: '#00E87A',
  },
]

const plans = [
  {
    id: 'light',
    name: 'ライト',
    price: '¥49,800',
    note: '税込 〜',
    features: [
      'ページ数：1ページ',
      'セクション数：5〜7',
      '納期：最短当日〜3日',
      'モバイル対応',
      '修正：無制限',
      'フォーム設置',
    ],
    color: '#FFD900',
    cta: 'このプランで相談する',
  },
  {
    id: 'standard',
    name: 'スタンダード',
    price: '¥89,800',
    note: '税込 〜',
    features: [
      'ページ数：1〜3ページ',
      'セクション数：8〜12',
      '納期：最短3日〜1週間',
      'モバイル対応',
      '修正：無制限',
      'フォーム＋LINE通知',
      'アニメーション演出',
      'SEO基本対応',
    ],
    color: '#FF2D78',
    cta: 'このプランで相談する',
    featured: true,
  },
  {
    id: 'premium',
    name: 'プレミアム',
    price: '¥148,000',
    note: '税込 〜',
    features: [
      'ページ数：制限なし',
      'セクション数：制限なし',
      '納期：ご相談',
      'モバイル対応',
      '修正：無制限',
      'フォーム＋CRM連携',
      'フルアニメーション',
      'SEO詳細対応',
      'A/Bテスト設計',
    ],
    color: '#c084fc',
    cta: 'このプランで相談する',
  },
]

const faqs = [
  {
    q: '本当に3時間で納品できますか？',
    a: 'シンプルな構成（5〜7セクション）であれば最短3時間以内に公開まで完了します。ただし、素材の準備やヒアリングの密度によって変わるため、まずは無料相談でご確認ください。',
  },
  {
    q: 'デザインの方向性はどこまで自由ですか？',
    a: '完全フルカスタムです。テンプレートを使わないため、ブランドカラー・フォント・雰囲気をゼロから作ります。参考サイトをいくつかご共有いただければ、方向性をすぐに掴みます。',
  },
  {
    q: '修正対応の「無制限」とは？',
    a: '納品後のテキスト・画像・色・レイアウト変更は無制限で対応します。追加機能の開発は別途お見積もりとなります。',
  },
  {
    q: 'ドメインや hosting の費用は別途かかりますか？',
    a: 'はい。Vercel（無料〜）・さくらサーバー等のホスティング費用、ドメイン取得費用は別途となります。ご希望であれば一緒にセットアップします。',
  },
  {
    q: '納品後に自分でテキストを編集できますか？',
    a: 'デフォルトはコードベースの納品ですが、CMSを組み込むことも可能です（スタンダード以上で対応可、要相談）。',
  },
]

export default function SonicLpPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero ── */}
        <section className={styles.hero} aria-label="音速LP">
          <SonicLpHero />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <Center>
            <div className={styles.heroInner}>
              <div className={styles.heroBadge}>High-Speed LP Production</div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleYellow}>音速</span>LP
              </h1>
              <p className={styles.heroTagline}>アイデアが冷める前に、世界へ。</p>
              <p className={styles.heroSub}>
                ヒアリング→デザイン→実装→公開まで<strong>最短3時間</strong>。<br />
                スピードとクオリティを両立した、Axisだけの超高速LP制作サービス。
              </p>
              <div className={styles.heroCta}>
                <Button href="/contact" variant="default" size="lg">無料相談する</Button>
                <Button href="#plans" variant="outline" size="lg">料金を見る</Button>
              </div>
            </div>
          </Center>
        </section>

        {/* ── Features ── */}
        <section className={styles.section} aria-label="特徴">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>Features</Subhead>
            <h2 className={styles.sectionTitle}>音速LPが選ばれる理由</h2>
            <div className={styles.featuresGrid}>
              {features.map((f) => (
                <div
                  key={f.icon}
                  className={styles.featureCard}
                  style={{ ['--fc' as string]: f.color }}
                >
                  <div className={styles.featureIcon} aria-hidden="true">{f.icon}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </Center>
        </section>

        {/* ── Process ── */}
        <section className={styles.sectionDark} aria-label="制作フロー">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>Process</Subhead>
            <h2 className={styles.sectionTitleLight}>3ステップで公開まで</h2>
            <div className={styles.steps}>
              {steps.map((step, i) => (
                <div key={step.num} className={styles.step} style={{ ['--sc' as string]: step.color }}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepHeader}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <span className={styles.stepTime}>{step.time}</span>
                    </div>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={styles.stepArrow} aria-hidden="true">→</div>
                  )}
                </div>
              ))}
            </div>
          </Center>
        </section>

        {/* ── Pricing ── */}
        <section className={styles.section} id="plans" aria-label="料金プラン">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>Pricing</Subhead>
            <h2 className={styles.sectionTitle}>料金プラン</h2>
            <div className={styles.plansGrid}>
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`${styles.planCard} ${plan.featured ? styles['planCard--featured'] : ''}`}
                  style={{ ['--pc' as string]: plan.color }}
                >
                  {plan.featured && (
                    <div className={styles.planBadge}>人気No.1</div>
                  )}
                  <div className={styles.planName}>{plan.name}</div>
                  <div className={styles.planPrice}>
                    {plan.price}
                    <span className={styles.planNote}>{plan.note}</span>
                  </div>
                  <ul className={styles.planFeatures}>
                    {plan.features.map((feat) => (
                      <li key={feat} className={styles.planFeature}>
                        <span aria-hidden="true">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={plan.featured ? 'default' : 'outline'} size="md">
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
            <p className={styles.plansNote}>
              ※ 上記は目安価格です。ページ構成・機能により変動します。まずはお気軽にご相談ください。
            </p>
          </Center>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.sectionDark} aria-label="よくある質問">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>FAQ</Subhead>
            <h2 className={styles.sectionTitleLight}>よくある質問</h2>
            <dl className={styles.faqList}>
              {faqs.map((item) => (
                <div key={item.q} className={styles.faqItem}>
                  <dt className={styles.faqQ}>{item.q}</dt>
                  <dd className={styles.faqA}>{item.a}</dd>
                </div>
              ))}
            </dl>
          </Center>
        </section>

      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}
