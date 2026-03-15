'use client'
import { useRef } from 'react'
import styles from './WorkGridContainer.module.css'
import WorkCard from '@/components/cards/WorkCard'
import type { Work } from '@/data/types'

interface WorkGridContainerProps {
  works: Work[]
}

export default function WorkGridContainer({ works }: WorkGridContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--WorkGridContainer-loupeX', `${x}px`)
    el.style.setProperty('--WorkGridContainer-loupeY', `${y}px`)
    el.style.setProperty('--WorkGridContainer-loupeScale', '1')
  }

  const handleMouseLeave = () => {
    const el = containerRef.current
    if (!el) return
    el.style.setProperty('--WorkGridContainer-loupeScale', '0')
  }

  return (
    <div
      ref={containerRef}
      className={styles.WorkGridContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--WorkGridContainer-loupeX': '50%',
        '--WorkGridContainer-loupeY': '50%',
        '--WorkGridContainer-loupeScale': '0',
      } as React.CSSProperties}
    >
      <div className={styles.WorkGridContainer_loupe} aria-hidden="true" />
      <div className={styles.WorkGrid}>
        {works.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            expertise={work.expertise}
            thumbnail={work.thumbnail}
            href={work.href}
            year={work.year}
          />
        ))}
      </div>
    </div>
  )
}
