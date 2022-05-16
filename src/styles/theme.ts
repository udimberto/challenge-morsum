import { createTheme } from '@mui/material/styles'
import * as colors from '@mui/material/colors'

const colorPrimary   = colors.yellow
const colorSecondary = colors.blue

export const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary[300],
    },
    secondary: {
      main: colorSecondary[700],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'secondary',
        disableElevation: true,
        variant: 'outlined',
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colorSecondary[700],
          textDecoration: 'none',
        },
      },
    },
  },
})

export default theme
