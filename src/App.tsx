import { useTheme } from 'src/hooks'
import { AppRoutes } from 'src/routes'
import { AppErrorBoundary } from 'src/components'

import 'src/locales'
import './index.css'

export const App = () => {
  useTheme().handleSetCurrentTheme()

  return (
    <AppErrorBoundary isFullScreen>
      <AppRoutes />
    </AppErrorBoundary>
  )
}
