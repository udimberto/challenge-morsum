import { useEffect } from 'react'
import { useRecipes } from '../../hooks'
import { ChildrenProp } from '../../types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RecipesListItem from './RecipesListItem'

export type RecipesListProps = ChildrenProp & {
  term    ?: string | string[]
  withTerm?: boolean
}

export default function RecipesList({
  id: elId = 'recipes-list',
  term,
  withTerm,
} : RecipesListProps) {
  /**
   * Data values
   */
  const hook                  = useRecipes()
  const { data, get, select } = hook
  const { data: recipes }     = data || {}

  /**
   * Data-fetch trigger
   */
  useEffect(() => {
    if (withTerm && !term) return

    get(withTerm ? { term } : undefined)
  }, [get, term, withTerm])

  return (
    <>
      <Typography
        id={`${elId}-title`}
        component="h1"
        variant="h4"
        pb={[2, 4]}
      >
        {withTerm ? (
          <>
            {'Results '}
            {!term ? '' : (
              <>
                {`for "${term}"`}
              </>
            )}
          </>
        ) : (
          <>
            {'Suggestions'}
          </>
        )}
      </Typography>
      <Box
        id={elId}
        display="grid"
        gridTemplateColumns={['repeat(1, minmax(0, 1fr))', 'repeat(2, minmax(0, 1fr))', 'repeat(3, minmax(0, 1fr))']}
      >
        {recipes?.map((recipe: any) => {
          const subElId = `${elId}-item-${recipe?.id}`

          return (
            <RecipesListItem
              key={subElId}
              id={subElId}
              recipe={recipe}
              onClick={() => select(recipe)}
            />
          )
        })}
      </Box>
    </>
  )
}
