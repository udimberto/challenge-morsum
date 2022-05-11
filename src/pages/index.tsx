import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import RecipesList from '../components/Recipe/RecipesList'

export default function Home() {
  return (
    <Container>
      <Box py={[2, 4]}>
        <RecipesList />
      </Box>
    </Container>
  )
}
