import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Breadcrumb from '@/components/common/Breadcrumb'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Axis Web Design LabのCookieポリシー。当サイトにおけるCookieの使用について説明します。',
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.hero}>
          <Center>
            <Breadcrumb items={[{ label: 'Cookie Policy' }]} />
            <Subhead type="small" color="brand">Legal</Subhead>
            <h1 className={styles.pageTitle}>Cookie Policy</h1>
            <p className={styles.updated}>最終更新日: 2025年1月1日</p>
          </Center>
        </div>

        <div className={styles.content}>
          <Center>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Cookieとは</h2>
              <p className={styles.text}>
                Cookieとは、Webサイトがお使いのブラウザに保存する小さなテキストファイルです。
                サイトの機能を正常に動作させるために使用されます。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>2. 当サイトで使用するCookie</h2>
              <p className={styles.text}>
                当サイトでは、サイトの動作に必要な機能的Cookieのみを使用しています。
                これらはサイトを正常に表示・操作するために不可欠なものであり、無効にするとサイトが正常に動作しない場合があります。
              </p>
              <p className={styles.text}>
                具体的には、Cookie同意バナーの表示制御（同意済みかどうかの記録）などに使用しています。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>3. トラッキング・解析ツールについて</h2>
              <p className={styles.text}>
                現時点において、当サイトではGoogle アナリティクスをはじめとする行動トラッキングツール、
                広告配信ツール、ソーシャルメディアのトラッキングCookieは一切使用していません。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Cookieの無効化</h2>
              <p className={styles.text}>
                ブラウザの設定からCookieを無効にすることができます。
                無効にした場合でも当サイトの閲覧は可能ですが、一部の機能が正常に動作しないことがあります。
              </p>
              <p className={styles.text}>
                各ブラウザの設定方法については、ご利用のブラウザのヘルプページをご参照ください。
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>5. ポリシーの変更</h2>
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
