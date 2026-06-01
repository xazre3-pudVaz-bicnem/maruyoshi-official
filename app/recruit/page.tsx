import type { Metadata } from 'next'
import Script from 'next/script'
import PageHero from '@/components/PageHero'
import RecruitContent from '@/components/pages/RecruitContent'

/* ─── SEO ─── */
export const metadata: Metadata = {
  title: '株式会社丸義｜左官・土間コンクリート作業員募集｜東京都板橋区',
  description:
    '東京都板橋区の株式会社丸義では左官・土間コンクリート作業員を募集しています。未経験歓迎・学歴不問・週休二日制・年間休日128日。月給197,000円〜。社宅あり・社会保険完備。',
  keywords: [
    '東京 左官 求人',
    '土間コンクリート 求人',
    '板橋区 建設 求人',
    '未経験 左官 正社員',
    '建設業 未経験歓迎',
    '株式会社丸義 採用',
    '左官工事 正社員 東京',
    '土間コンクリート 作業員 板橋',
  ],
  openGraph: {
    title: '株式会社丸義｜左官・土間コンクリート作業員募集｜東京都板橋区',
    description:
      '東京都板橋区の株式会社丸義では左官・土間コンクリート作業員を募集。未経験歓迎・学歴不問・週休二日制・年間休日128日。',
    url: 'https://maruyoshi-official.com/recruit',
  },
  alternates: {
    canonical: 'https://maruyoshi-official.com/recruit',
  },
}

/* ─── Google for Jobs: JobPosting 構造化データ ─── */
const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',

  /* 基本情報 */
  title: '左官・土間コンクリート作業員',
  description:
    'コンクリートの打設・均し・押えおよび左官工事全般を担当していただきます。' +
    '未経験・学歴・年齢は一切不問。入社後OJTで丁寧に指導します。' +
    '年間休日128日・週休2日制・月平均残業10時間以内の働きやすい環境です。',

  /* 掲載期間 */
  datePosted: '2025-06-01',
  validThrough: '2026-12-31T23:59',

  /* 雇用形態 */
  employmentType: 'FULL_TIME',

  /* 採用企業 */
  hiringOrganization: {
    '@type': 'Organization',
    name: '株式会社丸義',
    sameAs: 'https://maruyoshi-official.com',
    logo: 'https://maruyoshi-official.com/images/logo-header.png',
    email: 'kenchiro0624@icloud.com',
  },

  /* 勤務地 */
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '徳丸2-27-14 サンパレス徳丸301',
      addressLocality: '板橋区',
      addressRegion: '東京都',
      postalCode: '175-0082',
      addressCountry: 'JP',
    },
  },

  /* 給与 */
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'JPY',
    value: {
      '@type': 'QuantitativeValue',
      minValue: 197000,
      unitText: 'MONTH',
    },
  },

  /* 勤務時間 */
  workHours: '8:00〜17:00（休憩60分）',

  /* 応募資格 */
  qualifications: '普通自動車運転免許（あれば尚可・必須ではありません）',
  educationRequirements: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: '不問',
  },
  experienceRequirements: '不問（未経験者大歓迎）',

  /* 応募方法 */
  applicationContact: {
    '@type': 'ContactPoint',
    contactType: 'hiring',
    email: 'kenchiro0624@icloud.com',
    url: 'https://maruyoshi-official.com/contact?type=recruit',
  },

  /* 福利厚生 */
  jobBenefits:
    '社会保険完備（雇用・労災・健康・厚生年金）' +
    '、通勤手当（月20,000円まで）' +
    '、賞与あり（年2回）' +
    '、昇給あり' +
    '、単身用社宅あり（要相談）',

  /* 業務内容 */
  responsibilities:
    'コンクリートの打設・均し・押え作業、左官工事全般（モルタル仕上げ・防水施工など）',

  /* URL */
  url: 'https://maruyoshi-official.com/recruit',

  /* 職種カテゴリ */
  occupationalCategory: '建設業・職人',

  /* 詳細情報 */
  industry: '建設業',
  identifier: {
    '@type': 'PropertyValue',
    name: '株式会社丸義',
    value: 'maruyoshi-recruit-2025',
  },
}

export default function RecruitPage() {
  return (
    <>
      {/* Google for Jobs 構造化データ */}
      <Script
        id="job-posting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <PageHero
        label="RECRUIT"
        title="求人募集"
        titleSub="未経験歓迎・正社員採用"
        desc="経験・学歴・年齢は問いません。一緒に現場で手に職をつけましょう。"
      />
      <RecruitContent />
    </>
  )
}
