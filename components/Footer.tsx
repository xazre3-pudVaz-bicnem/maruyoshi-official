import Link from 'next/link'
import Image from 'next/image'
import LogoBadge from '@/components/ui/LogoBadge'

const siteLinks = [
  { href: '/service',  label: '事業内容' },
  { href: '/strength', label: '会社の強み' },
  { href: '/recruit',  label: '求人募集' },
  { href: '/partner',  label: '協力会社募集' },
  { href: '/company',  label: '会社情報' },
  { href: '/contact',  label: 'お問い合わせ' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0d0d0d', color: 'rgba(255,255,255,0.85)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Company identity */}
          <div>
            {/* 横長ロゴ（白抜き） */}
            <div className="mb-7">
              <Image
                src="/images/logo-header-transparent.png"
                alt="株式会社丸義"
                width={1566}
                height={460}
                quality={90}
                style={{
                  width:   160,
                  height:  'auto',
                  filter:  'brightness(0) invert(1)',
                  opacity: 0.85,
                }}
              />
            </div>

            <div className="space-y-1.5 text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              <p>〒175-0082</p>
              <p>東京都板橋区徳丸2-27-14</p>
              <p>サンパレス徳丸301</p>
              <p className="pt-3 text-[11px] tracking-wide" style={{ color: 'rgba(255,255,255,0.22)' }}>
                代表：善平 健志郎
              </p>
              <p className="text-[11px] tracking-wide" style={{ color: 'rgba(255,255,255,0.22)' }}>
                設立：令和7年（2025年）
              </p>
            </div>
          </div>

          {/* Site links */}
          <div>
            <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-6"
              style={{ color: 'rgba(255,255,255,0.22)' }}>
              Site Map
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {siteLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.38)' }}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-4"
                style={{ color: 'rgba(255,255,255,0.22)' }}>
                Keywords
              </p>
              <div className="flex flex-wrap gap-2">
                {['左官工事', '土間コンクリート', '板橋区', '東京都', '未経験歓迎', '正社員採用'].map((kw) => (
                  <span key={kw} className="text-[10px] px-2 py-1"
                    style={{ border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.22)' }}>
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.22)' }}>
              Contact
            </p>
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'rgba(255,255,255,0.38)' }}>
              採用に関するご質問から<br />
              協力会社・工事のご相談まで<br />
              お気軽にお問い合わせください。
            </p>
            <a href="#contact"
              className="block text-center bg-white text-gray-900 font-black py-4 tracking-widest text-xs mb-3 hover:bg-gray-100 transition-colors">
              お問い合わせはこちら →
            </a>
            <a href="#recruit"
              className="block text-center font-black py-3.5 text-xs tracking-widest transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.45)' }}>
              求人情報を見る
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <LogoBadge size={20} variant="dark" />
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
              © 2025 株式会社丸義. All Rights Reserved.
            </p>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.1)' }}>
            東京都板橋区 / 左官工事 / 土間コンクリート工事
          </p>
        </div>
      </div>
    </footer>
  )
}
