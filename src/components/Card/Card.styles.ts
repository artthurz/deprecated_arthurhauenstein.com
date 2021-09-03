import styled, { css } from 'styled-components'
import NextImage from 'next/image'
import media from 'styled-media-query'

const imageModifiers = {
  small: () => css`
    width: 15rem !important;
    height: 10rem !important;
  `,
  large: () => css`
    width: 20rem;
    height: 15rem;
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.white};
    border-radius: 20px;
    padding: ${theme.spacings.xxsmall};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: box-shadow 0.5s, transform 0.5s;

    &:hover {
      //box-shadow: 0 0 50px #ccc;
      //cursor: pointer
      transition: transform 0.2s, box-shadow 0.1s;
    }
    ${media.lessThan('medium')`
      padding: 0.4rem;
    `};

    ${imageModifiers.large()};

    ${media.lessThan('medium')`
      ${imageModifiers.small()};
    `};
  `}
`

export const Image = styled(NextImage)`
  ${() => css`
    object-fit: contain;
  `}

  &:hover {
    transform: rotate(360deg);
  }
`
