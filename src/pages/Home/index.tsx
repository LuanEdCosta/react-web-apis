import { Navbar } from 'src/components'

import { Header } from './Header'
import { HomeLinks } from './HomeLinks'

import './styles.module.css'

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen p-8 pt-0 bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar className="mb-4" showBackButton={false} />
      <Header />
      <HomeLinks />
    </main>
  )
}
