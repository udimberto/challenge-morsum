import dayjs from 'dayjs'
import { useCallback, useEffect } from 'react'
import { GenericRequestParams, Product, ProductCategory } from '../../types'
import { useAppDispatch, useAppSelector } from '../storeHooks'
import { categories, details, detailsSelect, list } from './actions'
import { commonSubState } from './reducer'
import { productSelector, productsSelector, productsCategoriesSelector } from './selectors'

export function useProducts(categorySlug?: ProductCategory) {
  const dispatch  = useAppDispatch()
  const allStates = useAppSelector(productsSelector)
  const state     = allStates[categorySlug || 'default'] || commonSubState

  /**
   * Get Product Categories
   *
   * @param {GenericRequestParams} params
   */
  const get = useCallback((params?: GenericRequestParams) => {
    dispatch(
      list({
        ...(!categorySlug ? {} : { categorySlug }),
        ...(params || {}),
      })
    )
  }, [categorySlug, dispatch])

  /**
   * Put a pre-existent product on context/details state
   *
   * @param {Product} product
   */
  const onSelectOne = useCallback((product: Product) => {
    dispatch(
      detailsSelect(product)
    )
  }, [dispatch])

  return {
    ...state,
    dispatch,
    get,
    onSelectOne,
  }
}

export function useProduct(productId?: any) {
  const dispatch = useAppDispatch()
  const state    = useAppSelector(productSelector)

  const { data }         = state
  const { id: loadedId } = data || {}
  const isSameProduct    = !!(productId && productId === loadedId)

  /**
   * Trigger the context action to get the Product on API
   *
   * @param {any} manualProductId
   */
  const get = useCallback((manualProductId: any) => {
    dispatch(
      details({
        productId: parseInt(manualProductId),
      })
    )
  }, [dispatch])

  /**
   * Automatic Product Getter, triggered by hook param
   */
  useEffect(() => {
    if (!productId || isSameProduct) return

    get(productId)
  }, [get, isSameProduct, productId])

  /**
   * Remove the Product from context on unmount
   */
  useEffect(() => {
    return () => {
      dispatch(
        detailsSelect(undefined)
      )
    }
  }, [dispatch])

  return {
    ...state,
    dispatch,
    get,
  }
}

export function useProductCategories() {
  const dispatch = useAppDispatch()
  const state    = useAppSelector(productsCategoriesSelector)

  /**
   * Trigger the context action to get the Categories on API
   *
   * @param {any} manualProductId
   */
  const get = useCallback((manualParams?: GenericRequestParams) => {
    dispatch(
      categories(manualParams)
    )
  }, [dispatch])

  return {
    ...state,
    dispatch,
    get,
  }
}
