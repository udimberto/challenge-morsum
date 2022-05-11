import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '../components/Link/Link'

export default function LayoutAppFooter() {
  return (
    <Box
      id="layout-footer"
      component="footer"
      paddingY={[2, 4]}
      sx={(theme) => ({
        display      : 'flex',
        flexDirection: 'column',
        borderTop    : `1px solid ${theme.palette.divider}`,
      })}
    >
      <Container>
        <Box>
          <Typography>
            {'Coded by '}
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/udimberto"
            >
              @udimberto
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
