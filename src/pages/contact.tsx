import type { NextPage } from 'next'
import Head from 'next/head'

import * as S from '@/styles/pages/Contact.styles'
import LoadingEllipsis from '@/components/LoadingEllipsis'
import useI18N from '@/hooks/usei18n'

const Contact: NextPage = () => {
  const i18n = useI18N()
  return (
    <S.Wrapper>
      <Head>
        <title>{i18n.t('contact')} | Arthur Hauenstein</title>
      </Head>
      <LoadingEllipsis />
      <h1>{i18n.t('in_construction')} 👷‍♂️</h1>
    </S.Wrapper>
  )
}
export default Contact
