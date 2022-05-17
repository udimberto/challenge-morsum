import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '../components/Link/Link'
import Grid from '@mui/material/Grid'

export default function LayoutAppFooter() {
  return (
    <Box
      id="layout-footer"
      component="footer"
      pt={[2, 4]}
      pb={[9, 4]}
      sx={{
        display      : 'flex',
        flexDirection: 'column',
        bgcolor      : 'grey.100',
      }}
    >
      <Container>
        <Grid
          container
          spacing={[1, 2]}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Typography
              fontSize={['small', 'medium']}
              textAlign={['center', 'left']}
            >
              {'Coded by '}
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/udimberto"
              >
                @udimberto
              </Link>
              .
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Typography
              fontSize={['small', 'medium']}
              textAlign={['center', 'right']}
            >
              {'Assessment challenged by '}
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://morsum.co"
              >
                @morsum
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
