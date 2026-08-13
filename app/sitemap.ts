import type { MetadataRoute } from 'next'
import { canonical } from '@/lib/site'
import { SERVICES } from '@/lib/services'
import { COLUMNS } from '@/lib/columns'
import { WORKS, HAS_WORKS } from '@/lib/works'

/**
 * サイトマップ。
 * - canonical と完全に同じ URL のみを登録する
 * - noindex ページ・実体のないページは含めない
 * - サービス詳細・コラム・施工実績はデータ配列から自動生成されるため、
 *   lib/ 側にデータを追加すればサイトマップにも自動で反映される
 *
 * lastModified は各ページの実際の更新日を記載する。
 * ページ内容を更新したら、対応する日付も更新すること。
 */

/** 今回のSEO改修でコンテンツを更新した日 */
const UPDATED = '2026-08-13'

const STATIC_PAGES: { path: string; lastModified: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/',          lastModified: UPDATED, priority: 1.0, changeFrequency: 'monthly' },
  { path: '/service',   lastModified: UPDATED, priority: 0.9, changeFrequency: 'monthly' },
  { path: '/area/itabashi', lastModified: UPDATED, priority: 0.9, changeFrequency: 'monthly' },
  { path: '/recruit',   lastModified: UPDATED, priority: 0.9, changeFrequency: 'weekly'  },
  { path: '/partner',   lastModified: UPDATED, priority: 0.8, changeFrequency: 'monthly' },
  { path: '/strength',  lastModified: UPDATED, priority: 0.7, changeFrequency: 'yearly'  },
  { path: '/company',   lastModified: UPDATED, priority: 0.7, changeFrequency: 'yearly'  },
  { path: '/column',    lastModified: UPDATED, priority: 0.7, changeFrequency: 'weekly'  },
  { path: '/contact',   lastModified: UPDATED, priority: 0.6, changeFrequency: 'yearly'  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: canonical(p.path),
    lastModified: new Date(p.lastModified),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: canonical(`/service/${s.slug}`),
    lastModified: new Date(UPDATED),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const columnEntries: MetadataRoute.Sitemap = COLUMNS.map((c) => ({
    url: canonical(`/column/${c.slug}`),
    lastModified: new Date(c.dateModified),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  // 施工実績は実データが登録されるまでインデックス対象外
  const workEntries: MetadataRoute.Sitemap = HAS_WORKS
    ? [
        {
          url: canonical('/works'),
          lastModified: new Date(UPDATED),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        },
        ...WORKS.map((w) => ({
          url: canonical(`/works/${w.slug}`),
          lastModified: new Date(w.completedAt),
          changeFrequency: 'yearly' as const,
          priority: 0.7,
        })),
      ]
    : []

  return [...staticEntries, ...serviceEntries, ...columnEntries, ...workEntries]
}
