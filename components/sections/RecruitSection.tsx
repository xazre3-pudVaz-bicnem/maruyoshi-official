'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const highlights = [
  { icon: '01', title: '未経験・学歴不問', desc: '経験・学歴・資格は一切問いません。やる気と誠実さがあれば、ゼロからプロを目指せます。' },
  { icon: '02', title: '手に職、正社員採用', desc: '建設業で一生使えるスキルを習得。試用期間後は正社員として安定した雇用を保証します。' },
  { icon: '03', title: '資格取得を目指せる', desc: '普通自動車免許があれば尚可。会社のサポートを受けながら、現場で実践的なスキルと資格を身につけられます。' },
  { icon: '04', title: '週休2日・年128日休日', desc: '土日祝休み。家族や自分の時間をしっかり確保できる働き方を実現しています。' },
]

const conditions = [
  { label: '職種',     value: '左官・土間コンクリート作業員' },
  { label: '雇用形態', value: '正社員（試用期間3ヶ月）' },
  { label: '給与',     value: '月給 197,000円〜 / 日給 10,000円' },
  { label: '通勤手当', value: '月20,000円まで支給' },
  { label: '賞与・昇給', value: 'あり' },
  { label: '就業時間', value: '8:00〜17:00（休憩60分）' },
  { label: '時間外労働', value: '月平均10時間' },
  { label: '休日',     value: '土日祝日・週休2日制・年間休日128日' },
  { label: '加入保険', value: '雇用・労災・健康・厚生年金' },
  { label: '住宅',     value: '単身用社宅あり（相談可）' },
  { label: '学歴・年齢', value: '不問' },
  { label: '資格',     value: '普通自動車免許あれば尚可（必須ではありません）' },
]

export default function RecruitSection() {
  return (
    <section id="recruit" className="relative py-24 lg:py-36 bg-white">
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
            <span className="label">Recruit</span>
          </div>
          <h2 className="font-black text-gray-900"
            style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
            求人募集
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2"
            style={{ background: '#0d0d0d' }}>
            <span className="text-xs font-black tracking-widest text-white uppercase">未経験歓迎</span>
          </div>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-lg leading-relaxed">
            経験も学歴も関係ない。一緒に現場で成長しましょう。<br className="hidden sm:block" />
            建設業で手に職をつけたい方、大歓迎です。
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.icon}
              className="bg-white p-7 group"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
            >
              <div className="font-black mb-4 leading-none"
                style={{ fontSize: 40, color: 'rgba(0,0,0,0.06)', letterSpacing: '-0.04em' }}>
                {item.icon}
              </div>
              <h3 className="text-sm font-black text-gray-900 mb-2 leading-snug">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Conditions table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
        >
          <h3 className="text-base font-black text-gray-900 mb-6 tracking-wide">募集要項</h3>
          <div style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
            {conditions.map((c, i) => (
              <div
                key={c.label}
                className="flex flex-col sm:flex-row"
                style={{ borderBottom: i < conditions.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
              >
                <div
                  className="px-5 py-3.5 shrink-0 sm:w-36 flex items-center"
                  style={{ background: '#f9f9f9', borderRight: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <span className="text-xs font-bold text-gray-500 tracking-wide">{c.label}</span>
                </div>
                <div className="px-5 py-3.5 flex items-center">
                  <span className="text-sm text-gray-800">{c.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease }}
        >
          <Link href="/recruit"
            className="btn-black"
            style={{ justifyContent: 'center', flex: 1, fontSize: 12, padding: '18px 28px' }}>
            求人詳細・応募はこちら →
          </Link>
          <Link href="/contact?type=recruit"
            className="btn-outline"
            style={{ justifyContent: 'center', flex: 1, fontSize: 12, padding: '18px 28px' }}>
            まずは話を聞いてみたい
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
