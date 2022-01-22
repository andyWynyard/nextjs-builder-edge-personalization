import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '@config/builder'
import '@assets/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Cookies from 'js-cookie'
import { ThemeProvider } from 'styled-components'

import {
  initUserAttributes,
  AsyncConfigurator,
} from '@builder.io/personalization-utils/dist/browser'
// only needed for context menu styling
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '@builder.io/widgets'

builder.init(builderConfig.apiKey)
initUserAttributes(Cookies.get())

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(`pageProps`, pageProps)
  const { theme } = pageProps
  return (
    <ThemeProvider theme={theme?.data || {}}>
      <Component {...pageProps} />
      <AsyncConfigurator />
    </ThemeProvider>
  )
}
