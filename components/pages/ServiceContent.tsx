import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { SERVICES } from '@/lib/services'

/**
 * サーバーコンポーネント。本文テキストはすべて初期HTMLに含まれる。
 * アニメーションは Reveal（クライアント）が transform / opacity のみで行う。
 */

const summaries: Record<string, { desc: string; items: string[] }> = {
  sakan: {
    desc: 'モルタルや漆喰を鏝で塗り付け、壁・床・天井の面をつくる工事です。仕上げの美観だけでなく、塗装・防水・タイルなど後工程が問題なく乗る下地をつくる役割も担います。',
    items: ['コンクリート下地調整', '外壁モルタル仕上げ', '防水保護モルタル', '改修部の補修・埋め戻し'],
  },
  'doma-concrete': {
    desc: '駐車場・工場・倉庫・住宅の床面にコンクリートを打ち込み、平らな床として仕上げる工事です。路盤づくりから仕上げまで一貫して担当します。',
    items: ['駐車場・車路の土間', '工場・倉庫の床', '住宅のガレージ・アプローチ', '既存土間の打ち替え'],
  },
  'concrete-placement': {
    desc: '生コンクリートの受け入れから打ち込み、バイブレーターによる締固め、天端均しまで。やり直しのきかない工程を、事前の打設計画と当日の役割分担で管理します。',
    items: ['床スラブ・基礎の打設', '締固め・充填管理', '打継ぎ計画', '打設応援・スポット対応'],
  },
  'screeding-finishing': {
    desc: '打設したコンクリートの高さと勾配を確定させる均しと、表面を締めて強度・平滑さを出す押え。タイミング判断が品質を左右する仕上げ工程を専門に担当します。',
    items: ['レベル出し・定規ずり', '三段階の押え施工', '金鏝仕上げ・刷毛引き', '目地の設置'],
  },
}

const scenes = [
  { title: 'マンション・集合住宅', desc: '共用廊下・地下駐車場・エントランスの土間打設と左官仕上げ' },
  { title: '商業施設・店舗', desc: '床・壁の左官仕上げ、防水モルタル、バックヤードの土間' },
  { title: '工場・物流倉庫', desc: 'フォークリフト走行に対応する高耐久の土間コンクリート' },
  { title: '住宅（戸建て）', desc: 'ガレージ・駐車スペース・玄関アプローチの土間工事' },
  { title: '公共施設・学校', desc: '廊下・体育館・駐輪場の平坦打設と均し仕上げ' },
  { title: '新築・改修工事', desc: '内装左官・外装モルタル・既存土間の打ち替え一式' },
]

const values = [
  { num: '01', title: '水平精度の徹底', desc: 'レーザーレベルで基準を出し、均しの段階で面の通りを確認しながら進めます。平坦性は見た目だけでなく、後工程の仕上げ材の納まりにも直結します。' },
  { num: '02', title: '押えタイミングの判断', desc: 'コンクリートは硬化の進み方が当日の気温・風・日照で変わります。ブリーディング水の引き具合を見て、押えに入る適期を判断します。' },
  { num: '03', title: '養生を工程に組み込む', desc: 'コンクリートは乾いて固まるのではなく、水と反応して強度が出ます。急激な乾燥を防ぐ養生は仕上げ後のおまけではなく工程の一部として扱います。' },
  { num: '04', title: '現場コミュニケーション', desc: '元請会社様・他職種との打ち合わせを密にし、工程上の問題を早い段階で共有します。天候によるスライドにも柔軟に対応します。' },
]

const flow = [
  { step: 'STEP 01', title: '現地調査・打ち合わせ', desc: '図面確認・現場計測・工程確認。仕上げレベルや納期のご要望を伺います。' },
  { step: 'STEP 02', title: '材料・機材の手配', desc: '生コン手配、型枠確認、機械ごて・バイブレーターなど必要資機材を準備します。' },
  { step: 'STEP 03', title: '下地処理', desc: '路盤の転圧確認、既存面の清掃・補修など、仕上がりを左右する下地調整を行います。' },
  { step: 'STEP 04', title: 'コンクリート打設', desc: '生コンの受け入れ確認から打ち込み、バイブレーターによる締固めまで行います。' },
  { step: 'STEP 05', title: '均し・押え作業', desc: '均しでレベルを確定させ、粗押え・中押え・仕上げ押えの順に表面を締めます。' },
  { step: 'STEP 06', title: '養生・乾燥管理', desc: 'シート養生で急激な乾燥を防ぎ、強度が発現するまでの期間を管理します。' },
  { step: 'STEP 07', title: '最終確認・引き渡し', desc: '仕上がりとレベルを確認し、清掃のうえ元請会社様へ引き渡します。' },
]

