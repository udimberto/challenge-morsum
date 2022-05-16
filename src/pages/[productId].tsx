import { useRouter } from 'next/router'
import { useProduct } from '../hooks'
import {
  Box,
  Container,
  Rating,
  Typography,
} from '@mui/material'
import Title from '../components/Title/Title'

const elId = 'product-details'

export default function PageProduct() {
  /**
   * Navigation values
   */
  const { query }     = useRouter()
  const { productId } = query

  /**
   * Data values
   */
  const {
    error,
    pending,
    data: product,
  } = useProduct(productId)
  const {
    title      : productTitle,
    description: productDescription,
    rating     : productRating,
    image      : productImage,
  } = product || {}
  const {
    count: productRatingCount,
    rate : productRatingRate,
  } = productRating || {}

  return (
    <>
      <Container>
        <Box
          paddingBottom={[2, 4]}
        >
          <Title
            id={`${elId}-title`}
            fontWeight="bold"
            pt={[3, 5]}
          >
            {productTitle || `Product ${productId}...`}
          </Title>
          {productDescription}
        </Box>
        <Box>
          <Box>
            <Typography
              component="legend"
              variant="caption"
            >
              {productRatingCount} evaluations
            </Typography>
            <Rating
              name="product-rating"
              readOnly
              value={productRatingRate}
              precision={0.5}
            />
          </Box>
        </Box>
      </Container>
    </>
  )
}