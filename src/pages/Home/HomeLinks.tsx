import { useTranslation } from 'react-i18next'
import { FiArrowDown } from 'react-icons/fi'

import { NavigationLink } from './NavigationLink'

export const HomeLinks: React.FC = () => {
  const { t } = useTranslation(['WebAPIs', 'Home'])

  return (
    <div className="mt-16">
      <div className="text-2xl font-black mb-4 flex items-center">
        <FiArrowDown />
        <span className="ml-2">{t('Home:linksTitle')}</span>
      </div>

      <div className="flex justify-around items-stretch flex-wrap -mx-2">
        <NavigationLink
          className="home-link flex-1 basis-1/4 m-2"
          to="/page-visibility"
          title={t('pageVisibility.title')}
          subtitle={t('pageVisibility.subtitle')}
        />

        <NavigationLink
          className="home-link flex-1 basis-1/4 m-2"
          to="/resize-observer"
          title={t('resizeObserver.title')}
          subtitle={t('resizeObserver.subtitle')}
        />

        <NavigationLink
          className="home-link flex-1 basis-1/4 m-2"
          to="/web-crypto"
          title={t('webCrypto.title')}
          subtitle={t('webCrypto.subtitle')}
        />
      </div>
    </div>
  )
}
