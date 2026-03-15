import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Breadcrumb from '@/components/common/Breadcrumb'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Axis Web Design Labへのお問い合わせ。プロジェクトのご相談、お見積もりなど、お気軽にご連絡ください。',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.pageHero}>
          <Center>
            <Breadcrumb items={[{ label: 'Contact' }]} />
            <Subhead type="small" color="brand">Contact</Subhead>
            <h1 className={styles.pageTitle}>Get in touch.</h1>
            <p className={styles.pageSub}>
              プロジェクトのご相談からカジュアルなご質問まで、
              どんな内容でもお気軽にご連絡ください。
            </p>
          </Center>
        </div>

        <section aria-label="お問い合わせフォーム" className={styles.formSection}>
          <Center>
            <div className={styles.formGrid}>
              <div className={styles.formInfo}>
                <h2 className={styles.formInfo_title}>よくあるご相談</h2>
                <ul className={styles.formInfo_list} role="list">
                  {[
                    '新規Webサイトの制作・リニューアル',
                    'UI/UXデザインの改善',
                    'ブランドアイデンティティの策定',
                    'デザインシステムの構築',
                    '既存サービスのフロントエンド実装',
                  ].map((item) => (
                    <li key={item} className={styles.formInfo_item}>
                      <span className={styles.formInfo_bullet} aria-hidden="true">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <form className={styles.form} noValidate aria-label="お問い合わせフォーム">
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
                  <label htmlFor="message" className={styles.form_label}>プロジェクト概要 *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.form_textarea}
                    rows={6}
                    placeholder="どのようなプロジェクトについてご相談されたいか、お聞かせください。"
                    required
                  />
                </div>
                <button type="submit" className={styles.form_submit}>
                  送信する
                </button>
              </form>
            </div>
          </Center>
        </section>
      </main>
      <Footer />
    </>
  )
}
