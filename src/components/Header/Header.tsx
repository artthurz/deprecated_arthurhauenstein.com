import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './Header.styles'
import { Logo } from 'components/Logo'
import { MediaMatch } from 'components/MediaMatch'
import useI18N from 'hooks/usei18n'
import { Select } from 'components/Select'
import { Language, LanguageResource } from 'i18n/language'
import { NavItem } from 'components/NavItem'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const i18n = useI18N()
  const { pathname, push, locale } = useRouter()

  const closeMenu = () => {
    setIsOpen(false)
  }

  const onLanguageChange = (lan: string) => {
    let language: Language
    switch (lan) {
      case LanguageResource.en:
        language = Language.en
        break
      case LanguageResource.es:
        language = Language.es
        break
      default:
        language = Language.pt
    }
    push(pathname, pathname, { locale: language })
  }

  const Navbar = () => (
    <S.NavGroup>
      <NavItem
        href="/"
        title={i18n.t('home')}
        menuMobileIsOpen={isOpen}
        key="home-link"
      />
      <NavItem
        href="/projects"
        title={i18n.t('projects')}
        menuMobileIsOpen={isOpen}
        key="projects-link"
      />
      <NavItem
        href="/contact"
        title={i18n.t('contact')}
        menuMobileIsOpen={isOpen}
        key="contact-link"
      />
    </S.NavGroup>
  )

  return (
    <S.Wrapper>
      <Logo hideOnMobile />
      <MediaMatch className="flex" greaterThan="tablet">
        <Navbar />
      </MediaMatch>

      <MediaMatch display="contents" greaterThan="tablet">
        <Select
          ariaLabel={i18n.t('language')}
          initialValue={LanguageResource[locale as Language]}
          options={Object.values(LanguageResource)}
          onChange={onLanguageChange}
        />
      </MediaMatch>

      <MediaMatch lessThan="tablet">
        <S.IconWrapper>
          <MenuIcon
            aria-label={i18n.t('open_menu')}
            onClick={() => setIsOpen(true)}
          />
        </S.IconWrapper>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          aria-label={i18n.t('close_menu')}
          onClick={() => closeMenu()}
        />
        <S.SelectWrapper>
          <Select
            ariaLabel={i18n.t('language')}
            initialValue={LanguageResource[locale as Language]}
            options={Object.values(LanguageResource)}
            onChange={onLanguageChange}
          />
        </S.SelectWrapper>

        <Navbar />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
