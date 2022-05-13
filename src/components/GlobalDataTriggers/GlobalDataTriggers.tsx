import { useEffect } from 'react'
import { useProductCategories } from '../../hooks'

export function GlobalDataTriggers() {
  const { get: getProductCategories } = useProductCategories()

  /**
   * Product Categories
   */
  useEffect(() => {
    getProductCategories()
  }, [getProductCategories])

  return null
}

export default GlobalDataTriggers
