import Link from 'next/link'
import JsonLd from '@/components/ui/JsonLd'
import { breadcrumbSchema, type Crumb } from '@/lib/schema'

/**
 * パンくずリスト。表示とBreadcrumbList JSON-LDを同一データから生成し、
 * 表示名とURLが必ず一致するようにしている。
 * crumbs には TOP を含めず、下層のみを渡す。
 */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ name: 'TOP', path: '/' }, ...crumbs]

  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema(all)} />
      <nav
        aria-label="パンくずリスト"
        className="border-b"
        style={{ background: '#fafafa', borderColor: 'rgba(0,0,0,0.06)' }}
      >
        <ol className="max-w-7xl mx-auto px-5 sm:px-8 py-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs">
          {all.map((c, i) => {
            const isLast = i === all.length - 1
            return (
              <li key={c.path} className="flex items-center gap-2">
                {isLast ? (
                  <span className="font-bold text-gray-700" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="text-gray-500 hover:text-gray-900 transition-colors">
                      {c.name}
                    </Link>
                    <span aria-hidden="true" className="text-gray-300">
                      ›
                    </span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
