'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay, duration: 0.75, ease }}
  >
    {children}
  </motion.div>
)

const services = [
  {
    num: '01', title: '左官工事', en: 'Plastering Work',
    detail: 'モルタル・漆喰・石膏ボード下地などの壁・床・天井を、職人の手技で仕上げます。防水仕上げ・意匠仕上げなど多様なニーズに対応します。',
    items: ['外壁モルタル仕上げ', '内壁・天井左官仕上げ', '防水モルタル施工', '床モルタル均し', '漆喰・意匠仕上げ'],
  },
  {
    num: '02', title: '土間コンクリート工事', en: 'Concrete Floor Work',
    detail: '駐車場・工場・倉庫・住宅の床面にコンクリートを打設し、均して仕上げる工事です。水平精度と強度を両立した仕上がりが特長です。',
    items: ['駐車場土間打設', '工場・倉庫床打設', '住宅土間施工', 'レベリング材施工', '硬化剤・防塵処理'],
  },
  {
    num: '03', title: 'コンクリート打設', en: 'Concrete Placing',
    detail: '生コンクリートを型枠に打設する工程。バイブレーターによる締固めから天端均しまで、品質基準に沿った施工を行います。',
    items: ['生コン打設・締固め', 'バイブレーター処理', '天端レベル管理', '打設後の養生管理', '打継ぎ・コールドジョイント対策'],
  },
  {
    num: '04', title: '均し作業', en: 'Screeding',
    detail: 'コンクリート打設直後に行う均し（ならし）作業。トンボ・スクリードを用いて水平レベルを確保し、次工程の品質を決める重要な工程です。',
    items: ['レーザーレベル管理', 'トンボ・スクリード仕上げ', '勾配均し', '床暖房対応均し', '下地調整材施工'],
  },
  {
    num: '05', title: '押え作業', en: 'Troweling',
    detail: '均し後に行う押え（抑え）仕上げ。金鏝・機械ごてで表面を緻密に仕上げ、強度と美観を高めます。粗押え・中押え・仕上げ押えの3工程で管理します。',
    items: ['金鏝仕上げ', '機械ごて（トロウェル）施工', '3段階押え管理', 'ワイヤーメッシュ対応', '目地割り・目地切り'],
  },
]

const scenes = [
  { title: 'マンション・集合住宅', desc: '共用廊下・駐車場・エントランスの土間打設・左官仕上げ' },
  { title: '商業施設・店舗', desc: '床・壁の意匠左官、防水モルタル、モルタルフロア施工' },
  { title: '工場・物流倉庫', desc: '重機対応の高耐久土間打設、ハードナー処理' },
  { title: '住宅（戸建て）', desc: 'ガレージ・駐車スペース・玄関アプローチの土間工事' },
  { title: '公共施設・学校', desc: '廊下・体育館・駐輪場の平坦打設・均し仕上げ' },
  { title: '新築・リノベーション', desc: '内装左官・外装モルタル・地下駐車場の土間一式' },
]

const values = [
  { num: '01', title: '水平精度の徹底', desc: 'レーザーレベルを使用し、±2mm以内の精度を標準として管理。見た目だけでなく、後工程の仕上げ材の歩留まりにも直結します。' },
  { num: '02', title: '打設タイミングの判断', desc: 'コンクリートは凝固タイミングが命。天候・気温・湿度を読んで最適な押えのタイミングを判断し、ひび割れや仕上がり不良を防ぎます。' },
  { num: '03', title: '丁寧な養生管理', desc: '施工後の養生シートの敷設・散水管理も施工の一部。急激な乾燥や温度変化から守ることで、長期的な耐久性を確保します。' },
  { num: '04', title: '現場コミュニケーション', desc: '元請け・他職種との打ち合わせを密にし、工程上の問題を早期に発見・解決。「言われる前に動く」現場対応力が丸義の強みです。' },
]

