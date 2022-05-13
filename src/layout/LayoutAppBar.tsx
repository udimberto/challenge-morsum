import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '../components/Link/Link'

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
            justifyContent={['center','stretch']}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Typography
                noWrap
                component={Link}
                href="/"
                sx={{
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {process.env.NEXT_PUBLIC_APP_NAME}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
