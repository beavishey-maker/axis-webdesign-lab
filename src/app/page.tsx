import GlobalGuideBanner from '@/components/header/GlobalGuideBanner'
import Header from '@/components/header/Header'
import HomeCover from '@/components/hero/HomeCover'
import HomeSectionHeading from '@/components/sections/HomeSectionHeading'
import HomeMarquee from '@/components/sections/HomeMarquee'
import HomeSnsSection from '@/components/sections/HomeSnsSection'
import HomeStats from '@/components/sections/HomeStats'
import HomeInterrogativeSection from '@/components/sections/HomeInterrogativeSection'
import HomeServiceTeaser from '@/components/sections/HomeServiceTeaser'
import BackdropWithScrollStatic from '@/components/sections/BackdropWithScrollStatic'
import HomeWorksSection from '@/components/sections/HomeWorksSection'
import HomeProductTeaser from '@/components/sections/HomeProductTeaser'
import FooterCTA from '@/components/footer/FooterCTA'
import Footer from '@/components/footer/Footer'
import CookieConsentLoader from '@/components/common/CookieConsentLoader'
import PageBlobs from '@/components/common/PageBlobs'
import ScrollInit from '@/components/common/ScrollInit'
import worksData from '@/data/works.json'
import type { Work } from '@/data/types'

export default function HomePage() {
  const works = worksData as Work[]

  return (
    <>
      {/* CSS parallax scroll tracker */}
      <ScrollInit />
      {/* Fixed background blobs with parallax */}
      <PageBlobs />

      <GlobalGuideBanner />
      <Header />
      <main id="main-content">
        {/* フルスクリーンヒーロー + イントロアニメーション */}
        <HomeCover />

        {/* "We Design [X]" ワードチェンジ */}
        <section aria-label="キャッチコピー" style={{ padding: 'var(--space-10) 0', background: 'var(--color-bg-white)' }}>
          <HomeSectionHeading />
        </section>

        {/* ダブルマーキー帯 */}
        <HomeMarquee />

        {/* SNSだけではもったいない — HP/LP訴求 */}
        <HomeSnsSection />

        {/* 実績数字カウントアップ */}
        <HomeStats />

        {/* Why / How / What */}
        <HomeInterrogativeSection />

        {/* 6サービス紹介 */}
        <HomeServiceTeaser />

        {/* リップルアニメーション背景CTA */}
        <BackdropWithScrollStatic />

        {/* 実績グリッド */}
        <HomeWorksSection works={works} />

        {/* FAQ */}
        <HomeProductTeaser />
      </main>

      {/* CTA + Footer */}
      <FooterCTA />
      <Footer />

      {/* Cookie同意 */}
      <CookieConsentLoader />
    </>
  )
}
