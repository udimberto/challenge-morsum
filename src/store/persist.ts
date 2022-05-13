import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const persistConfig = {
  key    : 'root',
  version: 1,
  storage,
}

export const persistSerializableCheck = {
  ignoredActions: [
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  ]
}

export const getPersistedReducer = (rootReducer: any) => persistReducer(persistConfig, rootReducer)
