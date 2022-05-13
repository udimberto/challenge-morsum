import TypographyBase, { TypographyProps as TypographyBaseProps } from '@mui/material/Typography'
import { ComponentProp } from '../../types'
import { useWindowValues } from '../../hooks'

export type TypographyProps =
  ComponentProp &
  Omit<TypographyBaseProps, 'component' | 'variant'> &
  {
    maxLines?: number
    variant ?: TypographyBaseProps['variant'] | TypographyBaseProps['variant'][]
  }

export function Typography({
  maxLines,
  variant,
  sx,
  ...rest
} : TypographyProps) {
  const { windowXS } = useWindowValues()

  const variantString     = typeof variant === 'string'
  const variantDefault    = 'body1'
  const variantResponsive = !variant ? variantDefault : (
    variantString ? variant : (
      variant[windowXS ? 0 : 1]
    )
  )

  return (
    <>
      <TypographyBase
        variant={variantResponsive}
        sx={{
          ...(!maxLines ? {} : {
              overflow         : 'hidden',
              display          : '-webkit-box',
              'WebkitBoxOrient': 'vertical',
              'WebkitLineClamp': maxLines,
          }),
          ...(sx || {}),
        }}
        {...rest}
      />
    </>
  )
}

export default Typography
