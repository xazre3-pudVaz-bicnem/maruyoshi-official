import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reveal from '@/components/ui/Reveal'
import JsonLd from '@/components/ui/JsonLd'
import { WORKS, getWork } from '@/lib/works'
import { getService } from '@/lib/services'
import { canonical, OG_IMAGE, SITE_URL } from '@/lib/site'
import { ORG_ID } from '@/lib/schema'

/**
 * 施工実績の詳細ページ。
 * lib/works.ts の WORKS が空の間はページが1件も生成されないため、
 * 架空の事例が公開されることはない。
 */

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const work = getWork(params.slug)
  if (!work) return {}

  const url = canonical(`/works/${work.slug}`)
  const ogImage = work.photos[0] ? `${SITE_URL}${work.photos[0].src}` : OG_IMAGE

  return {
    title: `${work.title}｜施工実績`,
    description: work.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${work.title}｜施工実績｜株式会社丸義`,
      description: work.metaDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: work.photos[0]?.alt ?? work.title }],
    },
  }
}

export default function WorkDetailPage({ params }: Props) {
  const work = getWork(params.slug)
  if (!work) notFound()

  const service = getService(work.serviceType)

  return (
    <>
      <JsonLd
        id="work-schema"
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: work.title,
          description: work.metaDescription,
          url: canonical(`/works/${work.slug}`),
          dateCreated: work.completedAt,
          creator: { '@id': ORG_ID },
          contentLocation: { '@type': 'Place', name: work.area },
          image: work.photos.map((p) => `${SITE_URL}${p.src}`),
        }}
      />

      <PageHero label="WORKS" title={work.title} desc={work.summary} />
      <Breadcrumbs
        crumbs={[
          { name: '施工実績', path: '/works' },
          { name: work.title, path: `/works/${work.slug}` },
        ]}
      />

      <article className="py-14 lg:py-20 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          {/* 施工概要 */}
          <Reveal className="mb-12">
            <h2 className="text-base font-black text-gray-900 mb-5">施工概要</h2>
            <dl style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              {([
                ['施工エリア', work.area],
                ['建物種別', work.buildingType],
                ['施工種別', service?.navLabel ?? work.serviceType],
                ...(work.scale ? [['規模', work.scale] as [string, string]] : []),
                ...(work.period ? [['工期', work.period] as [string, string]] : []),
                ['工事内容', work.summary],
              ] as [string, string][]).map(([label, value], i, arr) => (
                <div key={label} className="flex flex-col sm:flex-row"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <dt className="px-5 py-3.5 sm:w-36 shrink-0" style={{ background: '#f9f9f9', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
                    <span className="text-xs font-bold text-gray-500">{label}</span>
                  </dt>
                  <dd className="px-5 py-3.5 text-sm text-gray-800 leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* 施工写真 */}
          {work.photos.length > 0 && (
            <Reveal className="mb-12">
              <h2 className="text-base font-black text-gray-900 mb-5">施工写真</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {work.photos.map((p, i) => (
                  <figure key={p.src}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={i === 0}
                      className="w-full h-auto"
                    />
                    <figcaption className="mt-2 text-xs text-gray-500 leading-relaxed">{p.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          )}

          {/* 施工のポイント */}
          {work.points.length > 0 && (
            <Reveal className="mb-12">
              <h2 className="text-base font-black text-gray-900 mb-5">施工のポイント</h2>
              <div className="space-y-4">
                {work.points.map((pt) => (
                  <div key={pt.title} className="p-6" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                    <h3 className="text-sm font-black text-gray-900 mb-2">{pt.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pt.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          {/* 担当者コメント */}
          {work.comment && (
            <Reveal className="mb-12">
              <h2 className="text-base font-black text-gray-900 mb-5">担当者コメント</h2>
              <blockquote className="quote-line">
                <p className="text-sm text-gray-600 leading-relaxed">{work.comment}</p>
              </blockquote>
            </Reveal>
          )}

          {/* 関連導線 */}
          <Reveal>
            <div className="flex flex-col sm:flex-row gap-3 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              {service && (
                <Link href={`/service/${service.slug}`} className="btn-outline"
                  style={{ fontSize: 11, padding: '13px 24px', justifyContent: 'center' }}>
                  {service.navLabel}の詳細を見る →
                </Link>
              )}
              <Link href="/works" className="btn-outline" style={{ fontSize: 11, padding: '13px 24px', justifyContent: 'center' }}>
                施工実績の一覧へ →
              </Link>
              <Link href="/contact?type=work" className="btn-black" style={{ fontSize: 11, padding: '13px 24px', justifyContent: 'center' }}>
                同様の工事を相談する →
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  )
}
