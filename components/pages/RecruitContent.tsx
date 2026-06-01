'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const FadeUp = ({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string
}) => (
  <motion.div className={className}
    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }} transition={{ delay, duration: 0.75, ease }}>
    {children}
  </motion.div>
)

/* ── データ定義 ── */
const appeals = [
  { num: '01', title: '未経験・学歴・年齢 不問', desc: 'やる気があれば大丈夫。入社後に丁寧にゼロから教えます。' },
  { num: '02', title: '手に職がつく仕事',        desc: '左官・土間コンクリートの技術は一生もの。長く活かせます。' },
  { num: '03', title: '安定した正社員採用',       desc: '試用期間後は正社員。社会保険完備で将来も安心。' },
  { num: '04', title: '週休2日・年128日休日',     desc: '土日祝休み。月平均残業10時間以内でプライベートも充実。' },
]

const workDetails = [
  {
    label: '打設', en: 'Placing',
    detail: 'ミキサー車で運ばれた生コンクリートを型枠に流し込む作業。バイブレーターで締め固め、均一な充填を確保します。',
  },
  {
    label: '均し', en: 'Screeding',
    detail: 'コンクリートを水平に均す作業。トンボやスクリードを使い、指定のレベル（高さ）に精度よく仕上げます。',
  },
  {
    label: '押え', en: 'Troweling',
    detail: '均しの後に行う仕上げ。金鏝や機械ごてで表面を緻密に押さえ、強度と美観を高めます。',
  },
]

const timeline = [
  { time: '8:00',  act: '現場集合・朝礼',     sub: 'KY活動・当日の工程確認' },
  { time: '8:30',  act: '作業開始',            sub: '打設準備・型枠確認・材料確認' },
  { time: '10:00', act: '休憩（15分）',        sub: '' },
  { time: '10:15', act: '作業再開',            sub: 'コンクリート打設・均し作業' },
  { time: '12:00', act: '昼休み（1時間）',     sub: '' },
  { time: '13:00', act: '午後の作業開始',      sub: '押え仕上げ・養生準備' },
  { time: '15:00', act: '休憩（15分）',        sub: '' },
  { time: '15:15', act: '仕上げ・片付け',      sub: '清掃・道具の片付け・翌日の準備' },
  { time: '17:00', act: '終業・退勤',          sub: '定時退勤が基本' },
]

const conditions = [
  ['職種',          '左官・土間コンクリート作業員'],
  ['雇用形態',      '正社員（試用期間3ヶ月）'],
  ['仕事内容',      'コンクリートの打設・均し・押え、左官工事全般'],
  ['就業時間',      '8:00〜17:00（休憩60分）'],
  ['時間外労働',    '月平均10時間（定時帰りを基本としています）'],
  ['休日',          '土日祝日・週休2日制・年間休日128日'],
  ['月給',          '197,000円〜'],
  ['日給',          '10,000円'],
  ['通勤手当',      '月20,000円まで支給'],
  ['賞与',          'あり（年2回）'],
  ['昇給',          'あり（実績・スキルに応じて）'],
  ['加入保険',      '雇用保険・労災保険・健康保険・厚生年金'],
  ['学歴・年齢',    '不問'],
  ['経験・資格',    '不問（普通自動車運転免許あれば尚可）'],
]

const benefits = [
  {
    icon: '🏢',
    title: '社会保険完備',
    items: ['雇用保険', '労災保険', '健康保険', '厚生年金'],
  },
  {
    icon: '📅',
    title: '休日・休暇',
    items: ['週休2日制（土日祝）', '年間休日128日', '夏季休暇', '年末年始休暇'],
  },
  {
    icon: '💰',
    title: '手当・報酬',
    items: ['通勤手当（月2万円まで）', '賞与（年2回）', '昇給制度あり', '試用期間後に正社員'],
  },
  {
    icon: '🏠',
    title: '住宅サポート',
    items: ['単身用社宅あり（要相談）', '遠方からの採用歓迎', '入居費用の相談可'],
  },
]

