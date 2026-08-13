import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import StrengthContent from '@/components/pages/StrengthContent'
import { canonical, OG_IMAGE } from '@/lib/site'

const title = '丸義の強み・施工品質｜板橋区の左官工事'
const description =
  '左官・土間コンクリートへの専門特化、現場対応力、安全管理、納期意識、若手育成、協力会社との連携。板橋区を拠点とする株式会社丸義が元請会社様から選ばれている7つの理由をご紹介します。'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/strength') },
  openGraph: {
    type: 'website',
    url: canonical('/strength'),
    title: `${title}｜株式会社丸義`,
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '株式会社丸義の強み' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}｜株式会社丸義`,
    description,
    images: [OG_IMAGE],
  },
}

export default function StrengthPage() {
  return (
    <>
      <PageHero
        label="STRENGTH"
        title="会社の強み"
        desc="専門特化の技術力と現場対応力で、元請け・協力会社の信頼に応え続けます。"
      />
      <Breadcrumbs crumbs={[{ name: '会社の強み', path: '/strength' }]} />
      <StrengthContent />
    </>
  )
}
