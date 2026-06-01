'use client'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const strengths = [
  {
    num: '01',
    title: '専門特化の施工品質',
    en: 'Specialized Quality',
    desc: '左官・土間コンクリートに特化することで、汎用業者では実現できない精度と仕上がりを追求。現場ごとの状況に対応した柔軟な施工が強みです。',
  },
  {
    num: '02',
    title: '未経験からのキャリア形成',
    en: 'Career Development',
    desc: '経験・学歴・資格は一切不問。入社後のOJTとサポート体制が充実しており、ゼロから左官・土間のプロを目指せる環境を整えています。',
  },
  {
    num: '03',
    title: '安定した就業環境',
    en: 'Stable Employment',
    desc: '年間休日128日・週休2日・月平均残業10時間以内の働きやすい環境。社宅制度あり、各種社会保険完備で長期的に安心して働けます。',
  },
  {
    num: '04',
    title: '協力会社との信頼関係',
    en: 'Trusted Partnership',
    desc: '一人親方・法人問わず、誠実なパートナーシップを重視。継続案件の相談にも対応し、品質とコミュニケーションを大切にする方を歓迎します。',
  },
]

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, trigger])
  return value
}

function StatCard({ value, unit, label }: { value: number; unit: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const count = useCountUp(value, 1.6, triggered)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.5 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <div className="font-black leading-none mb-1 counter-num"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.04em', color: '#0d0d0d' }}>
        {count}
        <span className="text-base ml-0.5">{unit}</span>
      </div>
      <div className="text-xs text-gray-400 tracking-wide">{label}</div>
    </div>
  )
}

export default function StrengthSection() {
  return (
    <section id="strength" className="relative py-24 lg:py-36" style={{ background: '#f5f5f5' }}>
      <div className="bg-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="line-h" style={{ color: '#0d0d0d', width: 32 }} />
            <span className="label">Our Strength</span>
          </div>
          <h2 className="font-black text-gray-900"
            style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
            丸義が選ばれる理由
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16 lg:mb-20 py-10 px-8"
          style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
        >
          <StatCard value={128} unit="日" label="年間休日" />
          <StatCard value={10}  unit="名" label="採用予定人数" />
          <StatCard value={10}  unit="h" label="月平均残業" />
          <StatCard value={3}   unit="ヶ月" label="試用期間" />
        </motion.div>

        {/* Strength cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.num}
              className="relative bg-white p-8 group"
              style={{ border: '1px solid rgba(0,0,0,0.08)' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-gray-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />

              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-4">
                  <span
                    className="font-black leading-none shrink-0 group-hover:text-white/10 transition-colors duration-500"
                    style={{ fontSize: 48, color: 'rgba(0,0,0,0.06)', letterSpacing: '-0.04em' }}
                  >
                    {s.num}
                  </span>
                  <div className="pt-2">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400 block mb-1 group-hover:text-white/40 transition-colors duration-500">
                      {s.en}
                    </span>
                    <h3 className="text-base font-black text-gray-900 leading-snug group-hover:text-white transition-colors duration-500">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
