import { createTheme } from '@mui/material/styles'
import * as colors from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    ...colors,
    primary: {
      main: colors.yellow[300]
    },
    secondary: {
      main: colors.blue[700]
    },
    background: {
      paper: colors.common.white,
      default: colors.grey[200],
    }
  },
})

export default theme
