import { PageLayout } from 'src/layout'
import { Navbar } from 'src/components'

import { Header } from './Header'

export const PageVisibility: React.FC = () => {
  return (
    <PageLayout navbar={<Navbar />}>
      <Header />
    </PageLayout>
  )
}
