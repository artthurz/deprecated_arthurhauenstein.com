import React from 'react'
import { Mail as MailIcon } from '@styled-icons/feather/Mail'
import { Linkedin as LinkedinIcon } from '@styled-icons/feather/Linkedin'
import { Github as GithubIcon } from '@styled-icons/feather/Github'

import { Logo } from 'components/Logo'
import * as S from './Footer.styles'

const Footer = () => (
  <S.Wrapper>
    <Logo hideOnMobile />
    <S.IconGroup>
      <S.IconWrapper
        as="a"
        href="mailto:arthur.hauenstein@universo.univates.br"
        target="__blank"
        aria-label="Email"
      >
        <MailIcon />
      </S.IconWrapper>

      <S.IconWrapper
        as="a"
        href="https://www.linkedin.com/in/arthur-hauenstein-646558131/"
        target="__blank"
        aria-label="Linkedin"
      >
        <LinkedinIcon />
      </S.IconWrapper>

      <S.IconWrapper
        as="a"
        href="https://github.com/artthurz"
        target="__blank"
        aria-label="Github"
      >
        <GithubIcon />
      </S.IconWrapper>
    </S.IconGroup>
  </S.Wrapper>
)

export default Footer
