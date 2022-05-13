import { Typography, TypographyProps } from '../Typography/Typography'
import { ComponentProp } from '../../types'

export type SubtitleProps = ComponentProp & Omit<TypographyProps, 'component'> & {}

export function Subtitle(props : SubtitleProps) {
  return (
    <Typography
      component="h2"
      variant="subtitle1"
      pt={4}
      pb={2}
      {...props}
    />
  )
}

export default Subtitle
