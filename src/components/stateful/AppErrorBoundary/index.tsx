import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { FiFrown, FiGithub, FiRefreshCcw } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

import { GITHUB_REPOSITORY_LINKS } from 'src/configs'
import { Button, ExternalLink } from 'src/components'

export interface FallbackComponentProps {
  isFullScreen?: boolean
}

export const FallbackComponent: React.FC<
  FallbackProps & FallbackComponentProps
> = ({ error, isFullScreen, resetErrorBoundary }) => {
  const { t } = useTranslation('Common')

  return (
    <div
      className={`flex flex-col items-center bg-gray-50 dark:bg-gray-900 dark:text-white transition-[background] ${
        isFullScreen ? 'min-h-screen justify-center' : ''
      }`}
    >
      <div className="w-full md:w-auto max-w-5xl p-8">
        <FiFrown className="text-red-500 text-8xl mb-2" />

        <div className="mb-8 text-4xl sm:text-6xl font-black transition-[color]">
          {t('someErrorOcurred')}
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 whitespace-pre overflow-x-auto mb-4 transition-colors">
          {error.stack}
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center flex-wrap justify-end">
          <ExternalLink
            className="w-full sm:w-auto sm:mr-4"
            href={GITHUB_REPOSITORY_LINKS.CREATE_ISSUE}
            noStyles
          >
            <Button className="w-full sm:w-auto">
              <span className="mr-2">{t('createIssue')}</span>
              <FiGithub />
            </Button>
          </ExternalLink>

          <Button
            className="!bg-green-600 hover:!bg-green-700 !text-white w-full sm:w-auto mb-2 sm:mb-0 whitespace-nowrap"
            onClick={resetErrorBoundary}
          >
            <span className="mr-2">{t('tryAgain')}</span>
            <FiRefreshCcw />
          </Button>
        </div>
      </div>
    </div>
  )
}

export interface AppErrorBoundaryProps {
  isFullScreen?: boolean
}

export const AppErrorBoundary: React.FC<AppErrorBoundaryProps> = ({
  children,
  isFullScreen = false,
}) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <FallbackComponent
          error={error}
          isFullScreen={isFullScreen}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  )
}
