import axios from 'axios'
import type { GenericRequestParams, Product, ProductCategory } from '../types'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const serviceProducts = {
  /**
   * Get Product Categories
   *
   * @param {GenericRequestParams} params
   *
   * @returns {Promise}
   */
  categories: async (
    params?: GenericRequestParams
  ) : Promise<{ data: ProductCategory[] }> => {
    return (
      axios.get(
        `${apiUrl}/products/categories`,
        { params }
      )
      .then(({ data }) => ({ data }))
    )
  },

  /**
   * Get Product by ID
   *
   * @param {Product['id']} productId
   * @param {GenericRequestParams} params
   *
   * @returns {Promise}
   */
  details: async (
    {
      productId,
      ...params
    } : GenericRequestParams & {
      productId: Product['id'],
    }
  ) : Promise<{ data: Product }> => {
    return (
      axios.get(
        `${apiUrl}/products/${productId}`,
        { params }
      )
      .then(({ data }) => ({ data }))
    )
  },

  /**
   * Get Products List
   *
   * @param {GenericRequestParams} params
   *
   * @returns {Promise}
   */
  list: async function(
    {
      categorySlug,
      ...params
    } : GenericRequestParams & { categorySlug?: string }
  ) : Promise<{ data: Product[] }> {
    const subEndpoint = !categorySlug ? '' : `/category/${categorySlug}`

    return (
      axios.get(
        `${apiUrl}/products${subEndpoint}`,
        { params }
      )
      .then(({ data }) => ({ data }))
    )
  },
}
