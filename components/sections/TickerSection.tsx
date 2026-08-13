'use client'

/**
 * 帯の内容は取り扱う工種を示すブランド演出に留める。
 * 検索順位を目的としたキーワードの反復列挙は行わない。
 */
const ITEMS_A = ['左官工事', '土間コンクリート', 'コンクリート打設', '均し・押え']
const ITEMS_B = ['PLASTERING WORK', 'CONCRETE FLOOR', 'ITABASHI TOKYO', 'EST.2025']

/** 画面幅を満たすための繰り返し数。track は -50% 移動するため必ず偶数倍にする */
const fill = (items: string[]) => {
  const seq = [...items, ...items, ...items]
  return [...seq, ...seq]
}

export default function TickerSection() {
  const repeatA = fill(ITEMS_A)
  const repeatB = fill(ITEMS_B)

  return (
    <div aria-hidden="true" className="overflow-hidden" style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
