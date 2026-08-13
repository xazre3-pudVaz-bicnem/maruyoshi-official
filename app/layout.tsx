import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import { SITE_URL, COMPANY, OG_IMAGE, canonical } from '@/lib/site'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  preload: false,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d0d0d',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /**
   * title.template は各ページのタイトルに社名を1回だけ付与する。
   * そのため各ページ側の title には社名を含めないこと。
   * 社名の位置を変えたいページのみ title: { absolute: '...' } を使う。
   */
  title: {
    default: '板橋区の左官工事・土間コンクリート工事｜株式会社丸義',
    template: `%s｜${COMPANY.name}`,
  },

  description:
    '東京都板橋区徳丸の株式会社丸義は、左官工事・土間コンクリート工事の専門会社です。コンクリートの打設・均し・押えまで一貫施工。都内全域の新築・改修現場に対応し、職人採用と協力会社の募集も行っています。',

  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: `${SITE_URL}/company` }],
  creator: COMPANY.name,
  publisher: COMPANY.name,

  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: canonical('/'),
    siteName: COMPANY.name,
    title: '板橋区の左官工事・土間コンクリート工事｜株式会社丸義',
    description:
      '東京都板橋区徳丸を拠点とする左官・土間コンクリート工事の専門会社。打設から均し・押えまで一貫して施工します。',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: '株式会社丸義｜左官・土間コンクリート工事',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '板橋区の左官工事・土間コンクリート工事｜株式会社丸義',
    description:
      '東京都板橋区徳丸の左官・土間コンクリート工事専門会社。打設から仕上げまで一貫施工。',
    images: [OG_IMAGE],
  },

  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/icon-256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: canonical('/'),
  },

  /**
   * Search Console の HTML タグ確認を使う場合のみ、環境変数
   * NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION に発行されたコードを設定する。
   * コードは Search Console が発行するもので、こちらで生成してはならない。
   */
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="antialiased">
        <a href="#main" className="skip-link">
          本文へスキップ
        </a>
        <SmoothScrollProvider>
          <CustomCursor />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