const holidays = [
  { label: '年間休日',   value: '128日' },
  { label: '週休',       value: '2日制（土日祝）' },
  { label: '夏季休暇',   value: 'あり' },
  { label: '年末年始',   value: 'あり' },
  { label: '月平均残業', value: '10時間以内' },
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
  { step: 'STEP 01', title: '入社・配属',       desc: '入社後は先輩職人が現場に同行。道具の使い方・現場のルールを丁寧に教えます。' },
  { step: 'STEP 02', title: '基礎作業の習得',   desc: '均し・押えの補助作業から開始。実際に手を動かしながら基礎を固めます（1〜3ヶ月目）。' },
  { step: 'STEP 03', title: '実践力の向上',     desc: '打設・均しを一人で担当できるよう、先輩指導のもとステップアップ（3〜12ヶ月目）。' },
  { step: 'STEP 04', title: '独り立ち・昇給',   desc: '現場担当として一連の施工を任されるように。実績に応じた昇給・資格取得支援あり（1年〜）。' },
]

const faqs = [
  { q: '全く経験がなくても大丈夫ですか？',
    a: 'はい、大丈夫です。入社後はベテラン職人が丁寧に指導します。まずは補助作業から始めるので安心してください。' },
  { q: '資格は必要ですか？',
    a: '普通自動車運転免許があれば尚可ですが、必須ではありません。入社後に業務に関連する資格取得を支援します。' },
  { q: 'どのくらいで一人前になれますか？',
    a: '個人差がありますが、1〜2年程度で基本的な施工を一人でこなせるようになる方が多いです。' },
  { q: '社宅・寮はありますか？',
    a: '単身用の入居可能住宅があります。遠方からの採用も歓迎しています。詳細はお問い合わせください。' },
  { q: '残業はどのくらいありますか？',
    a: '月平均10時間程度です。コンクリートの凝固タイミングによって多少延長になる日もありますが、基本的に定時退勤を推奨しています。' },
  { q: '服装や持ち物はどうすれば？',
    a: '入社時に必要な作業着・安全靴は会社が準備します。初日から用意していただく必要はありません。' },
  { q: '女性でも応募できますか？',
    a: 'はい、歓迎しています。体力に応じた業務を担当いただきますので、ご相談ください。' },
  { q: '試用期間中の給与はどうなりますか？',
    a: '試用期間（3ヶ月）中も同じ給与条件です。試用期間終了後、正社員として雇用契約を結びます。' },
]

const applySteps = [
  { step: 'STEP 01', title: 'フォームまたはメールで応募', desc: 'お問い合わせフォームから「求人応募」を選択して送信。または kenchiro0624@icloud.com へ直接メールでもOKです。' },
  { step: 'STEP 02', title: '担当者よりご連絡',          desc: '2営業日以内にメールまたはお電話でご連絡します。日程調整やご質問にお答えします。' },
  { step: 'STEP 03', title: '面談（現場見学も可）',      desc: '東京都板橋区の事務所または現場でお会いします。履歴書不要・服装自由・話を聞くだけもOKです。' },
  { step: 'STEP 04', title: '採用・入社日の確定',        desc: '面談後、ご希望に合わせて入社日を決定します。遠方の方は社宅の手配を先行してご相談可能です。' },
]

