import type { NextPage } from 'next'
import Head from 'next/head'

import * as S from 'pages/404/styles'
import { Button } from 'components/Button'
import { useRouter } from 'next/router'
import useI18N from 'hooks/usei18n'

const NotFound: NextPage = () => {
  const router = useRouter()
  const i18n = useI18N()

  const redirectToHome = () => {
    router.push('/')
  }

  return (
    <S.Wrapper>
      <img src="/img/homePage/circle-blur.svg" alt="Circle blur" />
      <Head>
        <title>404 | Arthur Hauenstein</title>
      </Head>
      <S.Title>404!</S.Title>
      <S.Subtitle>{i18n.t('not_found_message')}</S.Subtitle>
      <Button size="large" onClick={redirectToHome}>
        {i18n.t('go_back_home')}
      </Button>
      <img src="/img/homePage/circle-blur.svg" alt="Circle blur" />
    </S.Wrapper>
  )
}

export default NotFound
