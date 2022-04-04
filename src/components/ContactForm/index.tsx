import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

import * as S from './styles'
import useI18N from 'hooks/usei18n'
import LoadingEllipsis from 'components/LoadingEllipsis'
import Toast from 'components/Toast'

const SERVICE_ID = 'service_9ah5m4v'
const TEMPLATE_ID = 'template_60wzmbp'
const USER_ID = 'vCl0A_YnsbF2T3q9B'

const ContactForm = () => {
  const i18n = useI18N()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const form = useRef<HTMLFormElement | null>(null)

  const handleSendEmail = (e: any) => {
    if (form.current) {
      e.preventDefault()
      setIsLoading(true)

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
        () => {
          Toast.fire({ icon: 'success', title: i18n.t('send_email_success') })
          e.target.reset()
          setIsLoading(false)
        },
        error => {
          Toast.fire({
            icon: 'error',
            title: i18n.t('send_email_error')
          })
          console.error(error)
          setIsLoading(false)
        }
      )
    }
  }

  return (
    <S.Wrapper ref={form} onSubmit={handleSendEmail}>
      {isLoading && (
        <S.LoadingOverlay>
          <LoadingEllipsis />
        </S.LoadingOverlay>
      )}
      <input
        type="text"
        name="name"
        placeholder={i18n.t('name_input')}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={i18n.t('email_input')}
        required
      />
      <textarea
        name="message"
        rows={7}
        placeholder={i18n.t('message_input')}
        required
      />
      <button type="submit">{i18n.t('send_message')}</button>
    </S.Wrapper>
  )
}

export default ContactForm
