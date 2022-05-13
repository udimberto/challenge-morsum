import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ChildrenProp } from '../types'

export type StorePersisterProps = ChildrenProp & {
  store: any
}

export default function PersistProvider({ children, store } : StorePersisterProps) {
  return (
    <PersistGate
      loading={null}
      persistor={persistStore(store)}
    >
      {children}
    </PersistGate>
  )
}
