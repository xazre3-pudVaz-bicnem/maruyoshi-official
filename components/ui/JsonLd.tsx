/**
 * JSON-LD をサーバーコンポーネントのまま初期HTMLへ出力する。
 * next/script はクライアント側で挿入されるケースがあるため、
 * 構造化データは素の <script> で初期HTMLに含める。
 */
export default function JsonLd({ id, data }: { id: string; data: object | object[] }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
