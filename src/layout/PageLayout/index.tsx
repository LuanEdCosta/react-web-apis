import { useTranslation } from 'react-i18next'

import { useAnchorScroll, useDocumentTitle } from 'src/hooks'
import { AppErrorBoundary } from 'src/components'

export interface PageLayoutProps {
  navbar?: React.ReactNode
  documentTitle?: string
  contentClassName?: string
  containerClassName?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  navbar,
  children,
  documentTitle,
  contentClassName = '',
  containerClassName = '',
}) => {
  const { t } = useTranslation('Common')

  useAnchorScroll()

  useDocumentTitle(
    documentTitle
      ? t('documentTitle', { title: documentTitle })
      : t('defaultDocumentTitle'),
  )

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-[background] ${containerClassName}`}
    >
      {navbar}

      <AppErrorBoundary>
        <div className={`p-4 sm:p-8 max-w-7xl mx-auto ${contentClassName}`}>
          {children}
        </div>
      </AppErrorBoundary>
    </div>
  )
}
