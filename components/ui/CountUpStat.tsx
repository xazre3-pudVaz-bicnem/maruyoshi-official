'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * 初期HTML（SSR）には必ず最終値を出力する。
 * カウントアップは JS が有効かつ prefers-reduced-motion 未指定の場合のみ、
 * マウント後に 0 から演出するだけの視覚効果として動かす。
 * 検索エンジン・スクリーンリーダーが取得するテキストが 0 にならないようにするため。
 */
export default function CountUpStat({
  value,
  unit,
  label,
  fontSize = 'clamp(36px, 5vw, 60px)',
}: {
  value: number
  unit: string
  label: string
  fontSize?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setDisplay(0)

    let raf = 0
    const animate = () => {
      let start: number | null = null
      const step = (ts: number) => {
        if (start === null) start = ts
        const p = Math.min((ts - start) / 1600, 1)
        setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * value))
        if (p < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect()
          animate()
        }
      },
      { threshold: 0.5 },
    )
    obs.observe(el)

    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-black leading-none mb-1 counter-num"
        style={{ fontSize, letterSpacing: '-0.04em', color: '#0d0d0d' }}
      >
        {display}
        <span className="text-base ml-0.5">{unit}</span>
      </div>
      <div className="text-xs text-gray-400 tracking-wide">{label}</div>
    </div>
  )
}
