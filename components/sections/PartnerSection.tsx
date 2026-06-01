'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const points = [
  {
    num: '01',
    title: '左官・土間コンクリート専門',
    desc: '左官工事、土間コンクリート工事に特化した協力会社を求めています。専門スキルを持つ方との継続的なお取引を歓迎します。',
  },
  {
    num: '02',
    title: '一人親方・法人どちらも相談可',
    desc: '規模を問わず、誠実に働ける方であればご相談ください。現場状況に合わせた柔軟な体制をご提案します。',
  },
  {
    num: '03',
    title: '継続案件・長期取引を重視',
    desc: '単発ではなく、長期的なパートナーシップを目指しています。安定した継続案件のご相談にもお応えできます。',
  },
  {
    num: '04',
    title: '品質・納期・コミュニケーション',
    desc: '現場品質と納期遵守を大切にし、密なコミュニケーションが取れる方を歓迎。互いに信頼し合える関係を構築します。',
  },
]

const flow = [
  { step: 'STEP 01', label: 'お問い合わせ', desc: 'フォームまたはお電話でご連絡ください' },
  { step: 'STEP 02', label: 'ヒアリング',   desc: '対応可能な工種・規模などをお伺いします' },
  { step: 'STEP 03', label: '現場調整',     desc: '試験的な現場からご一緒することも可能です' },
  { step: 'STEP 04', label: '継続取引',     desc: '実績を積み上げ、長期パートナーを目指します' },
]

export default function PartnerSection() {
  return (
    <section id="partner" className="relative py-24 lg:py-36 overflow-hidden" style={{ background: '#0d0d0d' }}>
      <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
      <div className="bg-stripe-dark absolute inset-0 pointer-events-none opacity-60" />

      {/* Background text */}
      <div
        className="absolute right-0 bottom-0 font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: 'clamp(100px, 20vw, 280px)',
          color: 'rgba(255,255,255,0.02)',
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
        }}
      >
        PARTNER
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="line-h" style={{ color: 'rgba(255,255,255,0.3)', width: 32 }} />
            <span className="label-inv">Partner</span>
          </div>
          <h2 className="font-black text-white"
            style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
            協力会社募集
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2"
            style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
            <span className="text-xs font-black tracking-widest text-white/80 uppercase">一人親方 / 法人 歓迎</span>
          </div>
          <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)' }}>
            左官・土間コンクリート工事の協力会社を積極的に募集しています。<br className="hidden sm:block" />
            品質と信頼を共に築けるパートナーを求めています。
          </p>
        </motion.div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-16"
          style={{ background: 'rgba(255,255,255,0.06)' }}>
          {points.map((p, i) => (
            <motion.div
              key={p.num}
              className="relative p-8 group"
              style={{ background: '#0d0d0d' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
            >
              {/* Hover */}
              <div
                className="absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              />
              <div className="relative z-10">
                <span className="font-black leading-none mb-4 block"
                  style={{ fontSize: 40, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}>
                  {p.num}
                </span>
                <h3 className="text-sm font-black text-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
        >
          <h3 className="text-xs font-black tracking-[0.22em] uppercase mb-8"
            style={{ color: 'rgba(255,255,255,0.3)' }}>
            お問い合わせから取引開始まで
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {flow.map((f, i) => (
              <div key={f.step} className="relative">
                {i < flow.length - 1 && (
                  <div className="hidden sm:block absolute top-5 left-full w-4 h-px z-10 -translate-y-1/2"
                    style={{ background: 'rgba(255,255,255,0.15)' }} />
                )}
                <div className="p-5" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="text-[9px] font-black tracking-[0.2em] mb-3"
                    style={{ color: 'rgba(255,255,255,0.25)' }}>
                    {f.step}
                  </div>
                  <div className="text-sm font-black text-white mb-1">{f.label}</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease }}
        >
          <Link href="/partner"
            className="btn-black"
            style={{ background: '#fff', color: '#0d0d0d', justifyContent: 'center', flex: 1, fontSize: 12, padding: '18px 28px' }}>
            協力会社募集の詳細を見る →
          </Link>
          <Link href="/contact?type=partner"
            className="btn-outline-inv"
            style={{ justifyContent: 'center', flex: 1, fontSize: 12, padding: '18px 28px' }}>
            まずは詳細を聞いてみたい
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
