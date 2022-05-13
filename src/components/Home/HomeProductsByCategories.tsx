import { useMemo } from 'react'
import { useProductCategories } from '../../hooks'
import { theme } from '../../styles'
import ProductsList from '../Product/ProductsList'

const borderTop    = `1px solid ${theme.palette.divider}`
const listPending  = {
  filtersAreRequired: true,
  title             : {
    children: 'loading...',
  },
  section: {
    borderTop,
  }
}
const listsPending = Array.from({ length: 4 }).map((nothing, index) => ({
  ...listPending,
  id: `products-list-loading-${index}`,
}))

export default function HomeProductsByCategories() {
  const {
    data   : categories,
    pending: categoriesPending,
  } = useProductCategories()

  const categoriesSections = useMemo(() => {
    if (!categories) {
      return listsPending
    }

    return (
      categories.map((categorySlug: string) => ({
        id                : `products-list-${categorySlug}`,
        filtersAreRequired: true,
        filters           : {
          categorySlug,
        },
        title             : {
          children: categorySlug,
        },
        section           : {
          borderTop,
        },
      }))
    )
  }, [categories])

  return (
    <>
      {categoriesSections?.map((section: any, sectionIndex: number) => (
        <ProductsList
          key={section?.id || `products-list-loading-${sectionIndex}`}
          {...section}
        />
      ))}
    </>
  )
}
