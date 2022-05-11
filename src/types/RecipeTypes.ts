import type { Image } from './ImageTypes'
import type { Ingredient } from './IngredientTypes'

export type RecipeStep = {
  title       : string
  description?: string
  images     ?: Image[]
  ingredients?: Ingredient[]
  order      ?: number
}

export type Recipe = {
  id         : string
  title      : string
  description: string
  image      : Image
  rating     : number
  steps     ?: RecipeStep[]
}

export type Recipes = Recipe[]
