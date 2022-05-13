import { createTheme } from '@mui/material/styles'
import * as colors from '@mui/material/colors'

const theme = createTheme({
  palette: {
    ...colors,
    primary: {
      main: colors.yellow.A400
    },
    secondary: {
      main: colors.yellow.A400
    },
  },
})

export default theme
