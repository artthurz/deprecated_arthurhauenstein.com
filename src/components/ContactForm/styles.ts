import styled, { css } from 'styled-components'
export const Wrapper = styled.form`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    height: fit-content;
    z-index: 1;

    input,
    textarea {
      width: 100%;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: transparent;
      border: 2px solid ${theme.colors.primary};
      resize: none;
      color: ${theme.colors.white};
    }

    button {
      display: flex;
      padding: 1.5rem;
      width: fit-content;
      background-color: ${theme.colors.primary01};
      border: none;
      border-radius: 0.5rem;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};

      :hover {
        cursor: pointer;
      }
    }
  `}
`
export const LoadingOverlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.gradient02};
    border-radius: 0.5rem;
  `}
`
