/**
 * サイト全体で共有する事実情報（NAP・連絡先・正規URL）。
 * ここを唯一の情報源とし、表示・構造化データの双方から参照することで
 * 表記ゆれと構造化データの不一致を防ぐ。
 */

export const SITE_URL = 'https://www.maruyoshi-official.com'

export const COMPANY = {
  name: '株式会社丸義',
  alternateName: '丸義',
  nameKana: 'マルヨシ',
  legalName: '株式会社丸義',
  representative: '善平 健志郎',
  founded: '令和7年（2025年）',
  foundingDate: '2025',
  email: 'kenchiro0624@icloud.com',
  /** 表示用 */
  tel: '080-1116-1864',
  /** tel: リンク用（ハイフンなし） */
  telLink: 'tel:08011161864',
  /** 構造化データ用（E.164 に準じた国際表記） */
  telIntl: '+81-80-1116-1864',
  instagram: 'https://www.instagram.com/maruyoshi.itabashi/',
  instagramHandle: '@maruyoshi.itabashi',
  business: 'コンクリートの打設・均し・押え／左官工事／土間コンクリート工事',
} as const

/**
 * 営業時間。
 * 基本は8:00〜17:00だが、現場の工程・コンクリートの硬化状況により前後する。
 * 構造化データには基本時間のみを記載し、変動がある旨は画面側で明記する。
 * ※ 曜日は求人ページに記載の「土日祝休み・週休2日制」に合わせて月〜金としている。
 */
export const BUSINESS_HOURS = {
  display: '8:00〜17:00',
  note: '現場の工程により前後する場合があります。時間外は折り返しのご連絡となることがあります。',
  daysDisplay: '月〜金（土日祝休み）',
  schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:00',
  closes: '17:00',
} as const

export const ADDRESS = {
  postalCode: '175-0083',
  postalCodeDisplay: '〒175-0083',
  region: '東京都',
  locality: '板橋区',
  street: '徳丸2-27-14',
  building: 'サンパレス徳丸301',
  /** 1行表記（フォーム下部・フッターなど） */
  full: '〒175-0083 東京都板橋区徳丸2-27-14 サンパレス徳丸301',
  /** 郵便番号を除いた住所（構造化データの streetAddress ではない、表示用） */
  plain: '東京都板橋区徳丸2-27-14 サンパレス徳丸301',
  /** 構造化データ用 streetAddress */
  streetAddress: '徳丸2-27-14 サンパレス徳丸301',
  mapUrl: 'https://maps.google.com/?q=東京都板橋区徳丸2-27-14',
} as const

/** 実際にクロール可能な正式ロゴURL */
export const LOGO_URL = `${SITE_URL}/images/logo-header.png`
export const OG_IMAGE = `${SITE_URL}/og-image.png`

/** 対応エリア（会社概要・LocalBusiness areaServed と共通） */
export const SERVICE_AREAS = [
  '東京都板橋区（拠点）',
  '東京都全域',
  '埼玉県南部エリア',
  '神奈川県北部エリア',
  '千葉県西部エリア',
] as const

/** 求人条件。画面表示と JobPosting 構造化データの唯一の情報源 */
export const JOB = {
  title: '左官・土間コンクリート作業員',
  employmentType: 'FULL_TIME' as const,
  salaryMonthlyMin: 197000,
  salaryDailyRate: 10000,
  workHours: '8:00〜17:00（休憩60分）',
  overtime: '月平均10時間',
  holidaysPerYear: 128,
  probationMonths: 3,
  commuteAllowance: '月20,000円まで支給',
  hiringCount: 10,
} as const

/**
 * 正規URLを組み立てる。metadata.alternates.canonical に使用。
 * path は先頭スラッシュ付き、トップは '/' を渡す。
 */
export function canonical(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}
