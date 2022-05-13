import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const productsState              = (state: RootState & any) => state?.products
export const productSelector            = createSelector(productsState, (state) => state.details)
export const productsSelector           = createSelector(productsState, (state) => state.list)
export const productsCategoriesSelector = createSelector(productsState, (state) => state.categories)
