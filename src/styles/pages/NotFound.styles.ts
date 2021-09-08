import styled, { css } from 'styled-components'
import media from '@/styles/media'

import * as SpaceStyles from '@/components/Space/Space.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${SpaceStyles.Wrapper} {
      min-height: 400px;

      ${media.lessThan('tablet')`
        padding: 0 ${theme.spacings.xsmall};
        min-height: calc(100vh - calc(130px + 2.4rem));
      `};
    }

    ${SpaceStyles.ChildrenWrapper} {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 20%;
    } ;
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
