import { useTranslation } from 'react-i18next'
import { FiArrowDown } from 'react-icons/fi'

import { NavigationLink } from './NavigationLink'

export const HomeLinks: React.FC = () => {
  const { t } = useTranslation('Home')

  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="text-2xl font-black mb-4 flex items-center">
        <FiArrowDown />
        <span className="ml-2">{t('homeLinksTitle')}</span>
      </div>

      <div className="flex justify-around items-stretch flex-wrap -mx-2">
        <NavigationLink
          className="home-link flex-1 basis-1/4 m-2"
          to="/page-visibility"
          title={t('homeLinks.pageVisibility.title')}
          subtitle={t('homeLinks.pageVisibility.subtitle')}
        />

        <NavigationLink
          className="home-link flex-1 basis-1/4 m-2"
          to="/resize-observer"
          title={t('homeLinks.resizeObserver.title')}
          subtitle={t('homeLinks.resizeObserver.subtitle')}
        />

        <NavigationLink
          className="home-link flex-1 basis-1/4 m-2"
          to="/web-crypto"
          title={t('homeLinks.webCrypto.title')}
          subtitle={t('homeLinks.webCrypto.subtitle')}
        />
      </div>
    </div>
  )
}
