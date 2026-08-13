import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceContent from '@/components/pages/ServiceContent'
import { canonical, OG_IMAGE } from '@/lib/site'

const title = '左官工事・土間コンクリート工事｜東京都板橋区'
const description =
  '東京都板橋区の株式会社丸義の事業内容。左官工事・土間コンクリート工事・コンクリート打設・均し・押えまで、工種ごとの施工内容と工程をご紹介します。都内全域の新築・改修現場に対応します。'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/service') },
  openGraph: {
    type: 'website',
    url: canonical('/service'),
    title: `${title}｜株式会社丸義`,
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '株式会社丸義の事業内容' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}｜株式会社丸義`,
    description,
    images: [OG_IMAGE],
  },
}

export default function ServicePage() {
  return (
    <>
      <PageHero
        label="SERVICE"
        title="事業内容"
        titleSub="左官・土間コンクリート工事"
        desc="左官工事・土間コンクリート工事・コンクリート打設から均し・押えまで、専門技術で対応します。"
      />
      <Breadcrumbs crumbs={[{ name: '事業内容', path: '/service' }]} />
      <ServiceContent />
    </>
  )
}
