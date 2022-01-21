import { useTranslation } from 'react-i18next'

import { PageLayout } from 'src/layout'
import { APINotSupported, Navbar } from 'src/components'

import { LINKS } from './Links'
import { Header } from './Header'
import { RandomUUID } from './RandomUUID'
import { GetRandomValues } from './GetRandomValues'

export const WebCrypto: React.FC = () => {
  const { t } = useTranslation('WebAPIs', { keyPrefix: 'webCrypto' })
  const isAPISupported = typeof window.crypto !== 'undefined'

  return (
    <PageLayout navbar={<Navbar />} documentTitle={t('title')}>
      <Header />

      <APINotSupported
        isAPISupported={isAPISupported}
        compatibilityLink={LINKS.COMPATIBILITY}
      >
        <div className="flex flex-col space-y-8">
          <GetRandomValues />
          <RandomUUID />
        </div>
      </APINotSupported>
    </PageLayout>
  )
}
