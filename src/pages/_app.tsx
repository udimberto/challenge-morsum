import { AppProps } from 'next/app'
import NextHead from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import LayoutApp from '../layout'
import { GlobalStyles } from '../styles/GlobalStyles'
import theme from '../styles/theme'
import createEmotionCache from '../styles/createEmotionCache'
import StoreProvider from '../store'

const clientSideEmotionCache = createEmotionCache()

interface NextJSCustomAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function NextJSCustomApp(props: NextJSCustomAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = props

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <NextHead>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta name="theme-color" content={theme.palette.primary.main} />
            <link rel="icon" href="/favicon.ico" />
            <title>
              Morsum Recipes
            </title>
          </NextHead>
          <CssBaseline />
          <GlobalStyles />
          <StoreProvider>
            <LayoutApp>
              <Component {...pageProps} />
            </LayoutApp>
          </StoreProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
