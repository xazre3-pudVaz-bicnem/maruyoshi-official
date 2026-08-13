import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/ui/JsonLd'
import RecruitContent from '@/components/pages/RecruitContent'
import { canonical, OG_IMAGE, COMPANY, LOGO_URL, JOB, SITE_URL } from '@/lib/site'
import { postalAddress, ORG_ID, faqSchema } from '@/lib/schema'
import { RECRUIT_FAQS } from '@/lib/faqs'

const title = '左官・土間コンクリート求人｜東京都板橋区'
const description =
  '東京都板橋区の株式会社丸義が左官・土間コンクリート作業員を募集しています。未経験歓迎・学歴年齢不問、月給197,000円〜、週休2日制・年間休日128日。仕事内容から入社後の流れまで掲載しています。'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonical('/recruit') },
  openGraph: {
    type: 'article',
    url: canonical('/recruit'),
    title: `${title}｜株式会社丸義`,
    description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '株式会社丸義 求人募集' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title}｜株式会社丸義`,
    description,
    images: [OG_IMAGE],
  },
}

/**
 * Google for Jobs — JobPosting 構造化データ。
 *
 * 【運用上の注意】
 * - このページは「単一求人の詳細ページ」であり、JobPosting はここにのみ出力する。
 *   トップページや一覧ページには付けない。
 * - datePosted は求人情報を掲載・更新した日。募集を継続する場合は定期的に更新する。
 * - validThrough は募集期限が定まっていないため出力しない（架空の期限を作らない）。
 * - 募集を終了した場合は、このページから JobPosting を削除するか
 *   ページ自体を noindex にすること。期限切れ求人を残さない。
 * - directApply は、応募がこのサイト上で完結する場合にのみ true にできる。
 *   現在はメールでの応募受付のため出力しない。
 * - 記載内容はすべて画面上にも表示されている必要がある。
 *   条件を変更する際は lib/site.ts の JOB と RecruitContent の両方を更新すること。
 */
const RECRUIT_UPDATED = '2026-08-13'

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',

  title: JOB.title,
  description:
    '<p>コンクリートの打設・均し・押え、および左官工事全般を担当していただきます。' +
    '経験・学歴・年齢は不問です。入社後は先輩職人が現場に同行し、材料の運搬や練り、' +
    '均しの補助といった作業から段階的に指導します。</p>' +
    '<p>就業時間は8:00〜17:00（休憩60分）、時間外労働は月平均10時間程度です。' +
    '土日祝休みの週休2日制、年間休日128日。単身用社宅の相談も可能です。</p>',

  datePosted: RECRUIT_UPDATED,

  employmentType: JOB.employmentType,

  hiringOrganization: {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: COMPANY.name,
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    sameAs: COMPANY.instagram,
    email: COMPANY.email,
    telephone: COMPANY.telIntl,
  },

  jobLocation: {
    '@type': 'Place',
    address: postalAddress,
  },

  // 画面表示「月給197,000円〜」と一致させる（下限のみ提示のため minValue を使用）
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'JPY',
    value: {
      '@type': 'QuantitativeValue',
      minValue: JOB.salaryMonthlyMin,
      unitText: 'MONTH',
    },
  },

  workHours: JOB.workHours,

  qualifications: '普通自動車運転免許（あれば尚可。必須ではありません）',
  educationRequirements: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: '不問',
  },
  experienceRequirements: {
    '@type': 'OccupationalExperienceRequirements',
    monthsOfExperience: 0,
  },

  responsibilities:
    'コンクリートの打設・均し・押え作業、左官工事全般（モルタル仕上げ・下地調整など）',

  jobBenefits:
    '社会保険完備（雇用保険・労災保険・健康保険・厚生年金）、通勤手当（月20,000円まで）、賞与年2回、昇給あり、単身用社宅あり（要相談）',

  totalJobOpenings: JOB.hiringCount,
  industry: '建設業',
  occupationalCategory: '左官・土間コンクリート工',

  applicationContact: {
    '@type': 'ContactPoint',
    contactType: '採用担当',
    telephone: COMPANY.telIntl,
    email: COMPANY.email,
    url: canonical('/contact?type=recruit'),
  },

  url: canonical('/recruit'),
  identifier: {
    '@type': 'PropertyValue',
    name: COMPANY.name,
    value: 'maruyoshi-sakan-doma-fulltime',
  },
}

export default function RecruitPage() {
  return (
    <>
      <JsonLd id="job-posting-schema" data={jobPostingSchema} />
      <JsonLd id="recruit-faq-schema" data={faqSchema(RECRUIT_FAQS)} />

      <PageHero
        label="RECRUIT"
        title="左官・土間コンクリート作業員 募集"
        titleSub="未経験歓迎・正社員採用"
        desc="経験・学歴・年齢は問いません。東京都板橋区の株式会社丸義で、一緒に現場で手に職をつけましょう。"
      />
      <Breadcrumbs crumbs={[{ name: '求人募集', path: '/recruit' }]} />
      <RecruitContent />
    </>
  )
}
