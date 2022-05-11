import logger from 'redux-logger'
import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'

import { recipesReducer as recipes } from './recipes'

export const store = configureStore({
  devTools  : (process.env.NODE_ENV !== 'production'),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer   : {
    recipes,
  },
})

export type AppDispatch         = typeof store.dispatch
export type RootState           = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
