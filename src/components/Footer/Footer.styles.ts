import styled, { css } from 'styled-components'
import media from '@/styles/media'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.footer};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacings.medium};
    height: 8rem;
    width: 100%;
    z-index: 1;

    ${media.lessThan('tablet')`
      height: 6rem;
    `}
  `}
`

export const IconGroup = styled.section`
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.font.sizes.large};
    height: ${theme.font.sizes.large};
    margin-left: ${theme.spacings.xsmall};
    cursor: pointer;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
