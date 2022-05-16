import { ChildrenProp } from './ComponentTypes'
import { LinkProps } from '../components/Link/Link'

export type MenuDropdownItem = ChildrenProp & {
  id   : string
  href?: LinkProps['href']
}

export type MenuItem = MenuDropdownItem & {
  disabled?: boolean
  hidden  ?: boolean
  options ?: MenuDropdownItem[]
}

export type Menu = MenuItem[]
