import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  flex: 1;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.background};
    align-items: center;
    min-height: 100vh;
  `}
`

export const Main = styled.main`
  flex: 1;
  min-height: calc(100vh - calc(165px + 5.6rem));

  ${media.lessThan('medium')`
      min-height: calc(100vh - calc(130px + 2.4rem));
  `};
`
