import { Typography, TypographyProps } from './Typography'
import { ComponentProp } from '../../types'

export type TitleProps = ComponentProp & Omit<TypographyProps, 'component'> & {}

export function Title(props : TitleProps) {
  return (
    <Typography
      component="h1"
      variant={['h6', 'h4']}
      pt={4}
      pb={2}
      {...props}
    />
  )
}

export default Title
