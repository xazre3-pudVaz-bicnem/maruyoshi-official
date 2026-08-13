'use client'
import { motion } from 'framer-motion'
import LogoBadge from '@/components/ui/LogoBadge'
import { ADDRESS, COMPANY, BUSINESS_HOURS } from '@/lib/site'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const info = [
  { label: '会社名',   value: '株式会社丸義' },
  { label: '代表者',   value: '善平 健志郎' },
  { label: '設立',     value: '令和7年（2025年）' },
  { label: '所在地',   value: ADDRESS.full },
  { label: '電話番号', value: COMPANY.tel },
  { label: '受付時間', value: `${BUSINESS_HOURS.display}（${BUSINESS_HOURS.daysDisplay}）` },
  { label: '事業内容', value: COMPANY.business },
  { label: '採用規模', value: '10名予定' },
  { label: 'URL',      value: 'www.maruyoshi-official.com' },
]

export default function CompanySection() {
  return (
    <section id="company" className="relative py-24 lg:py-36" style={{ background: '#f5f5f5' }}>
      <div className="bg-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="line-h" style={{ color: '#0d0d0d', width: 32 }} />
              <span className="label">Company</span>
            </div>
            <h2 className="font-black text-gray-900 mb-6"
              style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
              会社情報
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              株式会社丸義は、東京都板橋区を拠点とする左官・土間コンクリート工事の専門会社です。
              令和7年の設立以来、確かな施工品質と誠実な現場対応で信頼を積み上げています。
            </p>

            {/* Identity block */}
            <div className="p-8 bg-gray-900" style={{ position: 'relative' }}>
              <div className="absolute top-4 right-4 w-6 h-6 pointer-events-none">
                <span className="absolute top-0 left-0 block w-2.5 h-2.5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.2)', borderLeft: '1px solid rgba(255,255,255,0.2)' }} />
                <span className="absolute bottom-0 right-0 block w-2.5 h-2.5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.2)' }} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <LogoBadge size={58} variant="dark" />
                <div>
                  <div className="text-[10px] font-bold tracking-[0.22em] uppercase mb-1"
                    style={{ color: 'rgba(255,255,255,0.3)' }}>Kabushiki Kaisha</div>
                  <div className="text-xl font-black text-white tracking-wide">丸義</div>
                  <div className="text-[10px] tracking-widest mt-1"
                    style={{ color: 'rgba(255,255,255,0.25)' }}>左官・土間コンクリート工事</div>
                </div>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                &ldquo;現場を仕上げる、技術で応える&rdquo;<br />
                左官・土間コンクリートに特化し、一棟一棟に真剣に向き合う建設会社です。
              </p>
            </div>
          </motion.div>

          {/* Right — table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <div style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              {info.map((item, i) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row"
                  style={{ borderBottom: i < info.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                >
                  <div
                    className="px-5 py-4 shrink-0 sm:w-32 flex items-start pt-4"
                    style={{ background: '#fff', borderRight: '1px solid rgba(0,0,0,0.06)' }}
                  >
                    <span className="text-xs font-bold text-gray-500 tracking-wide">{item.label}</span>
                  </div>
                  <div className="px-5 py-4 flex items-start" style={{ background: '#fafafa' }}>
                    <span className="text-sm text-gray-800 leading-relaxed">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-4 relative overflow-hidden"
              style={{ height: 180, background: '#e8e8e8', border: '1px solid rgba(0,0,0,0.08)' }}>
              <div className="absolute inset-0 bg-grid-medium" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-900" />
                <span className="text-xs font-bold text-gray-600 tracking-wide">板橋区徳丸 2-27-14</span>
                <a
                  href="https://maps.google.com/?q=東京都板橋区徳丸2-27-14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold tracking-widest mt-1 px-4 py-1.5 bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                >
                  Google Maps で開く
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
