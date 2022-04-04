import React from 'react'

import { Github as GithubIcon } from '@styled-icons/feather/Github'
import { Mail as MailIcon } from '@styled-icons/feather/Mail'
import { Linkedin as LinkedinIcon } from '@styled-icons/feather/Linkedin'
import { Instagram as InstagramIcon } from '@styled-icons/feather/Instagram'
import { Whatsapp as WhatsAppIcon } from '@styled-icons/bootstrap/Whatsapp'

import * as S from './styles'
import * as Animations from 'styles/animations'
import { Heading } from 'components/Heading'
import ContactOption from 'components/ContactOption'
import ContactForm from 'components/ContactForm'
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
          <ContactForm />
          <S.ContactBox>
            <ContactOption
              icon={<MailIcon aria-label="Email Icon" />}
              previewLink="	hauenstein.contact@gmail.com"
              fullLink="mailto:hauenstein.contact@gmail.com"
              socialMedia="Email"
            />
            <ContactOption
              icon={<WhatsAppIcon aria-label="WhatsApp Icon" />}
              previewLink="+55 (051) 99989-1443"
              fullLink="https://api.whatsapp.com/send?phone=+5551999891443"
              socialMedia="WhatsApp"
            />
            <ContactOption
              icon={<LinkedinIcon aria-label="Linkedin Icon" />}
              previewLink="in/arthur-hauenstein-646558131"
              fullLink="https://linkedin.com/in/arthur-hauenstein-646558131"
              socialMedia="Linkedin"
            />
            <ContactOption
              icon={<GithubIcon aria-label="Github Icon" />}
              previewLink="artthurz"
              fullLink="https://github.com/artthurz"
              socialMedia="Github"
            />
            <ContactOption
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
