'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { InstagramIcon, INSTAGRAM_URL } from '@/components/ui/InstagramIcon'
import { ADDRESS, COMPANY, BUSINESS_HOURS } from '@/lib/site'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

type ContactType = 'recruit' | 'partner' | 'work' | 'other'

const types: { id: ContactType; label: string; en: string; desc: string }[] = [
  { id: 'recruit', label: '求人応募',       en: 'Job Application',   desc: '左官・土間コンクリート作業員への応募' },
  { id: 'partner', label: '協力会社の相談', en: 'Partner Inquiry',   desc: '協力会社・一人親方としての取引相談' },
  { id: 'work',    label: '工事の相談',     en: 'Work Inquiry',      desc: '施工依頼・見積もり・工事相談' },
  { id: 'other',   label: 'その他',         en: 'Other',             desc: '上記以外のお問い合わせ' },
]

const placeholders: Record<ContactType, string> = {
  recruit: '現在の状況・いつから働けるかなどをご記入ください。未経験でもお気軽に。',
  partner: '対応可能な工種・現在の状況・希望条件などをご記入ください。',
  work:    '工事の概要・場所・希望時期・規模などをご記入ください。',
  other:   'お問い合わせ内容をご記入ください。',
}

export default function ContactContent() {
  const searchParams = useSearchParams()
  const initType = (searchParams.get('type') as ContactType) || 'recruit'

  const [type, setType]       = useState<ContactType>(initType)
  const [sent, setSent]       = useState(false)
  const [form, setForm]       = useState({ name: '', company: '', tel: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const t = types.find(x => x.id === type)!
    const subject = encodeURIComponent(`【${t.label}】${form.name}様よりお問い合わせ`)
    const body = encodeURIComponent(
      `【種別】${t.label}\n【お名前】${form.name}\n【会社名】${form.company}\n【電話】${form.tel}\n【メール】${form.email}\n\n【内容】\n${form.message}`
    )
    window.location.href = `mailto:kenchiro0624@icloud.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="bg-grid absolute inset-0 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease }}>

              {/* 電話でのお問い合わせ */}
              <div className="mb-10 p-6 sm:p-7" style={{ background: '#0d0d0d' }}>
                <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-3"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Tel
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <a href={COMPANY.telLink}
                      className="block font-black text-white tracking-wide hover:opacity-80 transition-opacity"
                      style={{ fontSize: 'clamp(26px, 5vw, 38px)', letterSpacing: '-0.01em' }}>
                      {COMPANY.tel}
                    </a>
                    <p className="text-xs mt-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      受付時間 {BUSINESS_HOURS.display}（{BUSINESS_HOURS.daysDisplay}）<br />
                      {BUSINESS_HOURS.note}
                    </p>
                  </div>
                  <a href={COMPANY.telLink}
                    className="sm:hidden block text-center bg-white text-gray-900 font-black py-4 tracking-widest text-sm">
                    電話をかける
                  </a>
                </div>
              </div>

              {/* Type selector */}
              <div className="mb-10">
                <p className="text-xs font-bold text-gray-500 mb-4 tracking-widest uppercase">フォームでのお問い合わせ</p>
                <p className="text-xs text-gray-400 mb-4">お問い合わせ種別をお選びください。</p>
                <div className="grid grid-cols-2 gap-2">
                  {types.map((t) => (
                    <button key={t.id} onClick={() => setType(t.id)}
                      className="p-4 text-left cursor-pointer transition-all duration-300"
                      style={{
                        border: `1.5px solid ${type === t.id ? '#0d0d0d' : 'rgba(0,0,0,0.1)'}`,
                        background: type === t.id ? '#0d0d0d' : '#fff',
                      }}>
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase block mb-1"
                        style={{ color: type === t.id ? 'rgba(255,255,255,0.4)' : '#999' }}>{t.en}</span>
                      <span className="text-xs sm:text-sm font-black block leading-snug"
                        style={{ color: type === t.id ? '#fff' : '#0d0d0d' }}>{t.label}</span>
                      <span className="hidden sm:block text-[11px] mt-1 leading-relaxed"
                        style={{ color: type === t.id ? 'rgba(255,255,255,0.4)' : '#999' }}>{t.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">
                      お名前 <span className="text-gray-400">*</span>
                    </label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="山田 太郎"
                      className="w-full px-4 py-3 text-sm bg-white text-gray-900 outline-none transition-colors placeholder:text-gray-300"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0d0d0d' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">会社名・屋号</label>
                    <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                      placeholder="株式会社〇〇 / 個人の方は空白可"
                      className="w-full px-4 py-3 text-sm bg-white text-gray-900 outline-none transition-colors placeholder:text-gray-300"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0d0d0d' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">
                      電話番号 <span className="text-gray-400">*</span>
                    </label>
                    <input type="tel" required value={form.tel} onChange={e => setForm({...form, tel: e.target.value})}
                      placeholder="090-0000-0000"
                      className="w-full px-4 py-3 text-sm bg-white text-gray-900 outline-none transition-colors placeholder:text-gray-300"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0d0d0d' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">メールアドレス</label>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 text-sm bg-white text-gray-900 outline-none transition-colors placeholder:text-gray-300"
                      style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#0d0d0d' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 tracking-wide">お問い合わせ内容</label>
                  <textarea rows={6} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    placeholder={placeholders[type]}
                    className="w-full px-4 py-3 text-sm bg-white text-gray-900 outline-none transition-colors placeholder:text-gray-300 resize-none"
                    style={{ border: '1px solid rgba(0,0,0,0.12)' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#0d0d0d' }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)' }}
                  />
                </div>

                <div>
                  <button type="submit" className="btn-black w-full sm:w-auto"
                    style={{ justifyContent: 'center', minWidth: 260, fontSize: 12, padding: '17px 40px' }}>
                    {type === 'recruit' ? '応募内容を送信する' : type === 'partner' ? '相談内容を送信する' : 'お問い合わせを送信する'}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-gray-400">送信するとメールアプリが開きます。2営業日以内にご連絡します。</p>
                </div>
              </form>

              {/* Company info */}
              <div className="mt-14 pt-10" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                <p className="text-[10px] font-black tracking-[0.28em] uppercase text-gray-400 mb-4">Company</p>
                <div className="text-sm text-gray-500 space-y-1 leading-relaxed">
                  <p className="font-bold text-gray-900">{COMPANY.name}</p>
                  <p>{ADDRESS.full}</p>
                  <p>代表：{COMPANY.representative}　/　設立：{COMPANY.founded}</p>
                  <p>
                    TEL：
                    <a href={COMPANY.telLink} className="hover:text-gray-900 transition-colors">
                      {COMPANY.tel}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${COMPANY.email}`} className="hover:text-gray-900 transition-colors">
                      {COMPANY.email}
                    </a>
                  </p>
                </div>
                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <InstagramIcon size={18} />
                  <span>@maruyoshi.itabashi</span>
                </a>
              </div>
            </motion.div>

          ) : (
            <motion.div key="thanks" className="text-center py-20"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14L11 20L23 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">
                お問い合わせありがとうございました。
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                担当者よりご連絡いたします。<br />
                <span className="text-xs text-gray-400">（2営業日以内を目安にご連絡します）</span>
              </p>
              <button onClick={() => setSent(false)} className="btn-outline" style={{ fontSize: 11, padding: '12px 24px' }}>
                別のお問い合わせをする
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
