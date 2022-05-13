import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { serviceProducts as service } from '../../services'
import { Product } from '../../types'

export const categories    = createAsyncThunk('products/categories', service.categories)
export const details       = createAsyncThunk('products/details', service.details)
export const detailsSelect = createAction<Product|undefined>('products/details/select')
export const list          = createAsyncThunk('products/list', service.list)
