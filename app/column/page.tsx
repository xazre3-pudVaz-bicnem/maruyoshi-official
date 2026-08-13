import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reveal from '@/components/ui/Reveal'
import { canonical, OG_IMAGE, COMPANY } from '@/lib/site'
import { COLUMNS, COLUMN_CATEGORIES } from '@/lib/columns'

const title = '施工コラム｜左官・土間コンクリートの基礎知識'
const description =
  '左官工事や土間コンクリート工事の工程・工法・品質管理について、株式会社丸義が現場の実務に沿って解説します。打設から均し・押え・養生まで、依頼前に知っておきたい知識をまとめています。'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/column') },
  openGraph: {
    type: 'website',
    url: canonical('/column'),
    title: `${title}｜株式会社丸義`,
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '株式会社丸義 施工コラム' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}｜株式会社丸義`,
    description,
    images: [OG_IMAGE],
  },
}

export default function ColumnIndexPage() {
  return (
    <>
      <PageHero
        label="COLUMN"
        title="施工コラム"
        titleSub="左官・土間コンクリートの基礎知識"
        desc="工程・工法・品質管理について、現場の実務に沿って解説しています。"
      />
      <Breadcrumbs crumbs={[{ name: '施工コラム', path: '/column' }]} />

      <section className="py-16 lg:py-24 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-12">
            <p className="text-sm sm:text-base text-gray-500 max-w-2xl leading-relaxed">
              コンクリートは打ってしまえば元に戻せません。だからこそ、どの工程が何のために存在するのかを
              知っておくと、工事の相談や仕上がりの確認がしやすくなります。
              現場で実際に判断していることを、できるだけそのまま書いています。
            </p>
          </Reveal>

          {COLUMN_CATEGORIES.map((cat) => {
            const items = COLUMNS.filter((c) => c.category === cat)
            if (items.length === 0) return null

            return (
              <div key={cat} className="mb-16 last:mb-0">
                <Reveal className="mb-6">
                  <div className="flex items-center gap-3">
                    <span className="block w-7 h-px bg-gray-900" />
                    <h2 className="text-base font-black text-gray-900 tracking-wide">{cat}</h2>
                    <span className="text-xs text-gray-400">{items.length}件</span>
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
                  {items.map((c, i) => (
                    <Reveal key={c.slug} delay={i * 0.05}>
                      <article className="bg-white h-full">
                        <Link
                          href={`/column/${c.slug}`}
                          className="block p-7 h-full group hover:bg-gray-900 transition-colors duration-300"
                        >
                          <span className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-400 group-hover:text-white/40 block mb-3 transition-colors duration-300">
                            {c.category}
                          </span>
                          <h3 className="text-base font-black text-gray-900 group-hover:text-white leading-snug mb-3 transition-colors duration-300">
                            {c.title}
                          </h3>
                          <p className="text-sm text-gray-500 group-hover:text-white/55 leading-relaxed transition-colors duration-300">
                            {c.lead.slice(0, 76)}…
                          </p>
                          <span className="mt-5 inline-block text-xs font-black text-gray-900 group-hover:text-white transition-colors duration-300">
                            続きを読む →
                          </span>
                        </Link>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 発信主体の明示 */}
      <section className="py-14" style={{ background: '#f5f5f5' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="bg-white p-7" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              <p className="text-[10px] font-black tracking-[0.28em] uppercase text-gray-400 mb-3">Publisher</p>
              <p className="text-sm font-bold text-gray-900 mb-2">運営者：{COMPANY.name}</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                東京都板橋区徳丸を拠点に、左官工事・土間コンクリート工事を専門とする建設会社です。
                本コラムは、実際の施工で判断していることをもとに丸義が作成・監修しています。
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/company" className="btn-outline" style={{ fontSize: 11, padding: '12px 22px', display: 'inline-flex' }}>
                  会社概要を見る →
                </Link>
                <Link href="/service" className="btn-outline" style={{ fontSize: 11, padding: '12px 22px', display: 'inline-flex' }}>
                  事業内容を見る →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
