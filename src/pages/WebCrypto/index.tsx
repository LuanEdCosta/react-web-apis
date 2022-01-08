import { useTranslation } from 'react-i18next'

import { PageLayout } from 'src/layout'
import { APINotSupported, Navbar } from 'src/components'

import { LINKS } from './Links'
import { GetRandomValues } from './GetRandomValues'

export const WebCrypto: React.FC = () => {
  const { t } = useTranslation('WebCrypto')

  const isAPISupported = typeof window.crypto !== 'undefined'

  return (
    <PageLayout navbar={<Navbar />}>
      <div className="text-5xl font-black mb-16 text-center">{t('title')}</div>

      <APINotSupported
        isAPISupported={isAPISupported}
        compatibilityLink={LINKS.COMPATIBILITY}
      >
        <GetRandomValues />
      </APINotSupported>
    </PageLayout>
  )
}
