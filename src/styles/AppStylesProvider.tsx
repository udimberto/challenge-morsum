import { useMemo } from 'react'
import {
  CssBaseline,
  useMediaQuery,
} from '@mui/material'
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles'
import { GlobalStyles } from './GlobalStyles'
import { LibsOverridesStyles } from './LibsOverridesStyles'
import { ChildrenProp } from '../types'
import theme from './theme'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function AppStylesProvider({ children } : ChildrenProp) {
  const finalTheme = useMemo(() => createTheme({
    ...theme,
    palette: {
      ...theme.palette,
    },
  }), [])

  return (
    <>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline />
        <GlobalStyles />
        <LibsOverridesStyles />
        {children}
      </ThemeProvider>
    </>
  )
}
