import type { NextPage } from 'next'
import Head from 'next/head'
import * as S from '@/styles/pages/Home.styles'
import LoadingEllipsis from '@/components/LoadingEllipsis'
import useI18N from '@/hooks/usei18n'

const Contact: NextPage = () => {
  const i18n = useI18N()
  console.log(i18n.t('presentation'))
  return (
    <S.Container>
      <Head>
        <title>Arthur Hauenstein</title>
      </Head>
      <LoadingEllipsis />
      <h1>{i18n.t('presentation')} 👷‍♂️</h1>
    </S.Container>
  )
}
export default Contact
