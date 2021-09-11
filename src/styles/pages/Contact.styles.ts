import styled, { css } from 'styled-components'
import media from '../media'
import Image from 'next/image'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px - 80px);
  overflow: hidden;
  ${({ theme }) => css`
    ${media.lessThan('tabletlarge')`
      min-height: 100vh;
      padding: ${theme.spacings.small};
    `}
  `}
`

export const BackgroundImage = styled(Image)`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const Background = styled.div`
  padding: unset;
  min-height: calc(100vh - 100px - 80px);
  display: flex;
  justify-content: center;
  position: absolute;
  background: transparent;
  overflow: hidden;
  z-index: 1;
  ${media.lessThan('tabletlarge')`
      min-height: 100vh;
  `}
`
export const Overlay = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(31, 31, 36, 0.6);
  z-index: 2;
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

    ${media.lessThan('tablet')`
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
    background: ${theme.colors.black01};
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

    ${media.lessThan('tablet')`
      gap: ${theme.spacings.xsmall};
      grid-template-columns: 1fr;
      height: 100%;
      min-width: unset;
    `}
  `}
`
