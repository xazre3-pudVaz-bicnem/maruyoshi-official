import type { ServiceSlug } from './services'

/**
 * 施工実績。
 *
 * 【重要】架空の施工事例は登録しないこと。
 * 実際に施工した現場の情報と写真が揃った時点で WORKS 配列へ追加する。
 * 配列が空の間、/works は noindex となりサイトマップにも含まれない
 * （実体のない空ページをインデックスさせないため）。
 *
 * 写真は public/images/works/ 配下に配置し、
 * ファイル名は内容がわかるもの（例: doma-concrete-itabashi-soko-01.jpg）にする。
 */

export type WorkPhoto = {
  src: string
  /** 画像内容を自然な日本語で説明する。キーワードの羅列にしない */
  alt: string
  width: number
  height: number
}

export type Work = {
  slug: string
  /** 施工件名（H1） */
  title: string
  metaDescription: string
  /** 施工エリア 例: 東京都板橋区 */
  area: string
  /** 施工種別 */
  serviceType: ServiceSlug
  /** 建物種別 例: 物流倉庫 / マンション / 戸建住宅 */
  buildingType: string
  /** 工事内容の概要 */
  summary: string
  /** 施工面積など、確認できる事実のみ記載 */
  scale?: string
  /** 工期 */
  period?: string
  /** 施工上のポイント */
  points: { title: string; desc: string }[]
  /** 担当者コメント */
  comment?: string
  photos: WorkPhoto[]
  completedAt: string
}

export const WORKS: Work[] = []

export function getWork(slug: string): Work | undefined {
  return WORKS.find((w) => w.slug === slug)
}

export const HAS_WORKS = WORKS.length > 0
