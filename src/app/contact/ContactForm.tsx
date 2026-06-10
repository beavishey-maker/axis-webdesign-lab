'use client'

import { useState, FormEvent } from 'react'
import styles from './page.module.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mnjydddw', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className={`${styles.form_message} ${styles.form_message_success}`}>
        お問い合わせありがとうございました。2営業日以内にご連絡いたします。
      </p>
    )
  }

  return (
    <form className={styles.form} noValidate aria-label="お問い合わせフォーム" onSubmit={handleSubmit}>
      <div className={styles.form_field}>
        <label htmlFor="name" className={styles.form_label}>お名前 *</label>
        <input
          id="name"
          type="text"
          name="name"
          className={styles.form_input}
          placeholder="山田 太郎"
          required
          autoComplete="name"
        />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="company" className={styles.form_label}>会社名</label>
        <input
          id="company"
          type="text"
          name="company"
          className={styles.form_input}
          placeholder="株式会社サンプル"
          autoComplete="organization"
        />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="email" className={styles.form_label}>メールアドレス *</label>
        <input
          id="email"
          type="email"
          name="email"
          className={styles.form_input}
          placeholder="hello@example.com"
          required
          autoComplete="email"
        />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="budget" className={styles.form_label}>ご予算感</label>
        <select id="budget" name="budget" className={styles.form_select}>
          <option value="">選択してください</option>
          <option value="under-500k">50万円未満</option>
          <option value="500k-1m">50〜100万円</option>
          <option value="1m-3m">100〜300万円</option>
          <option value="over-3m">300万円以上</option>
          <option value="undecided">未定</option>
        </select>
      </div>
      <div className={styles.form_field}>
        <label htmlFor="message" className={styles.form_label}>お問い合わせ内容 *</label>
        <textarea
          id="message"
          name="message"
          className={styles.form_textarea}
          rows={6}
          placeholder="どのようなプロジェクトについてご相談されたいか、お聞かせください。"
          required
        />
      </div>
      {status === 'error' && (
        <p className={`${styles.form_message} ${styles.form_message_error}`}>
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
      <button
        type="submit"
        className={styles.form_submit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? '送信中...' : '送信する'}
      </button>
    </form>
  )
}
