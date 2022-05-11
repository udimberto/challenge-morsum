import { createTheme } from '@mui/material/styles'
import * as colors from '@mui/material/colors'

const theme = createTheme({
  palette: {
    ...colors,
    primary: {
      main: colors.red.A400,
    },
    secondary: {
      main: colors.red.A400,
    },
  },
})

export default theme
