import type { Metadata } from 'next'
import Script from 'next/script'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://maruyoshi-official.com'),
  title: {
    default: '株式会社丸義｜板橋区の左官・土間コンクリート工事',
    template: '%s｜株式会社丸義',
  },
  description:
    '東京都板橋区の株式会社丸義は、左官工事・土間コンクリート工事を専門とする建設会社です。未経験歓迎の正社員採用・協力会社募集を積極的に行っています。年間休日128日・週休2日・社宅あり。',
  keywords: [
    '株式会社丸義',
    '丸義',
    '板橋区 左官工事',
    '板橋区 土間コンクリート',
    '東京 左官 求人',
    '東京 土間コンクリート 求人',
    '左官 協力会社募集',
    '土間コンクリート 協力会社募集',
    '左官工事 東京',
    'コンクリート打設 板橋',
    '未経験 左官 求人',
    '建設業 求人 東京',
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://maruyoshi-official.com',
    siteName: '株式会社丸義',
    title: '株式会社丸義｜板橋区の左官・土間コンクリート工事',
    description:
      '東京都板橋区の株式会社丸義は、左官工事・土間コンクリート工事を専門とする建設会社です。未経験歓迎の正社員採用・協力会社募集を積極的に行っています。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '株式会社丸義｜左官・土間コンクリート工事',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社丸義｜板橋区の左官・土間コンクリート工事',
    description:
      '東京都板橋区の左官・土間コンクリート工事専門。未経験歓迎・正社員採用・協力会社募集中。',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/icon-256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://maruyoshi-official.com',
  },
}

/* ── Organization 構造化データ（サイト全体） ── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社丸義',
  url: 'https://maruyoshi-official.com',
  logo: 'https://maruyoshi-official.com/images/logo-header.png',
  email: 'kenchiro0624@icloud.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '徳丸2-27-14 サンパレス徳丸301',
    addressLocality: '板橋区',
    addressRegion: '東京都',
    postalCode: '175-0082',
    addressCountry: 'JP',
  },
  sameAs: [
    'https://www.instagram.com/maruyoshi.itabashi/',
    'https://maruyoshi-official.com',
  ],
  description:
    '東京都板橋区を拠点とする左官・土間コンクリート工事の専門会社。未経験歓迎の正社員採用・協力会社募集を積極展開。',
  foundingDate: '2025',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 10,
  },
  areaServed: {
    '@type': 'State',
    name: '東京都',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="antialiased">
        {/* Organization 構造化データ */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <SmoothScrollProvider>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
