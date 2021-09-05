import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.background};
    border-radius: 20px;
    padding: ${theme.spacings.xxsmall};
    width: 25rem;
    height: 15rem;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer

    z-index: 1;
    transition: box-shadow 0.6s, transform 0.6s;

    &:hover {
      cursor: pointer;
      transition: transform 0s, box-shadow 0s;
    }
    ${media.lessThan('medium')`
      padding: 0.4rem;
      width: 15rem;
      height: 10rem;
    `};
  `}
`
