import React, { useState } from 'react'
import { Copy as CopyIcon } from '@styled-icons/feather/Copy'
import { ExternalLink as ExternalLinkIcon } from '@styled-icons/feather/ExternalLink'

import * as S from './styles'
import useI18N from 'hooks/usei18n'

export type ContactOptionProps = {
  socialMedia: string
  icon: React.ReactNode
  previewLink: string
  fullLink: string
}

const ContactOption = ({
  socialMedia,
  icon,
  previewLink,
  fullLink
}: ContactOptionProps) => {
  const [timeoutID, setTimeoutID] = useState<number>()
  const [isCopyClicked, setCopyClicked] = useState(false)
  const i18n = useI18N()

  const copyToClipboard = async () => {
    if (timeoutID) {
      clearTimeout(timeoutID)
      setCopyClicked(false)
    }
    try {
      await navigator.clipboard.writeText(fullLink)
      setCopyClicked(true)
      setTimeout(e => {
        setTimeoutID(e)
        setCopyClicked(false)
      }, 1300)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.IconWrapper mainIcon>{icon}</S.IconWrapper>
        <S.OptionTitle>{socialMedia}</S.OptionTitle>
        <S.PreviewLink>{previewLink}</S.PreviewLink>
        <S.ActionWrapper>
          <S.IconWrapper
            className="pointer"
            onClick={copyToClipboard}
            isClicked={isCopyClicked}
            textOnClick={i18n.t('copy_to_clipboard')}
          >
            <CopyIcon
              aria-label={i18n.t('copy_url', [socialMedia])}
              title={i18n.t('copy_url', [socialMedia])}
            />
          </S.IconWrapper>
          <S.IconWrapper as="a" href={fullLink} target="__blank">
            <ExternalLinkIcon
              aria-label={i18n.t('open_url', [socialMedia])}
              title={i18n.t('open_url', [socialMedia])}
            />
          </S.IconWrapper>
        </S.ActionWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ContactOption