export default function ServiceContent() {
  return (
    <>
      {/* 施工種別 → 各詳細ページへ */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Service Menu</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              施工種別
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl leading-relaxed">
              左官工事と土間コンクリート工事を軸に、打設から仕上げまでを一貫して担当します。
              各工種の詳しい内容は、それぞれのページでご確認ください。
            </p>
          </Reveal>

          <div className="space-y-px bg-gray-100">
            {SERVICES.map((s, i) => {
              const sum = summaries[s.slug]
              return (
                <Reveal key={s.slug} delay={i * 0.07}>
                  <article className="bg-white p-7 sm:p-9 group hover:bg-gray-900 transition-colors duration-400">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                      <div className="shrink-0">
                        <div className="font-black leading-none group-hover:text-white/10 transition-colors duration-400"
                          style={{ fontSize: 56, color: 'rgba(0,0,0,0.06)', letterSpacing: '-0.04em' }}>
                          0{i + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400 group-hover:text-white/40 transition-colors duration-400 block mb-1">
                          {s.en}
                        </span>
                        <h3 className="text-lg font-black text-gray-900 group-hover:text-white transition-colors duration-400 mb-3">
                          <Link href={`/service/${s.slug}`} className="hover:underline">
                            {s.navLabel}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500 group-hover:text-white/55 transition-colors duration-400 leading-relaxed mb-4">
                          {sum.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {sum.items.map((it) => (
                            <span key={it} className="text-[11px] px-2.5 py-1 font-medium text-gray-600 group-hover:text-white/60 transition-colors duration-400"
                              style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                              {it}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/service/${s.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-black tracking-wider text-gray-900 group-hover:text-white transition-colors duration-400"
                        >
                          {s.navLabel}の詳細を見る
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 対応現場 */}
      <section className="py-20 lg:py-28 relative" style={{ background: '#f5f5f5' }}>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Work Scene</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              対応できる現場例
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scenes.map((sc, i) => (
              <Reveal key={sc.title} delay={i * 0.06}>
                <div className="bg-white p-6 h-full" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <h3 className="text-sm font-black text-gray-900 mb-2">{sc.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{sc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link href="/area/itabashi" className="btn-outline" style={{ fontSize: 11, padding: '12px 24px', display: 'inline-flex' }}>
              板橋区での対応内容を見る →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 施工で大切にしていること */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Our Philosophy</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              丸義の施工で<br />大切にしていること
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.num} delay={i * 0.08}>
                <div className="p-8 relative group overflow-hidden h-full" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="absolute inset-0 bg-gray-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <span className="font-black block mb-4 leading-none"
                      style={{ fontSize: 48, color: 'rgba(0,0,0,0.05)', letterSpacing: '-0.04em' }}>{v.num}</span>
                    <h3 className="text-sm font-black text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">{v.title}</h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/55 leading-relaxed transition-colors duration-500">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 施工の流れ */}
      <section className="py-20 lg:py-28 relative" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
              <span className="label-inv">Work Flow</span>
            </div>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              施工の流れ
            </h2>
          </Reveal>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {flow.map((f, i) => (
              <Reveal key={f.step} delay={i * 0.06} as="li">
                <div className="p-6 h-full" style={{ background: '#0d0d0d' }}>
                  <div className="text-[9px] font-black tracking-[0.22em] mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>{f.step}</div>
                  <h3 className="text-sm font-black text-white mb-2 leading-snug">{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 関連コンテンツ */}
      <section className="py-16 lg:py-20" style={{ background: '#f5f5f5' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-8">
            <p className="label mb-3">Related</p>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(22px,3.5vw,36px)', letterSpacing: '-0.02em' }}>
              施工について詳しく知る
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/column/dasetsu-kara-shiage', label: 'コンクリート打設から仕上げまでの流れ' },
              { href: '/column/doma-concrete-toha', label: '土間コンクリート工事とは？用途と施工の基本' },
              { href: '/column/osae-sagyo-toha', label: 'コンクリートの押え作業とは？' },
              { href: '/column/concrete-yojo', label: 'コンクリート養生が重要な理由' },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 0.06}>
                <Link href={c.href}
                  className="block bg-white p-5 h-full hover:bg-gray-900 hover:text-white transition-colors duration-300"
                  style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <span className="text-sm font-bold leading-snug">{c.label} →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <p className="label mb-4">Contact</p>
            <h2 className="font-black text-gray-900 mb-4" style={{ fontSize: 'clamp(22px,3.5vw,40px)', letterSpacing: '-0.02em' }}>
              施工の相談・見積もりはお気軽に
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              工事内容・規模・エリアについてお気軽にご相談ください。<br className="hidden sm:block" />
              協力会社様のご相談も随時受け付けています。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact?type=work" className="btn-black" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>
                工事の相談をする →
              </Link>
              <Link href="/partner" className="btn-outline" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>
                協力会社募集を見る
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
