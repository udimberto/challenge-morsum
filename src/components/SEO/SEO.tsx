import NextHead from 'next/head'

const appName        = process.env.NEXT_PUBLIC_APP_NAME
const appDescription = process.env.NEXT_PUBLIC_SEO_DESCRIPTION
const imageUrlBase   = process.env.NEXT_APP_URL
const imageUrl       = `${imageUrlBase}/img/share.png`

export type SEOProps = {
  title      ?: string
  description?: string
  image      ?: string
  imageHeight?: number
  imageWidth ?: number
}

export function SEO({
  title,
  description = appDescription,
  image       = imageUrl,
  imageHeight = 1200,
  imageWidth  = 1200,
} : SEOProps) {
  return (
    <NextHead>
      {/* Title */}
      <title>
        {title}
        {!title ? appName : ` | ${appName}`}
      </title>

      {/* Description */}
      <meta
        name="description"
        content={description}
      />
    </NextHead>
  )
}

export default SEO
