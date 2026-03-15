'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import HeaderSubmenu from './HeaderSubmenu'
import dynamic from 'next/dynamic'

const worksItems = [
  { label: 'All Works', description: 'すべての制作実績を見る', href: '/works' },
  { label: 'UI/UX Design', description: 'ユーザー体験設計', href: '/works?cat=uiux' },
  { label: 'Web Development', description: 'フロントエンド開発', href: '/works?cat=webdev' },
]

const servicesItems = [
  { label: 'UI/UX Design', description: 'ユーザー体験・インターフェース設計', href: '/services#uiux' },
  { label: 'Web Development', description: '高品質なフロントエンド実装', href: '/services#webdev' },
  { label: 'Brand Identity', description: 'ブランドの個性を視覚化する', href: '/services#brand' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navItems = [
    { label: 'Works', href: '/works', submenu: 'works' },
    { label: 'Services', href: '/services', submenu: 'services' },
    { label: 'Blog', href: '/blog', submenu: null },
    { label: 'About', href: '/about', submenu: null },
    { label: 'Contact', href: '/contact', submenu: null },
  ]

  return (
    <header
      ref={headerRef}
      className={`${styles.Header} ${scrolled ? styles['Header--scrolled'] : ''}`}
      role="banner"
    >
      <a href="#main-content" className={styles.Header_skipLink}>
        コンテンツへスキップ
      </a>

      <div className={styles.Header_inner}>
        {/* Logo */}
        <Link href="/" className={styles.Header_logo} aria-label="Axis Web Design Lab — ホームへ">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={styles.Header_logoMark}>
            <path d="M11 1L21 6.5V15.5L11 21L1 15.5V6.5L11 1Z" stroke="var(--color-brand)" strokeWidth="1.5" fill="none"/>
            <path d="M11 5L7 11L11 17L15 11L11 5Z" fill="var(--color-brand)" opacity="0.9"/>
          </svg>
          <span className={styles.Header_logoText}>Axis</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.Header_nav} aria-label="グローバルナビゲーション">
          <ul className={styles.Header_navList} role="list">
            {navItems.map((item) => (
              <li
                key={item.href}
                className={styles.Header_navItem}
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.submenu)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={styles.Header_navLink}
                  aria-expanded={item.submenu ? activeSubmenu === item.submenu : undefined}
                  aria-controls={item.submenu ? `submenu-${item.submenu}` : undefined}
                >
                  {item.label}
                </Link>
                {item.submenu === 'works' && (
                  <HeaderSubmenu
                    isOpen={activeSubmenu === 'works'}
                    items={worksItems}
                    id="submenu-works"
                  />
                )}
                {item.submenu === 'services' && (
                  <HeaderSubmenu
                    isOpen={activeSubmenu === 'services'}
                    items={servicesItems}
                    id="submenu-services"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link href="/contact" className={`${styles.Header_cta} md\\:hidden`}>
          相談する
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.Header_hamburger} sm\\:hidden`}
          aria-label={mobileOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`${styles.Header_hamburgerLine} ${mobileOpen ? styles['Header_hamburgerLine--open'] : ''}`} />
          <span className={`${styles.Header_hamburgerLine} ${mobileOpen ? styles['Header_hamburgerLine--open'] : ''}`} />
          <span className={`${styles.Header_hamburgerLine} ${mobileOpen ? styles['Header_hamburgerLine--open'] : ''}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className={styles.Header_mobileOverlay} role="dialog" aria-modal="true" aria-label="モバイルメニュー">
          <nav aria-label="モバイルナビゲーション">
            <ul className={styles.Header_mobileNavList} role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.Header_mobileNavLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.Header_mobileCta}>
            <Link
              href="/contact"
              className={styles.Header_mobileCtaBtn}
              onClick={() => setMobileOpen(false)}
            >
              プロジェクトを相談する
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
