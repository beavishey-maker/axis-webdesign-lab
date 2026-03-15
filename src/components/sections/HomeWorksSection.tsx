'use client'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './HomeWorksSection.module.css'
import { useIntersection } from '@/lib/useIntersection'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Button from '@/components/ui/Button'
import WorkGridContainer from '@/components/grids/WorkGridContainer'
import type { Work } from '@/data/types'

interface HomeWorksSectionProps {
  works: Work[]
}

export default function HomeWorksSection({ works }: HomeWorksSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIntersection(ref)

  return (
    <section
      ref={ref}
      className={`${styles.HomeWorksSection} ${isVisible ? styles['HomeWorksSection--visible'] : ''}`}
      aria-label="制作実績"
    >
      <Center>
        <div className={styles.HomeWorksSection_header}>
          <div>
            <Subhead type="small" color="brand">Works</Subhead>
            <h2 className={styles.HomeWorksSection_title}>Selected Works</h2>
          </div>
          <div className={styles.HomeWorksSection_mockup} aria-hidden="true">
            <Image src="/9.png" alt="" fill className={styles.HomeWorksSection_mockupImg} />
          </div>
          <Button href="/works" variant="outline" size="md">
            すべての実績
          </Button>
        </div>
        <WorkGridContainer works={works.slice(0, 6)} />
      </Center>
    </section>
  )
}
