import type { Metadata } from 'next'
import { Suspense } from 'react'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactContent from '@/components/pages/ContactContent'
import { canonical, OG_IMAGE } from '@/lib/site'

const description =
  '株式会社丸義へのお問い合わせ。左官・土間コンクリート工事のご依頼、協力会社としてのご相談、求人へのご応募まで、種別を選んでお送りいただけます。東京都板橋区徳丸。'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description,
  alternates: { canonical: canonical('/contact') },
  openGraph: {
    type: 'website',
    url: canonical('/contact'),
    title: 'お問い合わせ｜株式会社丸義',
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '株式会社丸義 お問い合わせ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お問い合わせ｜株式会社丸義',
    description,
    images: [OG_IMAGE],
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="お問い合わせ"
        desc="工事のご依頼・協力会社のご相談・求人へのご応募など、お気軽にご連絡ください。"
      />
      <Breadcrumbs crumbs={[{ name: 'お問い合わせ', path: '/contact' }]} />
      <Suspense>
        <ContactContent />
      </Suspense>
    </>
  )
}
