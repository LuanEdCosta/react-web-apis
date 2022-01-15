import { PageLayout } from 'src/layout'
import { APINotSupported, Navbar } from 'src/components'

import { LINKS } from './Links'
import { Header } from './Header'
import { VisibilityChange } from './VisibilityChange'

export const PageVisibility: React.FC = () => {
  const isAPISupported =
    typeof document.visibilityState !== 'undefined' &&
    typeof document.onvisibilitychange !== 'undefined'

  return (
    <PageLayout navbar={<Navbar />}>
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
