import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import FooterCTA from '@/components/footer/FooterCTA'
import Center from '@/components/layout/Center'
import Subhead from '@/components/ui/Subhead'
import Breadcrumb from '@/components/common/Breadcrumb'
import servicesData from '@/data/services.json'
import type { Service } from '@/data/types'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Axis Web Design Labのサービス：UI/UXデザイン、Web開発、ブランドアイデンティティ、デザインシステム構築。',
}

export default function ServicesPage() {
  const services = servicesData as Service[]

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.pageHero}>
          <Center>
            <Breadcrumb items={[{ label: 'Services' }]} />
            <Subhead type="small" color="brand">Services</Subhead>
            <h1 className={styles.pageTitle}>What We Offer</h1>
          </Center>
        </div>
        <div className={styles.pageSection} aria-label="サービス一覧">
          <Center>
            <div className={styles.servicesList}>
              {services.map((service, i) => (
                <div key={service.id} id={service.id} className={styles.serviceItem}>
                  <div className={styles.serviceItem_num}>0{i + 1}</div>
                  <div className={styles.serviceItem_content}>
                    <h2 className={styles.serviceItem_title}>{service.title}</h2>
                    <p className={styles.serviceItem_desc}>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Center>
        </div>
      </main>
      <FooterCTA />
      <Footer />
    </>
  )
}
