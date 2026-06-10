import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Breadcrumb from '@/components/common/Breadcrumb'
import ContactForm from './ContactForm'
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

              <ContactForm />
            </div>
          </Center>
        </section>
      </main>
      <Footer />
    </>
  )
}
