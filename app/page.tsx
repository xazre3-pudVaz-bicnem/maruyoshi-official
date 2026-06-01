import type { Metadata } from 'next'
import HeroSection      from '@/components/sections/HeroSection'
import TickerSection    from '@/components/sections/TickerSection'
import ImpactSection    from '@/components/sections/ImpactSection'
import StrengthSection  from '@/components/sections/StrengthSection'
import BusinessSection  from '@/components/sections/BusinessSection'
import RecruitSection   from '@/components/sections/RecruitSection'
import PartnerSection   from '@/components/sections/PartnerSection'
import CompanySection   from '@/components/sections/CompanySection'
import ContactSection   from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: '株式会社丸義｜板橋区の左官・土間コンクリート工事 求人・協力会社募集',
  description:
    '東京都板橋区の株式会社丸義。左官工事・土間コンクリート工事の専門会社として、未経験歓迎の正社員求人と協力会社募集を積極展開中。年間休日128日・週休2日・社宅あり。',
}

export default function Home() {
  return (
    <>
      {/* ファーストビュー（写真背景） */}
      <HeroSection />

      {/* ティッカー */}
      <TickerSection />

      {/* フィロソフィー */}
      <ImpactSection />

      {/* 会社の強み */}
      <StrengthSection />

      {/* 事業内容 */}
      <BusinessSection />

      {/* 求人募集 */}
      <RecruitSection />

      {/* 協力会社募集 */}
      <PartnerSection />

      {/* 会社情報 */}
      <CompanySection />

      {/* お問い合わせ */}
      <ContactSection />
    </>
  )
}
