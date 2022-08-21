import LayoutRenderer from 'layouts/LayoutRenderer'
import { AppProps } from 'next/app'
import Head from 'next/head'
// import '@tamagui/core/reset.css'
// import '@tamagui/font-inter/css/400.css'
// import '@tamagui/font-inter/css/700.css'
// import 'raf/polyfill'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  if (Component.LAYOUT === 'NEW') {
    import('@tamagui/core/reset.css')
    import('@tamagui/font-inter/css/400.css')
    import('@tamagui/font-inter/css/700.css')
    import('raf/polyfill')
  }
  if (Component.LAYOUT === 'OLD') {
    import('bootstrap/dist/css/bootstrap.min.css')
  }
  return (
    <Fragment>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* @ts-ignore */}
      <LayoutRenderer layout={Component.LAYOUT}>
        <Component {...pageProps} />
      </LayoutRenderer>
    </Fragment>
  )
}

export default MyApp
