import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const recipesState    = (state: RootState) => state.recipes
export const recipeSelector  = createSelector(recipesState, state => state.details)
export const recipesSelector = createSelector(recipesState, state => state.list)
