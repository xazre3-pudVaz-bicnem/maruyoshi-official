import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import StrengthContent from '@/components/pages/StrengthContent'

export const metadata: Metadata = {
  title: '会社の強み｜株式会社丸義',
  description: '株式会社丸義の強み。施工品質・現場対応力・安全管理・納期意識・若手育成・協力会社連携・板橋区を拠点とした機動力。左官・土間コンクリートの専門職人集団として東京都内の現場を支えます。',
}

export default function StrengthPage() {
  return (
    <>
      <PageHero
        label="STRENGTH"
        title="会社の強み"
        desc="専門特化の技術力と現場対応力で、元請け・協力会社の信頼に応え続けます。"
      />
      <StrengthContent />
    </>
  )
}
