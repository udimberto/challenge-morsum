import { useCallback, useEffect } from 'react'
import { GenericRequestParams, Recipe } from '../../types'
import { useAppDispatch, useAppSelector } from '../storeHooks'
import { details, list, select as set } from './actions'
import { recipeSelector, recipesSelector } from './selectors'

export function useRecipes() {
  const dispatch = useAppDispatch()
  const state    = useAppSelector(recipesSelector)
  const get      = useCallback((manualParams?: GenericRequestParams) => dispatch(list(manualParams)), [dispatch])
  const select   = useCallback((recipeData: Recipe) => dispatch(set(recipeData)), [dispatch])

  return {
    ...state,
    dispatch,
    get,
    select,
  }
}

export function useRecipe(recipeId?: string | string[]) {
  const dispatch         = useAppDispatch()
  const state            = useAppSelector(recipeSelector)
  const get              = useCallback((manualRecipeId: string) => dispatch(details(manualRecipeId)), [dispatch])
  const { data }         = state
  const { id: loadedId } = data || {}

  useEffect(() => {
    if (!recipeId || (recipeId === loadedId)) return

    get(String(recipeId))
  }, [get, loadedId, recipeId])

  return {
    ...state,
    dispatch,
    get,
  }
}
