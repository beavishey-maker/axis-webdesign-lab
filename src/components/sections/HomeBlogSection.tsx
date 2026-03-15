'use client'
import { useRef } from 'react'
import styles from './HomeBlogSection.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Button from '@/components/ui/Button'
import CardReel from '@/components/grids/CardReel'
import BlogCard from '@/components/cards/BlogCard'
import type { BlogPost } from '@/data/types'

interface HomeBlogSectionProps {
  posts: BlogPost[]
}

export default function HomeBlogSection({ posts }: HomeBlogSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <section
      ref={ref}
      className={`${styles.HomeBlogSection} ${isVisible ? styles['HomeBlogSection--visible'] : ''}`}
      aria-label="ブログ"
    >
      <Center>
        <div className={styles.HomeBlogSection_header}>
          <div>
            <Subhead type="small" color="brand">Blog</Subhead>
            <h2 className={styles.HomeBlogSection_title}>Insights</h2>
          </div>
          <Button href="/blog" variant="outline" size="md">
            すべての記事
          </Button>
        </div>
      </Center>
      <div className={styles.HomeBlogSection_reelWrap}>
        <Center type="wide">
          <CardReel>
            {posts.map((post) => (
              <div key={post.id} role="listitem">
                <BlogCard
                  title={post.title}
                  category={post.category}
                  date={post.date}
                  thumbnail={post.thumbnail}
                  excerpt={post.excerpt}
                  href={post.href}
                />
              </div>
            ))}
          </CardReel>
        </Center>
      </div>
    </section>
  )
}
