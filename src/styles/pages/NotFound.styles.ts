import styled, { css } from 'styled-components'
import media from '@/styles/media'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    min-height: calc(100vh - 100px - 80px);

    ${media.lessThan('tabletlarge')`
        padding: 0 ${theme.spacings.xsmall};
        min-height: 620px;
    `};

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
  `};
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: min(10rem, 20vw);
  `};
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.text02};
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.large};
    text-align: justify;
  `};
`
