import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/ui/JsonLd'
import CompanyContent from '@/components/pages/CompanyContent'
import { canonical, OG_IMAGE, COMPANY } from '@/lib/site'
import { localBusinessSchema } from '@/lib/schema'

const description =
  '株式会社丸義の会社概要。東京都板橋区徳丸を拠点とする左官・土間コンクリート工事の専門会社です。代表挨拶・所在地・設立・事業内容・対応エリア・連絡先を掲載しています。'

export const metadata: Metadata = {
  // 社名を中央に置くため absolute で指定（template による社名の重複付与を回避）
  title: { absolute: `会社概要｜${COMPANY.name}｜東京都板橋区` },
  description,
  alternates: { canonical: canonical('/company') },
  openGraph: {
    type: 'website',
    url: canonical('/company'),
    title: `会社概要｜${COMPANY.name}｜東京都板橋区`,
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '株式会社丸義 会社概要' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `会社概要｜${COMPANY.name}｜東京都板橋区`,
    description,
    images: [OG_IMAGE],
  },
}

export default function CompanyPage() {
  return (
    <>
      {/* 実在の事業所情報のみ。営業時間・電話番号・評価は未提供のため出力しない */}
      <JsonLd id="localbusiness-schema" data={localBusinessSchema} />

      <PageHero
        label="COMPANY"
        title="会社概要"
        desc="東京都板橋区を拠点に、左官・土間コンクリートの専門工事会社として誠実に歩み続けます。"
      />
      <Breadcrumbs crumbs={[{ name: '会社概要', path: '/company' }]} />
      <CompanyContent />
    </>
  )
}
