import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styles/media'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gradient03};
    border-radius: 0.5rem;
    height: fit-content;
    width: 100%;
    padding: 1px;
    position: relative;
    overflow: hidden;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    height: 100%;
    padding: 1rem;
    background: ${theme.colors.background};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
  `}
`

export const ActionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: ${theme.colors.background};
    padding: 0 ${theme.spacings.xsmall};
  `}
`

const iconModifiers = {
  isClicked: (theme: DefaultTheme, textOnClick: string) => css`
    &::before {
      content: '${textOnClick}';
      color: ${theme.colors.white};
      background: ${theme.colors.gradient03};
      position: absolute;
      top: 0;
      left: 0;
      padding: 20px;
      width: 100%;
      height: 100%;

      animation-name: Disappear;
      animation-duration: 1500ms;
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
  mainIcon?: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ theme, textOnClick, isClicked, mainIcon }) => css`
    width: ${theme.font.sizes.xxlarge};
    height: ${theme.font.sizes.xxlarge};
    color: ${mainIcon ? theme.colors.primary : theme.colors.white};

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

export const PreviewLink = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.lessThan('mobile')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const OptionTitle = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
    margin-top: ${theme.spacings.xsmall};

    ${media.lessThan('mobile')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`
