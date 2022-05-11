import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '../components/Link/Link'
import LayoutAppBarSearch from './LayoutAppBarSearch'

export default function LayoutAppBar() {
  return (
    <AppBar
      position="static"
      color="primary"
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
          >
            <Box
              display="flex"
              flex="1"
              alignItems="center"
            >
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/"
                sx={{
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                food recipes
              </Typography>
            </Box>
            <LayoutAppBarSearch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
