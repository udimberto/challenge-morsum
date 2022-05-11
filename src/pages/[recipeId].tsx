import { useRouter } from 'next/router'
import { useRecipe } from '../hooks'
import {
  Box,
  Container,
  Typography,
} from '@mui/material'

const elId = 'recipe-details'

export default function PageRecipe() {
  /**
   * Navigation values
   */
  const { query }    = useRouter()
  const { recipeId } = query

  /**
   * Data values
   */
  const { data, error, pending } = useRecipe(recipeId)
  const { title, description }   = data || {}

  return (
    <>
      <Container>
        <Box
          paddingY={[2, 4]}
        >
          <Typography
            id={`${elId}-title`}
            component="h1"
            variant="h4"
            pb={[2, 4]}
          >
            {title || `Recipe ${recipeId}...`}
          </Typography>
          {description}
        </Box>
      </Container>
    </>
  )
}