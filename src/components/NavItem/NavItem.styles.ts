import styled, { css } from 'styled-components'
import media from 'styles/media'

type LinkProps = {
  isActive: boolean
  menuMobileIsOpen: boolean
}
export const Link = styled.a<LinkProps>`
  ${({ theme, isActive, menuMobileIsOpen }) => css`
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    position: relative;
    display: flex;
    color: ${theme.colors.text02} !important;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    opacity: ${isActive ? 1 : 0.8};
    text-decoration: none;

    &::before {
      content: '';
      height: 2px;
      background: ${isActive ? theme.colors.primary : 'none'};
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
    }

    ${media.greaterThan('tablet')`
      &:not(:first-child) {
        margin-left: ${theme.spacings.medium};
      }
    `};

    ${media.lessThan('tablet')`
      color: ${theme.colors.text02};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      margin-left: 0 !important;
      margin-bottom: ${theme.spacings.small};
      transform: ${menuMobileIsOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    `}

    &:hover {
      opacity: 1;
    }
  `}
`
