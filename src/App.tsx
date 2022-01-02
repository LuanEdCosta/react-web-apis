import { AppRoutes } from 'src/routes'

import { useTheme } from 'src/hooks'

import 'src/locales'
import './index.css'

export const App = () => {
  useTheme().handleSetCurrentTheme()
  return <AppRoutes />
}
