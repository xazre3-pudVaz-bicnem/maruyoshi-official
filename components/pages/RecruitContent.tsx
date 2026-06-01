'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ delay, duration: 0.75, ease }}>{children}</motion.div>
)

const appeals = [
  { num: '01', title: '未経験・学歴・年齢 不問', desc: '「やってみたい」という気持ちがあれば大丈夫。入社後に丁寧にゼロから教えます。' },
  { num: '02', title: '手に職がつく仕事', desc: '左官・土間コンクリートの技術は一生ものの資格。年齢に関わらず活かせます。' },
  { num: '03', title: '安定した正社員採用', desc: '試用期間後は正社員。雇用・労災・健康・厚生年金に加入し、社会保障が充実。' },
  { num: '04', title: '週休2日・年間128日休日', desc: '土日祝休みで、月平均残業10時間以内。プライベートも大切にできます。' },
]

const workDetails = [
  { label: '打設', detail: 'ミキサー車で運ばれた生コンクリートを型枠に流し込む作業。バイブレーターで締め固め、均一な充填を確保します。' },
  { label: '均し', detail: 'コンクリートを水平に均す作業。トンボやスクリードを使い、指定のレベル（高さ）に精度よく仕上げます。' },
  { label: '押え', detail: '均しの後に行う仕上げ作業。金鏝や機械ごてで表面を緻密に押さえることで強度と美観を高めます。' },
]

const timeline = [
  { time: '8:00',  act: '現場集合・朝礼', sub: 'KY活動・当日の工程確認' },
  { time: '8:30',  act: '作業開始',        sub: '打設準備・型枠確認・材料確認' },
  { time: '10:00', act: '休憩（15分）',    sub: '' },
  { time: '10:15', act: '作業再開',        sub: 'コンクリート打設・均し作業' },
  { time: '12:00', act: '昼休み（1時間）', sub: '' },
  { time: '13:00', act: '午後の作業開始',  sub: '押え仕上げ・養生準備' },
  { time: '15:00', act: '休憩（15分）',    sub: '' },
  { time: '15:15', act: '仕上げ・片付け',  sub: '清掃・道具の片付け・翌日の準備' },
  { time: '17:00', act: '終業・退勤',      sub: '定時退勤が基本' },
]

const conditions = [
  ['職種',       '左官・土間コンクリート作業員'],
  ['雇用形態',   '正社員（試用期間3ヶ月）'],
  ['仕事内容',   'コンクリートの打設・均し・押え、左官工事全般'],
  ['就業時間',   '8:00〜17:00（休憩60分）'],
  ['残業',       '月平均10時間（定時帰りを基本としています）'],
  ['休日',       '土日祝日・週休2日制・年間休日128日'],
  ['給与',       '月給197,000円〜 / 日給10,000円'],
  ['通勤手当',   '月20,000円まで支給'],
  ['賞与',       'あり（年2回）'],
  ['昇給',       'あり（実績・スキルに応じて）'],
  ['加入保険',   '雇用保険・労災保険・健康保険・厚生年金'],
  ['住宅',       '単身用入居可能住宅あり（要相談）'],
  ['学歴・年齢', '不問'],
  ['経験',       '不問（未経験者大歓迎）'],
  ['資格',       '普通自動車運転免許あれば尚可（必須ではありません）'],
]

const personas = [
  '体を動かすことが好きな方',
  '手に職をつけてキャリアを築きたい方',
  '建設業・施工現場に興味がある方',
  '未経験からでも本気でプロを目指したい方',
  '誠実にコツコツ取り組める方',
  'チームで連携しながら仕事したい方',
]

const onboarding = [
  { step: 'STEP 01', title: '入社・配属', desc: '入社後は先輩職人が現場に同行。道具の使い方・現場のルールを丁寧に教えます。' },
  { step: 'STEP 02', title: '基礎作業の習得', desc: '均し・押えの補助作業から開始。実際に手を動かしながら基礎を固めます（1〜3ヶ月目）。' },
  { step: 'STEP 03', title: '実践力の向上', desc: '打設・均しを一人で担当できるよう、先輩指導のもとステップアップ（3〜12ヶ月目）。' },
  { step: 'STEP 04', title: '独り立ち', desc: '現場担当として一連の施工を任されるように。資格取得も積極的に支援します（1年〜）。' },
]

const faqs = [
  { q: '全く経験がなくても大丈夫ですか？', a: 'はい、大丈夫です。入社後はベテラン職人が丁寧に指導します。まずは補助作業から始めるので安心してください。' },
  { q: '資格は必要ですか？', a: '普通自動車運転免許があれば尚可ですが、必須ではありません。入社後に業務に関連する資格取得を支援します。' },
  { q: 'どのくらいで一人前になれますか？', a: '個人差がありますが、1〜2年程度で基本的な施工を一人でこなせるようになる方が多いです。3〜5年でベテランと呼ばれるレベルに達します。' },
  { q: '社宅・寮はありますか？', a: '単身用の入居可能住宅があります。遠方からの採用も歓迎しています。詳細はお問い合わせください。' },
  { q: '残業はどのくらいありますか？', a: '月平均10時間程度です。コンクリートの凝固タイミングによって多少延長になる日もありますが、基本的に定時退勤を推奨しています。' },
  { q: '服装や持ち物はどうすれば？', a: '入社時に必要な作業着・安全靴は会社が準備します。初日から用意していただく必要はありません。' },
]

