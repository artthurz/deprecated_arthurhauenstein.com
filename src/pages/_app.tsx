import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import AOS from 'aos'

import { ThemeProvider } from '@/contexts/theme'
import * as S from '@/styles/pages/_app.styles'
import GlobalStyles from '../styles/global'
import { Menu } from '@/components/Menu'
import { Footer } from '@/components/Footer'
import I18NProvider from '@/i18n/context/I18NProvider'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <I18NProvider>
      <ThemeProvider>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <meta
            name="description"
            content="I`m a Fullstack Enginner and this is my personal page, where I will update my portfolio and bring news about myself."
          />
          <title>Arthur Hauenstein</title>
          <link rel="shortcut icon" href="/img/icon.svg" />
          <link rel="apple-touch-icon" href="/img/icon.svg" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="/css/aos.css" />
          <link rel="stylesheet" href="/css/switch.css" />
          <link
            rel="alternate"
            hrefLang="pt"
            href="https://arthurhauenstein.com/pt"
          />
          <link
            rel="alternate"
            hrefLang="es"
            href="https://arthurhauenstein.com/es"
          />
        </Head>
        <GlobalStyles />
        <S.Wrapper>
          <Menu />
          <S.Container>
            <S.Main>
              <Component {...pageProps} />
            </S.Main>
          </S.Container>
          <Footer />
        </S.Wrapper>
      </ThemeProvider>
    </I18NProvider>
  )
}
export default App
