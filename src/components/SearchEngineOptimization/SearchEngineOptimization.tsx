import NextHead from 'next/head'

const appName        = process.env.NEXT_PUBLIC_APP_NAME
const appDescription = process.env.NEXT_PUBLIC_SEO_DESCRIPTION
const imageUrlBase   = process.env.NEXT_APP_URL
const imageUrl       = `${imageUrlBase}/img/share.png`

export type SearchEngineOptimizationProps = {
  title      ?: string
  description?: string
  image      ?: string
  imageHeight?: number
  imageWidth ?: number
}

export function SearchEngineOptimization({
  title,
  description = appDescription,
  image       = imageUrl,
  imageHeight = 1200,
  imageWidth  = 1200,
} : SearchEngineOptimizationProps) {

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

export default SearchEngineOptimization
