import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiArrowLeft, FiGlobe, FiSun, FiMoon, FiGithub } from 'react-icons/fi'

import { useTheme } from 'src/hooks'
import { Button, IconButton } from 'src/components'
import {
  APP_THEMES,
  LOCAL_STORAGE_KEYS,
  GITHUB_REPOSITORY_LINKS,
} from 'src/configs'
export interface NavbarProps {
  className?: string
  showBackButton?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({
  className = '',
  showBackButton = true,
}) => {
  const { t, i18n } = useTranslation(['Common', 'Languages'])
  const navigate = useNavigate()

  const { handleToggleTheme, handleGetCurrentTheme } = useTheme()

  const [isDarkMode, setIsDarkMode] = useState(
    handleGetCurrentTheme() === APP_THEMES.DARK,
  )

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleChangeTheme = () => {
    handleToggleTheme()
    setIsDarkMode((isDark) => !isDark)
  }

  // * Change this implementation when have more than 2 languages
  const handleChangeLanguage = () => {
    const languages = Object.keys(i18n.options.resources || {})
    const index = languages.findIndex((lang) => lang === i18n.language)
    const nextIndex = index + 1
    const newLangIndex = nextIndex >= languages.length ? 0 : nextIndex
    const newLanguage = languages[newLangIndex]
    i18n.changeLanguage(newLanguage, () => {
      localStorage.setItem(LOCAL_STORAGE_KEYS.LANGUAGE, newLanguage)
    })
  }

  return (
    <nav
      className={`flex items-center h-14 px-8 border-b border-gray-300 dark:border-gray-600 transition-[border-color] ${className}`}
    >
      <div className="flex-1">
        {showBackButton && (
          <Button onClick={handleGoBack} data-testid="navbar-back-button">
            <FiArrowLeft />
            <span className="ml-2">{t('goBack')}</span>
          </Button>
        )}
      </div>

      <div className="flex-1" />

      <div className="flex items-center space-x-2 transition-none">
        <Button
          onClick={handleChangeLanguage}
          data-testid="navbar-language-button"
        >
          <FiGlobe className="text-xl" />
          <span className="ml-2">{t(`Languages:${i18n.language}`)}</span>
        </Button>

        <a
          href={GITHUB_REPOSITORY_LINKS.REPOSITORY}
          data-testid="navbar-github-button"
          referrerPolicy="no-referrer"
          rel="noreferrer"
          target="_blank"
        >
          <IconButton>
            <FiGithub className="text-xl" />
          </IconButton>
        </a>

        <IconButton
          onClick={handleChangeTheme}
          data-testid="navbar-theme-button"
        >
          {isDarkMode ? (
            <FiSun className="text-xl" />
          ) : (
            <FiMoon className="text-xl" />
          )}
        </IconButton>
      </div>
    </nav>
  )
}
