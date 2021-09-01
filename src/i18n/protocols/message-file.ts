import { Language } from '@/i18n/language'

export type MessageFile = {
  [key in Language]: {
    [key: string]: string
  }
}
