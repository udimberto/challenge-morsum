import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material'
import { useWindowValues } from '../hooks'
import LayoutAppBarMenu from './LayoutAppBarMenu'

export default function LayoutAppBottomBar() {
  const { windowXS } = useWindowValues()

  return !windowXS ? null : (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        top: 'auto',
        bottom: 0,
      }}
    >
      <Toolbar
        sx={{
          alignItems: 'stretch',
        }}
      >
        <LayoutAppBarMenu
          wrapper={{
            fontSize: 'small',
          }}
        />
      </Toolbar>
    </AppBar>
  )
}
