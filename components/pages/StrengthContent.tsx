'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ delay, duration: 0.75, ease }}>{children}</motion.div>
)

function useCountUp(target: number, trigger: boolean) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1600, 1)
      setV(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, trigger])
  return v
}

function Counter({ value, unit, label }: { value: number; unit: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [go, setGo] = useState(false)
  const count = useCountUp(value, go)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setGo(true); obs.disconnect() } }, { threshold: 0.5 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="text-center">
      <div className="font-black leading-none mb-1 counter-num" style={{ fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.04em', color: '#0d0d0d' }}>
        {count}<span className="text-base ml-0.5">{unit}</span>
      </div>
      <div className="text-xs text-gray-400 tracking-wide">{label}</div>
    </div>
  )
}

const strengths = [
  { num: '01', title: '確かな施工品質', en: 'Quality First', desc: '左官・土間コンクリートに特化することで、汎用工事業者では実現しにくい精度と仕上がりを追求。水平精度±2mm以内を標準管理とし、後工程にも配慮した施工を行います。', points: ['レーザーレベル管理', '三段階押え施工', '丁寧な下地処理'] },
  { num: '02', title: '現場対応力', en: 'On-site Flexibility', desc: '天候・工程変更・他職種との調整など、現場では毎日予定外のことが起こります。「言われる前に動く」姿勢と豊富な経験で、柔軟かつ迅速に対応します。', points: ['工程変更への即応', '元請けとの密連携', '現場クレーム対応実績'] },
  { num: '03', title: '安全管理の徹底', en: 'Safety Management', desc: '朝礼でのKY活動、整理整頓、保護具の着用など、安全を最優先とした現場運営を行っています。重大事故ゼロを目指し、日々の安全意識を高めています。', points: ['毎日のKY活動', '保護具・防護設備の徹底', '整理整頓の徹底'] },
  { num: '04', title: '納期意識の高さ', en: 'Deadline Commitment', desc: '土間打設は他工種の工程に大きく影響します。打設日・養生期間を厳守し、工程全体の遅延防止に貢献します。工程表に基づいた逆算管理が得意です。', points: ['工程表に基づく逆算', '打設日の厳守', '養生期間の適切な管理'] },
  { num: '05', title: '若手育成の環境', en: 'Training System', desc: '未経験・若手も積極採用し、OJTで一人前の職人に育てる体制を整えています。手に職をつけたい人が安心して成長できる職場づくりを大切にしています。', points: ['未経験歓迎の採用方針', 'OJTによる段階的育成', '資格取得支援'] },
  { num: '06', title: '協力会社との連携力', en: 'Partner Network', desc: '協力会社・一人親方と良好な関係を築き、品質・納期・コミュニケーションを共有できるネットワークを持っています。継続取引による安定した協力体制が強みです。', points: ['継続取引のパートナー', '品質基準の共有', 'スポット対応も可能'] },
  { num: '07', title: '板橋区を拠点とした機動力', en: 'Local Footwork', desc: '東京都板橋区を拠点に、都内全域・近郊エリアへ迅速に対応。移動コストを抑え、スポット案件にも素早く動けることが評価されています。', points: ['都内全域対応', '近郊エリアも相談可', 'スポット案件にも対応'] },
]

export default function StrengthContent() {
  return (
    <>
      {/* Stats */}
      <section className="py-16 bg-white" style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 px-6 sm:px-10"
            style={{ background: '#f9f9f9', border: '1px solid rgba(0,0,0,0.06)' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }}>
            <Counter value={128} unit="日" label="年間休日" />
            <Counter value={10}  unit="名" label="採用予定" />
            <Counter value={10}  unit="h" label="月平均残業" />
            <Counter value={7}   unit="つ" label="丸義の強み" />
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Why Maruyoshi</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              7つの強み
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-100">
            {strengths.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.08}>
                <div className="bg-white p-8 group hover:bg-gray-900 transition-colors duration-400 h-full">
                  <div className="flex items-start gap-5">
                    <span className="font-black leading-none shrink-0 group-hover:text-white/05 transition-colors duration-400"
                      style={{ fontSize: 52, color: 'rgba(0,0,0,0.05)', letterSpacing: '-0.04em' }}>{s.num}</span>
                    <div className="pt-1 flex-1">
                      <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400 group-hover:text-white/40 transition-colors duration-400 block mb-1">{s.en}</span>
                      <h3 className="text-base font-black text-gray-900 group-hover:text-white mb-3 transition-colors duration-400">{s.title}</h3>
                      <p className="text-sm text-gray-500 group-hover:text-white/55 leading-relaxed mb-4 transition-colors duration-400">{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.points.map((pt) => (
                          <span key={pt} className="text-[11px] px-2.5 py-1 text-gray-600 group-hover:text-white/55 transition-colors duration-400"
                            style={{ border: '1px solid rgba(0,0,0,0.08)' }}>{pt}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Impact quote */}
      <section className="py-20 lg:py-24" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <p className="label-inv mb-6">Our Mission</p>
            <h2 className="font-black text-white mb-6" style={{ fontSize: 'clamp(26px,4vw,56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              職人の誇りで、<br />現場の期待に応え続ける。
            </h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>
              品質・納期・安全・コミュニケーション。この4つを守り続けることが、丸義の仕事です。<br className="hidden sm:block" />
              現場で信頼される職人集団として、東京の街づくりを支えていきます。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <p className="label mb-4">Join Us</p>
            <h2 className="font-black text-gray-900 mb-4" style={{ fontSize: 'clamp(22px,3.5vw,40px)', letterSpacing: '-0.02em' }}>
              丸義で働きませんか？
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              未経験歓迎・正社員採用。一緒に現場で成長しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/recruit" className="btn-black" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>
                求人情報を見る →
              </Link>
              <Link href="/contact" className="btn-outline" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>
                お問い合わせ
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
