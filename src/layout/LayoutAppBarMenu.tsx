import { Box, BoxProps } from '@mui/material'
import { useMenu } from '../hooks'
import LayoutAppBarMenuItem, { LayoutAppBarMenuItemProps } from './LayoutAppBarMenuItem'

export type LayoutAppBarMenuProps = Omit<LayoutAppBarMenuItemProps, 'item'> & {
  wrapper?: BoxProps
}

export default function LayoutAppBarMenu({
  wrapper,
  ...rest
} : LayoutAppBarMenuProps) {
  const menu = useMenu()
  const elId = 'app-bar-menu'

  return (
    <Box
      id={elId}
      display="flex"
      flexDirection="row"
      gap={2}
      justifyContent="end"
      alignItems="stretch"
      {...wrapper}
      sx={{
        '> *, > * > a': {
          display: 'flex',
          flex: 1,
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '> *': {
          alignItems: 'stretch',
        },
        ...(wrapper?.sx || {}),
      }}
    >
      {menu.map((menuItem) => (
        <LayoutAppBarMenuItem
          key={`${elId}-${menuItem.id}`}
          item={menuItem}
          {...rest}
        />
      ))}
    </Box>
  )
}
