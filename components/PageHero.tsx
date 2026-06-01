'use client'
import { motion } from 'framer-motion'

interface Props {
  label:     string
  title:     string
  titleSub?: string
  desc?:     string
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function PageHero({ label, title, titleSub, desc }: Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#0d0d0d', paddingTop: '80px', paddingBottom: '72px' }}
    >
      <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
      <div className="bg-stripe-dark absolute inset-0 pointer-events-none opacity-30" />

      {/* 左アクセントライン */}
      <div className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{ width: 3, background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0))' }} />

      {/* 大きな背景ラベル */}
      <div
        className="absolute right-0 bottom-0 font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: 'clamp(72px, 14vw, 160px)',
          color: 'rgba(255,255,255,0.025)',
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
          paddingRight: '2vw',
        }}
      >
        {label}
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
        >
          {/* EN label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.4)' }} />
            <span className="label-inv">{label}</span>
          </div>

          {/* 大見出し */}
          <h1
            className="font-black text-white"
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.06,
            }}
          >
            {title}
          </h1>

          {/* サブタイトル */}
          {titleSub && (
            <p
              className="mt-2 font-black"
              style={{
                fontSize: 'clamp(20px, 3vw, 38px)',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '-0.02em',
              }}
            >
              {titleSub}
            </p>
          )}

          {/* 説明文 */}
          {desc && (
            <p
              className="mt-5 leading-relaxed max-w-xl"
              style={{
                fontSize: 'clamp(13px, 1.4vw, 16px)',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
              }}
            >
              {desc}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
