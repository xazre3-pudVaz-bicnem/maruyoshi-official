import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reveal from '@/components/ui/Reveal'
import JsonLd from '@/components/ui/JsonLd'
import { COLUMNS, getColumn } from '@/lib/columns'
import { SERVICES } from '@/lib/services'
import { canonical, OG_IMAGE, COMPANY } from '@/lib/site'
import { articleSchema, faqSchema } from '@/lib/schema'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return COLUMNS.map((c) => ({ slug: c.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const column = getColumn(params.slug)
  if (!column) return {}

  const url = canonical(`/column/${column.slug}`)

  return {
    title: column.metaTitle,
    description: column.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${column.metaTitle}｜株式会社丸義`,
      description: column.metaDescription,
      publishedTime: column.datePublished,
      modifiedTime: column.dateModified,
      authors: [COMPANY.name],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: column.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${column.metaTitle}｜株式会社丸義`,
      description: column.metaDescription,
      images: [OG_IMAGE],
    },
  }
}

export default function ColumnPage({ params }: Props) {
  const column = getColumn(params.slug)
  if (!column) notFound()

  const relatedServices = SERVICES.filter((s) => column.relatedServices.includes(s.slug))
  const relatedColumns = COLUMNS.filter((c) => column.relatedColumns.includes(c.slug))

  const schemas: object[] = [
    articleSchema({
      headline: column.title,
      description: column.metaDescription,
      path: `/column/${column.slug}`,
      datePublished: column.datePublished,
      dateModified: column.dateModified,
    }),
  ]
  if (column.faqs?.length) schemas.push(faqSchema(column.faqs))

  return (
    <>
      <JsonLd id="article-schema" data={schemas} />

      <PageHero label="COLUMN" title={column.title} />
      <Breadcrumbs
        crumbs={[
          { name: '施工コラム', path: '/column' },
          { name: column.title, path: `/column/${column.slug}` },
        ]}
      />

      <article>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-14 lg:py-20">
          {/* メタ情報 */}
          <Reveal className="mb-10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pb-5"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
              <span className="px-2.5 py-1 font-bold text-gray-600" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                {column.category}
              </span>
              <span>
                公開日：<time dateTime={column.datePublished}>{column.datePublished}</time>
              </span>
              {column.dateModified !== column.datePublished && (
                <span>
                  更新日：<time dateTime={column.dateModified}>{column.dateModified}</time>
                </span>
              )}
              <span>
                運営者：
                <Link href="/company" className="hover:text-gray-900 underline underline-offset-2">
                  {COMPANY.name}
                </Link>
              </span>
            </div>
          </Reveal>

          {/* リード */}
          <Reveal className="mb-10">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">{column.lead}</p>
          </Reveal>

          {/* 要点 */}
          <Reveal className="mb-12">
            <aside className="p-7" style={{ background: '#f9f9f9', border: '1px solid rgba(0,0,0,0.08)' }}>
              <h2 className="text-sm font-black text-gray-900 mb-4">この記事の要点</h2>
              <ul className="space-y-3">
                {column.keyPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="block w-3 h-px bg-gray-400 mt-2.5 shrink-0" />
                    <span className="text-sm text-gray-700 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>

          {/* 本文 */}
          <div className="space-y-12">
            {column.sections.map((sec, i) => (
              <Reveal key={sec.h2} delay={i * 0.03}>
                <section>
                  <h2 className="font-black text-gray-900 mb-5"
                    style={{ fontSize: 'clamp(20px,2.6vw,28px)', letterSpacing: '-0.02em', lineHeight: 1.35 }}>
                    {sec.h2}
                  </h2>
                  <div className="prose-body">
                    {sec.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  {sec.bullets && (
                    <ul className="mt-5 space-y-2.5">
                      {sec.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 shrink-0" />
                          <span className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          {/* FAQ */}
          {column.faqs && column.faqs.length > 0 && (
            <Reveal className="mt-14">
              <h2 className="font-black text-gray-900 mb-6"
                style={{ fontSize: 'clamp(20px,2.6vw,28px)', letterSpacing: '-0.02em' }}>
                よくある質問
              </h2>
              <div className="space-y-4">
                {column.faqs.map((f) => (
                  <div key={f.q} className="p-6" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                    <h3 className="text-sm sm:text-base font-black text-gray-900 mb-3 leading-snug">{f.q}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* 発信主体 */}
          <Reveal className="mt-14">
            <aside className="p-7" style={{ background: '#0d0d0d' }}>
              <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Publisher
              </p>
              <p className="text-sm font-bold text-white mb-2">運営者：{COMPANY.name}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                東京都板橋区徳丸を拠点に、左官工事・土間コンクリート工事を専門とする建設会社です。
                本記事は、実際の施工現場で判断していることをもとに丸義が作成・監修しています。
              </p>
              <Link href="/company" className="btn-outline-inv mt-5"
                style={{ fontSize: 11, padding: '12px 22px', display: 'inline-flex' }}>
                会社概要を見る →
              </Link>
            </aside>
          </Reveal>
        </div>
      </article>

      {/* 関連サービス */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-20" style={{ background: '#f5f5f5' }}>
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-6">
              <p className="label mb-3">Related Service</p>
              <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(20px,2.6vw,30px)', letterSpacing: '-0.02em' }}>
                この記事に関連する施工
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <Link href={`/service/${s.slug}`}
                    className="block bg-white p-6 h-full hover:bg-gray-900 hover:text-white transition-colors duration-300"
                    style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                    <span className="text-sm font-bold leading-snug">
                      東京都板橋区の{s.navLabel}を見る →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 関連記事 */}
      {relatedColumns.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <Reveal className="mb-6">
              <p className="label mb-3">Related Column</p>
              <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(20px,2.6vw,30px)', letterSpacing: '-0.02em' }}>
                あわせて読みたい記事
              </h2>
            </Reveal>
            <div className="space-y-3">
              {relatedColumns.map((c, i) => (
                <Reveal key={c.slug} delay={i * 0.05}>
                  <Link href={`/column/${c.slug}`}
                    className="block p-5 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                    style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                    <span className="text-sm font-bold leading-snug">{c.title} →</span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-8">
              <Link href="/column" className="btn-outline" style={{ fontSize: 11, padding: '13px 24px', display: 'inline-flex' }}>
                施工コラムの一覧へ →
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-black text-white mb-5"
              style={{ fontSize: 'clamp(22px,3.6vw,42px)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              施工のご相談はお気軽に
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.55)' }}>
              工事内容・現場の場所・ご希望の時期をお知らせください。<br className="hidden sm:block" />
              東京都板橋区を拠点に、都内全域の現場へ対応しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=work" className="btn-black"
                style={{ background: '#fff', color: '#0d0d0d', justifyContent: 'center', fontSize: 13, padding: '18px 40px' }}>
                工事の相談をする →
              </Link>
              <Link href="/service" className="btn-outline-inv"
                style={{ justifyContent: 'center', fontSize: 13, padding: '18px 36px' }}>
                事業内容を見る
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
