import { createContext } from 'react'

import { i18n } from 'i18n/protocols/i18n'
import { Language } from 'i18n/language'

type i18nProps = {
  i18n?: i18n
  locale?: Language
}

export default createContext<i18nProps>({})
