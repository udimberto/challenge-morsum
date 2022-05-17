import { useRouter } from 'next/router'
import ProductsList from '../../components/Product/ProductsList'
import SEO from '../../components/SEO/SEO'

export default function PageSearch() {
  /**
   * Navigation values
   */
  const { query } = useRouter()
  const { term }  = query

  return (
    <>
      <SEO
        title={`${term}`}
        description="Products list from category"
      />
      <ProductsList
        filtersAreRequired
        filters={!term ? undefined : { categorySlug: term }}
        title={{
          children  : term,
          fontWeight: 'bold',
        }}
      />
    </>
  )
}