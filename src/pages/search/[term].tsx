import { useRouter } from 'next/router'
import {
  Box,
  Container,
} from '@mui/material'
import RecipesList from '../../components/Recipe/RecipesList'

export default function PageSearch() {
  /**
   * Navigation values
   */
  const { query } = useRouter()
  const { term }  = query

  return (
    <>
      <Container>
        <Box py={[2, 4]}>
          <RecipesList
            withTerm
            term={term}
          />
        </Box>
      </Container>
    </>
  )
}