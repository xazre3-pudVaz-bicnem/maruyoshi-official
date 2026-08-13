import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reveal from '@/components/ui/Reveal'
import { canonical, OG_IMAGE } from '@/lib/site'
import { WORKS, HAS_WORKS } from '@/lib/works'

const description =
  '株式会社丸義が施工した左官工事・土間コンクリート工事の事例。施工エリア・建物種別・工事内容・施工上のポイントとともにご紹介します。'

/**
 * 実績データが未登録の間は noindex とし、サイトマップにも含めない。
 * 実体のないページをインデックスさせないための措置。
 * lib/works.ts に実データを追加すると自動的に index 対象になる。
 */
export const metadata: Metadata = {
  title: '施工実績｜左官・土間コンクリート工事',
  description,
  alternates: { canonical: canonical('/works') },
  robots: HAS_WORKS ? { index: true, follow: true } : { index: false, follow: true },
  openGraph: {
    type: 'website',
    url: canonical('/works'),
    title: '施工実績｜株式会社丸義',
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '株式会社丸義 施工実績' }],
  },
}

export default function WorksPage() {
  return (
    <>
      <PageHero
        label="WORKS"
        title="施工実績"
        desc="左官工事・土間コンクリート工事の施工事例をご紹介します。"
      />
      <Breadcrumbs crumbs={[{ name: '施工実績', path: '/works' }]} />

      <section className="py-16 lg:py-24 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          {!HAS_WORKS ? (
            <Reveal>
              <div className="max-w-2xl mx-auto text-center py-12">
                <h2 className="text-xl font-black text-gray-900 mb-4">施工事例は準備中です</h2>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-9">
                  実際に施工した現場の写真と内容が揃い次第、順次公開します。
                  現時点で対応可能な工事の内容については、事業内容のページをご覧ください。
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/service" className="btn-black" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>
                    事業内容を見る →
                  </Link>
                  <Link href="/contact?type=work" className="btn-outline" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>
                    工事の相談をする
                  </Link>
                </div>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKS.map((w, i) => (
                <Reveal key={w.slug} delay={i * 0.06}>
                  <article className="h-full" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                    <Link href={`/works/${w.slug}`} className="block group">
                      {w.photos[0] && (
                        <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
                          <Image
                            src={w.photos[0].src}
                            alt={w.photos[0].alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-[10px] px-2 py-1 font-bold text-gray-600" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                            {w.area}
                          </span>
                          <span className="text-[10px] px-2 py-1 font-bold text-gray-600" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                            {w.buildingType}
                          </span>
                        </div>
                        <h2 className="text-base font-black text-gray-900 leading-snug mb-2 group-hover:underline">
                          {w.title}
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed">{w.summary}</p>
                      </div>
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
