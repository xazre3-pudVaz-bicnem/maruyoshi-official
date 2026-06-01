'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const FadeUp = ({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ delay, duration: 0.75, ease }}
  >
    {children}
  </motion.div>
)

/* ── 募集概要 4項目 ── */
const overview = [
  {
    num: '01',
    title: '左官・土間コンクリート専門',
    en: 'Specialization',
    desc: '左官工事・土間コンクリート工事・コンクリート打設・均し・押えなど、専門工種に特化した方を求めています。汎用系より専門技術をお持ちの方を優先します。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="24" height="16" rx="1" />
        <path d="M4 14h24M10 8v16" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '一人親方・法人どちらも可',
    en: 'Any Scale',
    desc: '規模は一切問いません。個人事業主（一人親方）から法人まで歓迎です。誠実に仕事に取り組める方であればお気軽にご相談ください。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="4" />
        <circle cx="22" cy="10" r="4" />
        <path d="M4 28c0-5.333 3.582-8 8-8M16 28c0-5.333 3.582-8 8-8" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '継続案件の相談可',
    en: 'Long-term',
    desc: '単発ではなく、継続的に現場をご一緒できるパートナーを特に歓迎します。安定した取引関係の構築を目指し、長期的な協力体制を大切にします。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16a10 10 0 0118 0M26 16a10 10 0 01-18 0" />
        <path d="M16 6v4M16 22v4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'スポット・緊急対応可',
    en: 'Spot Ready',
    desc: '「急に職人が必要になった」といった緊急・スポット案件のご相談も随時受け付けています。まずは一度ご連絡ください。',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4v10l6 3" />
        <circle cx="16" cy="16" r="12" />
      </svg>
    ),
  },
]

const values = [
  { title: '品質基準の共有', desc: '水平精度・仕上がり基準を事前に共有し、元請けへの信頼を一緒に守ります。' },
  { title: '密なコミュニケーション', desc: '当日の工程変更・現場トラブルはすぐに相談できる関係性を大切にしています。' },
  { title: '公正な報酬', desc: '施工内容・難易度に見合った適正な報酬をお支払いします。不当な値下げ交渉はしません。' },
  { title: '安全への共通意識', desc: 'KY活動・保護具着用など、現場の安全ルールを共有できる方と仕事をしたいと考えています。' },
]

const ideals = [
  '左官・土間コンクリートの施工経験がある方',
  '品質・納期・安全を大切にできる方',
  '元請けや他職種とのコミュニケーションが取れる方',
  '継続的な仕事関係を望む方',
  '一人親方として独立して活動している方',
  '法人として協力体制を構築したい会社様',
]

const flow = [
  { step: 'STEP 01', title: 'お問い合わせ', desc: 'フォームまたはお電話でご連絡ください。対応可能な工種・規模をお聞かせください。' },
  { step: 'STEP 02', title: 'ヒアリング・面談', desc: 'ご経験・得意な施工種別・希望条件などを確認します。オンライン対応も可能です。' },
  { step: 'STEP 03', title: '試験的な現場', desc: 'まずはスポット案件でご一緒することが多いです。施工品質・コミュニケーションを確認します。' },
  { step: 'STEP 04', title: '継続取引へ', desc: '信頼関係を確認後、継続案件をご一緒します。長期パートナーを目指します。' },
]

const areas = [
  { name: '東京都板橋区', note: '（拠点・最優先対応）' },
  { name: '東京都全域',   note: '' },
  { name: '埼玉県南部',   note: '' },
  { name: '神奈川県北部', note: '' },
  { name: '千葉県西部',   note: '' },
  { name: 'その他エリア', note: '（要相談）' },
]

const faqs = [
  { q: '一人親方でも相談できますか？', a: 'もちろんです。規模は問いません。一人親方の方も多数ご協力いただいています。まずはお気軽にご連絡ください。' },
  { q: '単発・スポット案件のみでも可能ですか？', a: 'はい、可能です。継続取引が理想ですが、まずはスポット案件から始めることも歓迎しています。' },
  { q: '対応エリアはどこですか？', a: '東京都全域を基本とし、埼玉・神奈川・千葉の一部エリアにも対応しています。詳しくはお問い合わせください。' },
  { q: '請求・支払いサイクルはどうなりますか？', a: '月末締め翌月末払いを基本としています。詳細はご相談の上で決定します。' },
  { q: '未経験の業種でも声をかけてもらえますか？', a: '左官・土間コンクリートの経験者を優先しますが、隣接業種（型枠・土工など）の方もお気軽にご相談ください。' },
]

