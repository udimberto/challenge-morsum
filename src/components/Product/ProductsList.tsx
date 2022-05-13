import { useEffect } from 'react'
import { useProducts, useWindowValues } from '../../hooks'
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper';
import {
  Box,
  BoxProps,
  CircularProgress,
  Container,
  ContainerProps,
  Skeleton,
} from '@mui/material'
import Title, { TitleProps } from '../Title/Title'
import ProductsListItem, { ProductsListItemProps } from './ProductsListItem'
import { GenericRequestParams, Product } from '../../types'
import dayjs from 'dayjs';

export type ProductsListProps = {
  id                 ?: string
  filters            ?: GenericRequestParams
  filtersAreRequired ?: boolean
  item               ?: ProductsListItemProps
  limit              ?: number
  container          ?: ContainerProps
  section            ?: BoxProps
  title              ?: TitleProps
  swiper             ?: SwiperProps
  swiperSlide        ?: SwiperSlideProps
}

export default function ProductsList({
  id: elId = 'products-list',
  filtersAreRequired,
  filters,
  limit = 8,
  container,
  item,
  section,
  swiper,
  swiperSlide,
  title,
} : ProductsListProps) {
  const { categorySlug } = filters || {}

  /**
   * Data values
   */
  const hook = useProducts(categorySlug)
  const {
    get,
    error,
    loadedAt,
    pending,
    onSelectOne,
    data: products,
  } = hook
  const isCacheStillValid = !!(
    loadedAt &&
    (dayjs().diff(dayjs(loadedAt), 'seconds') < 15)
  )
  const list = products || Array.from({ length: limit })

  /**
   * Data-fetch trigger
   */
  useEffect(() => {
    if (
      (filtersAreRequired && !filters)
      || isCacheStillValid
      || pending
    ) return

    get({
      limit,
      ...(filters || {}),
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    get,
    filters,
    filtersAreRequired,
    isCacheStillValid,
    limit,
  ])

  /**
   * Layout values
   */
  const { windowXS }  = useWindowValues()
  const slidesPerView = windowXS ? 2 : 4
  const navigation    = !windowXS
  const sliderEnabled = !!products
  const { children: titleChildren } = title || {}

  return (
    <Box
      id={`${elId}-section`}
      component="section"
      py={[2, 4]}
      {...section}
    >
      <Container
        id={`${elId}-section-container`}
        {...container}
      >
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
        >
          <Box
            display="flex"
            flex="1"
          >
            <Title
              id={`${elId}-title`}
              pt={1}
              pb={0}
              mb={[-1, 0]}
              {...title}
            >
              {titleChildren || 'Products'}
            </Title>
          </Box>
          <Box
            display="flex"
            alignItems="center"
          >
            <CircularProgress
              color="inherit"
              size={20}
              disableShrink={!pending}
              sx={{
                opacity: pending ? 1 : 0,
                transition: 'all ease-in-out 0.3s',
              }}
            />
          </Box>
        </Box>
        <Box
          marginX={[-2, -3]}
          paddingX={[2, 3]}
        >
          <Swiper
            id={elId}
            spaceBetween={18}
            slidesPerView={slidesPerView}
            modules={[ A11y, Navigation, Pagination ]}
            enabled={sliderEnabled}
            navigation={navigation}
            pagination
            {...swiper}
          >
            {list?.map((product: Product | undefined, productIndex: number) => {
              const subElId = `${elId}-item-${product?.id || productIndex}`

              return (
                <SwiperSlide
                  key={subElId}
                  {...swiperSlide}
                >
                  <ProductsListItem
                    id={subElId}
                    onClick={() => product && onSelectOne(product)}
                    pending={pending && !products}
                    product={product}
                    windowXS={windowXS}
                    {...item}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}
