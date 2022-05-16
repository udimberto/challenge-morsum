import { Global, css } from '@emotion/react'
import theme from './theme'

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      #__next {
        min-height     : 100%;
        display        : flex;
        flex           : 1 1 0%;
        flex-direction : column;
        scroll-behavior: smooth;
      }

      body {
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)
