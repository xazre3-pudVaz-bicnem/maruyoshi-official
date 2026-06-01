'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

type Category = 'recruit' | 'partner' | 'work'

const categories: { id: Category; label: string; en: string; desc: string }[] = [
  { id: 'recruit', label: '求人応募',     en: 'Job Application',  desc: '左官・土間コンクリート作業員としての応募' },
  { id: 'partner', label: '協力会社相談', en: 'Partner Inquiry',  desc: '協力会社・一人親方としての取引相談' },
  { id: 'work',    label: '工事・施工相談', en: 'Work Inquiry',   desc: '工事依頼・施工に関するご相談' },
]

export default function ContactSection() {
  const [selected, setSelected] = useState<Category>('recruit')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', tel: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const cat = categories.find(c => c.id === selected)!
    const subject = encodeURIComponent(`【${cat.label}】${form.name}様よりお問い合わせ`)
    const body = encodeURIComponent(
      `【お問い合わせ種別】${cat.label}\n` +
      `【お名前】${form.name}\n` +
      `【会社名】${form.company}\n` +
      `【電話番号】${form.tel}\n` +
      `【メールアドレス】${form.email}\n` +
      `【メッセージ】\n${form.message}`
    )
    window.location.href = `mailto:kenchiro0624@icloud.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-white">
      <div className="bg-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="line-h" style={{ color: '#0d0d0d', width: 24 }} />
            <span className="label">Contact</span>
            <span className="line-h" style={{ color: '#0d0d0d', width: 24 }} />
          </div>
          <h2 className="font-black text-gray-900"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
            お問い合わせ
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            採用応募・協力会社の相談・工事依頼など、お気軽にご連絡ください。
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease }}
            >
              {/* Category selector */}
              <div className="grid grid-cols-3 gap-2 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelected(cat.id)}
                    className="relative p-4 sm:p-5 text-left transition-all duration-300 cursor-pointer"
                    style={{
                      border: `1.5px solid ${selected === cat.id ? '#0d0d0d' : 'rgba(0,0,0,0.1)'}`,
                      background: selected === cat.id ? '#0d0d0d' : '#fff',
                    }}
                  >
                    <span className="text-[9px] font-black tracking-[0.2em] uppercase block mb-1"
                      style={{ color: selected === cat.id ? 'rgba(255,255,255,0.4)' : '#999' }}>
                      {cat.en}
                    </span>
                    <span className="text-xs sm:text-sm font-black block leading-snug"
                      style={{ color: selected === cat.id ? '#fff' : '#0d0d0d' }}>
                      {cat.label}
                    </span>
                    <span className="hidden sm:block text-[11px] mt-1 leading-relaxed"
                      style={{ color: selected === cat.id ? 'rgba(255,255,255,0.45)' : '#999' }}>
                      {cat.desc}
                    </span>
                  </button>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">
                      お名前 <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="山田 太郎"
                      className="w-full px-4 py-3 text-sm border bg-white text-gray-900 outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">
                      会社名 / 屋号
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      placeholder="株式会社〇〇 / 個人の方は空白可"
                      className="w-full px-4 py-3 text-sm border bg-white text-gray-900 outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">
                      電話番号 <span className="text-gray-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.tel}
                      onChange={e => setForm({ ...form, tel: e.target.value })}
                      placeholder="090-0000-0000"
                      className="w-full px-4 py-3 text-sm border bg-white text-gray-900 outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 text-sm border bg-white text-gray-900 outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">
                    メッセージ・備考
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder={
                      selected === 'recruit'
                        ? '現在の状況や、いつから働けるかなどをご記入ください。'
                        : selected === 'partner'
                        ? '対応できる工種・規模・現在の状況などをご記入ください。'
                        : '工事の概要・場所・希望時期などをご記入ください。'
                    }
                    className="w-full px-4 py-3 text-sm border bg-white text-gray-900 outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300 resize-none"
                    style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-black w-full sm:w-auto"
                    style={{ justifyContent: 'center', minWidth: 280, fontSize: 12, padding: '18px 40px' }}
                  >
                    {selected === 'recruit' ? '応募内容を送信する' :
                     selected === 'partner' ? '相談内容を送信する' : 'お問い合わせを送信する'}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-gray-400">
                    送信するとメールアプリが開きます。送信後、2営業日以内にご連絡いたします。
                  </p>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="thanks"
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14L11 20L23 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                お問い合わせありがとうございました。
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                担当者よりご連絡いたします。<br />
                <span className="text-xs text-gray-400">（2営業日以内を目安にご連絡します）</span>
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 btn-outline text-sm"
                style={{ fontSize: 11, padding: '12px 24px' }}
              >
                別のお問い合わせをする
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
