import Link from 'next/link'
import Image from 'next/image'
import LogoBadge from '@/components/ui/LogoBadge'
import { InstagramIcon, INSTAGRAM_URL } from '@/components/ui/InstagramIcon'
import { COMPANY, ADDRESS, BUSINESS_HOURS } from '@/lib/site'
import { SERVICES } from '@/lib/services'
import { HAS_WORKS } from '@/lib/works'

const siteLinks = [
  { href: '/service',  label: '事業内容' },
  { href: '/area/itabashi', label: '板橋区の対応エリア' },
  { href: '/column',   label: '施工コラム' },
  // 施工実績は実データが登録されてから導線に出す（空ページへ誘導しないため）
  ...(HAS_WORKS ? [{ href: '/works', label: '施工実績' }] : []),
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">

          {/* Company identity */}
          <div>
            {/* 横長ロゴ（白抜き） */}
            <div className="mb-7">
              <Image
                src="/images/logo-header-transparent.png"
                alt="株式会社丸義"
                width={1566}
                height={460}
                quality={85}
                sizes="160px"
                style={{
                  width:   160,
                  height:  'auto',
                  filter:  'brightness(0) invert(1)',
                  opacity: 0.85,
                }}
              />
            </div>

            <address className="not-italic space-y-1.5 text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              <p>{ADDRESS.postalCodeDisplay}</p>
              <p>{ADDRESS.region}{ADDRESS.locality}{ADDRESS.street}</p>
              <p>{ADDRESS.building}</p>
              <p className="pt-3">
                <a href={COMPANY.telLink} className="hover:text-white transition-colors">
                  TEL {COMPANY.tel}
                </a>
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </p>
              <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
                受付時間 {BUSINESS_HOURS.display}（{BUSINESS_HOURS.daysDisplay}）
              </p>
              <p className="pt-2 text-[11px] tracking-wide" style={{ color: 'rgba(255,255,255,0.22)' }}>
                代表：{COMPANY.representative}
              </p>
              <p className="text-[11px] tracking-wide" style={{ color: 'rgba(255,255,255,0.22)' }}>
                設立：{COMPANY.founded}
              </p>
            </address>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 transition-opacity hover:opacity-70"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <InstagramIcon size={18} />
              <span className="text-xs tracking-wide">{COMPANY.instagramHandle}</span>
            </a>
          </div>

          {/* Service links */}
          <nav aria-label="事業内容">
            <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-6"
              style={{ color: 'rgba(255,255,255,0.22)' }}>
              Service
            </p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/service/${s.slug}`}
                    className="text-xs transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service"
                  className="text-xs transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.55)' }}>
                  事業内容の一覧を見る →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Site links */}
          <nav aria-label="サイトマップ">
            <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-6"
              style={{ color: 'rgba(255,255,255,0.22)' }}>
              Site Map
            </p>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-xs transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact CTA */}
          <div>
            <p className="text-[10px] font-black tracking-[0.28em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.22)' }}>
              Contact
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.38)' }}>
              採用に関するご質問から<br />
              協力会社・工事のご相談まで<br />
              お気軽にお問い合わせください。
            </p>

            {/* 電話導線（モバイルではそのまま発信できる） */}
            <a href={COMPANY.telLink}
              className="block mb-3 p-4 transition-colors hover:bg-white/5"
              style={{ border: '1px solid rgba(255,255,255,0.18)' }}>
              <span className="block text-[10px] font-black tracking-[0.22em] uppercase mb-1"
                style={{ color: 'rgba(255,255,255,0.3)' }}>
                Tel
              </span>
              <span className="block text-xl font-black text-white tracking-wide">{COMPANY.tel}</span>
              <span className="block text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {BUSINESS_HOURS.display}（{BUSINESS_HOURS.daysDisplay}）
              </span>
            </a>

            <Link href="/contact"
              className="block text-center bg-white text-gray-900 font-black py-4 tracking-widest text-xs mb-3 hover:bg-gray-100 transition-colors">
              お問い合わせフォームへ →
            </Link>
            <Link href="/recruit"
              className="block text-center font-black py-3.5 text-xs tracking-widest transition-colors hover:text-white"
              style={{ border: '1px solid rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.45)' }}>
              左官・土間の求人を見る
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <LogoBadge size={20} variant="dark" />
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
              © 2025 {COMPANY.name}. All Rights Reserved.
            </p>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.1)' }}>
            {ADDRESS.region}{ADDRESS.locality}の左官・土間コンクリート工事
          </p>
        </div>
      </div>
    </footer>
  )
}
