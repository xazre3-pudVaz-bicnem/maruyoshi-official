import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import PartnerContent from '@/components/pages/PartnerContent'

export const metadata: Metadata = {
  title: '協力会社募集｜左官・土間コンクリート工事',
  description: '株式会社丸義では左官工事・土間コンクリート工事の協力会社を募集しています。一人親方・法人どちらも歓迎。継続案件相談可。東京都板橋区を拠点に都内全域で活動中。',
  keywords: ['左官 協力会社募集', '土間コンクリート 協力会社', '一人親方 板橋区', '協力会社 東京 建設'],
}

export default function PartnerPage() {
  return (
    <>
      <PageHero
        label="PARTNER"
        title="協力会社募集"
        titleSub="一人親方・法人歓迎"
        desc="左官・土間コンクリート工事で一緒に現場をつくれるパートナーを募集しています。"
      />
      <PartnerContent />
    </>
  )
}
