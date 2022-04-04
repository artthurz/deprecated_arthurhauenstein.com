import styled, { css } from 'styled-components'
import media from '../media'

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px - 80px);
  overflow: hidden;
  width: 100%;
  ${({ theme }) => css`
    ${media.lessThan('tabletlarge')`
      min-height: 820px;
      padding: ${theme.spacings.small};
    `}
  `}

  img {
    max-width: 100%;
    user-select: none;
    position: absolute;

    &:first-child {
      left: 700px;
      bottom: -10%;

      ${media.lessThan('tabletlarge')`
        left: 400px;
        bottom: 10%;
      `}
      ${media.lessThan('tablet')`
        left: 200px;
        bottom: 25%;
      `}
    }
    &:last-child {
      right: 600px;
      top: 0;

      ${media.lessThan('tabletlarge')`
        right: 400px;
        top: 600px;
      `};
      ${media.lessThan('tablet')`
        right: 200px;
        top: 0px;
      `}
    }
  }
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    padding: ${theme.spacings.medium} ${theme.spacings.medium}
      ${theme.spacings.xxxlarge} ${theme.spacings.medium};

    ${media.lessThan('tablet')`
      padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall} ${theme.spacings.xxxlarge} ${theme.spacings.xsmall};
    `};
  `}
`

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors.primary};
    max-width: 50rem;
    margin-top: ${theme.spacings.medium};
    z-index: 3;
  `}
`

export const BoxWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 58% 30%;
    gap: 12%;
    padding: ${theme.spacings.medium} 0;

    ${media.lessThan('tabletlarge')`
      grid-template-columns: 1fr;
      gap: 5rem;
    `}
  `}
`

export const ContactBox = styled.div`
  ${({ theme }) => css`
    background: transparent;
    flex: 1;
    width: 100%;
    z-index: ${theme.layers.overlay};
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.small};
  `}
`
