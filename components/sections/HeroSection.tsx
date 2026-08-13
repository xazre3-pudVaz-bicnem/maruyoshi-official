'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const TAGS = ['未経験歓迎', '正社員採用', '年間休日128日', '東京・板橋区']

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: 700 }}
    >
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      {/* ── Background photo with parallax ── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imgY, scale: 1.08, transformOrigin: 'center center' }}
      >
        <Image
          src="/images/hero.jpg"
          alt="打設したコンクリートを均す土間工事の施工現場"
          fill
          priority
          quality={82}
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ── Overlay gradient ── */}
      {/* Bottom-heavy overlay: keeps lower area darker for text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.28) 100%)',
        }}
      />
      {/* Subtle top fade for header legibility */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: 160, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)' }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 120, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
      />

      {/* ── Geometric accents ── */}
      <div
        className="absolute left-0 top-0 pointer-events-none"
        style={{ width: 3, height: '55%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0))' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 pointer-events-none"
        style={{ width: '2px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)' }}
      />

      {/* ── Main content ── */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center z-10"
        style={{ y: textY, opacity: fadeOut }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <div className="max-w-2xl">

            {/* Company identity mark — 横長ロゴ1枚 */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease }}
            >
              <Image
                src="/images/logo-header-transparent.png"
                alt="株式会社丸義"
                width={1566}
                height={460}
                priority
                quality={85}
                sizes="240px"
                style={{
                  width:      'clamp(160px, 18vw, 240px)',
                  height:     'auto',
                  filter:  'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
                  opacity: 0.95,
                  display: 'block',
                }}
              />
            </motion.div>

            {/* Main heading — ページの主題として h1 は1つ */}
            <h1 style={{ lineHeight: 1.06 }}>
              {[
                { text: '現場を仕上げる、', delay: 0.45 },
                { text: '技術で応える。',   delay: 0.60 },
              ].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block font-black text-white"
                    style={{
                      fontSize: 'clamp(44px, 7.8vw, 108px)',
                      letterSpacing: '-0.03em',
                      textShadow: '0 2px 24px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.7)',
                    }}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: line.delay, duration: 0.95, ease }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}

              <motion.span
                className="mt-8 flex items-start gap-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.8, ease }}
              >
                <span className="block w-5 h-px mt-[11px] shrink-0"
                  style={{ background: 'rgba(255,255,255,0.55)' }} />
                <span className="block font-bold text-white leading-snug"
                  style={{
                    fontSize: 'clamp(13px, 1.5vw, 16px)',
                    letterSpacing: '0.05em',
                    textShadow: '0 1px 8px rgba(0,0,0,0.6)',
                  }}>
                  東京都板橋区の左官工事・土間コンクリート工事
                </span>
              </motion.span>
            </h1>

            {/* Sub line */}
            <motion.p
              className="text-sm leading-relaxed mt-1.5 mb-10 ml-9"
              style={{
                color: 'rgba(255,255,255,0.65)',
                textShadow: '0 1px 6px rgba(0,0,0,0.5)',
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease }}
            >
              コンクリートの打設・均し・押えまで一貫施工。確かな技術と誠実な仕事で現場を支えます。
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7, ease }}
            >
              {TAGS.map((tag, i) => (
                <span
                  key={tag}
                  className="text-[11px] font-bold px-3 py-1.5 tracking-wide backdrop-blur-sm"
                  style={{
                    border: `1px solid ${i === 0 ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.3)'}`,
                    color: i === 0 ? '#fff' : 'rgba(255,255,255,0.6)',
                    background: i === 0 ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.15)',
                    textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute z-20 flex flex-col items-center gap-2"
        style={{ bottom: 36, left: '50%', x: '-50%', opacity: fadeOut }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-[9px] tracking-[0.32em] uppercase"
          style={{ color: 'rgba(255,255,255,0.45)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
          Scroll
        </span>
        <div className="w-px h-10 overflow-hidden relative"
          style={{ background: 'rgba(255,255,255,0.2)' }}>
          <motion.div
            className="w-full bg-white"
            style={{ height: '42%' }}
            animate={{ y: ['-100%', '260%'] }}
            transition={{ duration: 1.5, ease: 'easeInOut' as const, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* ── Corner bracket ── */}
      <div className="absolute bottom-8 right-8 pointer-events-none hidden sm:block">
        <div className="relative w-10 h-10" style={{ color: 'rgba(255,255,255,0.25)' }}>
          <span className="absolute top-0 left-0 block w-3 h-3"
            style={{ borderTop: '1px solid currentColor', borderLeft: '1px solid currentColor' }} />
          <span className="absolute bottom-0 right-0 block w-3 h-3"
            style={{ borderBottom: '1px solid currentColor', borderRight: '1px solid currentColor' }} />
        </div>
      </div>
    </section>
  )
}
