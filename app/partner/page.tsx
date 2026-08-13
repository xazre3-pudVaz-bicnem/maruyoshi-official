import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/ui/JsonLd'
import PartnerContent from '@/components/pages/PartnerContent'
import { canonical, OG_IMAGE } from '@/lib/site'
import { faqSchema } from '@/lib/schema'
import { PARTNER_FAQS } from '@/lib/faqs'

const title = '左官・土間コンクリート協力会社募集｜東京'
const description =
  '株式会社丸義では左官工事・土間コンクリート工事の協力会社を募集しています。一人親方・法人どちらも歓迎。継続案件・スポット案件のご相談も可能です。東京都板橋区を拠点に都内全域で活動しています。'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/partner') },
  openGraph: {
    type: 'website',
    url: canonical('/partner'),
    title: `${title}｜株式会社丸義`,
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '株式会社丸義 協力会社募集' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}｜株式会社丸義`,
    description,
    images: [OG_IMAGE],
  },
}

export default function PartnerPage() {
  return (
    <>
      <JsonLd id="partner-faq-schema" data={faqSchema(PARTNER_FAQS)} />

      <PageHero
        label="PARTNER"
        title="協力会社募集"
        titleSub="一人親方・法人歓迎"
        desc="左官・土間コンクリート工事で一緒に現場をつくれるパートナーを募集しています。"
      />
      <Breadcrumbs crumbs={[{ name: '協力会社募集', path: '/partner' }]} />
      <PartnerContent />
    </>
  )
}
