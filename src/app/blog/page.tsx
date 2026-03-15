import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Breadcrumb from '@/components/common/Breadcrumb'
import BlogCard from '@/components/cards/BlogCard'
import blogData from '@/data/blog.json'
import type { BlogPost } from '@/data/types'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Axis Web Design Labのブログ。デザイン・開発・ブランディングに関するインサイトを発信します。',
}

export default function BlogPage() {
  const posts = blogData as BlogPost[]

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.pageHero}>
          <Center>
            <Breadcrumb items={[{ label: 'Blog' }]} />
            <Subhead type="small" color="brand">Blog</Subhead>
            <h1 className={styles.pageTitle}>Insights</h1>
          </Center>
        </div>
        <div className={styles.pageSection} aria-label="ブログ記事一覧">
          <Center>
            <div className={styles.blogGrid}>
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  category={post.category}
                  date={post.date}
                  thumbnail={post.thumbnail}
                  excerpt={post.excerpt}
                  href={post.href}
                />
              ))}
            </div>
          </Center>
        </div>
      </main>
      <Footer />
    </>
  )
}
