import {
  AppBar,
  Toolbar,
} from '@mui/material'
import { useWindowValues } from '../hooks'

export default function LayoutAppBottomBar() {
  const { windowXS } = useWindowValues()

  return !windowXS ? null : (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: 'auto',
        bottom: 0,
      }}
    >
      <Toolbar>
        Bottom Bar
      </Toolbar>
    </AppBar>
  )
}
