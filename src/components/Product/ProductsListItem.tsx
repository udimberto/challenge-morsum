import { useCallback, MouseEvent } from 'react'
import Box from '@mui/material/Box'
import Card, { CardProps } from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import type { Product } from '../../types'
import Link from '../Link/Link'
import Typography, { TypographyProps } from '../Typography/Typography'
import { currencyFormat } from '../../utils'

export type ProductsListItemProps = CardProps & {
  id       : string
  onClick ?: () => void
  pending ?: boolean
  product ?: Product
  windowXS?: boolean

  title      ?: TypographyProps
  description?: TypographyProps
  price      ?: TypographyProps
}

export default function ProductsListItem({
  id,
  onClick,
  pending,
  product,
  windowXS,
  title,
  description,
  price,
  ...rest
} : ProductsListItemProps) {
  const {
    id         : productId,
    title      : productTitle,
    description: productDescription,
    image      : productImage,
    price      : productPrice,
  } = product || {}

  /**
   * Handle Card Link click
   *
   * @param {MouseEvent} event
   */
  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
      if (!productId) {
        event.preventDefault()
      }

      if (!productId || !onClick) return

      onClick()
  }, [onClick, productId])

  return (
    <Card
      id={id}
      elevation={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      {...rest}
    >
      <CardActionArea
        LinkComponent={Link}
        href={`/${productId || ''}`}
        onClick={handleClick}
        sx={{
          display      : 'flex',
          flex         : 1,
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          image={productImage}
          height={windowXS ? 90 : 140}
          sx={(theme) => ({
            padding        : theme.spacing(windowXS ? 1 : 2),
            objectFit      : 'contain',
            minHeight      : windowXS ? 90 : 140,
            transition     : 'all ease-in-out 0.3s',
            backgroundColor: !productImage ? theme.palette.grey[100] : 'white',
          })}
        />
        <CardContent
          sx={(theme) => ({
            padding   : theme.spacing(windowXS ? 1 : 2),
            width     : '100%',
            transition: 'all ease-in-out 0.3s',
            opacity   : pending ? 0.05 : 1,
          })}
        >
          <Typography
            variant="subtitle2"
            component="h2"
            maxLines={windowXS ? 2 : 1}
            {...title}
          >
            {productTitle || 'loading...'}
          </Typography>
          {!windowXS && (
            <Typography
              variant="caption"
              color="text.secondary"
              maxLines={2}
              {...description}
            >
              {productDescription || '...'}
            </Typography>
          )}
          <Box>
            <Typography
              variant="subtitle1"
              pt={[0, 1]}
              {...price}
            >
              {currencyFormat(productPrice)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
