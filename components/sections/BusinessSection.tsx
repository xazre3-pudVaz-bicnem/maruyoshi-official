'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const items = [
  {
    num: '01',
    href: '/service/sakan',
    title: '左官工事',
    en: 'Plastering Work',
    desc: 'モルタル・漆喰・石膏などを使用した壁・床・天井の仕上げ工事。熟練の技術と丁寧な施工で、美しく耐久性の高い仕上がりを実現します。',
    points: ['壁面・天井仕上げ', 'モルタル・漆喰施工', '防水・防塵仕上げ'],
  },
  {
    num: '02',
    href: '/service/doma-concrete',
    title: '土間コンクリート工事',
    en: 'Concrete Floor Work',
    desc: '駐車場・倉庫・工場・住宅の床面に強固なコンクリート土間を施工。水平精度と表面品質にこだわった仕上がりが特長です。',
    points: ['駐車場・倉庫床施工', '平坦性・強度の確保', '仕上げ面の品質管理'],
  },
  {
    num: '03',
    href: '/service/concrete-placement',
    title: 'コンクリート打設・均し・押え',
    en: 'Concrete Placing & Finishing',
    desc: 'コンクリートの打設から均し・押えまでを一貫して施工。確かな知識と経験で、施工品質と納期を守ります。',
    points: ['コンクリート打設', '均し・レベリング', 'トンボ・押え仕上げ'],
  },
]

/** トップから各詳細ページへ直接到達できるようにする補助リンク */
const detailLinks = [
  { href: '/service/screeding-finishing', label: 'コンクリート均し・押え仕上げ' },
  { href: '/area/itabashi',               label: '板橋区での対応内容' },
  { href: '/column',                      label: '施工コラム' },
]

export default function BusinessSection() {
  return (
    <section id="business" className="relative py-24 lg:py-36 bg-white">
      <div className="bg-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="line-h" style={{ color: '#0d0d0d', width: 32 }} />
            <span className="label">Business</span>
          </div>
          <h2 className="font-black text-gray-900"
            style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
            事業内容
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-lg leading-relaxed">
            左官・土間コンクリートの専門工事会社として、<br className="hidden sm:block" />
            あらゆる現場で高品質な施工をお届けします。
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              className="card-invert relative bg-white p-8 lg:p-10 group cursor-default"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease }}
            >
              {/* Number */}
              <div
                className="card-invert-number font-black mb-6 leading-none select-none"
                style={{ fontSize: 64, color: 'rgba(0,0,0,0.06)', letterSpacing: '-0.04em' }}
              >
                {item.num}
              </div>

              {/* Title */}
              <div className="mb-1">
                <span className="card-invert-text text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400 block mb-2">
                  {item.en}
                </span>
                <h3 className="text-lg font-black text-gray-900 leading-snug">
                  <Link href={item.href} className="hover:underline">
                    {item.title}
                  </Link>
                </h3>
              </div>

              {/* Separator */}
              <div className="my-5" style={{ height: 1, background: 'rgba(0,0,0,0.08)' }} />

              {/* Description */}
              <p className="card-invert-text text-sm text-gray-500 leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Points */}
              <ul className="space-y-1.5">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <span className="block w-3 h-px" style={{ background: 'currentColor', opacity: 0.4 }} />
                    <span className="card-invert-text text-xs font-medium text-gray-600">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* 詳細ページへの導線 */}
              <div className="mt-6">
                <Link href={item.href}
                  className="card-invert-text inline-flex items-center gap-2 text-xs font-black tracking-wider text-gray-900">
                  {item.title}の詳細を見る
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M2 9H16M10 3L16 9L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, ease }}>
          <Link href="/service" className="btn-outline" style={{ fontSize: 11, padding: '12px 24px', display: 'inline-flex' }}>
            事業内容の一覧を見る →
          </Link>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {detailLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">
                  {l.label} →
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}
