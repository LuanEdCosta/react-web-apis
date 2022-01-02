import { LOCAL_STORAGE_KEYS, APP_THEMES_UNION, APP_THEMES } from 'src/configs'

export const useTheme = (): {
  handleToggleTheme: () => void
  handleSetCurrentTheme: () => void
  handleGetCurrentTheme: () => APP_THEMES_UNION
} => {
  const handleGetCurrentTheme = (): APP_THEMES_UNION => {
    const theme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME)
    return (theme || APP_THEMES.LIGHT) as APP_THEMES_UNION
  }

  const handleChangeToDarkTheme = () => {
    document.documentElement.classList.add('dark')
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, APP_THEMES.DARK)
  }

  const handleChangeToLightTheme = () => {
    document.documentElement.classList.remove('dark')
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, APP_THEMES.LIGHT)
  }

  const handleToggleTheme = () => {
    const theme = handleGetCurrentTheme()
    if (theme === APP_THEMES.DARK) handleChangeToLightTheme()
    else handleChangeToDarkTheme()
  }

  const handleSetCurrentTheme = () => {
    const theme = handleGetCurrentTheme()
    if (theme === APP_THEMES.DARK) handleChangeToDarkTheme()
    else handleChangeToLightTheme()
  }

  return {
    handleToggleTheme,
    handleSetCurrentTheme,
    handleGetCurrentTheme,
  }
}
