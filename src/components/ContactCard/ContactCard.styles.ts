import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styles/media'
import { transparentize } from 'polished'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient03};
    height: 9rem;
    max-width: 40rem;
    width: 100%;
    padding: 1px;
    position: relative;

    ${media.lessThan('mobile')`
      height: 6rem;
    `}

    @media (max-width: 280px) {
      width: 15rem;
    }
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;
    background: ${theme.colors.black};
    padding: 0 ${theme.spacings.xsmall};
  `}
`

const iconModifiers = {
  isClicked: (theme: DefaultTheme, textOnClick: string) => css`
    &::before {
      content: '${textOnClick}';
      color: ${theme.colors.white};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: max-content;
      left: 2.4rem;
      animation-name: Disappear;
      animation-duration: 1300ms;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      animation-play-state: running;
    }

    ${media.lessThan('mobile')`
      font-size: ${theme.font.sizes.xsmall};
    `}

    ${media.lessThan('mobilesmall')`
      font-size: ${theme.font.sizes.xxsmall};
    `}

    @keyframes Disappear {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }
  `
}

type IconWrapperProps = {
  textOnClick?: string
  isClicked?: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ theme, textOnClick, isClicked }) => css`
    width: ${theme.font.sizes.xxlarge};
    height: ${theme.font.sizes.xxlarge};
    margin-right: ${theme.spacings.xsmall};
    color: ${theme.colors.primary};

    &.pointer {
      cursor: pointer;
    }

    ${isClicked && iconModifiers.isClicked(theme, textOnClick!)};

    ${media.lessThan('mobile')`
      width: ${theme.font.sizes.xlarge};
      height: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;

    &[aria-hidden='false'] {
      opacity: 1;
    }

    ${IconWrapper} {
      margin-left: ${theme.spacings.xsmall};
      margin-right: 0;
    }

    ${ContentWrapper} {
      justify-content: flex-end;
      background: ${transparentize(0.2, theme.colors.black)};
    }
  `}
`

export const PreviewLink = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};

    ${media.lessThan('mobile')`
      font-size: ${theme.font.sizes.xsmall};
    `}

    ${media.lessThan('mobilesmall')`
      font-size: ${theme.font.sizes.xxsmall};
    `}

    @media (max-width: 280px) {
      display: none;
    }
  `}
`
