/* eslint-disable @next/next/no-img-element */
import { Product } from '../../types'
import { currencyFormat } from '../../utils'

export type SEOSchemaProductProps = {
  product?: Product
}

export function SEOSchemaProduct({ product } : SEOSchemaProductProps) {
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
      itemScope
      itemType="https://schema.org/IndividualProduct"
      itemID={`${productId}`}
    >
      <div itemProp="name">
        {productTitle}
      </div>
      <div itemProp="description">
        {productDescription}
      </div>
      <div itemProp="category">
        {productCategory}
      </div>
      <div itemProp="price">
        {currencyFormat(productPrice)}
      </div>
      <img
        itemProp="image"
        alt=""
        src={productImage}
      />
      <div
        itemScope
        itemProp="aggregateRating"
        itemType="https://schema.org/AggregateRating"
      >
        <div itemProp="ratingValue">
          {productRatingValue}
        </div>
        <div itemProp="reviewCount">
          {productRatingCount}
        </div>
      </div>
    </div>
  )
}