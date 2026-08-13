import { SITE_URL, COMPANY, ADDRESS, LOGO_URL, BUSINESS_HOURS, canonical } from './site'

/* ────────────────────────────────────────────────
   共通パーツ
──────────────────────────────────────────────── */

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: ADDRESS.streetAddress,
  addressLocality: ADDRESS.locality,
  addressRegion: ADDRESS.region,
  postalCode: ADDRESS.postalCode,
  addressCountry: 'JP',
} as const

/** 他スキーマから参照するための Organization ノードID */
export const ORG_ID = `${SITE_URL}/#organization`
export const SITE_ID = `${SITE_URL}/#website`

/* ────────────────────────────────────────────────
   Organization（トップページのみに出力）
──────────────────────────────────────────────── */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  alternateName: COMPANY.alternateName,
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
  },
  image: LOGO_URL,
  email: COMPANY.email,
  telephone: COMPANY.telIntl,
  address: postalAddress,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: COMPANY.telIntl,
    email: COMPANY.email,
    areaServed: 'JP',
    availableLanguage: 'Japanese',
  },
  founder: {
    '@type': 'Person',
    name: COMPANY.representative,
  },
  foundingDate: COMPANY.foundingDate,
  description:
    '東京都板橋区徳丸を拠点に、左官工事・土間コンクリート工事・コンクリート打設・均し・押えを専門とする建設会社。',
  knowsAbout: [
    '左官工事',
    '土間コンクリート工事',
    'コンクリート打設',
    'コンクリート均し',
    'コンクリート押え',
  ],
  sameAs: [COMPANY.instagram],
}

/* ────────────────────────────────────────────────
   WebSite（トップページのみ）
──────────────────────────────────────────────── */
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: COMPANY.name,
  alternateName: COMPANY.alternateName,
  url: `${SITE_URL}/`,
  inLanguage: 'ja',
  publisher: { '@id': ORG_ID },
}

/* ────────────────────────────────────────────────
   LocalBusiness（会社情報・地域ページ）
   口コミ・評価・受賞歴・建設業許可は未提供のため出力しない。
   営業時間は基本時間のみを記載し、変動する旨はページ側に明記する。
──────────────────────────────────────────────── */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: COMPANY.name,
  alternateName: COMPANY.alternateName,
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  image: LOGO_URL,
  email: COMPANY.email,
  telephone: COMPANY.telIntl,
  address: postalAddress,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: BUSINESS_HOURS.schemaDays,
      opens: BUSINESS_HOURS.opens,
      closes: BUSINESS_HOURS.closes,
    },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: '東京都板橋区' },
    { '@type': 'AdministrativeArea', name: '東京都' },
  ],
  description:
    '東京都板橋区徳丸に事務所を置く左官・土間コンクリート工事の専門会社。都内全域の新築・改修現場に対応。',
  parentOrganization: { '@id': ORG_ID },
  sameAs: [COMPANY.instagram],
}

/* ────────────────────────────────────────────────
   BreadcrumbList
──────────────────────────────────────────────── */
export type Crumb = { name: string; path: string }

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: canonical(c.path),
    })),
  }
}

/* ────────────────────────────────────────────────
   FAQPage — ページ上に表示されているQ&Aのみを渡すこと
──────────────────────────────────────────────── */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/* ────────────────────────────────────────────────
   Service（サービス詳細ページ）
──────────────────────────────────────────────── */
export function serviceSchema(opts: {
  name: string
  description: string
  path: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: canonical(opts.path),
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'AdministrativeArea', name: '東京都板橋区' },
      { '@type': 'AdministrativeArea', name: '東京都' },
    ],
  }
}

/* ────────────────────────────────────────────────
   Article（コラム）
──────────────────────────────────────────────── */
export function articleSchema(opts: {
  headline: string
  description: string
  path: string
  datePublished: string
  dateModified: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    inLanguage: 'ja',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical(opts.path) },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: `${SITE_URL}/og-image.png`,
  }
}
