import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

type WrapperProps = Omit<HeadingProps, 'children'>

const wrapperModifiers = {
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size, textColor }) => css`
    color: ${textColor || theme.colors.text02};
    font-weight: ${theme.font.bold};

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
