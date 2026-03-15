import type { Metadata } from 'next'
import { Noto_Sans_JP, Outfit } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Axis Web Design Lab',
    template: '%s | Axis Web Design Lab',
  },
  description: 'Design at the Axis of Creativity and Technology. Webデザインスタジオ — UI/UX Design, Web Development, Brand Identity, Design System.',
  keywords: ['Web Design', 'UI/UX', 'Brand Identity', 'Design System', 'Tokyo'],
  openGraph: {
    title: 'Axis Web Design Lab',
    description: 'Design at the Axis of Creativity and Technology.',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
