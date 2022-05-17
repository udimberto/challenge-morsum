import NextHead from 'next/head'
import { useRouter } from 'next/router'

const appName        = process.env.NEXT_PUBLIC_APP_NAME
const appDescription = process.env.NEXT_PUBLIC_SEO_DESCRIPTION
const appUrl         = process.env.NEXT_PUBLIC_VERCEL_URL
const imageUrlBase   = process.env.NEXT_APP_URL
const imageUrl       = `${imageUrlBase}/img/share.png`

export type SEOProps = {
  title      ?: string
  description?: string
  image      ?: string
  imageHeight?: string
  imageWidth ?: string
}

export function SEO({
  title,
  description = appDescription,
  image       = imageUrl,
  imageHeight = '1200',
  imageWidth  = '1200',
} : SEOProps) {
  const { asPath } = useRouter()

  const finalTitle = (
    (title || '')
    + (!title ? appName : ` | ${appName}`)
  )

  return (
    <NextHead>
      <title key="seoTitle">{finalTitle}</title>
      <link key="seoCanonical" rel="canonical" href={`${appUrl}${asPath}`} />
      <meta key="seoDescription" name="description" content={description} />
      <meta key="seoAppleMobileTitle" name="apple-mobile-web-app-title" content={finalTitle} />
      <meta key="seoDescription" name="description" content={(description || '').slice(0, 320)} />
      <meta key="seoOgDescription" property="og:description" content={description} />
      <meta key="seoOgTitle" property="og:title" content={finalTitle} />
      <meta key="seoOgSiteName" property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME} />
      <meta key="seoOgUrl" property="og:url" content={`${appUrl}${asPath}`} />
      <meta key="seoOgImageUrl" property="og:image" content={image} />
      <meta key="seoOgImageSecureUrl" property="og:image:secure_url" content={image} />
      <meta key="seoOgImageWidth" property="og:image:width" content={imageWidth} />
      <meta key="seoOgImageHeight" property="og:image:height" content={imageHeight} />

      {/** Get out of the Search Engines 😂 */}
      <meta key="seoNoIndex" property="robots" content="noindex" />
    </NextHead>
  )
}

export default SEO
