import dayjs from 'dayjs'
import { createReducer, SerializedError } from '@reduxjs/toolkit'
import { categories, details, detailsSelect, list } from './actions'
import type { Product, ProductCategory } from '../../types'

export type CommonSubState = {
  data    ?: any
  error   ?: SerializedError
  loadedAt?: string
  pending  : boolean
}

export type ProductsListItemState = Omit<CommonSubState, 'data'> & {
  data?: Product[]
}

export type ProductsListState = {
  [key: ProductCategory | 'default' | 'search']: ProductsListItemState
}

export type ProductsState = {
  categories: Omit<CommonSubState, 'data'> & { data?: ProductCategory[] }
  details   : Omit<CommonSubState, 'data'> & { data?: Product }
  list      : ProductsListState
}

export const commonSubState: CommonSubState = {
  data   : undefined,
  error  : undefined,
  pending: false,
}

export const initialState: ProductsState = {
  categories: commonSubState,
  details   : commonSubState,
  list      : {
    default: commonSubState,
  },
}

export const getListKeyFromAction = (action: any) => (
  action?.meta?.arg?.categorySlug || 'default'
)

export const getLoadedAt = () => dayjs().format('YYYY-MM-DD[T]HH:mm:ss')

export const productsReducer = createReducer(initialState, (builder) => {
  builder
    /**
     * Product Categories List
     */
    .addCase(categories.pending, (state) => {
      state.categories.pending = true
    })
    .addCase(categories.fulfilled, (state, { payload }) => {
      state.categories.pending  = false
      state.categories.data     = payload.data
      state.categories.loadedAt = getLoadedAt()
    })
    .addCase(categories.rejected, (state, { error }) => {
      state.categories.pending = false
      state.categories.error   = error
    })

    /**
     * Product Details by ID
     */
    .addCase(details.pending, (state) => {
      state.details.pending = true
    })
    .addCase(details.fulfilled, (state, { payload }) => {
      state.details.pending  = false
      state.details.data     = payload.data
      state.details.loadedAt = getLoadedAt()
    })
    .addCase(details.rejected, (state, { error }) => {
      state.details.pending = false
      state.details.error   = error
    })

    /**
     * Products List
     */
    .addCase(list.pending, (state, action) => {
      const category       = getListKeyFromAction(action)
      state.list[category] = {
        ...commonSubState,
        ...(state.list[category] || {}),
        pending: true
      }
    })
    .addCase(list.fulfilled, (state, { payload, ...action }) => {
      const category                = getListKeyFromAction(action)
      state.list[category].pending  = false
      state.list[category].data     = payload.data
      state.list[category].loadedAt = getLoadedAt()
    })
    .addCase(list.rejected, (state, { error, ...action }) => {
      const category               = getListKeyFromAction(action)
      state.list[category].pending = false
      state.list[category].error   = error
    })

    /**
     * Put a pre-existent Product in the context/details
     */
    .addCase(detailsSelect, (state, { payload }) => {
      state.details.data    = payload
      state.details.error   = undefined
      state.details.pending = false
    })
})
