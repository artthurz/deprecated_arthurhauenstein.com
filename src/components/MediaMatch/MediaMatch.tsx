import styled, { css } from 'styled-components'
import media, { customBreakpoints } from 'styles/media'

export type DisplayType = 'block' | 'flex' | 'contents' | 'none'

export type MediaMatchProps = {
  lessThan?: customBreakpoints
  greaterThan?: customBreakpoints
  display?: DisplayType
}

const mediaMatchModifiers = {
  lessThan: (size: customBreakpoints, display: DisplayType) => css`
    ${media.lessThan(size)`
      display: ${display};
    `}
  `,
  greaterThan: (size: customBreakpoints, display: DisplayType) => css`
    ${media.greaterThan(size)`
      display: ${display};
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ greaterThan, lessThan, display = 'block' }) => css`
    display: none;

    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan, display)}
    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan, display)}
  `}
`
