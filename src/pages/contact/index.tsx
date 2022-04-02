import React from 'react'

import { Github as GithubIcon } from '@styled-icons/feather/Github'
import { Mail as MailIcon } from '@styled-icons/feather/Mail'
import { Linkedin as LinkedinIcon } from '@styled-icons/feather/Linkedin'
import { Instagram as InstagramIcon } from '@styled-icons/feather/Instagram'

import * as S from 'styles/pages/Contact.styles'
import * as Animations from 'styles/animations'
import { Heading } from 'components/Heading'
import { ContactCard } from 'components/ContactCard'
import useI18N from 'hooks/usei18n'

const Contact = () => {
  const i18n = useI18N()

  return (
    <S.Wrapper>
      <img src="/img/homePage/circle-blur.svg" alt="Circle blur" />
      <S.Container>
        <Heading data-aos="slide-right" {...Animations.baseAosAnimation}>
          {i18n.t('contact_me')}
        </Heading>
        <S.Subtitle data-aos="slide-right" {...Animations.baseAosAnimation}>
          {i18n.t('contact_me_description')}
        </S.Subtitle>
        <S.BoxWrapper data-aos="fade-up" {...Animations.baseAosAnimation}>
          <S.ContactBox>
            <ContactCard
              icon={<GithubIcon aria-label="Github Icon" />}
              previewLink="artthurz"
              fullLink="https://github.com/artthurz"
              socialMedia="Github"
            />
            <ContactCard
              icon={<MailIcon aria-label="Email Icon" />}
              previewLink="arthur.hauenstein@universo.univates.br"
              fullLink="mailto:arthur.hauenstein@universo.univates.br"
              socialMedia="Email"
            />
            <ContactCard
              icon={<LinkedinIcon aria-label="Linkedin Icon" />}
              previewLink="in/arthur-hauenstein-646558131"
              fullLink="https://linkedin.com/in/arthur-hauenstein-646558131"
              socialMedia="Linkedin"
            />
            <ContactCard
              icon={<InstagramIcon aria-label="Instagram Icon" />}
              previewLink="arthur.hauenstein"
              fullLink="https://www.instagram.com/arthur.hauenstein/"
              socialMedia="Instagram"
            />
          </S.ContactBox>
        </S.BoxWrapper>
      </S.Container>
      <img src="/img/homePage/circle-blur.svg" alt="Circle blur" />
    </S.Wrapper>
  )
}

export default Contact
