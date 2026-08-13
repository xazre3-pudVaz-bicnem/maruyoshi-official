'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import LogoBadge from '@/components/ui/LogoBadge'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function ImpactSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} aria-label="丸義の施工に対する考え方" className="relative overflow-hidden" style={{ height: 480 }}>
      {/* Parallax photo */}
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: 1.12 }}>
        <Image
          src="/images/hero.jpg"
          alt=""
          aria-hidden="true"
          fill
          quality={82}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Heavy overlay */}
      <div className="absolute inset-0"
        style={{ background: 'rgba(5,5,5,0.82)' }} />

      {/* Horizontal rule top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0" style={{ width: 3, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)' }} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">

        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="block h-px w-10" style={{ background: 'rgba(255,255,255,0.3)' }} />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase"
            style={{ color: 'rgba(255,255,255,0.35)' }}>Our Philosophy</span>
          <span className="block h-px w-10" style={{ background: 'rgba(255,255,255,0.3)' }} />
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h2
            className="font-black text-white"
            style={{
              fontSize: 'clamp(28px, 5.5vw, 72px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
          >
            一打一打に、プロの誇りを。
          </motion.h2>
        </div>

        <motion.p
          className="max-w-xl text-sm sm:text-base leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.5)', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
        >
          コンクリートを均し、職人が手で仕上げる。その一工程一工程に、職人としての誇りと責任を込めています。
          丸義は、現場の品質が建物の未来を決めると信じています。
        </motion.p>

        {/* Logo emblem */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
        >
          <LogoBadge size={60} variant="dark" />
        </motion.div>

      </div>
    </section>
  )
}
