import { useContext } from 'react'

import { ThemeContext } from '@/contexts/theme'

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within an AuthProvider')
  }

  return { handleToggleTheme: context.handleToggleTheme, theme: context.theme }
}

export default useTheme
