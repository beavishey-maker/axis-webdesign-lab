import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FooterCTA from '@/components/footer/FooterCTA'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Breadcrumb from '@/components/common/Breadcrumb'
import CompanyStatement from '@/components/footer/CompanyStatement'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About',
  description: 'Axis Web Design Labについて。デザインとテクノロジーの交差点に立つWebデザインスタジオ。',
}

const values = [
  {
    title: 'Design-First',
    description: 'すべてのプロジェクトでデザイン品質を最優先に考えます。美しさと機能性は対立しない。',
  },
  {
    title: 'Technology-Driven',
    description: '最新技術を追うだけでなく、適切な技術を選択し実装品質にこだわります。',
  },
  {
    title: 'User-Centered',
    description: 'エンドユーザーの体験を常に中心に置き、データと共感の両方を組み合わせます。',
  },
  {
    title: 'Transparent',
    description: 'プロセスを開示し、クライアントと一緒にプロジェクトを進めます。',
  },
]


export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.pageHero}>
          <Center>
            <Breadcrumb items={[{ label: 'About' }]} />
            <Subhead type="small" color="brand">About</Subhead>
            <h1 className={styles.pageTitle}>Hi, I&apos;m Axis.</h1>
            <p className={styles.pageSub}>
              仙台を拠点に活動するWebクリエイターです。<br />
              「このサイト、いいな」と思ってもらえるものを、<br />
              一緒に作りたいと思っています。<br />
              Webサイトで、あなたのビジネスを前に進めます。<br />
              デザインから実装まで、一貫して向き合います。
            </p>
          </Center>
        </div>

        {/* Mission */}
        <section aria-label="ミッション" className={styles.section}>
          <Center>
            <div className={styles.missionWrap}>
              <CompanyStatement theme="blue" />
            </div>
          </Center>
        </section>

        {/* Values */}
        <section aria-label="バリュー" className={`${styles.section} ${styles.sectionAlt}`}>
          <Center>
            <Subhead type="small" color="brand" className={styles.sectionLabel}>Values</Subhead>
            <h2 className={styles.sectionTitle}>What we believe</h2>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <div key={v.title} className={styles.valueItem}>
                  <span className={styles.valueNum}>0{i + 1}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.description}</p>
                </div>
              ))}
            </div>
          </Center>
        </section>

      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}
