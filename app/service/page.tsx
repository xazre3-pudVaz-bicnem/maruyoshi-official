import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ServiceContent from '@/components/pages/ServiceContent'

export const metadata: Metadata = {
  title: '事業内容｜左官・土間コンクリート工事',
  description: '株式会社丸義の事業内容。左官工事・土間コンクリート工事・コンクリート打設・均し・押え作業まで対応。東京都板橋区を拠点に、マンション・工場・商業施設など幅広い現場で施工しています。',
  keywords: ['左官工事 板橋区', '土間コンクリート工事 東京', 'コンクリート打設', '均し 押え', '株式会社丸義 事業内容'],
}

export default function ServicePage() {
  return (
    <>
      <PageHero
        label="SERVICE"
        title="事業内容"
        desc="左官工事・土間コンクリート工事・コンクリート打設から均し・押えまで、専門技術で対応します。"
      />
      <ServiceContent />
    </>
  )
}
