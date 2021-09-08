import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './Menu.styles'
import { Logo } from '@/components/Logo'
import { MediaMatch } from '@/components/MediaMatch'
import useI18N from '@/hooks/usei18n'
import { Select } from '@/components/Select'
import { Switch } from '@/components/Switch'
import { Language, LanguageResource } from '@/i18n/language'
import useTheme from '@/hooks/useTheme'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const i18n = useI18N()
  const { pathname, push, locale } = useRouter()
  const { handleToggleTheme, theme } = useTheme()

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

  return (
    <S.Wrapper>
      <Logo hideOnMobile />

      <MediaMatch className="flex" greaterThan="tablet">
        <S.MenuGroup>
          <Link href="/">
            <S.MenuLink isActive={pathname === '/'} data-testid="home-link">
              {i18n.t('home')}
            </S.MenuLink>
          </Link>
          <Link href="/projects">
            <S.MenuLink
              isActive={pathname === '/projects'}
              data-testid="projects-link"
            >
              {i18n.t('projects')}
            </S.MenuLink>
          </Link>
          <Link href="/contact">
            <S.MenuLink
              isActive={pathname === '/contact'}
              data-testid="contact-link"
            >
              {i18n.t('contact')}
            </S.MenuLink>
          </Link>
        </S.MenuGroup>
      </MediaMatch>

      <MediaMatch display="contents" greaterThan="tablet">
        <S.SwitchWrapper>
          <Switch
            checked={theme === 'dark'}
            onChange={() => handleToggleTheme()}
          />
        </S.SwitchWrapper>
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

      <S.MenuFull data-testid="menu-full" aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          aria-label={i18n.t('close_menu')}
          onClick={() => setIsOpen(false)}
        />
        <S.SelectWrapper>
          <Select
            ariaLabel={i18n.t('language')}
            initialValue={LanguageResource[locale as Language]}
            options={Object.values(LanguageResource)}
            onChange={onLanguageChange}
          />
        </S.SelectWrapper>
        <S.SwitchWrapper>
          <Switch
            checked={theme === 'dark'}
            onChange={() => handleToggleTheme()}
          />
        </S.SwitchWrapper>
        <S.MenuGroup>
          <Link href="/">
            <S.MenuLink
              isActive={pathname === '/'}
              data-testid="home-link-mobile"
              onClick={closeMenu}
            >
              {i18n.t('home')}
            </S.MenuLink>
          </Link>
          <Link href="/projects">
            <S.MenuLink
              isActive={pathname === '/projects'}
              data-testid="projects-link-mobile"
              onClick={closeMenu}
            >
              {i18n.t('projects')}
            </S.MenuLink>
          </Link>
          <Link href="/contact">
            <S.MenuLink
              isActive={pathname === '/contact'}
              data-testid="contact-link-mobile"
              onClick={closeMenu}
            >
              {i18n.t('contact')}
            </S.MenuLink>
          </Link>
        </S.MenuGroup>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
