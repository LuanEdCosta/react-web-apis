import { Navbar } from 'src/components'
import { PageLayout } from 'src/layout'

import { Header } from './Header'
import { HomeLinks } from './HomeLinks'

import './styles.module.css'

export const Home: React.FC = () => {
  return (
    <PageLayout navbar={<Navbar showBackButton={false} />}>
      <Header />
      <HomeLinks />
    </PageLayout>
  )
}
