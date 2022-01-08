import { useTranslation } from 'react-i18next'
import { FiAlertOctagon } from 'react-icons/fi'

export interface APINotSupportedProps {
  compatibilityLink?: string
  isAPISupported: boolean
}

export const APINotSupported: React.FC<APINotSupportedProps> = ({
  compatibilityLink,
  isAPISupported,
  children,
}) => {
  const { t } = useTranslation('NotSupported')

  if (isAPISupported) return <>{children}</>

  return (
    <div>
      <div className="bg-red-500 text-white py-8 px-4 rounded-lg flex flex-col items-center text-center">
        <FiAlertOctagon className="text-7xl mb-3" />
        <div className="text-lg">{t('browserDoesNotSupportAPI')}</div>
      </div>

      {!!compatibilityLink && (
        <div className="text-center py-4">
          <a
            className="text-purple-600 dark:text-purple-400 underline"
            href={compatibilityLink}
            referrerPolicy="no-referrer"
            rel="noreferrer"
            target="_blank"
          >
            {t('clickToSeeCompatibility')}
          </a>
        </div>
      )}
    </div>
  )
}
