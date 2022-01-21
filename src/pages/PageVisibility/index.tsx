import { PageLayout } from 'src/layout'
import { APINotSupported, Navbar } from 'src/components'

import { LINKS } from './Links'
import { Header } from './Header'
import { VisibilityChange } from './VisibilityChange'
import { useTranslation } from 'react-i18next'

export const PageVisibility: React.FC = () => {
  const { t } = useTranslation('WebAPIs', { keyPrefix: 'pageVisibility' })

  const isAPISupported =
    typeof document.visibilityState !== 'undefined' &&
    typeof document.onvisibilitychange !== 'undefined'

  return (
    <PageLayout navbar={<Navbar />} documentTitle={t('title')}>
      <Header />

      <APINotSupported
        isAPISupported={isAPISupported}
        compatibilityLink={LINKS.COMPATIBILITY}
      >
        <div className="flex flex-col space-y-8">
          <VisibilityChange />
        </div>
      </APINotSupported>
    </PageLayout>
  )
}
