import { PageLayout } from 'src/layout'
import { APINotSupported, Navbar } from 'src/components'

import { LINKS } from './Links'
import { Header } from './Header'
import { GetRandomValues } from './GetRandomValues'

export const WebCrypto: React.FC = () => {
  const isAPISupported = typeof window.crypto !== 'undefined'

  return (
    <PageLayout navbar={<Navbar />}>
      <Header />

      <APINotSupported
        isAPISupported={isAPISupported}
        compatibilityLink={LINKS.COMPATIBILITY}
      >
        <GetRandomValues />
      </APINotSupported>
    </PageLayout>
  )
}
