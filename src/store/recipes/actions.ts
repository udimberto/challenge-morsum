import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { serviceRecipes as service } from '../../services'
import { Recipe } from '../../types'

export const details = createAsyncThunk('recipes/details', service.details)
export const list    = createAsyncThunk('recipes/list', service.list)
export const select  = createAction<Recipe>('recipes/select')
