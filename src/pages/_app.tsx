import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import AOS from 'aos'

import * as S from '@/styles/pages/_app.styles'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { Menu } from '@/components/Menu'
import { Footer } from '@/components/Footer'
import I18NProvider from '@/i18n/context/I18NProvider'

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <I18NProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          <meta
            name="description"
            content="Minha página pessoal onde postarei meu portifólio e atualizações sobre mim."
          />
          <title>Arthur Hauenstein</title>
          <link rel="shortcut icon" href="/img/icon.svg" />
          <link rel="apple-touch-icon" href="/img/icon.svg" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="/css/aos.css" />
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
