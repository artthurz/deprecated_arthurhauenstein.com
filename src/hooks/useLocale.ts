import { useContext } from 'react'

import i18nContext from 'contexts/i18n'
import { Language } from 'i18n/language'

const useLocale = (): Language => {
  const { locale } = useContext(i18nContext)

  return locale!
}

export default useLocale
