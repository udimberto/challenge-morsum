import logger from 'redux-logger'
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { getPersistedReducer, persistSerializableCheck } from './persist'
import { productsReducer as products } from './products'

export const rootReducer      = combineReducers({ products })
export const persistedReducer = getPersistedReducer(rootReducer)
export const store            = configureStore({
  reducer   : persistedReducer,
  devTools  : (process.env.NODE_ENV !== 'production'),
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: persistSerializableCheck,
    })
    .concat(logger)
  ),
})

export type AppDispatch         = typeof store.dispatch
export type RootState           = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
