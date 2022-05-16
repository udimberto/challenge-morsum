import {
  MouseEvent,
  useCallback,
  useState,
} from 'react'
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Menu,
  MenuProps,
  MenuItem,
  MenuItemProps,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { MenuItem as MenuItemType } from '../types'
import Link, { LinkProps } from '../components/Link/Link'

export type LayoutAppBarMenuItemProps = {
  item     : MenuItemType
  button  ?: ButtonProps
  link    ?: LinkProps
  menu    ?: Omit<MenuProps, 'open'> & { open?: boolean }
  menuItem?: MenuItemProps & LinkProps
  wrapper ?: BoxProps
}

export default function LayoutAppBarMenuItem({
  item,
  button,
  link,
  menu,
  menuItem,
  wrapper,
} : LayoutAppBarMenuItemProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open                    = Boolean(anchorEl)

  /**
   * Helps to
   */
  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  /**
   * Close menu
   */
  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  /**
   * Layout values
   */
  const {
    id,
    href,
    options,
    children,
  } = item
  const menuTriggerId  = `app-bar-menu-${id}`
  const menuOptionsId  = `${menuTriggerId}-options`
  const menuHasOptions = !!options

  return (
    <Box
      id={`${menuTriggerId}-wrapper`}
      {...wrapper}
    >
      {!menuHasOptions ? (
        <>
          <Link
            id={menuTriggerId}
            href={String(href || '/')}
            color="secondary"
            {...link}
          >
            {children}
          </Link>
        </>
      ) : (
        <>
          <Button
            id={menuTriggerId}
            aria-controls={open ? menuOptionsId : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            {...button}
            sx={{
              textTransform: 'none',
              ...(button?.sx || {}),
            }}
          >
            {children}
            <KeyboardArrowDownIcon fontSize="small" />
          </Button>
          <Menu
            id={menuOptionsId}
            aria-labelledby={menuTriggerId}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            {...menu}
          >
            {options?.map((menuOption) => {
              const menuOptionsItemId = `${menuOptionsId}-${menuOption.id}`

              return (
                <MenuItem
                  key={menuOptionsItemId}
                  id={menuOptionsItemId}
                  onClick={handleClose}
                  component={Link}
                  href={String(menuOption.href || '/')}
                  {...menuItem}
                >
                  {menuOption.children}
                </MenuItem>
              )
            })}
          </Menu>
        </>
      )}
    </Box>
  )
}
