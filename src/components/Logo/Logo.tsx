import { Icon, Typography } from '@mui/material'
import Link from '../Link/Link'

export default function Logo() {
  return (
    <Typography
      noWrap
      component={Link}
      href="/"
      display="flex"
      flexDirection="row"
      paddingY={[1]}
      paddingX={[2]}
      marginX={[-2]}
      gap={[1]}
      fontWeight={700}
      color="secondary"
      sx={{
        textDecoration: 'none',
      }}
    >
      <Icon fontSize="large">
        handshake
      </Icon>
      {process.env.NEXT_PUBLIC_APP_NAME}
    </Typography>
  )
}
