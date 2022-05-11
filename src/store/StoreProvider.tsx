import { Provider } from 'react-redux'
import { store } from './store'
import { ChildrenProp } from '../types'

export default function Store({ children } : ChildrenProp) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
