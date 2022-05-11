import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardActionArea from '@mui/material/CardActionArea'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
import type { Recipe } from '../../types'
import Link from '../Link/Link'

export type RecipesListItemProps = {
  id      : string
  onClick?: () => void
  recipe ?: Recipe
}

export default function RecipesListItem({
  id,
  onClick,
  recipe,
} : RecipesListItemProps) {
  const {
    id         : recipeId,
    title      : recipeTile,
    description: recipeDescription,
    rating     : recipeRating,
    image      : recipeImage,
  } = recipe || {}

  return (
    <Card id={id}>
      <CardActionArea
        LinkComponent={Link}
        href={`/${recipeId}`}
        onClick={onClick}
      >
        <CardMedia
          component="img"
          {...recipeImage}
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            {recipeTile}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow         : 'hidden',
              display          : '-webkit-box',
              'WebkitBoxOrient': 'vertical',
              'WebkitLineClamp': 3,
            }}
          >
            {recipeDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        sx={(theme) => ({
          borderTop: `1px solid ${theme.palette.divider}`,
        })}
      >
        <Rating
          name="recipe-rating"
          readOnly
          value={recipeRating}
          precision={0.5}
        />
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
