import axios from 'axios'
import type { GenericRequestParams, Recipe } from '../types'

export const serviceRecipes = {
  /**
   * Get Recipe by ID
   *
   * @param {Recipe['id']} recipeId
   * @param {GenericRequestParams} params
   *
   * @returns {Promise}
   */
  details: async (recipeId: Recipe['id'], params?: GenericRequestParams): Promise<{ data: Recipe }> => {
    return axios.get(`/api/recipes/${recipeId}`, { params })
  },

  /**
   * Get Recipes List
   *
   * @param {GenericRequestParams} params
   *
   * @returns {Promise}
   */
  list: async function(params?: GenericRequestParams): Promise<{ data: Recipe[], pagination: GenericRequestParams }> {
    return axios.get('/api/recipes', { params })
  },
}