const flow = [
  { step: 'STEP 01', title: '現地調査・打ち合わせ', desc: '図面確認・現場計測・工程確認。仕上げレベルや納期の要望をヒアリングします。' },
  { step: 'STEP 02', title: '材料・機材の手配', desc: '生コン手配・型枠確認・機械ごて・バイブレーターなど必要資機材を準備します。' },
  { step: 'STEP 03', title: '下地処理', desc: '既存面の補修・清掃・プライマー塗布など、仕上がりを左右する重要な下地調整を行います。' },
  { step: 'STEP 04', title: 'コンクリート打設', desc: '生コン受け入れ・打設・バイブレーター締固め。品質基準に基づく施工管理を行います。' },
  { step: 'STEP 05', title: '均し・押え作業', desc: 'トンボ均し → 粗押え → 中押え → 仕上げ押えの順で丁寧に施工します。' },
  { step: 'STEP 06', title: '養生・乾燥管理', desc: '養生シートの設置・適切な散水を行い、ひび割れ防止と強度発現を管理します。' },
  { step: 'STEP 07', title: '最終確認・引き渡し', desc: '仕上がりのレベル確認・清掃後、元請けへ引き渡し。不具合があれば速やかに対応します。' },
]

export default function ServiceContent() {
  return (
    <>
      {/* Services */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Service Menu</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              施工種別
            </h2>
          </FadeUp>
          <div className="space-y-px bg-gray-100">
            {services.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.07}>
                <div className="bg-white p-7 sm:p-9 group hover:bg-gray-900 transition-colors duration-400">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="shrink-0">
                      <div className="font-black leading-none group-hover:text-white/10 transition-colors duration-400"
                        style={{ fontSize: 56, color: 'rgba(0,0,0,0.06)', letterSpacing: '-0.04em' }}>
                        {s.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400 group-hover:text-white/40 transition-colors duration-400 block mb-1">{s.en}</span>
                      <h3 className="text-lg font-black text-gray-900 group-hover:text-white transition-colors duration-400 mb-3">{s.title}</h3>
                      <p className="text-sm text-gray-500 group-hover:text-white/55 transition-colors duration-400 leading-relaxed mb-4">{s.detail}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.items.map((it) => (
                          <span key={it} className="text-[11px] px-2.5 py-1 font-medium text-gray-600 group-hover:text-white/60 transition-colors duration-400"
                            style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 対応現場 */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f5f5' }}>
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Work Scene</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              対応できる現場例
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scenes.map((sc, i) => (
              <FadeUp key={sc.title} delay={i * 0.07}>
                <div className="bg-white p-6 h-full" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <h3 className="text-sm font-black text-gray-900 mb-2">{sc.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{sc.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 丸義の施工で大切にしていること */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Our Philosophy</span>
            </div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              丸義の施工で<br />大切にしていること
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.num} delay={i * 0.1}>
                <div className="p-8 relative group overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="absolute inset-0 bg-gray-900 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <span className="font-black block mb-4 leading-none group-hover:text-white/08 transition-colors duration-500"
                      style={{ fontSize: 48, color: 'rgba(0,0,0,0.05)', letterSpacing: '-0.04em' }}>{v.num}</span>
                    <h3 className="text-sm font-black text-gray-900 group-hover:text-white mb-2 transition-colors duration-500">{v.title}</h3>
                    <p className="text-sm text-gray-500 group-hover:text-white/55 leading-relaxed transition-colors duration-500">{v.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 施工の流れ */}
      <section className="py-20 lg:py-28" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} />
              <span className="label-inv">Work Flow</span>
            </div>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              施工の流れ
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {flow.map((f, i) => (
              <FadeUp key={f.step} delay={i * 0.08}>
                <div className="p-6" style={{ background: '#0d0d0d' }}>
                  <div className="text-[9px] font-black tracking-[0.22em] mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>{f.step}</div>
                  <h3 className="text-sm font-black text-white mb-2 leading-snug">{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>{f.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <p className="label mb-4">Contact</p>
            <h2 className="font-black text-gray-900 mb-4" style={{ fontSize: 'clamp(22px,3.5vw,40px)', letterSpacing: '-0.02em' }}>
              施工の相談・見積もりはお気軽に
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              工事内容・規模・エリアについてお気軽にご相談ください。<br className="hidden sm:block" />
              協力会社様のご相談も随時受け付けています。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-black" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>
                お問い合わせはこちら →
              </Link>
              <Link href="/partner" className="btn-outline" style={{ justifyContent: 'center', fontSize: 12, padding: '16px 32px' }}>
                協力会社募集を見る
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
