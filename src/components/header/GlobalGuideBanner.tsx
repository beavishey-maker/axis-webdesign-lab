'use client'
import { useEffect, useState } from 'react'
import styles from './GlobalGuideBanner.module.css'

const STORAGE_KEY = 'axis-banner-closed'

export default function GlobalGuideBanner() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const closed = sessionStorage.getItem(STORAGE_KEY)
    if (!closed) setVisible(true)
  }, [])

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem(STORAGE_KEY, '1')
    }, 300)
  }

  if (!visible) return null

  return (
    <div
      className={`${styles.Banner} ${closing ? styles['Banner--closing'] : ''}`}
      role="banner"
      aria-label="お知らせバナー"
    >
      <p className={styles.Banner_text}>
        Axis Web Design Lab — 新しいプロジェクトの相談を受け付けています
      </p>
      <button
        className={styles.Banner_close}
        onClick={handleClose}
        aria-label="バナーを閉じる"
      >
        ✕
      </button>
    </div>
  )
}
