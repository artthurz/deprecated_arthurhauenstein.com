import type { NextPage } from 'next'
import Head from 'next/head'

import * as S from '@/styles/pages/NotFound.styles'
import { Space } from '@/components/Space'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import useI18N from '@/hooks/usei18n'

const NotFound: NextPage = () => {
  const router = useRouter()
  const i18n = useI18N()

  const redirectToHome = () => {
    router.push('/')
  }

  return (
    <S.Wrapper>
      <Head>
        <title>404 | Arthur Hauenstein</title>
      </Head>
      <Space stars={30}>
        <S.Title>404!</S.Title>
        <S.Subtitle>{i18n.t('not_found_message')}</S.Subtitle>
        <Button size="large" onClick={redirectToHome}>
          {i18n.t('go_back_home')}
        </Button>
      </Space>
    </S.Wrapper>
  )
}

export default NotFound
