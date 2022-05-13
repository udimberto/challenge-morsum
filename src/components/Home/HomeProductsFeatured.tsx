import { useWindowValues } from '../../hooks'
import ProductsList from '../Product/ProductsList'
import { ProductsListItemProps } from '../Product/ProductsListItem'

export default function HomeProductsFeatured() {
  const { windowXS }      = useWindowValues()
  const productsListProps = {
    id     : 'products-list-featured',
    section: {
      bgcolor: 'whiteSmoke',
    },
    title  : {
      children  : 'featured',
      fontWeight: 'bold',
    },
    swiper: {
      slidesPerView: windowXS ? 1 : 2,
    },
    item: {
      title: {
        maxLines  : 1,
        fontWeight: 'bold',
        variant   : 'subtitle1',
      },
      description: {
        maxLines: 1,
      },
      price: {
        display: 'none',
      }
    } as ProductsListItemProps,
  }

  return (
    <ProductsList
      {...productsListProps}
    />
  )
}
