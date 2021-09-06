import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.text02};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.background};
    border-radius: 20px;
    padding: ${theme.spacings.xxsmall};
    width: 25rem;
    height: 15rem;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    filter: blur(0.1px);

    z-index: 1;
    transition: box-shadow 0.6s, transform 0.6s;
    touch-action: none;

    h1 {
      marginleft: 10px;
    }

    &:hover {
      cursor: pointer;
      transition: transform 0s, box-shadow 0s;
    }
    ${media.lessThan('medium')`
      padding: 0.4rem;
      margin: 0;
      width: 15rem;
      height: 15rem;
      flex-direction: column;
    `};
  `}
`

export const CardOverlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
`
export const Highlight = styled.div`
  ${({ theme }) => css`
    background-image: ${theme.type === 'dark'
      ? `radial-gradient(
      circle at 50%,
      rgba(255, 255, 255, 0.25),
      transparent 50%
    )`
      : `radial-gradient(
      circle at 50%,
      rgba(0, 0, 0, 0.25),
      transparent 50%
    );`};
  `}
  transform: translate3d(0px, 0px, 0px);
  transition-duration: 600ms;
  opacity: 0;

  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  z-index: 0;

  position: absolute;
  pointer-events: none;
  transition-property: transform, opacity;
  display: block;
`
