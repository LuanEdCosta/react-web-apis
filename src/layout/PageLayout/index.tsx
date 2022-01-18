import { useAnchorScroll } from 'src/hooks'
import { AppErrorBoundary } from 'src/components'

export interface PageLayoutProps {
  navbar?: React.ReactNode
  containerClassName?: string
  contentClassName?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  navbar,
  children,
  contentClassName = '',
  containerClassName = '',
}) => {
  useAnchorScroll()

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-[background] ${containerClassName}`}
    >
      {navbar}

      <AppErrorBoundary>
        <div className={`p-8 max-w-7xl mx-auto ${contentClassName}`}>
          {children}
        </div>
      </AppErrorBoundary>
    </div>
  )
}
