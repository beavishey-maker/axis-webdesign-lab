import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FooterCTA from '@/components/footer/FooterCTA'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Button from '@/components/ui/Button'
import AIDiagHeroClient from './AIDiagHeroClient'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'AI診断 × データ収集 | Axis Web Design Lab',
  description:
    'ユーザーに価値ある診断体験を提供しながら属性・行動データを自動収集。爪整体AI診断など実績多数。Axis Web Design Labが構築するデータドリブンな診断サービス。',
}

const merits = [
  {
    side: 'user',
    title: 'ユーザーが得るもの',
    items: [
      { icon: '🔍', text: 'パーソナライズされた診断結果' },
      { icon: '💡', text: '自分に合ったケア・商品の提案' },
      { icon: '📊', text: 'スコアと経過の可視化' },
      { icon: '🌐', text: '多言語対応で世界中から利用可能' },
    ],
    color: '#00D4FF',
  },
  {
    side: 'biz',
    title: 'ビジネスが得るもの',
    items: [
      { icon: '📈', text: 'ユーザー属性・症状データの蓄積' },
      { icon: '🎯', text: 'ターゲット精度の高いマーケティング' },
      { icon: '🔄', text: 'CRM・LINE・メール自動連携' },
      { icon: '📉', text: '問い合わせ対応コストの削減' },
    ],
    color: '#c084fc',
  },
]

const steps = [
  {
    num: '01',
    title: '診断コンテンツ設計',
    desc: 'ターゲット・目的・収集したいデータ項目をヒアリング。質問設計からUI/UXまで一気通貫で構築します。',
    color: '#c084fc',
  },
  {
    num: '02',
    title: '診断を公開・拡散',
    desc: 'WebサイトへのLP組み込み・SNSシェア設計・LINE連携など、最大数のユーザーに届けるフローを整備します。',
    color: '#00D4FF',
  },
  {
    num: '03',
    title: 'データ収集・分析・活用',
    desc: 'スプレッドシート・CRM・ダッシュボードへ自動連携。蓄積データでマーケ施策・商品開発に活かします。',
    color: '#00E87A',
  },
]

const useCases = [
  { icon: '💅', title: '美容・ヘルスケア', desc: '爪・肌・髪・体型診断。結果に連動した商品提案でコンバージョン向上。', color: '#c084fc' },
  { icon: '🍽', title: '飲食・栄養', desc: '食習慣・体質診断からパーソナルメニューを提案。リピーター獲得に直結。', color: '#FF6B35' },
  { icon: '🏠', title: '不動産・インテリア', desc: 'ライフスタイル診断で理想の物件・部屋スタイルを提案。成約率UP。', color: '#FFD900' },
  { icon: '👗', title: 'ファッション', desc: 'パーソナルカラー・骨格診断から似合うアイテムを自動レコメンド。', color: '#FF2D78' },
  { icon: '🏥', title: '医療・クリニック', desc: '症状問診票のデジタル化。来院前データで診察効率を大幅改善。', color: '#00D4FF' },
  { icon: '📚', title: '教育・スクール', desc: '学習スタイル・目標診断で最適なコースを提案。入学率向上。', color: '#00E87A' },
]

const features = [
  { title: 'マルチステップ診断', desc: 'ユーザーが飽きないよう、段階的な質問フローをカスタム設計します。' },
  { title: 'AI回答エンジン', desc: '回答パターンをAIで分析し、最適な診断結果を動的に生成します。' },
  { title: '多言語対応', desc: '日本語・英語・アラビア語など多言語に対応。インバウンド・海外展開も視野に。' },
  { title: 'リアルタイムデータ連携', desc: 'Googleスプレッドシート・HubSpot・Notion等へ診断データを即時転送。' },
  { title: 'LINE / メール連携', desc: '診断後にLINEで結果通知、フォローアップメッセージを自動配信。' },
  { title: 'ダッシュボード', desc: '回答傾向・属性分布・日別推移をビジュアル化したレポート画面を提供。' },
]

