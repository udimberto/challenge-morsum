import { useRouter } from 'next/router'
import ProductsList from '../../components/Product/ProductsList'
import SEO from '../../components/SEO/SEO'

export default function PageProductsCategory() {
  /**
   * Navigation values
   */
  const { query }        = useRouter()
  const { categorySlug } = query

  return (
    <>
      <SEO
        title={`${categorySlug}`}
        description="Products list from category"
      />
      <ProductsList
        filtersAreRequired
        filters={!categorySlug ? undefined : { categorySlug }}
        title={{
          children: categorySlug,
          fontWeight: 'bold',
        }}
      />
    </>
  )
}