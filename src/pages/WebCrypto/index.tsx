import { PageLayout } from 'src/layout'
import { APINotSupported, Navbar } from 'src/components'

import { LINKS } from './Links'
import { Header } from './Header'
import { RandomUUID } from './RandomUUID'
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
        <div className="flex flex-col space-y-8">
          <GetRandomValues />
          <RandomUUID />
        </div>
      </APINotSupported>
    </PageLayout>
  )
}
