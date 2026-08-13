import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'ページが見つかりません',
  description: 'お探しのページは移動または削除された可能性があります。',
  robots: { index: false, follow: true },
  // 404 にトップページの canonical を継承させない
  alternates: { canonical: null },
}

const links = [
  { href: '/',              label: 'トップページ' },
  { href: '/service',       label: '事業内容' },
  { href: '/area/itabashi', label: '板橋区の対応エリア' },
  { href: '/column',        label: '施工コラム' },
  { href: '/recruit',       label: '求人募集' },
  { href: '/partner',       label: '協力会社募集' },
  { href: '/company',       label: '会社概要' },
  { href: '/contact',       label: 'お問い合わせ' },
]

export default function NotFound() {
  return (
    <div className="relative overflow-hidden" style={{ background: '#0d0d0d', minHeight: '70vh' }}>
      <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
      <div className="bg-stripe-dark absolute inset-0 pointer-events-none opacity-30" />
      <div
        className="absolute right-0 bottom-0 font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: 'clamp(100px, 22vw, 300px)',
          color: 'rgba(255,255,255,0.025)',
          letterSpacing: '-0.05em',
          lineHeight: 0.9,
          paddingRight: '2vw',
        }}
      >
        404
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-24 lg:py-32">
        <div className="flex items-center gap-3 mb-5">
          <span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.4)' }} />
          <span className="label-inv">Not Found</span>
        </div>

        <h1 className="font-black text-white mb-6"
          style={{ fontSize: 'clamp(30px, 5vw, 62px)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
          ページが<br className="sm:hidden" />見つかりません
        </h1>

        <p className="text-sm sm:text-base leading-relaxed mb-12 max-w-xl"
          style={{ color: 'rgba(255,255,255,0.5)' }}>
          お探しのページは移動または削除された可能性があります。
          お手数ですが、以下のリンクからお進みください。
        </p>

        <nav aria-label="主要ページ" className="mb-12">
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}
                  className="block p-5 text-sm font-bold text-white hover:bg-white hover:text-gray-900 transition-colors"
                  style={{ background: '#0d0d0d' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.25)' }}>
            Service
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/service/${s.slug}`}
                  className="text-xs font-bold transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {s.navLabel} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
