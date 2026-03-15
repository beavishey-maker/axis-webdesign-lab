'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './HomeSectionHeading.module.css'
import { useIntersection } from '@/lib/useIntersection'

const words = ['Experiences', 'Systems', 'Identities', 'Products']

export default function HomeSectionHeading() {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersection(ref)
  const [currentWord, setCurrentWord] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrentWord((i) => (i + 1) % words.length)
        setAnimating(false)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <div
      ref={ref}
      className={`${styles.HomeSectionHeading} ${isVisible ? styles['HomeSectionHeading_visible'] : ''}`}
    >
      <h2 className={styles.HomeSectionHeading_title}>
        <span className={styles.HomeSectionHeading_static}>We Design</span>
        <span
          className={`${styles.HomeSectionHeading_word} ${animating ? styles['HomeSectionHeading_word--out'] : styles['HomeSectionHeading_word--in']}`}
        >
          {words[currentWord]}
        </span>
      </h2>
    </div>
  )
}
