import styled, { css } from 'styled-components'

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
  width: 100%;
`
