import type { NextPage } from 'next'
import Head from 'next/head'

import * as S from 'styles/pages/Projects.styles'
import LoadingEllipsis from 'components/LoadingEllipsis'
import useI18N from 'hooks/usei18n'

const Projects: NextPage = () => {
  const i18n = useI18N()
  return (
    <S.Wrapper>
      <Head>
        <title>{i18n.t('projects')} | Arthur Hauenstein</title>
      </Head>
      <LoadingEllipsis />
      <h1>{i18n.t('in_construction')} 👷‍♂️</h1>
    </S.Wrapper>
  )
}
export default Projects
