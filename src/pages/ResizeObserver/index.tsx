import { useTranslation } from 'react-i18next'

import { PageLayout } from 'src/layout'
import { APINotSupported, Navbar } from 'src/components'

import { LINKS } from './Links'
import { Header } from './Header'
import { ResizeObserverClass } from './ResizeObserverClass'

export const ResizeObserver: React.FC = () => {
  const { t } = useTranslation('WebAPIs', { keyPrefix: 'resizeObserver' })
  const isAPISupported = typeof window.ResizeObserver !== 'undefined'

  return (
    <PageLayout navbar={<Navbar />} documentTitle={t('title')}>
      <Header />

      <APINotSupported
        isAPISupported={isAPISupported}
        compatibilityLink={LINKS.COMPATIBILITY}
      >
        <div className="flex flex-col space-y-8">
          <ResizeObserverClass />
        </div>
      </APINotSupported>
    </PageLayout>
  )
}
