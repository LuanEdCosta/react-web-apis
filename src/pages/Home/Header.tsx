import { useTranslation } from 'react-i18next'
import { FaReact } from 'react-icons/fa'

export const Header: React.FC = () => {
  const { t } = useTranslation(['Home'])

  return (
    <header className="flex justify-center items-center flex-col text-center">
      <FaReact className="text-7xl mb-3 text-purple-800 dark:text-purple-500 animate-spin header-react-logo" />

      <h1 className="text-5xl font-black mb-3">{t('title')}</h1>
      <div className="text-gray-600 dark:text-gray-400 mb-1">
        {t('subtitle')}
      </div>

      <div className="text-gray-600 dark:text-gray-400">
        <span className="mr-1">{t('createdBy')}</span>

        <a
          className="text-purple-600 dark:text-purple-400 underline"
          href="https://github.com/LuanEdCosta"
          referrerPolicy="no-referrer"
          target="_blank"
          rel="noreferrer"
        >
          Luan Eduardo da Costa
        </a>
      </div>
    </header>
  )
}
