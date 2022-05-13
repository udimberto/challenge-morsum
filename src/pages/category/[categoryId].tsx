import { useRouter } from 'next/router'
import ProductsList from '../../components/Product/ProductsList'

export default function PageSearch() {
  /**
   * Navigation values
   */
  const { query }      = useRouter()
  const { categoryId } = query

  return (
    <>
      <ProductsList
        filtersAreRequired
        filters={!categoryId ? undefined : { categoryId }}
      />
    </>
  )
}