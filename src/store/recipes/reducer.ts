import { createReducer, SerializedError } from '@reduxjs/toolkit'
import { details, list, select } from './actions'
import type { Recipe } from '../../types'

type CommonSubState = {
  data  ?: any
  error ?: SerializedError
  pending: boolean
}

type RecipesState = {
  details: CommonSubState & {
    data?: Recipe
  }
  list   : CommonSubState & {
    data?: Recipe[]
  }
}

const commonSubState: CommonSubState = {
  data   : undefined,
  error  : undefined,
  pending: false,
}

const initialState: RecipesState = {
  details: {
    ...commonSubState,
  },
  list: {
    ...commonSubState,
  },
}

export const recipesReducer = createReducer(initialState, (builder) => {
  builder
    /**
     * Recipe Details by ID
     */
    .addCase(details.pending, (state) => {
      state.details.pending = true
    })
    .addCase(details.fulfilled, (state, { payload }) => {
      state.details.pending = false
      state.details.data    = payload.data
    })
    .addCase(details.rejected, (state, { error }) => {
      state.details.pending = false
      state.details.error   = error
    })

    /**
     * Recipes List
     */
    .addCase(list.pending, (state) => {
      state.list.pending = true
    })
    .addCase(list.fulfilled, (state, { payload }) => {
      state.list.pending = false
      state.list.data    = payload.data
    })
    .addCase(list.rejected, (state, { error }) => {
      state.list.pending = false
      state.list.error   = error
    })

    /**
     * Put a pre-existent Recipe in the context
     */
    .addCase(select, (state, { payload }) => {
      state.details.data    = payload
      state.details.error   = undefined
      state.details.pending = false
    })
})
