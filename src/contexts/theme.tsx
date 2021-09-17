import React, { createContext, useState, useMemo } from 'react'

import { ThemeProvider as StyledTheme } from 'styled-components'
import { DarkTheme, LightTheme } from '../styles/theme'

type themeProps = {
  theme: 'dark' | 'light'
  handleToggleTheme: () => void
}

type themeProviderProps = {
  children?: React.ReactNode
}

const ThemeContext = createContext<themeProps>({
  theme: 'dark',
  handleToggleTheme: () => null
})

const ThemeProvider = ({ children }: themeProviderProps) => {
  const [theme, setTheme] = useState<themeProps['theme']>('dark')

  const currentTheme = useMemo(() => {
    return theme === 'dark' ? DarkTheme : LightTheme
  }, [theme])

  const handleToggleTheme = () => {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'))
  }

  const ApplyTheme = ({ children }: themeProviderProps) => {
    return <StyledTheme theme={currentTheme}>{children}</StyledTheme>
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleToggleTheme
      }}
    >
      <ApplyTheme>{children}</ApplyTheme>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
