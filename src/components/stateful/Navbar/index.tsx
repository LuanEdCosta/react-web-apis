import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FiArrowLeft, FiGlobe, FiSun, FiMoon, FiGithub } from 'react-icons/fi'

import { Button, IconButton } from 'src/components'
import { APP_THEMES } from 'src/configs'
import { useTheme } from 'src/hooks'
export interface NavbarProps {
  className?: string
  showBackButton?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  showBackButton = true,
}) => {
  const { t } = useTranslation('Common')
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

  const handleChangeLanguage = () => {
    // TODO
  }

  return (
    <nav className={`flex items-center h-14 ${className}`}>
      <div className="flex-1">
        {showBackButton && (
          <Button onClick={handleGoBack} data-testid="navbar-back-button">
            <FiArrowLeft />
            <span className="ml-2">{t('goBack')}</span>
          </Button>
        )}
      </div>

      <div className="flex-1" />

      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/LuanEdCosta/react-web-apis"
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
          onClick={handleChangeLanguage}
          data-testid="navbar-language-button"
        >
          <FiGlobe className="text-xl" />
        </IconButton>

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
