'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './HomeStats.module.css'

const stats = [
  { value: 50, suffix: '+', label: '制作実績', sub: 'Projects' },
  { value: 3,  suffix: 'h~', label: '最短納品', sub: 'Min. Delivery' },
  { value: 24, suffix: 'h', label: 'AI対応', sub: 'AI Support' },
  { value: 98, suffix: '%', label: '顧客満足度', sub: 'Satisfaction' },
]

function Counter({ target, suffix, active, delay }: {
  target: number; suffix: string; active: boolean; delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const timer = setTimeout(() => {
      let start: number | null = null
      const duration = 1600
      const step = (ts: number) => {
        if (!start) start = ts
        const prog = Math.min((ts - start) / duration, 1)
        const eased = 1 - Math.pow(1 - prog, 3)
        setCount(Math.round(eased * target))
        if (prog < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay)
    return () => clearTimeout(timer)
  }, [active, target, delay])

  return <>{count}{suffix}</>
}

export default function HomeStats() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className={styles.HomeStats} aria-label="実績数字">
      <div className={styles.HomeStats_inner}>
        {stats.map((s, i) => (
          <div key={s.label} className={styles.HomeStats_item}>
            <div className={styles.HomeStats_value}>
              <Counter target={s.value} suffix={s.suffix} active={active} delay={i * 180} />
            </div>
            <div className={styles.HomeStats_label}>{s.label}</div>
            <div className={styles.HomeStats_sub}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
