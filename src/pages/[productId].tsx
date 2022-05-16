import { useRouter } from 'next/router'
import { useProduct, useWindowValues } from '../hooks'
import { currencyFormat } from '../utils'
import { Product } from '../types'
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from '@mui/material'
import Link from '../components/Link/Link'
import Legend from '../components/Typography/Legend'
import Title from '../components/Typography/Title'
import SEO from '../components/SEO/SEO'
import { GetServerSideProps, NextPage } from 'next'
import { serviceProducts } from '../services'

export const elId = 'product-details'

export type PageProductProps = {
  productDataFromSS?: Product
}

const PageProduct: NextPage<PageProductProps> = ({ productDataFromSS }) => {
  /**
   * Navigation values
   */
  const { query }     = useRouter()
  const { productId } = query

  /**
   * Layout values
   */
  const { windowXS } = useWindowValues()
  const imageHeight  = windowXS ? 220 : 480

  /**
   * Data values
   */
  const {
    error,
    pending,
    data: product,
  } = useProduct((productDataFromSS ? undefined : productId), productDataFromSS)
  const {
    title      : productTitle,
    description: productDescription,
    image      : productImage,
    price      : productPrice,
    rating     : productRating,
    category   : productCategory,
  } = productDataFromSS || product || {}
  const {
    count: productRatingCount,
    rate : productRatingRate,
  } = productRating || {}

  return (
    <>
      <SEO
        title={productTitle}
        description={productDescription}
        image={productImage}
      />
      <Box
        id={`${elId}-wrapper`}
        paddingBottom={[2, 4]}
      >
        <Container
          id={`${elId}-wrapper-container`}
        >
          <Box
            component="header"
            paddingBottom={[1, 2]}
            id={`${elId}-header`}
          >
            <Title
              id={`${elId}-title`}
              fontWeight="bold"
              pt={[3, 5]}
              pb={0}
            >
              {productTitle || `Loading ${productId}...`}
            </Title>
          </Box>
          <Grid
            container
            spacing={[2, 4]}
            id={`${elId}-main-grid`}
          >
            <Grid
              item
              xs={12}
              sm={8}
              id={`${elId}-main-grid-col-one`}
            >
              <Card
                id={`${elId}-main-card`}
                elevation={2}
              >
                <CardMedia
                  id={`${elId}-image`}
                  component="img"
                  image={productImage}
                  height={imageHeight}
                  sx={(theme) => ({
                    padding        : theme.spacing(windowXS ? 2 : 4),
                    objectFit      : 'contain',
                    minHeight      : imageHeight,
                    maxWidth       : '100%',
                    transition     : 'all ease-in-out 0.3s',
                    backgroundColor: pending ? theme.palette.grey[100] : 'white',
                  })}
                />
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id={`${elId}-main-grid-col-two`}
            >
              <Box
                display="flex"
                flexDirection="column"
                gap={[2, 4]}
                pt={[0, 4]}
              >
                <Box
                  id={`${elId}-price-wrapper`}
                >
                  <Legend
                    id={`${elId}-price-legend`}
                  >
                    Price
                  </Legend>
                  <Title
                    id={`${elId}-price`}
                    component="h2"
                    variant={['h5', 'h4']}
                    fontWeight="bold"
                    padding={0}
                  >
                    {currencyFormat(productPrice)}
                  </Title>
                </Box>
                <Box>
                  <Legend
                    id={`${elId}-rating-legend`}
                  >
                    Rating
                  </Legend>
                  <Typography
                    id={`${elId}-rating-count`}
                    component="legend"
                    variant="caption"
                  >
                    {(productRatingCount || 0)} evaluations
                  </Typography>
                  <Rating
                    id={`${elId}-rating-stars`}
                    name="product-rating"
                    readOnly
                    value={(productRatingRate || 0)}
                    precision={0.5}
                  />
                </Box>
                {productCategory && (
                  <Box
                    id={`${elId}-category-wrapper`}
                  >
                    <Legend
                      id={`${elId}-category-legend`}
                      gutterBottom
                    >
                      Category
                    </Legend>
                    <Button
                      component={Link}
                      href={`/category/${productCategory || ''}`}
                      color="secondary"
                      size="small"
                    >
                      {productCategory}
                    </Button>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
          <Box
            paddingTop={[3, 4]}
          >
            <Legend
              id={`${elId}-description-legend`}
              gutterBottom
            >
              Description
            </Legend>
            <Typography
              id={`${elId}-description`}
            >
              {productDescription}
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}

/**
 * This strategy will retrieve product data on the server side,
 * when the request is made from a robot
 *
 * @returns {Object}
 */
export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const { productId }                 = query
  const userAgent                     = req ? req.headers['user-agent'] : ''
  const isSearchEngineRobotRequesting = /bot/i.test(String(userAgent || ''))

  if (!isSearchEngineRobotRequesting) {
    return {
      props: {}
    }
  }

  const { data: productDataFromSS } = await serviceProducts.details({
    productId: Number(productId),
  })

  if (!productDataFromSS) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      productDataFromSS,
    }
  }
}

export default PageProduct
