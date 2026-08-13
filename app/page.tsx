import JsonLd from '@/components/ui/JsonLd'
import HeroSection      from '@/components/sections/HeroSection'
import TickerSection    from '@/components/sections/TickerSection'
import ImpactSection    from '@/components/sections/ImpactSection'
import StrengthSection  from '@/components/sections/StrengthSection'
import BusinessSection  from '@/components/sections/BusinessSection'
import RecruitSection   from '@/components/sections/RecruitSection'
import PartnerSection   from '@/components/sections/PartnerSection'
import CompanySection   from '@/components/sections/CompanySection'
import ContactSection   from '@/components/sections/ContactSection'
import { organizationSchema, webSiteSchema } from '@/lib/schema'

/**
 * トップページの title / description / canonical は
 * app/layout.tsx の default 値をそのまま使用する（重複定義を避けるため）。
 *
 * Organization と WebSite はサイト全体で1回だけ出力すればよいため、
 * 全ページ共通の layout ではなくトップページに置いている。
 */

export default function Home() {
  return (
    <>
      <JsonLd id="site-schema" data={[organizationSchema, webSiteSchema]} />

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
