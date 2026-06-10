import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Breadcrumb from '@/components/common/Breadcrumb'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Axis Web Design Labのプライバシーポリシー。お客様の個人情報の取り扱いについて説明します。',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.hero}>
          <Center>
            <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
            <Subhead type="small" color="brand">Legal</Subhead>
            <h1 className={styles.pageTitle}>Privacy Policy</h1>
            <p className={styles.updated}>最終更新日: 2025年1月1日</p>
          </Center>
        </div>

        <div className={styles.content}>
          <Center>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>1. 事業者情報</h2>
              <p className={styles.text}>
                Axis Web Design Lab（以下「当サービス」）は、個人として運営するWebデザイン・開発サービスです。
                本プライバシーポリシーは、当サービスにおける個人情報の取り扱いについて定めるものです。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>2. 取得する個人情報</h2>
              <p className={styles.text}>
                当サービスでは、お問い合わせフォームを通じて以下の情報を取得します。
              </p>
              <p className={styles.text}>
                ・お名前<br />
                ・メールアドレス<br />
                ・お問い合わせ内容
              </p>
              <p className={styles.text}>
                これらの情報は、お客様がフォームに入力・送信された場合にのみ取得します。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>3. 利用目的</h2>
              <p className={styles.text}>
                取得した個人情報は、お問い合わせへの返答のみを目的として利用します。
                それ以外の目的（マーケティング、分析など）には一切使用しません。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>4. 第三者への提供</h2>
              <p className={styles.text}>
                取得した個人情報は、法令に基づく場合を除き、第三者に提供・開示することはありません。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>5. 個人情報の管理</h2>
              <p className={styles.text}>
                取得した個人情報は適切に管理し、不正アクセス・紛失・改ざん・漏洩の防止に努めます。
                お問い合わせへの対応が完了し、保管の必要がなくなった情報は適切に削除します。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>6. お問い合わせ</h2>
              <p className={styles.text}>
                個人情報の開示・訂正・削除等のご要望、またはプライバシーポリシーに関するご質問は、
                <Link href="/contact" className={styles.link}>お問い合わせフォーム</Link>よりご連絡ください。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>7. ポリシーの変更</h2>
              <p className={styles.text}>
                本ポリシーは、必要に応じて予告なく変更することがあります。
                変更後のポリシーは、本ページに掲載した時点で効力を生じるものとします。
              </p>
            </div>
          </Center>
        </div>
      </main>
      <Footer />
    </>
  )
}
