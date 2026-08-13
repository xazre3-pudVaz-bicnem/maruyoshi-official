import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { SERVICES, type ServiceDetail } from '@/lib/services'
import { COLUMNS } from '@/lib/columns'
import { COMPANY } from '@/lib/site'

/** サーバーコンポーネント。本文・見出し・内部リンクはすべて初期HTMLに含まれる。 */
export default function ServiceDetailContent({ service }: { service: ServiceDetail }) {
  const relatedServices = SERVICES.filter((s) => service.related.includes(s.slug))
  const relatedColumns = COLUMNS.filter((c) => service.relatedColumns.includes(c.slug))

  return (
    <>
      {/* リード文 */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="prose-body">
              {service.lead.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* どんな現場で必要か */}
      <section className="py-20 lg:py-24" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">When It&rsquo;s Needed</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              どんな現場で必要になるか
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.needs.map((n, i) => (
              <Reveal key={n.title} delay={i * 0.07}>
                <div className="bg-white p-7 h-full" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-black tracking-[0.2em] text-gray-300">0{i + 1}</span>
                    <h3 className="text-base font-black text-gray-900 leading-snug">{n.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{n.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 施工工程 */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Process</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              施工工程
            </h2>
          </Reveal>
          <ol style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05} as="li">
                <div
                  className="flex flex-col sm:flex-row"
                  style={{ borderBottom: i < service.process.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                >
                  <div className="px-5 py-4 sm:w-32 shrink-0" style={{ background: '#f9f9f9', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
                    <span className="text-[10px] font-black tracking-[0.2em] text-gray-500">{p.step}</span>
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="text-sm font-black text-gray-900 mb-1.5">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 使用する道具・工法 */}
      <section className="py-20 lg:py-24 relative" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.35)' }} />
              <span className="label-inv">Tools</span>
            </div>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              使用する道具・機械
            </h2>
          </Reveal>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {service.tools.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div className="p-6 h-full" style={{ background: '#0d0d0d' }}>
                  <dt className="text-sm font-black text-white mb-2">{t.name}</dt>
                  <dd className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{t.desc}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 施工品質で重要なポイント */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Quality</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              施工品質で重要なポイント
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.quality.map((q, i) => (
              <Reveal key={q.title} delay={i * 0.07}>
                <div className="p-7 h-full relative group overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="absolute inset-0 bg-gray-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <h3 className="text-base font-black text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">{q.title}</h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/55 leading-relaxed transition-colors duration-500">{q.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* よくある施工上の課題と対応 */}
      <section className="py-20 lg:py-24" style={{ background: '#f5f5f5' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Common Issues</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              よくある施工上の課題と丸義の対応
            </h2>
          </Reveal>
          <div className="space-y-5">
            {service.issues.map((it, i) => (
              <Reveal key={it.problem} delay={i * 0.07}>
                <div className="bg-white p-7" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <h3 className="text-base font-black text-gray-900 mb-4 leading-snug">{it.problem}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 block mb-1">原因</span>
                      <p className="text-sm text-gray-600 leading-relaxed">{it.cause}</p>
                    </div>
                    <div className="pt-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 block mb-1">丸義の対応</span>
                      <p className="text-sm text-gray-800 leading-relaxed">{it.response}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 対応現場 + 対応エリア */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <Reveal className="mb-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="block w-7 h-px bg-gray-900" />
                  <span className="label">Work Scene</span>
                </div>
                <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(22px,3vw,38px)', letterSpacing: '-0.03em' }}>
                  対応現場
                </h2>
              </Reveal>
              <ul>
                {service.scenes.map((sc, i) => (
                  <Reveal key={sc} delay={i * 0.05} as="li">
                    <div className="flex items-start gap-3 py-3.5" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                      <span className="block w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0" />
                      <span className="text-sm font-bold text-gray-800">{sc}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div>
              <Reveal className="mb-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="block w-7 h-px bg-gray-900" />
                  <span className="label">Service Area</span>
                </div>
                <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(22px,3vw,38px)', letterSpacing: '-0.03em' }}>
                  対応エリア
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="p-7" style={{ background: '#f9f9f9', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    東京都板橋区徳丸に事務所を置き、東京都全域の現場に対応しています。
                    埼玉県南部・神奈川県北部・千葉県西部も、工事内容によりご相談いただけます。
                  </p>
                  <Link href="/area/itabashi" className="btn-outline" style={{ fontSize: 11, padding: '12px 22px', display: 'inline-flex' }}>
                    板橋区での対応内容を見る →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ（FAQPage 構造化データと同一内容） */}
      <section className="py-20 lg:py-24" style={{ background: '#f5f5f5' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">FAQ</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(26px,4vw,46px)', letterSpacing: '-0.03em' }}>
              よくあるご質問
            </h2>
          </Reveal>
          <div className="space-y-4">
            {service.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="bg-white p-6" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="text-sm sm:text-base font-black text-gray-900 mb-3 leading-snug">{f.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 関連サービス・関連コラム */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Reveal className="mb-6">
                <p className="label mb-3">Related Service</p>
                <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(20px,2.6vw,32px)', letterSpacing: '-0.02em' }}>
                  関連するサービス
                </h2>
              </Reveal>
              <div className="space-y-3">
                {relatedServices.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 0.06}>
                    <Link href={`/service/${r.slug}`}
                      className="block p-5 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                      style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                      <span className="text-sm font-bold">{r.navLabel}を見る →</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal className="mb-6">
                <p className="label mb-3">Related Column</p>
                <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(20px,2.6vw,32px)', letterSpacing: '-0.02em' }}>
                  関連する施工コラム
                </h2>
              </Reveal>
              <div className="space-y-3">
                {relatedColumns.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 0.06}>
                    <Link href={`/column/${c.slug}`}
                      className="block p-5 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                      style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                      <span className="text-sm font-bold leading-snug">{c.title} →</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="bg-stripe-dark absolute inset-0 pointer-events-none opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(24px,4vw,48px)', letterSpacing: '-0.03em', lineHeight: 1.12 }}>
              {service.navLabel}の<br className="sm:hidden" />ご相談はこちら
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-9" style={{ color: 'rgba(255,255,255,0.55)' }}>
              工事内容・現場の場所・ご希望の時期をお知らせください。<br className="hidden sm:block" />
              元請会社様からのご依頼、協力会社様からのご相談ともに承っています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=work" className="btn-black"
                style={{ background: '#fff', color: '#0d0d0d', justifyContent: 'center', fontSize: 13, padding: '18px 40px' }}>
                工事の相談をする →
              </Link>
              <Link href="/partner" className="btn-outline-inv"
                style={{ justifyContent: 'center', fontSize: 13, padding: '18px 36px' }}>
                協力会社として相談する
              </Link>
            </div>
            <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {COMPANY.name}（{COMPANY.email}）が発信・監修しています
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
