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
import HomeHighlightStrip from '@/components/sections/HomeHighlightStrip'
import HomeBigStatement from '@/components/sections/HomeBigStatement'
import HomeGlowDivider from '@/components/sections/HomeGlowDivider'
import FooterCTA from '@/components/footer/FooterCTA'
import Footer from '@/components/footer/Footer'
import CookieConsentLoader from '@/components/common/CookieConsentLoader'
import PageBlobs from '@/components/common/PageBlobs'
import ScrollInit from '@/components/common/ScrollInit'
import ScrollShapes from '@/components/common/ScrollShapes'
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
      {/* Parallax decorative shapes */}
      <ScrollShapes />

      <GlobalGuideBanner />
      <Header />
      <main id="main-content">
        {/* フルスクリーンヒーロー + 文字集合アニメ */}
        <HomeCover />

        {/* "We Design [X]" ワードチェンジ */}
        <section aria-label="キャッチコピー" style={{ padding: 'var(--space-10) 0', background: 'var(--color-bg-white)' }}>
          <HomeSectionHeading />
        </section>

        <HomeGlowDivider color="#2D4AFF" />

        {/* ダブルマーキー帯 */}
        <HomeMarquee />

        <HomeGlowDivider color="#FF2D78" />

        {/* SNSだけではもったいない — HP/LP訴求 */}
        <HomeSnsSection />

        {/* ハイライト4カード */}
        <HomeHighlightStrip />

        <HomeGlowDivider color="#00C896" />

        {/* 実績数字カウントアップ */}
        <HomeStats />

        <HomeGlowDivider color="#FF6B35" />

        {/* Bold / Fast / Smart / Yours. — ビッグステートメント */}
        <HomeBigStatement />

        <HomeGlowDivider color="#8B2DFF" />

        {/* Why / How / What */}
        <HomeInterrogativeSection />

        <HomeGlowDivider color="#2D4AFF" />

        {/* 6サービス紹介 */}
        <HomeServiceTeaser />

        {/* リップルアニメーション背景CTA */}
        <BackdropWithScrollStatic />

        {/* 実績グリッド */}
        <HomeWorksSection works={works} />

        <HomeGlowDivider color="#FF2D78" />

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
