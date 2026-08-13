import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reveal from '@/components/ui/Reveal'
import JsonLd from '@/components/ui/JsonLd'
import { canonical, OG_IMAGE, ADDRESS, COMPANY, BUSINESS_HOURS } from '@/lib/site'
import { localBusinessSchema, faqSchema } from '@/lib/schema'
import { SERVICES } from '@/lib/services'

const title = '板橋区の左官工事・土間コンクリート工事'
const description =
  '株式会社丸義は東京都板橋区徳丸に事務所を置く左官・土間コンクリート工事の専門会社です。区内のマンション・住宅・店舗・工場・倉庫・駐車場の新築および改修工事に対応します。元請会社様・協力会社様のご相談を承ります。'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/area/itabashi') },
  openGraph: {
    type: 'website',
    url: canonical('/area/itabashi'),
    title: `${title}｜株式会社丸義`,
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '板橋区の左官・土間コンクリート工事' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}｜株式会社丸義`,
    description,
    images: [OG_IMAGE],
  },
}

/* 対応する建物・現場の種別 */
const buildingTypes = [
  { title: 'マンション・集合住宅', desc: '共用廊下、エントランス、地下駐車場や車路の土間打設。改修工事での既存面の補修や防水保護モルタルにも対応します。' },
  { title: '戸建住宅', desc: 'ガレージ、駐車スペース、玄関アプローチの土間コンクリート。隣地や既存構造物との取り合いが多い狭所の施工にも対応します。' },
  { title: '店舗・商業施設', desc: '売場・バックヤードの床、搬入路の土間。営業への影響を抑えるため、工程と作業時間の調整からご相談いただけます。' },
  { title: '工場', desc: '設備荷重や車両走行に対応する土間コンクリート。既存床の劣化に対する打ち替えや部分補修も承ります。' },
  { title: '物流倉庫', desc: 'フォークリフトの走行性を左右する平坦性が要求される床。区画を分けた打設計画から仕上げまで担当します。' },
  { title: '駐車場', desc: '月極・コインパーキングの土間。排水勾配の確保と、滑りにくさを考慮した仕上げ方法をご提案します。' },
]

/* 工事の種類 */
const workTypes = [
  { title: '新築工事', desc: '着工前の打ち合わせから工程に入り、他職種との取り合いを確認しながら施工します。元請会社様の工程表に沿って入場します。' },
  { title: '改修・リニューアル工事', desc: '既存面の状態調査から着手します。ひび割れ・沈下・表面の劣化など、現況によって補修と打ち替えのどちらが適切かをご相談します。' },
  { title: '部分補修・スポット工事', desc: '設備工事後のはつり跡の埋め戻しや、小面積の土間補修も承ります。規模の小さい工事もご相談ください。' },
]

/* 依頼から施工までの流れ */
const flow = [
  { step: 'STEP 01', title: 'お問い合わせ', desc: 'フォームまたはメールで、工事の場所・内容・ご希望の時期をお知らせください。' },
  { step: 'STEP 02', title: '現地確認・打ち合わせ', desc: '板橋区内および近隣であれば速やかに現地へ伺います。図面がある場合は事前に共有いただけると具体的なご相談が可能です。' },
  { step: 'STEP 03', title: 'お見積り・工程調整', desc: '施工範囲と仕様を確認のうえお見積りします。他職種との取り合いや打設日の候補もこの段階で調整します。' },
  { step: 'STEP 04', title: '施工', desc: '下地処理から打設、均し・押え、養生まで担当します。天候による日程変更が生じた場合は早い段階で共有します。' },
  { step: 'STEP 05', title: '確認・引き渡し', desc: '仕上がりとレベルを確認し、清掃のうえ引き渡します。気になる点があれば施工後もご連絡ください。' },
]

const faqs = [
  {
    q: '板橋区内の現場であれば、すぐに現地を見てもらえますか？',
    a: '事務所が板橋区徳丸にあるため、区内および近隣エリアであれば比較的短い日数で現地へ伺えます。日程はご相談ください。',
  },
  {
    q: '板橋区以外の東京都内でも対応していますか？',
    a: '東京都全域に対応しています。埼玉県南部・神奈川県北部・千葉県西部も、工事内容によりご相談いただけます。',
  },
  {
    q: '小さい工事でも依頼できますか？',
    a: '部分補修やスポット工事も承っています。規模の大小にかかわらず、まずは工事内容をお聞かせください。',
  },
  {
    q: '個人からの依頼でも対応してもらえますか？',
    a: '戸建住宅のガレージやアプローチなど、個人のお客様からのご相談も承っています。工事の場所と内容をお知らせください。',
  },
]

export default function ItabashiAreaPage() {
  return (
    <>
      <JsonLd id="area-schema" data={[localBusinessSchema, faqSchema(faqs)]} />

      <PageHero
        label="ITABASHI"
        title="板橋区の左官・土間コンクリート工事"
        titleSub="拠点は板橋区徳丸"
        desc="事務所を板橋区徳丸に置き、区内および東京都全域の新築・改修現場に対応しています。"
      />
      <Breadcrumbs crumbs={[{ name: '板橋区の対応エリア', path: '/area/itabashi' }]} />

      {/* 拠点について */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="prose-body">
              <p>
                株式会社丸義は、東京都板橋区徳丸に事務所を構える左官・土間コンクリート工事の専門会社です。
                打設から均し・押え、養生までを一つの班で担当し、工程を分けずに施工品質を管理しています。
              </p>
              <p>
                拠点が板橋区内にあるため、区内の現場については現地確認や打ち合わせに伺うまでの日数を抑えられます。
                急な工程変更やスポットでの応援依頼にも動きやすい距離にあることが、区内の現場でご相談いただく理由のひとつです。
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 p-7" style={{ background: '#f9f9f9', border: '1px solid rgba(0,0,0,0.08)' }}>
              <h2 className="text-sm font-black text-gray-900 mb-4">事務所所在地</h2>
              <address className="not-italic text-sm text-gray-700 leading-relaxed space-y-1">
                <p className="font-bold text-gray-900">{COMPANY.name}</p>
                <p>{ADDRESS.postalCodeDisplay} {ADDRESS.plain}</p>
                <p>
                  TEL：
                  <a href={COMPANY.telLink} className="font-bold hover:text-gray-900 underline underline-offset-2">
                    {COMPANY.tel}
                  </a>
                  <span className="text-xs text-gray-500 ml-2">
                    （受付 {BUSINESS_HOURS.display} / {BUSINESS_HOURS.daysDisplay}）
                  </span>
                </p>
                <p>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-gray-900 underline underline-offset-2">
                    {COMPANY.email}
                  </a>
                </p>
              </address>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={ADDRESS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: 11, padding: '12px 22px', display: 'inline-flex' }}
                >
                  Google マップで見る →
                </a>
                <Link href="/company" className="btn-outline" style={{ fontSize: 11, padding: '12px 22px', display: 'inline-flex' }}>
                  会社概要を見る →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 対応している工事 */}
      <section className="py-20 lg:py-24" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Service</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              対応している工事
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07}>
                <Link
                  href={`/service/${s.slug}`}
                  className="block bg-white p-7 h-full hover:bg-gray-900 group transition-colors duration-300"
                  style={{ border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <span className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-400 group-hover:text-white/40 block mb-2 transition-colors duration-300">
                    {s.en}
                  </span>
                  <h3 className="text-base font-black text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                    {s.navLabel}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/55 leading-relaxed transition-colors duration-300">
                    {s.lead[0].slice(0, 78)}…
                  </p>
                  <span className="mt-4 inline-block text-xs font-black text-gray-900 group-hover:text-white transition-colors duration-300">
                    詳細を見る →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 対応する建物・現場 */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Building Type</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              対応する建物・現場
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {buildingTypes.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="p-6 h-full" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="text-sm font-black text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <h2 className="text-base font-black text-gray-900 mb-5">工事の種類</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {workTypes.map((w) => (
                <div key={w.title} className="p-6 h-full" style={{ background: '#f9f9f9', border: '1px solid rgba(0,0,0,0.07)' }}>
                  <h3 className="text-sm font-black text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 依頼から施工まで */}
      <section className="py-20 lg:py-24 relative" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.35)' }} />
              <span className="label-inv">Flow</span>
            </div>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              ご依頼から施工までの流れ
            </h2>
          </Reveal>
          <ol className="space-y-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {flow.map((f, i) => (
              <Reveal key={f.step} delay={i * 0.06} as="li">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 p-6" style={{ background: '#0d0d0d' }}>
                  <div className="shrink-0 sm:w-24">
                    <span className="text-[10px] font-black tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {f.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white mb-1.5">{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 元請・協力会社・採用の3導線 */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">For You</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              ご相談内容から探す
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                head: '元請会社様へ',
                body: '左官・土間コンクリートの専門工種として工程に入ります。工程表に沿った日程調整、天候によるスライドへの対応、打設日の確保についてご相談ください。',
                href: '/contact?type=work',
                cta: '工事の相談をする',
              },
              {
                head: '協力会社様へ',
                body: '左官・土間コンクリート工事の協力会社・一人親方を募集しています。継続案件・スポット案件のどちらのご相談も承っています。',
                href: '/partner',
                cta: '協力会社募集を見る',
              },
              {
                head: '求職者の方へ',
                body: '板橋区を拠点に、左官・土間コンクリート作業員を募集しています。未経験・学歴・年齢は不問です。現場見学だけのご相談も歓迎しています。',
                href: '/recruit',
                cta: '求人情報を見る',
              },
            ].map((c, i) => (
              <Reveal key={c.head} delay={i * 0.08}>
                <div className="p-7 h-full flex flex-col" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="text-base font-black text-gray-900 mb-3">{c.head}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{c.body}</p>
                  <Link href={c.href} className="btn-outline" style={{ fontSize: 11, padding: '13px 22px', justifyContent: 'center' }}>
                    {c.cta} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24" style={{ background: '#f5f5f5' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">FAQ</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              板橋区での対応についてのご質問
            </h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="bg-white p-6" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="text-sm sm:text-base font-black text-gray-900 mb-3 leading-snug">{f.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
