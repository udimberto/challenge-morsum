import { styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

const FormControl = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(0.5),
  },
}))

export default FormControl