export default function RecruitContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Appeal */}
      <section className="py-16 lg:py-20" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {appeals.map((a, i) => (
              <motion.div key={a.num} className="p-7" style={{ background: '#0d0d0d' }}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease }}>
                <div className="font-black mb-3 leading-none" style={{ fontSize: 44, color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.04em' }}>{a.num}</div>
                <h3 className="text-sm font-black text-white mb-2 leading-snug">{a.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 仕事内容 */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3"><span className="block w-7 h-px bg-gray-900" /><span className="label">Work Detail</span></div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>仕事内容</h2>
            <p className="mt-3 text-sm text-gray-500 max-w-lg leading-relaxed">
              主な作業はコンクリートの「打設」「均し」「押え」の3工程です。難しそうに見えますが、先輩と一緒に手を動かしながら自然に身につきます。
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {workDetails.map((w, i) => (
              <FadeUp key={w.label} delay={i * 0.1}>
                <div className="bg-white p-8 h-full">
                  <div className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-400 mb-2">0{i + 1}</div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{w.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{w.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 1日の流れ */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f5f5' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3"><span className="block w-7 h-px bg-gray-900" /><span className="label">Daily Schedule</span></div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>1日の流れ</h2>
          </FadeUp>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <FadeUp key={t.time} delay={i * 0.06}>
                <div className="flex items-start gap-5 sm:gap-8 py-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="shrink-0 w-14 sm:w-20">
                    <span className="text-sm font-black text-gray-900 tracking-wide">{t.time}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-gray-800">{t.act}</span>
                    {t.sub && <span className="text-xs text-gray-400 ml-3">{t.sub}</span>}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-10">
            <div className="flex items-center gap-3 mb-3"><span className="block w-7 h-px bg-gray-900" /><span className="label">Requirements</span></div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>募集要項</h2>
          </FadeUp>
          <FadeUp>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              {conditions.map(([label, value], i) => (
                <div key={label} className="flex flex-col sm:flex-row"
                  style={{ borderBottom: i < conditions.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <div className="px-5 py-3.5 sm:w-36 shrink-0 flex items-start pt-4"
                    style={{ background: '#f9f9f9', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
                    <span className="text-xs font-bold text-gray-500">{label}</span>
                  </div>
                  <div className="px-5 py-3.5 flex items-center">
                    <span className="text-sm text-gray-800 leading-relaxed">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 求める人物像 */}
      <section className="py-20 lg:py-24" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-10">
            <div className="flex items-center gap-3 mb-3"><span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.3)' }} /><span className="label-inv">Ideal Candidate</span></div>
            <h2 className="font-black text-white" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>こんな方を歓迎します</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {personas.map((p, i) => (
              <FadeUp key={p} delay={i * 0.08}>
                <div className="p-6 flex items-center gap-4" style={{ background: '#0d0d0d' }}>
                  <span className="text-[10px] font-black tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.2)' }}>0{i + 1}</span>
                  <span className="text-sm font-bold text-white">{p}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 入社後の流れ */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3"><span className="block w-7 h-px bg-gray-900" /><span className="label">Onboarding</span></div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>入社後の流れ</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {onboarding.map((o, i) => (
              <FadeUp key={o.step} delay={i * 0.1}>
                <div className="bg-white p-7 h-full" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="text-[9px] font-black tracking-[0.22em] mb-3" style={{ color: '#999' }}>{o.step}</div>
                  <h3 className="text-sm font-black text-gray-900 mb-2">{o.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{o.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3"><span className="block w-7 h-px bg-gray-900" /><span className="label">FAQ</span></div>
            <h2 className="font-black text-gray-900" style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>よくある質問</h2>
          </FadeUp>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent cursor-pointer"
                  >
                    <span className="text-sm font-bold text-gray-900 pr-4">{faq.q}</span>
                    <motion.span className="shrink-0 text-gray-400" animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.3 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                          <p className="pt-4">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 lg:py-20" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <span className="text-xs font-black tracking-widest text-white/80 uppercase">未経験歓迎 正社員採用</span>
            </div>
            <h2 className="font-black text-white mb-4" style={{ fontSize: 'clamp(24px,4vw,48px)', letterSpacing: '-0.03em' }}>
              まずは気軽に<br />応募してください
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
              書類選考はありません。まずはお電話やメールで気軽にご連絡ください。<br className="hidden sm:block" />
              「話を聞いてみたい」だけでも大歓迎です。
            </p>
            <Link href="/contact?type=recruit" className="btn-black"
              style={{ background: '#fff', color: '#0d0d0d', justifyContent: 'center', fontSize: 13, padding: '18px 40px', display: 'inline-flex' }}>
              応募フォームへ →
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
