import { Navbar } from 'src/components'

import { Header } from './Header'
import { HomeLinks } from './HomeLinks'

import './styles.module.css'

export const Home: React.FC = () => {
  return (
    <main className="p-8 pt-0 bg-gray-50 min-h-screen">
      <Navbar className="mb-4" showBackButton={false} />
      <Header />
      <HomeLinks />
    </main>
  )
}
