'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'
import Center from '@/components/layout/Center'
import CompanyStatement from './CompanyStatement'
import IconArrow from '@/components/ui/IconArrow'

const navGroups = [
  {
    label: 'Services',
    links: [
      { label: 'UI/UX Design', href: '/services#uiux' },
      { label: 'Web Development', href: '/services#webdev' },
      { label: 'Brand Identity', href: '/services#brand' },
      { label: 'Design System', href: '/services#ds' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'Works', href: '/works' },
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
]

export default function Footer() {
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  return (
    <footer className={styles.Footer} aria-label="サイトフッター">
      <Center type="wide">
        <div className={styles.Footer_top}>
          {/* Logo + Statement */}
          <div className={styles.Footer_brand}>
            <Link href="/" className={styles.Footer_logo} aria-label="Axis Web Design Lab ホーム">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M11 1L21 6.5V15.5L11 21L1 15.5V6.5L11 1Z" stroke="var(--color-brand)" strokeWidth="1.5" fill="none"/>
                <path d="M11 5L7 11L11 17L15 11L11 5Z" fill="var(--color-brand)" opacity="0.9"/>
              </svg>
              <span className={styles.Footer_logoText}>Axis</span>
            </Link>
            <CompanyStatement theme="default" alignLeft />
          </div>

          {/* Desktop Nav */}
          <nav className={`${styles.Footer_nav} md\\:hidden`} aria-label="フッターナビゲーション">
            {navGroups.map((group) => (
              <div key={group.label} className={styles.Footer_navGroup}>
                <p className={styles.Footer_navGroupLabel}>{group.label}</p>
                <ul className={styles.Footer_navList} role="list">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.Footer_navLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Mobile Accordion Nav */}
          <nav className={`${styles.Footer_mobileNav} sm\\:hidden`} aria-label="フッターナビゲーション（モバイル）">
            {navGroups.map((group) => (
              <div key={group.label} className={styles.Footer_mobileGroup}>
                <button
                  className={styles.Footer_mobileGroupToggle}
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  aria-expanded={openGroup === group.label}
                >
                  {group.label}
                  <IconArrow direction={openGroup === group.label ? 'up' : 'down'} color="white" size={14} />
                </button>
                {openGroup === group.label && (
                  <ul className={styles.Footer_mobileGroupList} role="list">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className={styles.Footer_navLink}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.Footer_bottom}>
          <p className={styles.Footer_copy}>© {new Date().getFullYear()} Axis Web Design Lab. All rights reserved.</p>
          <p className={styles.Footer_address}>Tokyo, Japan</p>
        </div>
      </Center>
    </footer>
  )
}
