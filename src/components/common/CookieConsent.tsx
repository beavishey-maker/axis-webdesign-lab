'use client'
import { useEffect, useState } from 'react'
import styles from './CookieConsent.module.css'

const STORAGE_KEY = 'axis-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) {
      // Delay slightly for better UX
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className={styles.CookieConsent}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie同意バナー"
    >
      <div className={styles.CookieConsent_inner}>
        <p className={styles.CookieConsent_text}>
          このサイトではCookieを使用してユーザー体験を向上させています。
          詳細は{' '}
          <a href="/cookies" className={styles.CookieConsent_link}>Cookie ポリシー</a>
          をご覧ください。
        </p>
        <div className={styles.CookieConsent_actions}>
          <button className={styles.CookieConsent_decline} onClick={decline}>
            拒否
          </button>
          <button className={styles.CookieConsent_accept} onClick={accept}>
            同意する
          </button>
        </div>
      </div>
    </div>
  )
}
