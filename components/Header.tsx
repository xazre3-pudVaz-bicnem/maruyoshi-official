'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/service',  label: '事業内容',    en: 'SERVICE'  },
  { href: '/strength', label: '会社の強み',   en: 'STRENGTH' },
  { href: '/recruit',  label: '求人募集',     en: 'RECRUIT'  },
  { href: '/partner',  label: '協力会社募集',  en: 'PARTNER'  },
  { href: '/company',  label: '会社情報',     en: 'COMPANY'  },
  { href: '/contact',  label: 'お問い合わせ',  en: 'CONTACT'  },
]

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Header() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome   = pathname === '/'

  /* トップページのみ透明→白フェード。下層ページは常にwhiteヘッダー */
  const isScrolled = isHome ? scrolled : true

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          background:           isScrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          borderBottom:         isScrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
          backdropFilter:       isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
          transition:           'background 0.5s, border-color 0.5s',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease }}
      >
        <div
          className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between"
          style={{ height: '68px' }}
        >

          {/* ── ロゴ（横長ロゴ1枚・全ページ統一） ── */}
          <Link href="/" className="flex items-center select-none shrink-0" aria-label="株式会社丸義">
            <Image
              src={isScrolled ? '/images/logo-header.png' : '/images/logo-header-transparent.png'}
              alt="株式会社丸義"
              width={1566}
              height={460}
              quality={95}
              priority
              style={{
                width:     'clamp(130px, 13vw, 185px)',
                height:    'auto',
                display:   'block',
                objectFit: 'contain',
                filter:    isScrolled ? 'none' : 'brightness(0) invert(1)',
                transition: 'filter 0.4s',
              }}
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="flex flex-col items-center gap-0.5 group">
                <span
                  className="text-[12px] font-medium tracking-wide transition-colors duration-300 nav-link"
                  style={{ color: isScrolled ? '#374151' : 'rgba(255,255,255,0.92)' }}
                >
                  {link.label}
                </span>
                <span
                  className="text-[8px] font-bold tracking-[0.18em] transition-colors duration-300"
                  style={{ color: isScrolled ? '#9ca3af' : 'rgba(255,255,255,0.4)' }}
                >
                  {link.en}
                </span>
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link href="/partner"
              className="text-[11px] font-black tracking-[0.12em] px-4 py-2.5 transition-all duration-300 whitespace-nowrap"
              style={isScrolled
                ? { border: '1px solid #111', color: '#111', background: 'transparent' }
                : { border: '1px solid rgba(255,255,255,0.6)', color: '#fff', background: 'rgba(0,0,0,0.15)' }
              }
            >
              協力会社として相談
            </Link>
            <Link href="/recruit"
              className="text-[11px] font-black tracking-[0.12em] px-4 py-2.5 transition-all duration-300 whitespace-nowrap"
              style={isScrolled
                ? { background: '#0d0d0d', color: '#fff' }
                : { background: 'rgba(255,255,255,0.95)', color: '#0d0d0d' }
              }
            >
              求人に応募する
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
          >
            {[
              { rotate: open ? 45 : 0,  y: open ? 6.5  : 0 },
              { opacity: open ? 0 : 1,  scaleX: open ? 0 : 1 },
              { rotate: open ? -45 : 0, y: open ? -6.5 : 0 },
            ].map((anim, i) => (
              <motion.span key={i} className="block w-6 h-[1.5px] origin-center"
                style={{ background: isScrolled ? '#111' : '#fff' }}
                animate={anim} transition={{ duration: 0.3 }} />
            ))}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="menu-overlay flex flex-col px-6 pt-6 pb-10"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease }}
          >
            {/* Top bar — 横長ロゴ（白抜き） */}
            <div className="flex items-center justify-between mb-14">
              <Image
                src="/images/logo-header-transparent.png"
                alt="株式会社丸義"
                width={1566}
                height={460}
                quality={95}
                style={{
                  width:  130,
                  height: 'auto',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9,
                }}
              />
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center transition-colors"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                aria-label="閉じる"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M1 1L19 19M19 1L1 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col mb-10">
              {navLinks.map((link, i) => (
                <motion.div key={link.href}
                  initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.065, duration: 0.45, ease }}>
                  <Link href={link.href} onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-bold tracking-[0.22em] uppercase w-16"
                        style={{ color: 'rgba(255,255,255,0.22)' }}>{link.en}</span>
                      <span className="text-base font-black text-white">{link.label}</span>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.25)' }}>→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.45 }} className="space-y-3">
              <Link href="/recruit" onClick={() => setOpen(false)}
                className="block w-full text-center bg-white text-gray-900 font-black py-4 tracking-widest text-sm">
                求人に応募する →
              </Link>
              <Link href="/partner" onClick={() => setOpen(false)}
                className="block w-full text-center font-black py-4 tracking-widest text-sm"
                style={{ border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.65)' }}>
                協力会社として相談する →
              </Link>
            </motion.div>

            <p className="pt-8 text-center text-[10px] tracking-widest"
              style={{ color: 'rgba(255,255,255,0.15)' }}>
              © 株式会社丸義
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[68px]" />
    </>
  )
}
