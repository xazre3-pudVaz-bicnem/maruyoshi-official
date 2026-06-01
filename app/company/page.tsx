import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CompanyContent from '@/components/pages/CompanyContent'

export const metadata: Metadata = {
  title: '会社情報｜株式会社丸義',
  description: '株式会社丸義の会社情報。東京都板橋区を拠点とする左官・土間コンクリート工事の専門会社。代表挨拶・会社概要・事業内容・対応エリアを掲載しています。',
}

export default function CompanyPage() {
  return (
    <>
      <PageHero
        label="COMPANY"
        title="会社情報"
        desc="東京都板橋区を拠点に、左官・土間コンクリートの専門工事会社として誠実に歩み続けます。"
      />
      <CompanyContent />
    </>
  )
}