export default function PartnerContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── 募集概要 ── 白背景カードで視認性を確保 */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

          <FadeUp className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Overview</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
              募集概要
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg">
              以下の条件で、左官・土間コンクリート工事の協力会社・一人親方を随時募集しています。
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {overview.map((o, i) => (
              <FadeUp key={o.num} delay={i * 0.1}>
                <div
                  className="relative bg-white group overflow-hidden h-full"
                  style={{
                    border: '1.5px solid rgba(0,0,0,0.1)',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                    transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.borderColor = '#0d0d0d'
                    el.style.boxShadow   = '0 8px 32px rgba(0,0,0,0.12)'
                    el.style.transform   = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'rgba(0,0,0,0.1)'
                    el.style.boxShadow   = '0 2px 16px rgba(0,0,0,0.06)'
                    el.style.transform   = 'translateY(0)'
                  }}
                >
                  {/* 大きな番号（装飾） */}
                  <div
                    className="absolute top-0 right-0 font-black leading-none select-none pointer-events-none"
                    style={{
                      fontSize: 96, color: 'rgba(0,0,0,0.04)',
                      letterSpacing: '-0.06em', lineHeight: 0.85,
                      paddingRight: 12, paddingTop: 8,
                    }}
                  >
                    {o.num}
                  </div>

                  <div className="relative z-10 p-7 sm:p-8">
                    {/* アイコン */}
                    <div className="mb-5 text-gray-700">{o.icon}</div>

                    {/* EN label */}
                    <p className="text-[10px] font-black tracking-[0.24em] uppercase text-gray-400 mb-2">
                      {o.en}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 leading-snug">
                      {o.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                      {o.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 協力体制 ── 薄いグレー背景 */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Partnership</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', letterSpacing: '-0.03em' }}>
              丸義が大切にする協力体制
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div
                  className="bg-white p-7 sm:p-8 group relative overflow-hidden"
                  style={{ border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <div className="absolute inset-0 bg-gray-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="block w-4 h-px bg-gray-400 group-hover:bg-white/40 transition-colors duration-500" />
                      <h3 className="text-base font-black text-gray-900 group-hover:text-white transition-colors duration-500">
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-[15px] text-gray-500 group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 求めるパートナー像 + 対応エリア ── 白背景 */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

            {/* 求めるパートナー像 */}
            <div>
              <FadeUp className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-7 h-px bg-gray-900" />
                  <span className="label">Ideal Partner</span>
                </div>
                <h2 className="font-black text-gray-900"
                  style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', letterSpacing: '-0.03em' }}>
                  こんな方を歓迎します
                </h2>
              </FadeUp>
              <div className="space-y-0">
                {ideals.map((p, i) => (
                  <FadeUp key={p} delay={i * 0.06}>
                    <div className="flex items-start gap-4 py-4"
                      style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                      <span className="text-[10px] font-black tracking-[0.2em] text-gray-300 mt-0.5 shrink-0">
                        0{i + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-gray-800 leading-snug">{p}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* 対応エリア */}
            <div>
              <FadeUp className="mb-8" delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-7 h-px bg-gray-900" />
                  <span className="label">Service Area</span>
                </div>
                <h2 className="font-black text-gray-900"
                  style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', letterSpacing: '-0.03em' }}>
                  対応可能エリア
                </h2>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="p-7 sm:p-8" style={{ background: '#f9f9f9', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                    {areas.map((a) => (
                      <div key={a.name} className="flex items-start gap-2">
                        <span className="block w-1.5 h-1.5 rounded-full bg-gray-900 mt-1.5 shrink-0" />
                        <div>
                          <span className="text-sm font-bold text-gray-800">{a.name}</span>
                          {a.note && <span className="text-xs text-gray-400 ml-1">{a.note}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pt-5"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                    上記以外のエリアも内容によっては対応可能です。まずはご相談ください。
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── 取引開始までの流れ ── 黒背景 */}
      <section className="py-20 lg:py-28 relative" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.35)' }} />
              <span className="label-inv">Process</span>
            </div>
            <h2 className="font-black text-white"
              style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', letterSpacing: '-0.03em' }}>
              取引開始までの流れ
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flow.map((f, i) => (
              <FadeUp key={f.step} delay={i * 0.1}>
                <div className="p-7 h-full relative group"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}>
                  <div className="absolute inset-0 scale-0 origin-center group-hover:scale-100 transition-transform duration-400 ease-out"
                    style={{ background: 'rgba(255,255,255,0.07)' }} />
                  <div className="relative z-10">
                    <div className="text-[9px] font-black tracking-[0.22em] mb-4"
                      style={{ color: 'rgba(255,255,255,0.35)' }}>{f.step}</div>
                    <h3 className="text-base font-black text-white mb-3">{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── 白背景 */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">FAQ</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', letterSpacing: '-0.03em' }}>
              よくある質問
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div style={{ border: '1px solid rgba(0,0,0,0.09)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between p-5 sm:p-6 text-left bg-transparent cursor-pointer gap-4"
                  >
                    <span className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                      {faq.q}
                    </span>
                    <motion.span className="shrink-0 mt-0.5 text-gray-400"
                      animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.3 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2V16M2 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6"
                          style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                          <p className="pt-4 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── 黒背景・強調 */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="bg-stripe-dark absolute inset-0 pointer-events-none opacity-40" />

        {/* 大きな背景テキスト */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-black text-white/[0.03]"
            style={{ fontSize: 'clamp(80px,18vw,220px)', letterSpacing: '-0.05em', whiteSpace: 'nowrap' }}>
            PARTNER
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            {/* バッジ */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <span className="text-xs font-black tracking-widest text-white/80 uppercase">
                一人親方・法人 歓迎
              </span>
            </div>

            <h2 className="font-black text-white mb-5"
              style={{ fontSize: 'clamp(26px, 4.5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              まずは対応可能な<br />工事内容をお聞かせください
            </h2>

            <p className="text-sm sm:text-base leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.55)' }}>
              「こんな条件でも大丈夫？」といった質問も大歓迎です。<br className="hidden sm:block" />
              一緒に現場をつくれるパートナーをお待ちしています。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=partner"
                className="btn-black"
                style={{
                  background: '#fff', color: '#0d0d0d',
                  justifyContent: 'center',
                  fontSize: 13, padding: '18px 40px',
                  fontWeight: 900, letterSpacing: '0.1em',
                }}>
                協力会社として相談する
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/contact?type=partner"
                className="btn-outline-inv"
                style={{ justifyContent: 'center', fontSize: 13, padding: '18px 36px' }}>
                まずは話だけ聞いてみたい
              </Link>
            </div>

            {/* サポートテキスト */}
            <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              お問い合わせ後、2営業日以内にご連絡いたします
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
