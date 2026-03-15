import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FooterCTA from '@/components/footer/FooterCTA'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Breadcrumb from '@/components/common/Breadcrumb'
import CompanyStatement from '@/components/footer/CompanyStatement'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About',
  description: 'Axis Web Design Labについて。デザインとテクノロジーの交差点に立つWebデザインスタジオ。',
}

const values = [
  {
    title: 'Design-First',
    description: 'すべてのプロジェクトでデザイン品質を最優先に考えます。美しさと機能性は対立しない。',
  },
  {
    title: 'Technology-Driven',
    description: '最新技術を追うだけでなく、適切な技術を選択し実装品質にこだわります。',
  },
  {
    title: 'User-Centered',
    description: 'エンドユーザーの体験を常に中心に置き、データと共感の両方を組み合わせます。',
  },
  {
    title: 'Transparent',
    description: 'プロセスを開示し、クライアントと一緒にプロジェクトを進めます。',
  },
]

const members = [
  {
    name: 'Hiroshi Tanaka',
    role: 'Creative Director',
    bio: 'デザインとエンジニアリングをブリッジする15年のキャリア。',
  },
  {
    name: 'Yuki Sato',
    role: 'Lead UX Designer',
    bio: 'ユーザーリサーチと情報設計を専門とするUXデザイナー。',
  },
  {
    name: 'Kenji Yamamoto',
    role: 'Frontend Engineer',
    bio: 'パフォーマンスとアクセシビリティにこだわるフロントエンドエンジニア。',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.pageHero}>
          <Center>
            <Breadcrumb items={[{ label: 'About' }]} />
            <Subhead type="small" color="brand">About</Subhead>
            <h1 className={styles.pageTitle}>We are Axis.</h1>
            <p className={styles.pageSub}>
              デザインとテクノロジーの交差点に立つ、東京のWebデザインスタジオです。
              UIデザインからフロントエンド実装、ブランドアイデンティティまで
              一気通貫で対応します。
            </p>
          </Center>
        </div>

        {/* Mission */}
        <section aria-label="ミッション" className={styles.section}>
          <Center>
            <div className={styles.missionWrap}>
              <CompanyStatement theme="blue" />
            </div>
          </Center>
        </section>

        {/* Values */}
        <section aria-label="バリュー" className={`${styles.section} ${styles.sectionAlt}`}>
          <Center>
            <Subhead type="small" color="brand" className={styles.sectionLabel}>Values</Subhead>
            <h2 className={styles.sectionTitle}>What we believe</h2>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <div key={v.title} className={styles.valueItem}>
                  <span className={styles.valueNum}>0{i + 1}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.description}</p>
                </div>
              ))}
            </div>
          </Center>
        </section>

        {/* Team */}
        <section aria-label="チーム" className={styles.section}>
          <Center>
            <Subhead type="small" color="brand" className={styles.sectionLabel}>Team</Subhead>
            <h2 className={styles.sectionTitle}>Our Team</h2>
            <div className={styles.teamGrid}>
              {members.map((member) => (
                <div key={member.name} className={styles.teamMember}>
                  <div className={styles.teamMember_avatar} aria-hidden="true">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className={styles.teamMember_name}>{member.name}</h3>
                  <p className={styles.teamMember_role}>{member.role}</p>
                  <p className={styles.teamMember_bio}>{member.bio}</p>
                </div>
              ))}
            </div>
          </Center>
        </section>
      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}
