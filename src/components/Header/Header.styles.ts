import styled, { css } from 'styled-components'
import media from 'styles/media'

import MediaMatch from 'components/MediaMatch/MediaMatch'
import * as Select from 'components/Select/Select.styles'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0px;
    width: 100%;
    background: ${theme.colors.background02};
    z-index: ${theme.layers.alwaysOnTop};
    padding: ${theme.spacings.small} ${theme.spacings.medium};

    ${media.lessThan('tablet')`
      padding: ${theme.spacings.xsmall};
      justify-content: space-between;
    `};

    ${Select.Wrapper} {
      flex: 0 0 130px;
    }

    ${MediaMatch.default} {
      .flex {
        flex: 1;
        justify-content: center;
        align-items: center;
      }
    } ;
  `}
`

export const NavGroup = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  ${media.greaterThan('tablet')`
      margin-right: 7rem;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text02};
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
    cursor: pointer;
  `}
`
type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.div<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    background: ${theme.colors.background};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};
    opacity: ${isOpen ? 1 : 0};

    > svg {
      position: absolute;
      top: 8px;
      right: 0;
      margin: ${theme.spacings.xsmall};
      color: ${theme.colors.text02};
      cursor: pointer;
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
    }

    ${NavGroup} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
  `}
`

export const SelectWrapper = styled.div`
  display: none;
  justify-content: center;
  margin: 6.4rem 1.6rem 0 1.6rem;

  ${media.lessThan('tablet')`
     display: flex;
  `}
`
