import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from './GlobalStyles'
import { LibsOverridesStyles } from './LibsOverridesStyles'
import { ChildrenProp } from '../types'
import theme from './theme'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function AppStylesProvider({ children } : ChildrenProp) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <LibsOverridesStyles />
        {children}
      </ThemeProvider>
    </>
  )
}
