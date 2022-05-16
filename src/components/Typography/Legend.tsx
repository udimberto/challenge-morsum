import { Typography, TypographyProps } from './Typography'

export function Legend(props: TypographyProps) {
  return (
    <Typography
      component="legend"
      variant="caption"
      fontSize="small"
      fontWeight="bold"
      textTransform="uppercase"
      color="GrayText"
      {...props}
    />
  )
}

export default Legend
