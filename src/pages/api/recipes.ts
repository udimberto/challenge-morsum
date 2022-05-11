import type { NextApiRequest, NextApiResponse } from 'next'
import type { GenericObject, Recipes } from '../../types'

const recipes: Recipes = [
  {
    id: '1',
    title: 'Recipe Example 1',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Aenean aliquam molestie leo, vitae iaculis nisl.Mé faiz elementum girarzis, nisi eros vermeio.Sapien in monti palavris qui num significa nadis i pareci latim.',
    rating: 3.5,
    image: {
      alt: 'Recipe 1',
      src: 'https://via.placeholder.com/320x140.jpeg',
      width: 320,
      height: 140,
    },
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Recipes, pagination?: GenericObject }>
) {
  res.status(200).json({
    data: recipes,
    pagination: {
      page: 1,
      pageSize: 12,
      total: recipes.length
    }
  })
}
