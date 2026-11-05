import { Helmet } from "react-helmet-async"
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/seo"

type SeoProps = {
  title: string
  description: string
  canonical: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  ogImage?: string
}

export default function Seo({
  title,
  description,
  canonical,
  jsonLd,
  ogImage = DEFAULT_OG_IMAGE,
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
