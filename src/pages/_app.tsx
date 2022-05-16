import { AppProps } from 'next/app'
import NextHead from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import LayoutApp from '../layout'
import GlobalDataTriggers from '../components/GlobalDataTriggers/GlobalDataTriggers'
import SearchEngineOptimization from '../components/SearchEngineOptimization/SearchEngineOptimization'
import AppStylesProvider, { createEmotionCache, theme } from '../styles'
import StoreProvider from '../store'

export const clientSideEmotionCache = createEmotionCache()

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
      <StoreProvider>
        <AppStylesProvider>
          <CacheProvider value={emotionCache}>
            <NextHead>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
              <meta name="theme-color" content={theme.palette.primary.main} />
              <link rel="icon" href="/favicon.ico" />
            </NextHead>
            <SearchEngineOptimization />
            <GlobalDataTriggers />
            <LayoutApp>
              <Component {...pageProps} />
            </LayoutApp>
          </CacheProvider>
        </AppStylesProvider>
      </StoreProvider>
    </>
  )
}
