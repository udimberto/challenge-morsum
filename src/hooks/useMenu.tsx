import { useMemo } from 'react'
import { useProductCategories } from '../store/products/hooks'
import { Menu, ProductCategory } from '../types'

export function useMenu(): Menu {
  /**
   * Menu:
   * Products Categories
   */
  const { data: categories } = useProductCategories()
  const categoriesMenu       = useMemo(() => (
    categories?.map((category: ProductCategory) => ({
      id      : `category-${category}`,
      href    : `/category/${category}`,
      children: category,
    }))
  ), [categories])

  const menu = useMemo(() => ([
    ...(categoriesMenu || []),
  ]), [categoriesMenu])

  return menu
}