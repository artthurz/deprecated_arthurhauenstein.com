import React from 'react'
import { useRouter } from 'next/router'
import i18nContext from 'contexts/i18n'
import { makei18n } from 'i18n/factories/i18n-factory'
import { Language } from 'i18n/language'

type i18nProviderProps = {
  children: React.ReactNode
}

const i18nProvider = ({ children }: i18nProviderProps): JSX.Element => {
  const router = useRouter()
  const locale = router.locale as Language
  return (
    <i18nContext.Provider
      value={{
        i18n: makei18n(),
        locale
      }}
    >
      {children}
    </i18nContext.Provider>
  )
}

export default i18nProvider
