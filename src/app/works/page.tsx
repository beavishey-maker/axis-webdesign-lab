import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FooterCTA from '@/components/footer/FooterCTA'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import WorkGridContainer from '@/components/grids/WorkGridContainer'
import Breadcrumb from '@/components/common/Breadcrumb'
import worksData from '@/data/works.json'
import type { Work } from '@/data/types'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Works',
  description: 'Axis Web Design Labの制作実績。UI/UXデザイン、Webデベロップメント、ブランドアイデンティティなど。',
}

export default function WorksPage() {
  const works = worksData as Work[]

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.pageHero}>
          <Center>
            <Breadcrumb items={[{ label: 'Works' }]} />
            <Subhead type="small" color="brand">Works</Subhead>
            <h1 className={styles.pageTitle}>Selected Works</h1>
            <p className={styles.pageSub}>デザインとテクノロジーの境界をなくした、私たちの仕事。</p>
          </Center>
        </div>
        <div className={styles.pageSection} aria-label="実績一覧">
          <Center>
            <WorkGridContainer works={works} />
          </Center>
        </div>
      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}