const plans = [
  {
    name: 'スターター',
    price: '¥89,800',
    note: '税込 〜',
    features: [
      '診断項目：最大15問',
      '結果パターン：最大8種',
      'データ連携：スプレッドシート',
      '多言語：日本語のみ',
      '修正：無制限',
    ],
    color: '#00D4FF',
  },
  {
    name: 'スタンダード',
    price: '¥148,000',
    note: '税込 〜',
    features: [
      '診断項目：最大30問',
      '結果パターン：最大20種',
      'データ連携：スプレッドシート + LINE',
      '多言語：2言語',
      '修正：無制限',
      'AIレコメンド機能',
    ],
    color: '#c084fc',
    featured: true,
  },
  {
    name: 'プレミアム',
    price: '¥248,000',
    note: '税込 〜',
    features: [
      '診断項目：無制限',
      '結果パターン：無制限',
      'データ連携：CRM + 任意API',
      '多言語：制限なし',
      '修正：無制限',
      'AIレコメンド機能',
      'ダッシュボード付き',
      'A/Bテスト対応',
    ],
    color: '#FF6B35',
  },
]

const faqs = [
  {
    q: '診断の質問内容は自分で考える必要がありますか？',
    a: 'ご要望をヒアリングしたうえで、Axisが質問設計・分岐ロジック・結果文章まですべて提案・作成します。もちろんご自身でご用意いただいた内容の実装も可能です。',
  },
  {
    q: '収集したデータはどこに保存されますか？',
    a: 'Googleスプレッドシート・Notion・お客様指定のCRMなど、ご要望の保存先に対応します。個人情報取り扱いに関するプライバシーポリシーの設置もサポートします。',
  },
  {
    q: '既存のWebサイトに組み込めますか？',
    a: 'はい。iframeやJavaScriptウィジェットとして既存サイトへ埋め込み可能です。WordPressやSquarespaceなどのCMSにも対応しています。',
  },
  {
    q: '爪整体のような医療・ヘルスケア系にも対応できますか？',
    a: '対応実績があります。ただし、診断結果は医療行為ではなく「参考情報」として提供するための免責文・UX設計を必ず行います。',
  },
  {
    q: '診断数・ユーザー数に上限はありますか？',
    a: '基本的に制限なしで運用可能です。大量アクセスが予想される場合はインフラ設計についてご相談ください。',
  },
]

