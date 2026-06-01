'use client'

const ITEMS_A = [
  '左官工事', '土間コンクリート', 'コンクリート打設', '均し・押え', '板橋区',
  '未経験歓迎', '正社員採用', '協力会社募集', '東京都', '一人親方歓迎',
]
const ITEMS_B = [
  'PLASTERING WORK', 'CONCRETE FLOOR', 'PROFESSIONAL', 'ITABASHI TOKYO',
  'FULL-TIME STAFF', 'PARTNER WELCOME', 'EST.2025', 'QUALITY FIRST',
]

export default function TickerSection() {
  const repeatA = [...ITEMS_A, ...ITEMS_A]
  const repeatB = [...ITEMS_B, ...ITEMS_B]

  return (
    <div className="overflow-hidden" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Row A — left scroll */}
      <div className="py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="ticker-track gap-0">
          {repeatA.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="text-[11px] font-black tracking-[0.22em] uppercase text-white/70 whitespace-nowrap">
                {item}
              </span>
              <span className="block w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* Row B — right scroll (reversed) */}
      <div className="py-3">
        <div className="ticker-track-rev gap-0">
          {repeatB.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="text-[10px] font-black tracking-[0.28em] uppercase whitespace-nowrap"
                style={{ color: 'rgba(255,255,255,0.25)' }}>
                {item}
              </span>
              <span className="block w-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
