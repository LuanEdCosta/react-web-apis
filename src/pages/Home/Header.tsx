import { useTranslation } from 'react-i18next'
import { FaReact } from 'react-icons/fa'

import { ExternalLink } from 'src/components'

export const Header: React.FC = () => {
  const { t } = useTranslation(['Home'])

  return (
    <header className="flex justify-center items-center flex-col text-center">
      <FaReact className="text-7xl mb-3 text-purple-800 dark:text-purple-500 animate-spin header-react-logo" />

      <div className="text-5xl font-black mb-3">{t('title')}</div>

      <div className="text-gray-600 dark:text-gray-400 mb-1">
        {t('subtitle')}
      </div>

      <div className="text-gray-600 dark:text-gray-400">
        <span className="mr-1">{t('createdBy')}</span>

        <ExternalLink href="https://github.com/LuanEdCosta">
          Luan Eduardo da Costa
        </ExternalLink>
      </div>
    </header>
  )
}
