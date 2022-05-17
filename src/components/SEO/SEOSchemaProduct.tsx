/* eslint-disable @next/next/no-img-element */
import { Product } from '../../types'
import { currencyFormat } from '../../utils'

export type SEOSchemaProductProps = {
  elId   ?: string
  product?: Product
}

export function SEOSchemaProduct({
  elId = 'product-details-schema',
  product,
} : SEOSchemaProductProps) {
  const {
    id         : productId,
    category   : productCategory,
    description: productDescription,
    image      : productImage,
    price      : productPrice,
    rating     : productRating,
    title      : productTitle,
  } = product || {}
  const {
    count: productRatingCount,
    rate : productRatingValue,
  } = productRating || {}

  return !productId ? null : (
    <div
      id={elId}
      itemScope
      itemType="https://schema.org/IndividualProduct"
      itemID={`${productId}`}
    >
      <meta
        id={`${elId}-name`}
        itemProp="name"
        content={productTitle}
      />
      <meta
        id={`${elId}-description`}
        itemProp="description"
        content={productDescription}
      />
      <meta
        id={`${elId}-category`}
        itemProp="category"
        content={productCategory}
      />
      <meta
        id={`${elId}-image`}
        itemProp="image"
        content={productImage}
      />
      <div
        id={`${elId}-rating`}
        itemScope
        itemProp="aggregateRating"
        itemType="https://schema.org/AggregateRating"
      >
        <meta
          id={`${elId}-rating-value`}
          itemProp="ratingValue"
          content={String(productRatingValue)}
        />
        <meta
          id={`${elId}-rating-count`}
          itemProp="reviewCount"
          content={String(productRatingCount)}
        />
      </div>
      <div
        id={`${elId}-offers`}
        itemScope
        itemProp="offers"
        itemType="https://schema.org/AggregateOffer"
      >
        <meta
          id={`${elId}-offers-low-price`}
          itemProp="lowPrice"
          content={currencyFormat(productPrice)}
        />
      </div>
    </div>
  )
}

export default SEOSchemaProduct
