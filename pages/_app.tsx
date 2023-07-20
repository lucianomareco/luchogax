import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { themeConfig } from '../styles/themeConfig'
import { SSRProvider } from '@react-aria/ssr'

const theme = createTheme(themeConfig)

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luchogax</title>
      </Head>
      <SSRProvider>
        <NextUIProvider theme={theme}>
          <Component {...pageProps} />
        </NextUIProvider>
      </SSRProvider>
    </>
  )
}
