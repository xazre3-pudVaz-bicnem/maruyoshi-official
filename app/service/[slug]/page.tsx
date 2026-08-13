import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/ui/JsonLd'
import ServiceDetailContent from '@/components/pages/ServiceDetailContent'
import { SERVICES, getService } from '@/lib/services'
import { canonical, OG_IMAGE } from '@/lib/site'
import { serviceSchema, faqSchema } from '@/lib/schema'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug)
  if (!service) return {}

  const url = canonical(`/service/${service.slug}`)

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${service.metaTitle}｜株式会社丸義`,
      description: service.metaDescription,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${service.h1}｜株式会社丸義` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.metaTitle}｜株式会社丸義`,
      description: service.metaDescription,
      images: [OG_IMAGE],
    },
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug)
  if (!service) notFound()

  return (
    <>
      <JsonLd
        id="service-schema"
        data={[
          serviceSchema({
            name: service.h1,
            serviceType: service.navLabel,
            description: service.metaDescription,
            path: `/service/${service.slug}`,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <PageHero
        label={service.en}
        title={service.h1}
        desc={service.metaDescription}
      />

      <Breadcrumbs
        crumbs={[
          { name: '事業内容', path: '/service' },
          { name: service.navLabel, path: `/service/${service.slug}` },
        ]}
      />

      <ServiceDetailContent service={service} />
    </>
  )
}
