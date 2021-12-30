import { Header } from './Header'
import { HomeLinks } from './HomeLinks'

import './styles.module.css'

export const Home: React.FC = () => {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <Header />
      <HomeLinks />
    </main>
  )
}
