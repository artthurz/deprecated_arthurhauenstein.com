import styled, { css } from 'styled-components'
import media from '../media'

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px - 80px);
  overflow: hidden;
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
    margin: ${theme.spacings.small} 0;
    display: grid;
    grid-template-columns: 100%;
    max-width: ${theme.grid.container};

    ${media.lessThan('hd')`
      grid-template-rows: auto auto auto;
    `}

    ${media.lessThan('tabletlarge')`
      margin: ${theme.spacings.small} 0;
    `}
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
    display: flex;
    align-items: center;
    margin: ${theme.spacings.small} 0;

    ${media.lessThan('hd')`
      justify-content: center;
    `}
  `}
`

export const ContactBox = styled.div`
  ${({ theme }) => css`
    background: transparent;
    flex: 1;
    height: 40rem;
    max-height: 53rem;
    min-width: 100rem;
    z-index: ${theme.layers.overlay};
    display: grid;
    grid-template-columns: 50% 50%;
    padding: ${theme.spacings.medium};

    align-items: center;
    justify-items: center;

    ${media.lessThan('tabletlarge')`
      gap: ${theme.spacings.xsmall};
      grid-template-columns: 1fr;
      height: 100%;
      min-width: unset;
    `}

    @media (max-width: 280px) {
      width: 10rem;
    }
  `}
`
