import React from 'react'

import i18nContext from '@/contexts/i18n'
import { makei18n } from '@/i18n/factories/i18n-factory'

type i18nProviderProps = {
  children: React.ReactNode
}

const i18nProvider = ({ children }: i18nProviderProps): JSX.Element => {
  return (
    <i18nContext.Provider
      value={{
        i18n: makei18n()
      }}
    >
      {children}
    </i18nContext.Provider>
  )
}

export default i18nProvider
