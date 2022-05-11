import Box from '@mui/material/Box'
import LayoutAppBar from './LayoutAppBar'
import LayoutAppFooter from './LayoutAppFooter'
import type { ChildrenProp } from '../types'

export type LayoutAppProps = ChildrenProp

export default function LayoutApp({ children } : LayoutAppProps) {
  return (
    <Box
      id="layout"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      <LayoutAppBar />
      <Box
        id="layout-content"
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {children}
      </Box>
      <LayoutAppFooter />
    </Box>
  )
}
