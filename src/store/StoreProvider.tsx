import { Provider } from 'react-redux'
import PersistProvider from './PersistProvider'
import { store } from './store'
import { ChildrenProp } from '../types'

export default function Store({ children } : ChildrenProp) {
  return (
    <Provider store={store}>
      <PersistProvider store={store}>
        {children}
      </PersistProvider>
    </Provider>
  )
}
