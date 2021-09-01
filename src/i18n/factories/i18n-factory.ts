import { useRouter } from 'next/router'

import { i18n } from '@/i18n/protocols'
import { I18N } from '@/i18n/i18n'
import messages from '@/i18n/config/messages'
import { Language } from '@/i18n/language'

export const makei18n = (): i18n => {
  const router = useRouter()
  const locale = router.locale as Language
  return new I18N(locale, messages)
}
