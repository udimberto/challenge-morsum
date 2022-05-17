import { AppProps } from 'next/app'
import NextHead from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import LayoutApp from '../layout'
import GlobalDataTriggers from '../components/GlobalDataTriggers/GlobalDataTriggers'
import SEO from '../components/SEO/SEO'
import AppStylesProvider, { createEmotionCache, theme } from '../styles'
import StoreProvider from '../store'

export const appBarColor = theme.palette.primary.main
export const clientSideEmotionCache = createEmotionCache()

export type NextJSCustomAppProps = AppProps & {
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
              <meta name="theme-color" content={appBarColor} />

              <meta key="charSet" charSet="utf-8" />
              <meta key="httpEquiv" httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta key="viewport" name="viewport" content="width=device-width,initial-scale=1.0,shrink-to-fit=no" />
              <meta key="appleMobile" name="apple-mobile-web-app-capable" content="yes" />
              <meta key="appleMobileBar" name="apple-mobile-web-app-status-bar-style" content={appBarColor} />
              <meta key="mobileBar" name="theme-color" content={appBarColor} />
              <meta key="msBar" name="msapplication-navbutton-color" content={appBarColor} />

              <link key="icon" rel="icon" href="/favicon.ico" />
              <link key="favicon" rel="icon" sizes="32x32" href="/icons/icon.png" type="image/png" />
              <link key="appleTouchIcon" rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
              <link key="androidTouchIcon" rel="android-touch-icon" href="/icons/apple-touch-icon.png" />
              <link key="maskIcon" rel="mask-icon" href="/icons/apple-mask-icon.svg" color={appBarColor} />
              <link key="manifest" rel="manifest" href="/manifest.json" />

              <meta key="ogType" property="og:type" content="website" />
              <meta key="ogSiteName" property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME} />
              <meta key="ogImageType" property="og:image:type" content="image/jpeg" />
              {
                /**
                 * The remaining SEO tags it's filled by "SEO" component,
                 * which is rendered in the next lines below.
                 */
              }
            </NextHead>
            <SEO />
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
