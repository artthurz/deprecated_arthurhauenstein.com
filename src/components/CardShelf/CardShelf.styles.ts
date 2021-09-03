import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const imageModifiers = {
  small: () => css`
    grid-gap: 3rem;
    grid-template-areas: '1 2';
  `,
  medium: () => css`
    grid-gap: 4rem;
    grid-template-areas: '1 2 3';
  `,
  large: () => css`
    grid-gap: 5rem;
    grid-template-areas: '1 2 3 4';
  `
}

export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
      padding: 0.4rem;
  `};

  ${imageModifiers.large()};

  ${media.lessThan('medium')`
      ${imageModifiers.small()};
  `};

  ${media.between('medium', 'large')`
      ${imageModifiers.medium()};
  `};
`