export default function AIDiagPage() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero ── */}
        <section className={styles.hero} aria-label="AI診断 × データ収集">
          <AIDiagHeroClient />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <Center>
            <div className={styles.heroInner}>
              <div className={styles.heroBadge}>AI Diagnosis × Data Collection</div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitlePurple}>AI診断</span>
                <span className={styles.heroTitleSep}>×</span>
                データ収集
              </h1>
              <p className={styles.heroTagline}>ユーザーに価値を。ビジネスに洞察を。</p>
              <p className={styles.heroSub}>
                ユーザーは診断で自分を知り、あなたのビジネスはそのデータで顧客を知る。<br />
                双方にメリットをもたらす新しいデータ収集のかたち。
              </p>
              <div className={styles.heroCta}>
                <Button href="/contact" variant="default" size="lg">無料相談する</Button>
                <Button href="#cases" variant="outline" size="lg">事例を見る</Button>
              </div>
            </div>
          </Center>
        </section>

        {/* ── Win-Win メリット ── */}
        <section className={styles.section} aria-label="双方のメリット">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>Win-Win Model</Subhead>
            <h2 className={styles.sectionTitle}>ユーザーも、ビジネスも、得をする</h2>
            <div className={styles.meritsGrid}>
              {merits.map((m) => (
                <div
                  key={m.side}
                  className={styles.meritCard}
                  style={{ ['--mc' as string]: m.color }}
                >
                  <h3 className={styles.meritTitle}>{m.title}</h3>
                  <ul className={styles.meritList}>
                    {m.items.map((item) => (
                      <li key={item.text} className={styles.meritItem}>
                        <span aria-hidden="true">{item.icon}</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Center>
        </section>

        {/* ── How it works ── */}
        <section className={styles.sectionDark} aria-label="仕組み">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>How It Works</Subhead>
            <h2 className={styles.sectionTitleLight}>3ステップで診断×データ収集を実現</h2>
            <div className={styles.steps}>
              {steps.map((step) => (
                <div key={step.num} className={styles.step} style={{ ['--sc' as string]: step.color }}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </Center>
        </section>

        {/* ── Use Cases ── */}
        <section className={styles.section} aria-label="活用シーン">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>Use Cases</Subhead>
            <h2 className={styles.sectionTitle}>あらゆる業種に展開できる</h2>
            <div className={styles.casesGrid}>
              {useCases.map((c) => (
                <div
                  key={c.title}
                  className={styles.caseCard}
                  style={{ ['--cc' as string]: c.color }}
                >
                  <span className={styles.caseIcon} aria-hidden="true">{c.icon}</span>
                  <h3 className={styles.caseTitle}>{c.title}</h3>
                  <p className={styles.caseDesc}>{c.desc}</p>
                </div>
              ))}
            </div>
          </Center>
        </section>

        {/* ── Case Study ── */}
        <section className={styles.sectionDark} id="cases" aria-label="導入事例">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>Case Study</Subhead>
            <h2 className={styles.sectionTitleLight}>導入事例：爪整体 AI健康診断</h2>
            <div className={styles.caseStudy}>
              <div className={styles.caseStudyVisual}>
                <div className={styles.caseStudyPhone}>
                  <div className={styles.caseStudyPhoneBar}>
                    <span className={styles.caseStudyPhoneCamera} />
                  </div>
                  <div className={styles.caseStudyPhoneScreen}>
                    <Image
                      src="/works/nail-seitai.jpg"
                      alt="爪整体 AI健康診断サービス"
                      fill
                      className={styles.caseStudyImg}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.caseStudyContent}>
                <div className={styles.caseStudyBadge}>nail ebon — 爪整体</div>
                <h3 className={styles.caseStudyTitle}>
                  爪の画像×問診で<br />AI健康スクリーニング
                </h3>
                <p className={styles.caseStudyDesc}>
                  爪の状態・生活習慣・症状を組み合わせたマルチステップ診断を構築。
                  ユーザーはAI診断スコアを受け取り、爪整体の施術提案へ自然に誘導されます。
                  同時に属性データ・症状データが蓄積され、施術メニュー開発とマーケティングに活用されています。
                </p>
                <div className={styles.caseStudyStats}>
                  <div className={styles.caseStudyStat}>
                    <span>3言語</span>
                    <small>日・英・アラビア語対応</small>
                  </div>
                  <div className={styles.caseStudyStat}>
                    <span>AI診断</span>
                    <small>画像×問診の複合分析</small>
                  </div>
                  <div className={styles.caseStudyStat}>
                    <span>自動連携</span>
                    <small>LINE通知＋データ収集</small>
                  </div>
                </div>
                <Button href="https://nail-ebon.vercel.app/ja" variant="outline" size="md">
                  サイトを見る
                </Button>
              </div>
            </div>
          </Center>
        </section>

        {/* ── Features ── */}
        <section className={styles.section} aria-label="機能">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>Features</Subhead>
            <h2 className={styles.sectionTitle}>標準搭載の機能</h2>
            <div className={styles.featuresGrid}>
              {features.map((f, i) => (
                <div key={f.title} className={styles.featureCard}>
                  <div className={styles.featureNum}>0{i + 1}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </Center>
        </section>

        {/* ── Pricing ── */}
        <section className={styles.sectionDark} id="plans" aria-label="料金プラン">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>Pricing</Subhead>
            <h2 className={styles.sectionTitleLight}>料金プラン</h2>
            <div className={styles.plansGrid}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`${styles.planCard} ${plan.featured ? styles['planCard--featured'] : ''}`}
                  style={{ ['--pc' as string]: plan.color }}
                >
                  {plan.featured && <div className={styles.planBadge}>人気No.1</div>}
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
                    このプランで相談する
                  </Button>
                </div>
              ))}
            </div>
            <p className={styles.plansNote}>
              ※ 上記は目安価格です。診断の複雑さ・連携先・機能により変動します。まずはお気軽にご相談ください。
            </p>
          </Center>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.section} aria-label="よくある質問">
          <Center>
            <Subhead type="small" color="brand" className={styles.subhead}>FAQ</Subhead>
            <h2 className={styles.sectionTitle}>よくある質問</h2>
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
