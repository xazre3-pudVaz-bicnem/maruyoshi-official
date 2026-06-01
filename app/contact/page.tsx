import type { Metadata } from 'next'
import { Suspense } from 'react'
import PageHero from '@/components/PageHero'
import ContactContent from '@/components/pages/ContactContent'

export const metadata: Metadata = {
  title: 'お問い合わせ｜株式会社丸義',
  description: '株式会社丸義へのお問い合わせ。求人応募・協力会社の相談・工事依頼など、お気軽にご連絡ください。東京都板橋区の左官・土間コンクリート工事専門会社です。',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="お問い合わせ"
        desc="求人応募・協力会社のご相談・工事依頼など、お気軽にご連絡ください。"
      />
      <Suspense>
        <ContactContent />
      </Suspense>
    </>
  )
}
