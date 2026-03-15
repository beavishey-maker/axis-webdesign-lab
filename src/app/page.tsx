import GlobalGuideBanner from '@/components/header/GlobalGuideBanner'
import Header from '@/components/header/Header'
import HomeCover from '@/components/hero/HomeCover'
import HomeSectionHeading from '@/components/sections/HomeSectionHeading'
import HomeInterrogativeSection from '@/components/sections/HomeInterrogativeSection'
import HomeServiceTeaser from '@/components/sections/HomeServiceTeaser'
import BackdropWithScrollStatic from '@/components/sections/BackdropWithScrollStatic'
import HomeWorksSection from '@/components/sections/HomeWorksSection'
import HomeProductTeaser from '@/components/sections/HomeProductTeaser'
import HomeBlogSection from '@/components/sections/HomeBlogSection'
import FooterCTA from '@/components/footer/FooterCTA'
import Footer from '@/components/footer/Footer'
import CookieConsentLoader from '@/components/common/CookieConsentLoader'
import worksData from '@/data/works.json'
import blogData from '@/data/blog.json'
import type { Work, BlogPost } from '@/data/types'

export default function HomePage() {
  const works = worksData as Work[]
  const blogPosts = blogData as BlogPost[]

  return (
    <>
      <GlobalGuideBanner />
      <Header />
      <main id="main-content">
        {/* フルスクリーンヒーロー */}
        <HomeCover />

        {/* "We Design [X]" ワードチェンジ */}
        <section aria-label="キャッチコピー" style={{ padding: 'var(--space-10) 0', background: 'var(--color-bg-white)' }}>
          <HomeSectionHeading />
        </section>

        {/* Why / How / What */}
        <HomeInterrogativeSection />

        {/* 4サービス紹介 */}
        <HomeServiceTeaser />

        {/* リップルアニメーション背景CTA */}
        <BackdropWithScrollStatic />

        {/* 実績グリッド */}
        <HomeWorksSection works={works} />

        {/* アコーディオン（プロダクト） */}
        <HomeProductTeaser />

        {/* ブログ横スクロール */}
        <HomeBlogSection posts={blogPosts} />
      </main>

      {/* CTA + Footer */}
      <FooterCTA />
      <Footer />

      {/* Cookie同意 */}
      <CookieConsentLoader />
    </>
  )
}
