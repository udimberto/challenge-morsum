import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from '../components/Logo/Logo'
import LayoutAppBarMenu from './LayoutAppBarMenu'
import LayoutAppBarSearch from './LayoutAppBarSearch'
import { useWindowValues } from '../hooks'

export default function LayoutAppBar() {
  const { windowXS } = useWindowValues()

  return (
    <AppBar
      position="static"
      color="primary"
      elevation={2}
      sx={{
        zIndex: 100,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            display="flex"
            width="100%"
            flexDirection="row"
            alignItems="stretch"
            justifyContent={['center', 'space-between']}
            gap={[4]}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Logo />
            </Box>
            <Box
              display="flex"
              flex={['1', 'auto']}
              alignItems="center"
            >
              <LayoutAppBarSearch />
            </Box>
            {!windowXS && (
              <>
                <LayoutAppBarMenu
                  wrapper={{
                    flex: '1 auto',
                  }}
                />
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
