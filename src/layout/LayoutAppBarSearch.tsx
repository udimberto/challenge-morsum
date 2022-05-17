import { useCallback, FormEvent } from 'react'
import { useRouter } from 'next/router'
import { alpha } from '@mui/material/styles'
import { Box } from '@mui/material'
import FormControl from '../components/Form/FormControl'
import theme from '../styles/theme'

const elKind = 'search'
const elName = 'product'

export default function LayoutAppBarSearch() {
  /**
   * Navigation values
   */
  const { push: navigate } = useRouter()

  /**
   * Submit handler:
   * Navigate to search route
   */
  const handleSubmit = useCallback((formEvent: FormEvent<HTMLFormElement>) => {
    const { target } = formEvent || {}
    const term       = ((target as any)[elName] || {})?.value

    formEvent.preventDefault()

    if (!term) return

    navigate(`/search/${term}`)
  }, [navigate])

  return (
    <Box
      component="form"
      noValidate
      id={`${elKind}-form`}
      onSubmit={handleSubmit}
      display="flex"
      flex="1"
      flexDirection="column"
    >
      <FormControl
        placeholder="Search"
        inputProps={{
          'aria-label': elKind,
          id          : elKind,
          type        : elKind,
          name        : elName,
          sx          : {
            borderRadius   : theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.75),
            transition     : 'all ease-in-out 0.3s',
            '&:hover'      : {
              backgroundColor: alpha(theme.palette.common.white, 1),
            },
          }
        }}
      />
    </Box>
  )
}
