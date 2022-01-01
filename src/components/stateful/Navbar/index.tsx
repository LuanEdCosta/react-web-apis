import { useTranslation } from 'react-i18next'
import { FiArrowLeft, FiGlobe, FiSun, FiMoon, FiGithub } from 'react-icons/fi'

import { Button, IconButton } from 'src/components'
import { useGoBack } from 'src/hooks'

export interface NavbarProps {
  className?: string
  showBackButton?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({
  className,
  showBackButton = true,
}) => {
  const { t } = useTranslation('Common')
  const { handleGoBack } = useGoBack()

  const handleChangeTheme = () => {
    // TODO
  }

  const handleChangeLanguage = () => {
    // TODO
  }

  const isDarkMode = false

  return (
    <nav className={`flex items-center h-14 ${className}`}>
      <div className="flex-1">
        {showBackButton && (
          <Button onClick={handleGoBack}>
            <FiArrowLeft />
            <span className="ml-2">{t('goBack')}</span>
          </Button>
        )}
      </div>

      <div className="flex-1" />

      <div className="flex items-center space-x-2">
        <a
          href="https://github.com/LuanEdCosta/react-web-apis"
          referrerPolicy="no-referrer"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton>
            <FiGithub className="text-xl" />
          </IconButton>
        </a>

        <IconButton onClick={handleChangeLanguage}>
          <FiGlobe className="text-xl" />
        </IconButton>

        <IconButton onClick={handleChangeTheme}>
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
