'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { InstagramIcon, INSTAGRAM_URL } from '@/components/ui/InstagramIcon'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ delay, duration: 0.75, ease }}>{children}</motion.div>
)

const overview = [
  ['会社名',   '株式会社丸義'],
  ['代表者',   '善平 健志郎'],
  ['設立',     '令和7年（2025年）'],
  ['所在地',   '〒175-0082 東京都板橋区徳丸2-27-14 サンパレス徳丸301'],
  ['事業内容', 'コンクリートの打設・均し・押え／左官工事／土間コンクリート工事'],
  ['採用規模', '10名予定'],
  ['対応エリア', '東京都全域・埼玉県南部・神奈川県北部・千葉県西部（要相談）'],
  ['URL',      'maruyoshi-official.com'],
  ['Email',    'kenchiro0624@icloud.com'],
]

const businesses = [
  { title: '左官工事', desc: 'モルタル・漆喰などを用いた壁・床・天井の仕上げ工事。防水・意匠仕上げまで対応。' },
  { title: '土間コンクリート工事', desc: '駐車場・倉庫・住宅・商業施設など幅広い現場の土間打設・仕上げ。' },
  { title: 'コンクリート打設', desc: '生コン打設・バイブレーター締固め・天端均しまでの一連施工。' },
  { title: '均し作業', desc: 'レーザーレベルを使用した高精度な水平均し。スクリード・トンボで対応。' },
  { title: '押え作業', desc: '金鏝・機械ごてによる3段階押えで強度・美観を確保。' },
]

const areas = ['東京都板橋区（拠点）', '東京都全域', '埼玉県南部エリア', '神奈川県北部エリア', '千葉県西部エリア']

export default function CompanyContent() {
  return (
    <>
      {/* 代表挨拶 */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div className="flex items-center gap-3 mb-4"><span className="block w-7 h-px bg-gray-900" /><span className="label">Message</span></div>
              <h2 className="font-black text-gray-900 mb-8" style={{ fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '-0.03em' }}>代表挨拶</h2>
              <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  株式会社丸義は、左官工事・土間コンクリート工事を専門とする建設会社として、令和7年に設立しました。
                </p>
                <p>
                  コンクリートを均し、職人が手で仕上げる仕事は、地味に見えて実は現場の土台を支える重要な工程です。
                  一打一打に職人としての誇りと責任を持ち、品質・納期・安全を守ることが私たちの使命だと考えています。
                </p>
                <p>
                  丸義では、「一緒に現場をつくる仲間」として、未経験の若手も、経験豊富な職人も、
                  そして信頼できる協力会社も、等しく大切なパートナーです。
                </p>
                <p>
                  東京都板橋区を拠点に、都内の現場で誠実に仕事をし続けることで、
                  地域の街づくりに貢献していきます。
                </p>
                <p className="font-bold text-gray-900">
                  株式会社丸義 代表 善平 健志郎
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              {/* Decorative block */}
              <div className="p-10" style={{ background: '#0d0d0d', position: 'relative' }}>
                <div className="absolute top-4 right-4" style={{ color: 'rgba(255,255,255,0.12)' }}>
                  <span className="absolute top-0 left-0 block w-4 h-4" style={{ borderTop: '1px solid currentColor', borderLeft: '1px solid currentColor' }} />
                  <span className="absolute bottom-0 right-0 block w-4 h-4 translate-x-2 translate-y-2" style={{ borderBottom: '1px solid currentColor', borderRight: '1px solid currentColor' }} />
                </div>
                <div className="bg-grid-dark absolute inset-0" />
                <div className="relative">
                  <p className="font-black text-white mb-6" style={{ fontSize: 'clamp(20px,3vw,36px)', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                    &ldquo;現場を仕上げる、<br />技術で応える。&rdquo;
                  </p>
                  <div className="space-y-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {['品質へのこだわり', '納期の厳守', '安全の徹底', '誠実なコミュニケーション'].map((v) => (
                      <div key={v} className="flex items-center gap-3">
                        <span className="block w-3 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
                        <span className="text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f5f5' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-10">
            <div className="flex items-center gap-3 mb-3"><span className="block w-7 h-px bg-gray-900" /><span className="label">Company Overview</span></div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>会社概要</h2>
          </FadeUp>
          <FadeUp>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              {overview.map(([label, value], i) => (
                <div key={label} className="flex flex-col sm:flex-row"
                  style={{ borderBottom: i < overview.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <div className="px-5 py-4 sm:w-36 shrink-0" style={{ background: '#fff', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
                    <span className="text-xs font-bold text-gray-500">{label}</span>
                  </div>
                  <div className="px-5 py-4" style={{ background: '#fafafa' }}>
                    <span className="text-sm text-gray-800 leading-relaxed">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3"><span className="block w-7 h-px bg-gray-900" /><span className="label">Business</span></div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>事業内容</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {businesses.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.08}>
                <div className="bg-white p-7 h-full group hover:bg-gray-900 transition-colors duration-400">
                  <div className="font-black mb-3 leading-none group-hover:text-white/05 transition-colors duration-400"
                    style={{ fontSize: 36, color: 'rgba(0,0,0,0.05)', letterSpacing: '-0.04em' }}>0{i + 1}</div>
                  <h3 className="text-sm font-black text-gray-900 group-hover:text-white mb-2 transition-colors duration-400">{b.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/55 leading-relaxed transition-colors duration-400">{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="mt-6">
            <Link href="/service" className="btn-outline" style={{ fontSize: 11, padding: '12px 24px', display: 'inline-flex' }}>
              事業内容の詳細を見る →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* 対応エリア + 会社の想い */}
      <section className="py-20 lg:py-28" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeUp>
              <div className="flex items-center gap-3 mb-4"><span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} /><span className="label-inv">Area</span></div>
              <h2 className="font-black text-white mb-7" style={{ fontSize: 'clamp(24px,3.5vw,44px)', letterSpacing: '-0.03em' }}>対応エリア</h2>
              <div className="space-y-3">
                {areas.map((a, i) => (
                  <div key={a} className="flex items-center gap-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="text-[10px] font-black tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.2)' }}>0{i + 1}</span>
                    <span className="text-sm font-bold text-white">{a}</span>
                  </div>
                ))}
                <p className="text-xs pt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  ※上記以外のエリアも内容によっては対応可能です。まずはご相談ください。
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="flex items-center gap-3 mb-4"><span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} /><span className="label-inv">Our Spirit</span></div>
              <h2 className="font-black text-white mb-7" style={{ fontSize: 'clamp(24px,3.5vw,44px)', letterSpacing: '-0.03em' }}>会社の想い</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <p>丸義が大切にするのは、「現場の一打一打に誠実であること」です。</p>
                <p>コンクリートを均し、職人が手で仕上げる仕事は、建物の耐久性と美観を左右する重要な工程。妥協のない施工が、使う人の安全と快適を守ります。</p>
                <p>板橋区という地域に根ざし、地域の現場・地域の職人・地域の元請けと信頼関係を積み上げることで、長く続く建設会社を目指しています。</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <p className="label mb-4">Contact</p>
            <h2 className="font-black text-gray-900 mb-4" style={{ fontSize: 'clamp(22px,3.5vw,40px)', letterSpacing: '-0.02em' }}>
              お気軽にお問い合わせください
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link href="/recruit" className="btn-black" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>求人情報を見る →</Link>
              <Link href="/contact" className="btn-outline" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>お問い合わせ</Link>
            </div>
            {/* Instagram */}
            <div className="flex justify-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                <InstagramIcon size={18} />
                <span>Instagram: @maruyoshi.itabashi</span>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