export default function RecruitContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ── 訴求ポイント（黒背景） ── */}
      <section className="py-16 lg:py-20 relative" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}>
            {appeals.map((a, i) => (
              <motion.div key={a.num} className="p-7"
                style={{ background: '#0d0d0d' }}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease }}>
                <div className="font-black mb-4 leading-none"
                  style={{ fontSize: 44, color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.04em' }}>
                  {a.num}
                </div>
                <h3 className="text-sm font-black text-white mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 仕事内容 ── */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Work Detail</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              仕事内容
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl leading-relaxed">
              主な作業はコンクリートの「打設」「均し」「押え」の3工程です。
              難しそうに見えますが、先輩と一緒に手を動かしながら自然に身につきます。
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {workDetails.map((w, i) => (
              <FadeUp key={w.label} delay={i * 0.1}>
                <div className="bg-white p-8 h-full group hover:bg-gray-900 transition-colors duration-400">
                  <div className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-400 group-hover:text-white/40 mb-2 transition-colors duration-400">
                    0{i + 1} — {w.en}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-white mb-4 transition-colors duration-400">
                    {w.label}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-gray-500 group-hover:text-white/60 leading-relaxed transition-colors duration-400">
                    {w.detail}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 1日の流れ ── */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f5f5' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Daily Schedule</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              1日の流れ
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              基本的に8:00〜17:00の勤務。残業は月平均10時間程度です。
            </p>
          </FadeUp>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <FadeUp key={t.time} delay={i * 0.06}>
                <div className="flex items-center gap-5 sm:gap-8 py-4"
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="shrink-0 w-16 sm:w-24">
                    <span className="text-sm sm:text-base font-black text-gray-900 tracking-wide">{t.time}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm sm:text-base font-bold text-gray-800">{t.act}</span>
                    {t.sub && <span className="text-xs text-gray-400 ml-2 sm:ml-3">{t.sub}</span>}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 募集要項 ── */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Requirements</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              募集要項
            </h2>
          </FadeUp>
          <FadeUp>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
              {conditions.map(([label, value], i) => (
                <div key={label} className="flex flex-col sm:flex-row"
                  style={{ borderBottom: i < conditions.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                  <div className="px-5 py-3.5 sm:w-40 shrink-0"
                    style={{ background: '#f9f9f9', borderRight: '1px solid rgba(0,0,0,0.06)' }}>
                    <span className="text-xs font-bold text-gray-500">{label}</span>
                  </div>
                  <div className="px-5 py-3.5">
                    <span className="text-sm sm:text-[15px] text-gray-800 leading-relaxed">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 福利厚生・待遇 ── */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Benefits</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              福利厚生・待遇
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {benefits.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.1}>
                <div className="bg-white p-7 h-full"
                  style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="text-sm font-black text-gray-900 mb-4">{b.title}</h3>
                  <ul className="space-y-2">
                    {b.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="block w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* 休日・休暇 詳細 */}
          <FadeUp>
            <div className="bg-white p-8" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
              <h3 className="text-base font-black text-gray-900 mb-6">休日・休暇の詳細</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {holidays.map((h) => (
                  <div key={h.label} className="text-center p-4"
                    style={{ background: '#f9f9f9', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="text-xs text-gray-400 mb-1">{h.label}</div>
                    <div className="text-sm font-black text-gray-900">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 求める人物像 ── */}
      <section className="py-20 lg:py-24 relative" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px" style={{ background: 'rgba(255,255,255,0.35)' }} />
              <span className="label-inv">Ideal Candidate</span>
            </div>
            <h2 className="font-black text-white"
              style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              こんな方を歓迎します
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}>
            {personas.map((p, i) => (
              <FadeUp key={p} delay={i * 0.08}>
                <div className="p-6 flex items-center gap-4" style={{ background: '#0d0d0d' }}>
                  <span className="text-[10px] font-black tracking-[0.2em]"
                    style={{ color: 'rgba(255,255,255,0.2)' }}>0{i + 1}</span>
                  <span className="text-sm sm:text-base font-bold text-white">{p}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 入社後の流れ ── */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">Onboarding</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              入社後の流れ
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              未経験でも安心。段階的に成長できる環境を整えています。
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {onboarding.map((o, i) => (
              <FadeUp key={o.step} delay={i * 0.1}>
                <div className="bg-white h-full p-7 group hover:bg-gray-900 transition-colors duration-400"
                  style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="text-[9px] font-black tracking-[0.22em] mb-3 text-gray-400 group-hover:text-white/40 transition-colors duration-400">
                    {o.step}
                  </div>
                  <h3 className="text-sm font-black text-gray-900 group-hover:text-white mb-3 transition-colors duration-400">
                    {o.title}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/60 leading-relaxed transition-colors duration-400">
                    {o.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── よくある質問 ── */}
      <section className="py-20 lg:py-28" style={{ background: '#f5f5f5' }}>
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">FAQ</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              よくある質問
            </h2>
          </FadeUp>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div style={{ border: '1px solid rgba(0,0,0,0.09)', background: '#fff' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between p-5 sm:p-6 text-left bg-transparent cursor-pointer gap-4"
                  >
                    <span className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                      {faq.q}
                    </span>
                    <motion.span className="shrink-0 mt-0.5 text-gray-400"
                      animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.3 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2V16M2 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6"
                          style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                          <p className="pt-4 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                            {faq.a}
                          </p>
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

      {/* ── 応募方法 ── */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="bg-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <FadeUp className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-7 h-px bg-gray-900" />
              <span className="label">How to Apply</span>
            </div>
            <h2 className="font-black text-gray-900"
              style={{ fontSize: 'clamp(28px,4.5vw,52px)', letterSpacing: '-0.03em' }}>
              応募方法
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
              履歴書不要・服装自由。「話を聞くだけ」もOKです。まずは気軽にご連絡ください。
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 mb-10">
            {applySteps.map((s, i) => (
              <FadeUp key={s.step} delay={i * 0.1}>
                <div className="bg-white p-7 sm:p-8">
                  <div className="text-[9px] font-black tracking-[0.22em] text-gray-400 mb-3">{s.step}</div>
                  <h3 className="text-base font-black text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* 問い合わせ先 */}
          <FadeUp>
            <div className="p-7 sm:p-8" style={{ background: '#f9f9f9', border: '1px solid rgba(0,0,0,0.08)' }}>
              <h3 className="text-sm font-black text-gray-900 mb-5">お問い合わせ先</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-gray-400 mb-1 tracking-widest uppercase">Email</div>
                  <a href="mailto:kenchiro0624@icloud.com"
                    className="text-sm font-bold text-gray-900 hover:underline">
                    kenchiro0624@icloud.com
                  </a>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1 tracking-widest uppercase">Address</div>
                  <p className="text-sm text-gray-700">〒175-0082 東京都板橋区徳丸2-27-14<br />サンパレス徳丸301</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 応募CTA ── */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#0d0d0d' }}>
        <div className="bg-grid-dark absolute inset-0 pointer-events-none" />
        <div className="bg-stripe-dark absolute inset-0 pointer-events-none opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-black text-white/[0.025]"
            style={{ fontSize: 'clamp(80px,18vw,220px)', letterSpacing: '-0.05em', whiteSpace: 'nowrap' }}>
            RECRUIT
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <span className="text-xs font-black tracking-widest text-white/80 uppercase">
                未経験歓迎 正社員採用
              </span>
            </div>
            <h2 className="font-black text-white mb-5"
              style={{ fontSize: 'clamp(26px,4.5vw,56px)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              まずは気軽に<br />応募してください
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.55)' }}>
              書類選考はありません。「話を聞くだけ」でも大歓迎です。<br className="hidden sm:block" />
              あなたのペースで、丸義の仕事を知ってください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?type=recruit"
                className="btn-black"
                style={{
                  background: '#fff', color: '#0d0d0d',
                  justifyContent: 'center', fontSize: 13, padding: '18px 40px',
                }}>
                応募フォームへ →
              </Link>
              <a href="mailto:kenchiro0624@icloud.com?subject=【求人応募】"
                className="btn-outline-inv"
                style={{ justifyContent: 'center', fontSize: 13, padding: '18px 36px' }}>
                メールで応募する
              </a>
            </div>
            <p className="mt-8 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              お問い合わせ後、2営業日以内にご連絡いたします
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
